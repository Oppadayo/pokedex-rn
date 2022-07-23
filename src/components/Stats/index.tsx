import React, {useEffect, useState} from 'react';
import {Image, View} from 'react-native';

import {api} from '../../libs/api';

import {
  capitalize,
  getBackgroundColor,
  getTypesDefense,
} from '../../utils/pokemonUtils';

import {Heading} from '../Heading';

import {PokemonSpecies} from '../../types/PokemonSpecies';
import {EvolutionChainsProps} from '../../types/EvolutionChains';
import {Pokemon} from '../../types/Pokemon';
import {styles} from './styles';
import {ArrowRight} from 'phosphor-react-native';
import {StatsProps} from '../../types/Stats';
import StatusBar, {ProgressBar} from '../ProgressBar';

//import {} from './styles';

interface Props {
  pokemon: Pokemon;
}

export function Stats({pokemon}: Props) {
  const [totalStats, setTotalStats] = useState(0);

  useEffect(() => {
    getTotalStats();
  }, []);

  function getTotalStats() {
    let statsValue = 0;
    pokemon.stats.map(stat => (statsValue += stat.base_stat));

    setTotalStats(statsValue);
  }

  /*const weak = coverageTypes.filter((ct) => {
    const matchups = types.map((t) => matchupFor(generation, ct.types, t));
    return matchups.some((effectiveness) => {
      return effectiveness > 1;
    });
  });*/

  function getMinMaxStats(
    name: string,
    base: number,
    iv = 0,
    ev = 0,
    nature = 0.9,
  ) {
    if (name === 'hp') {
      return ((2 * base + iv + ev / 4) * 100) / 100 + 110;
    } else {
      return Math.floor((((2 * base + iv + ev / 4) * 100) / 100 + 5) * nature);
    }
  }

  console.log(getTypesDefense(pokemon.types));

  return (
    <>
      <Heading variant="filter" color={getBackgroundColor(pokemon.types)}>
        Estatísticas
      </Heading>

      <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
        <View>
          <Heading
            variant="number"
            color="#17171B"
            style={{marginVertical: 2.4}}>
            HP
          </Heading>
          <Heading
            variant="number"
            color="#17171B"
            style={{marginVertical: 2.4}}>
            Ataque
          </Heading>
          <Heading
            variant="number"
            color="#17171B"
            style={{marginVertical: 2.4}}>
            Defesa
          </Heading>
          <Heading
            variant="number"
            color="#17171B"
            style={{marginVertical: 2.4}}>
            Ataque Esp.
          </Heading>
          <Heading
            variant="number"
            color="#17171B"
            style={{marginVertical: 2.4}}>
            Defesa Esp.
          </Heading>
          <Heading
            variant="number"
            color="#17171B"
            style={{marginVertical: 2.4}}>
            Velocidade
          </Heading>
        </View>
        <View>
          {pokemon.stats.map((stat, key) => (
            <Heading key={key} variant="description" color="#17171B">
              {stat.base_stat}
            </Heading>
          ))}
        </View>
        <View>
          {pokemon.stats.map((stat, key) => (
            <ProgressBar
              key={key}
              width={stat.base_stat}
              borderColor={getBackgroundColor(pokemon.types)}
            />
          ))}
        </View>

        <View>
          {pokemon.stats.map((stat, key) => (
            <Heading key={key} variant="description" color="#17171B">
              {getMinMaxStats(stat.stat.name, stat.base_stat)}
            </Heading>
          ))}
        </View>
        <View>
          {pokemon.stats.map((stat, key) => (
            <Heading key={key} variant="description" color="#17171B">
              {getMinMaxStats(stat.stat.name, stat.base_stat, 31, 252, 1.1)}
            </Heading>
          ))}
        </View>
      </View>
      <View
        style={{
          flexDirection: 'row',
          justifyContent: 'space-between',
          alignItems: 'center',
        }}>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Heading
            variant="number"
            color="#17171B"
            style={{marginVertical: 2.4, marginRight: 60}}>
            Total
          </Heading>

          <Heading
            variant="filter"
            color="#747476"
            style={{marginVertical: 2.4}}>
            {totalStats}
          </Heading>
        </View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}>
          <Heading
            variant="number"
            color="#17171B"
            style={{marginVertical: 2.4}}>
            Min
          </Heading>
          <Heading
            variant="number"
            color="#17171B"
            style={{marginVertical: 2.4, marginLeft: 38}}>
            Max
          </Heading>
        </View>
      </View>
      <Heading variant="type" color="#17171B" style={{textAlign: 'justify'}}>
        Os intervalos mostrados à direita são para um Pokémon de nível 100. Os
        valores máximos são baseados em natureza benéfica, 252 EVs, 31 IVs; os
        valores mínimos são baseados em natureza dificultadora, 0 EVs, 0 IVs.
      </Heading>

      <Heading
        variant="filter"
        color={getBackgroundColor(pokemon.types)}
        style={{marginTop: 16}}>
        Tipos de Defesa
      </Heading>

      <Heading
        variant="type"
        color="#17171B"
        style={{textAlign: 'justify', marginTop: 6}}>
        A eficácia de cada tipo no {capitalize(pokemon.name)}.
      </Heading>

      <View />
    </>
  );
}
