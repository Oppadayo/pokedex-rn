import React from 'react';

//Components
import {Training} from './Training';
import {PokedexInfo} from './PokedexInfo';

//Types
import {PokemonSpecies} from '../../types/PokemonSpecies';
import {Pokemon} from '../../types/Pokemon';
import {Breeding} from './Breeding';

//Interface
interface Props {
  pokemons: Pokemon;
  training: PokemonSpecies;
}

export function About({pokemons, training}: Props) {
  return (
    <>
      <PokedexInfo pokemon={pokemons} />
      <Training pokemon={pokemons} training={training} />
      <Breeding pokemon={pokemons} />
    </>
  );
}
