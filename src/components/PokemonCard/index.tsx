import React, {useEffect, useState} from 'react';
import {
  Image,
  TouchableOpacity,
  TouchableOpacityProps,
  View,
} from 'react-native';
import {useNavigation} from '@react-navigation/native';

import {
  getBackgroundColor,
  hashNumber,
  capitalize,
  getImagePokemon,
} from '../../utils/pokemonUtils';

import {pokeball} from '../../assets/images/pokeball.svg';

import {PokemonTypes} from '../PokemonTypes';
import {Heading} from '../Heading';

import {Pokemon} from '../../types/Pokemon';

import {styles} from './styles';

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
          <View>
            <Heading variant="number" color="#17171B">
              #{hashNumber(pokemons.id)}
            </Heading>
            <Heading variant="name" color="#fff">
              {capitalize(pokemons.name)}
            </Heading>

            <PokemonTypes types={pokemons.types} />
          </View>
          <Image
            style={{
              position: 'absolute',
              tintColor: '#ffffff20',
              width: 160,
              height: 160,
              right: -10,
            }}
            source={require('../../assets/images/pokeball.png')}
          />

          <Image style={styles.image} source={getImagePokemon(pokemons)} />
        </TouchableOpacity>
      )}
    </>
  );
}
