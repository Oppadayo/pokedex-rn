import React, {useEffect, useState} from 'react';
import {
  Image,
  Text,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {styles} from './styles';

import {
  getBackgroundColor,
  hashNumber,
  capitalize,
  getImagePokemon,
} from '../../utils/pokemonUtils';

import {useNavigation} from '@react-navigation/native';
import {PokemonTypes} from '../PokemonTypes';
import {Pokemon} from '../../types/Pokemon';

interface Props extends TouchableOpacityProps {
  data: string[{url: string}];
}

export function PokemonCard({data}: Props) {
  const [pokemons, setPokemons] = useState<Pokemon>();

  const navigation = useNavigation();

  useEffect(() => {
    fetchPokemons();
  }, [data]);

  async function fetchPokemons() {
    await fetch(data.url)
      .then(res => res.json())
      .then(pokemon => {
        setPokemons(pokemon);
      });
  }

  function handleOnPress() {
    navigation.navigate('Pokemon', {
      pokemons,
    });
  }

  return (
    <>
      {pokemons && (
        <TouchableOpacity
          onPress={handleOnPress}
          style={{
            backgroundColor: getBackgroundColor(pokemons.types),
            ...styles.container,
          }}>
          <Image style={styles.image} source={getImagePokemon(pokemons)} />
          <View style={{marginLeft: 24}}>
            <Text style={styles.name}>{capitalize(pokemons.name)}</Text>

            <PokemonTypes types={pokemons.types} />
          </View>
          <Text style={styles.number}>#{hashNumber(pokemons.id)}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
