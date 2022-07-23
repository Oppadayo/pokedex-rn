import React, {useEffect, useState} from 'react';
import {View, StyleSheet, Image, Text} from 'react-native';
import {Pokemon} from '../../types/Pokemon';
import {
  capitalize,
  getImagePokemon,
  hashNumber,
} from '../../utils/pokemonUtils';
import {Heading} from '../Heading';

interface Props {
  url: string;
}

export function Evolution({url}: Props) {
  const [pokemons, setPokemons] = useState<Pokemon>();

  useEffect(() => {
    loadPokemon();
  }, []);

  function loadPokemon() {
    fetch(url)
      .then(res => res.json())
      .then(pokemon => {
        setPokemons(pokemon);
      });
  }

  return (
    <>
      {pokemons && (
        <View style={styles.evolution}>
          <Image style={styles.image} source={getImagePokemon(pokemons)} />
          <Heading color="#747476" variant="filter">
            #{hashNumber(pokemons.id)}
          </Heading>
          <Heading color="#17171B" variant="filter">
            {capitalize(pokemons && pokemons.name)}
          </Heading>
        </View>
      )}
    </>
  );
}

const styles = StyleSheet.create({
  evolution: {
    alignItems: 'center',
    flexDirection: 'column',
  },
  image: {
    width: 100,
    height: 100,
  },
});
