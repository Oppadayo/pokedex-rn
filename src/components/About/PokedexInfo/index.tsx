import React from 'react';
import {View} from 'react-native';

//Utils
import {
  getBackgroundColor,
  getPokemonHeight,
  getPokemonWeaknesses,
  getPokemonWeight,
} from '../../../utils/pokemonUtils';

//Components
import {Heading} from '../../Heading';
import {getTypesIcon} from '../../PokemonTypes';

//Types
import {Pokemon} from '../../../types/Pokemon';

//Styles
import {styles} from './styles';

//Interface
interface Props {
  pokemon: Pokemon;
}

export function PokedexInfo({pokemon}: Props) {
  return (
    <>
      <Heading variant="filter" color={getBackgroundColor(pokemon.types)}>
        Informações Pokedex
      </Heading>

      <View style={styles.pokedexData}>
        <View style={styles.column}>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            Altura
          </Heading>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            Peso
          </Heading>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            Habilidades
          </Heading>
        </View>
        <View style={styles.box}>
          <Heading
            variant="description"
            color="#747476"
            style={{marginVertical: 6}}>
            {getPokemonHeight(pokemon.height)}
          </Heading>
          <Heading
            variant="description"
            color="#747476"
            style={{marginVertical: 6}}>
            {getPokemonWeight(pokemon.weight)}
          </Heading>
          {pokemon.abilities.map((ab, key) => (
            <Heading
              key={key}
              variant="description"
              color="#747476"
              style={{marginVertical: 6}}>
              {ab.ability.name}
            </Heading>
          ))}
        </View>
      </View>

      <View
        style={{flexDirection: 'row', alignItems: 'center', marginBottom: 16}}>
        <Heading variant="type" color="#000">
          Fraquezas
        </Heading>

        <View style={{flexDirection: 'row', marginLeft: 40}}>
          {getPokemonWeaknesses(pokemon.types[0].type.name).map(
            (weakness, key) => (
              <View key={key} style={{marginRight: 8, marginTop: 8}}>
                {getTypesIcon(weakness)}
              </View>
            ),
          )}
        </View>
      </View>
    </>
  );
}
