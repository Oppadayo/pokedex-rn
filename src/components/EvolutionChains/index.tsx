import React, {useEffect, useMemo, useState} from 'react';
import {View} from 'react-native';

import {Heading} from '../Heading';

import {PokemonSpecies} from '../../types/PokemonSpecies';

import {styles} from './styles';
import {ArrowRight} from 'phosphor-react-native';
import {Evolution} from './Evolution';

interface Props {
  species: PokemonSpecies;
}

interface EvolutionChainsProps {
  evolution_chain: [
    {
      evolve_to: string;
      level: number;
      pokemon: string;
    },
  ];
}

export function EvolutionChains({species}: Props) {
  const [evolutionChains, setEvolutionChains] =
    useState<EvolutionChainsProps>();

  useEffect(() => {
    loadEvolutionChain();
  }, []);

  function loadEvolutionChain() {
    fetch(species.evolution_chain.url)
      .then(res => res.json())
      .then(res => {
        let chain = res.chain;
        let evolution_chain: any = [];
        while (chain.evolves_to.length != 0) {
          const evolution = {
            pokemon: chain.species.url.replace('pokemon-species', 'pokemon'),
            evolve_to: chain.evolves_to[0].species.url.replace(
              'pokemon-species',
              'pokemon',
            ),
            level: chain.evolves_to[0].evolution_details[0].min_level,
          };

          evolution_chain = [...evolution_chain, evolution];
          chain = chain.evolves_to[0];
        }
        setEvolutionChains({evolution_chain});
      });
  }

  function renderEvolutionChain() {
    let listEvolution: any = [];

    if (evolutionChains) {
      if (evolutionChains.evolution_chain.length > 0) {
        console.log('aqui');
        listEvolution = evolutionChains.evolution_chain.map(evolution => {
          return (
            <View
              key={`${evolution.pokemon} - ${evolution.evolve_to}`}
              style={styles.evolutionChain}>
              <Evolution url={evolution.pokemon} />
              <View style={styles.evolutionVector}>
                <ArrowRight size={20} color="#747476" weight="bold" />
                <Heading color="#17171B" variant="number">
                  {evolution.level ? 'Level ' + evolution.level : '?'}
                </Heading>
              </View>
              <Evolution url={evolution.evolve_to} />
            </View>
          );
        });
      }
    }

    return listEvolution;
  }

  return <>{renderEvolutionChain()}</>;
}
