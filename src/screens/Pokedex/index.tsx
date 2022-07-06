import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {ArrowLeft, ListBullets, Sliders} from 'phosphor-react-native';
import {PokemonCard} from '../../components/PokemonCard';

import {api} from '../../libs/api';

import {styles} from './styles';
import {useNavigation} from '@react-navigation/native';

export function Pokedex() {
  const [pokemons, setPokemons] = useState<any[]>();
  const [limit, setLimit] = useState(20);
  const [count, setCount] = useState();
  const [offset, setOffset] = useState(0);
  const [isLoadingPokemon, setIsLoadingPokemon] = useState(false);
  const [searchPokemon, setSearchPokemon] = useState('');

  useEffect(() => {
    fetchPokemons();
  }, []);

  useEffect(() => {
    filterPokemons();
  }, [searchPokemon]);

  async function fetchPokemons() {
    setIsLoadingPokemon(true);
    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);

    setCount(response.data.count);

    const pokemonsResults = response.data.results;

    setPokemons(pokemonsResults);
    setIsLoadingPokemon(false);
  }

  function renderPokemonCard(item) {
    return <PokemonCard url={item} />;
  }

  async function handleEndReached() {
    setLimit(limit + 20);

    const response = await api.get(`/pokemon?limit=${limit}&offset=${offset}`);

    const pokemonsResults = response.data.results;

    setPokemons(pokemonsResults);
  }

  async function filterPokemons() {
    if (searchPokemon === '' || searchPokemon === undefined) {
      return pokemons;
    } else {
      const response = await api.get(
        `/pokemon?limit=${count}&offset=${offset}`,
      );

      const pokemonsResults = response.data.results;

      setPokemons(
        pokemonsResults.filter(
          item =>
            item.name.toLowerCase().indexOf(searchPokemon.toLocaleLowerCase()) >
            -1,
        ),
      );
    }
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuHeader}>
        <TouchableOpacity>
          <ArrowLeft size={24} weight="bold" color="#000" />
        </TouchableOpacity>
        <TouchableOpacity>
          <ListBullets size={24} weight="bold" color="#000" />
        </TouchableOpacity>
      </View>
      <Text style={styles.title}>Pokedex</Text>
      <View style={styles.searchContainer}>
        <TextInput
          style={styles.search}
          placeholder="Nome ou número do pokemon"
          placeholderTextColor="#303943"
          onChangeText={text => setSearchPokemon(text)}
          value={searchPokemon}
        />
        <TouchableOpacity style={styles.filter}>
          <Sliders size={24} weight="bold" color="#000" />
        </TouchableOpacity>
      </View>

      {isLoadingPokemon ? (
        <View style={styles.loading}>
          <ActivityIndicator size="large" color="#00ff00" />
        </View>
      ) : (
        <FlatList
          data={pokemons}
          renderItem={({item}) => renderPokemonCard(item)}
          showsVerticalScrollIndicator={false}
          onEndReached={handleEndReached}
          ListFooterComponent={<ActivityIndicator />}
          onEndReachedThreshold={0.1}
        />
      )}
    </View>
  );
}
