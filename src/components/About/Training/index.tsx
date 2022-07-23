import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

//Utils
import {getBackgroundColor} from '../../../utils/pokemonUtils';

//Components
import {Heading} from '../../Heading';

//Types
import {PokemonSpecies} from '../../../types/PokemonSpecies';
import {Pokemon} from '../../../types/Pokemon';

//Styles
import {styles} from './styles';

//Interface
interface Props {
  pokemon: Pokemon;
  training: PokemonSpecies;
}

export function Training({pokemon, training}: Props) {
  const [effort, setEffort] = useState<number>();
  const [effortName, setEffortName] = useState<string>();

  useEffect(() => {
    getPokemonEffort();
  }, []);

  function getPokemonEffort() {
    {
      pokemon.stats.map(stat => {
        if (stat.effort !== 0) {
          setEffort(stat.effort);
          setEffortName(stat.stat.name);
        }
      });
    }
  }

  return (
    <>
      <Heading variant="filter" color={getBackgroundColor(pokemon.types)}>
        Treinamento
      </Heading>
      <View style={styles.pokedexData}>
        <View>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            EV
          </Heading>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            Taxa de Captura
          </Heading>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            Amizade Base
          </Heading>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            XP Base
          </Heading>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            Taxa de Crescimento
          </Heading>
        </View>

        <View style={styles.box}>
          <Heading
            variant="description"
            color="#747476"
            style={{marginVertical: 6}}>
            {effort + ' ' + effortName}
          </Heading>

          <Heading
            variant="description"
            color="#747476"
            style={{marginVertical: 6}}>
            {`${training && training.capture_rate}%`}
          </Heading>

          <Heading
            variant="description"
            color="#747476"
            style={{marginVertical: 6}}>
            {training && training.base_happiness}
          </Heading>

          <Heading
            variant="description"
            color="#747476"
            style={{marginVertical: 6}}>
            {pokemon.base_experience}
          </Heading>
          <Heading variant="description" color="#747476">
            {training && training.growth_rate.name}
          </Heading>
        </View>
      </View>
    </>
  );
}
