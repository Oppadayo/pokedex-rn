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
  upperCaseFirstLetter,
} from '../../utils/pokemonUtils';

import {useNavigation} from '@react-navigation/native';
import {PokemonTypes} from '../PokemonTypes';

interface Props extends TouchableOpacityProps {
  url: string[];
}

export function PokemonCard({url, ...props}: Props) {
  const [pokemons, setPokemons] = useState();

  const navigation = useNavigation();

  useEffect(() => {
    fetchPokemons();
  }, [url]);

  async function fetchPokemons() {
    await fetch(url.url)
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
          <Image
            style={styles.image}
            source={{uri: pokemons.sprites.front_default}}
          />
          <View style={{marginLeft: 24}}>
            <Text style={styles.name}>
              {upperCaseFirstLetter(pokemons.name)}
            </Text>

            <PokemonTypes types={pokemons.types} />
          </View>
          <Text style={styles.number}>#{hashNumber(pokemons.id)}</Text>
        </TouchableOpacity>
      )}
    </>
  );
}
