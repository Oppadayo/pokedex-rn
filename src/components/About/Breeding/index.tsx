import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

//Utils
import {getBackgroundColor} from '../../../utils/pokemonUtils';

//Components
import {Heading} from '../../Heading';

//Types
import {PokemonSpecies} from '../../../types/PokemonSpecies';
import {Pokemon} from '../../../types/Pokemon';

//Libs
import {api} from '../../../libs/api';

//Styles
import {styles} from './styles';

interface Props {
  pokemon: Pokemon;
}

export function Breeding({pokemon}: Props) {
  const [species, setSpecies] = useState<PokemonSpecies>();

  useEffect(() => {
    getPokemonSpecies();
  }, []);

  async function getPokemonSpecies() {
    const response = await api.get(`/pokemon-species/${pokemon.name}`);

    const speciesResponse = response.data;

    setSpecies(speciesResponse);
  }

  const femaleRate = species && 100 / (species.gender_rate * 8);
  const maleRate = femaleRate && 100 - femaleRate;

  return (
    <>
      <Heading
        variant="filter"
        color={getBackgroundColor(pokemon.types)}
        style={{marginTop: 8}}>
        Reprodução
      </Heading>

      <View style={styles.pokedexData}>
        <View>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            Gênero
          </Heading>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            Tipos de Ovos
          </Heading>
          <Heading variant="type" color="#000" style={{marginVertical: 8}}>
            Ciclo do Ovo
          </Heading>
        </View>
        {species && (
          <View style={styles.box}>
            <Heading
              variant="description"
              color="#747476"
              style={{marginVertical: 6}}>
              ♂{maleRate.toFixed(2)}% ♀{femaleRate.toFixed(2)}%
            </Heading>

            <View style={{flexDirection: 'row'}}>
              {species.egg_groups.map((egg, key) => (
                <Heading
                  key={key}
                  variant="description"
                  color="#747476"
                  style={{marginVertical: 6}}>
                  {egg.name},
                </Heading>
              ))}
            </View>

            <Heading
              variant="description"
              color="#747476"
              style={{marginVertical: 6}}>
              {`${species.hatch_counter} (${
                255 * species.hatch_counter + 1
              } passos)`}
            </Heading>
          </View>
        )}
      </View>
    </>
  );
}
