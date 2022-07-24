import React, {useEffect, useState} from 'react';
import {
  ActivityIndicator,
  FlatList,
  Image,
  Text,
  TextInput,
  TouchableOpacity,
  View,
} from 'react-native';

import {
  ArrowLeft,
  DotsNine,
  ListBullets,
  MagnifyingGlass,
  Sliders,
  SortDescending,
} from 'phosphor-react-native';
import {PokemonCard} from '../../components/PokemonCard';
import {Heading} from '../../components/Heading';

import {pokeball} from '../../assets/images/pokeball.svg';

import {api} from '../../libs/api';

import {styles} from './styles';

interface Props {
  name: string;
  url: string;
}

export function Pokedex() {
  const [pokemons, setPokemons] = useState<Props[]>();
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

  function renderPokemonCard(item: string[]) {
    return <PokemonCard data={item} />;
  }

  return (
    <View style={styles.container}>
      <View style={styles.menuHeader}>
        <TouchableOpacity>
          <DotsNine size={28} weight="bold" color="#17171B" />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 8}}>
          <SortDescending size={28} weight="bold" color="#17171B" />
        </TouchableOpacity>
        <TouchableOpacity style={{marginLeft: 8}}>
          <Sliders size={28} weight="bold" color="#17171B" />
        </TouchableOpacity>
      </View>
      <Heading variant="appTitle" color="#17171b">
        Pokédex
      </Heading>
      <Heading variant="description" color="#747476">
        Pesquise o Pokémon pelo nome ou o número nacional da Pokédex.
      </Heading>
      <View style={styles.searchContainer}>
        <MagnifyingGlass size={22} weight="bold" color="#17171B" />
        <TextInput
          style={styles.search}
          placeholder="Qual pokémon você procura?"
          placeholderTextColor="#747476"
          onChangeText={text => setSearchPokemon(text)}
          value={searchPokemon}
        />
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
