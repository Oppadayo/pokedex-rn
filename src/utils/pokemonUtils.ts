import {Pokemon} from '../types/Pokemon';

export const getBackgroundColor = types => {
  switch (types[0].type.name) {
    case 'fire':
      return '#FFA756';

    case 'water':
      return '#58ABF6';

    case 'poison':
      return '#9F6E97';

    case 'grass':
      return '#8BBE8A';

    case 'electric':
      return '#F2CB55';

    case 'rock':
      return '#D4C294';

    case 'dark':
      return '#6F6E78';

    case 'flying':
      return '#83A2E3';

    case 'dragon':
      return '#7383B9';

    case 'bug':
      return '#8BD674';

    case 'ground':
      return '#F78551';

    case 'psychic':
      return '#FF6568';

    case 'fighting':
      return '#EB4971';

    case 'ghost':
      return '#8571BE';

    case 'ice':
      return '#91D8DF';

    case 'steel':
      return '#4C91B2';

    case 'fairy':
      return '#EBA8C3';

    case 'normal':
      return '#B5B9C4';

    case 'black':
      return '#000';

    default:
      return '#fff';
  }
};

export const capitalize = (text: string) => {
  return text[0].toUpperCase() + text.slice(1);
};

export const hashNumber = (number: number) => {
  return number.toString().padStart(4, '0');
};

export const getPokemonHeight = (height: number) => {
  let meters = height / 10;

  if (meters >= 1) {
    return `${meters.toFixed(2)}m`;
  } else {
    return `${meters.toFixed(2)}cm`;
  }
};

export const getPokemonWeight = (weight: number) => {
  let kg = weight / 10;

  return `${kg.toFixed(1)}kg`;
};

export const getPokemonWeaknesses = (type: string) => {
  switch (type) {
    case 'fire':
      return ['ground', 'rock', 'water'];

    case 'water':
      return ['electric', 'grass'];

    case 'poison':
      return ['ground', 'psychic'];

    case 'grass':
      return ['bug', 'fire', 'flying', 'ice', 'poison'];

    case 'electric':
      return ['ground'];

    case 'rock':
      return ['fighting', 'grass', 'ground', 'steel', 'water'];

    case 'dark':
      return ['bug', 'fairy', 'fighting'];

    case 'flying':
      return ['electric', 'ice', 'rock'];

    case 'dragon':
      return ['dragon', 'fairy', 'ice'];

    case 'bug':
      return ['fire', 'flying', 'rock'];

    case 'ground':
      return ['grass', 'ice', 'water'];

    case 'psychic':
      return ['bug', 'dark', 'ghost'];

    case 'fighting':
      return ['fairy', 'flying', 'psychic'];

    case 'ghost':
      return ['dark', 'ghost'];

    case 'ice':
      return ['fighting', 'fire', 'rock', 'steel'];

    case 'steel':
      return ['fighting', 'fire', 'ground'];

    case 'fairy':
      return ['poison', 'steel'];

    case 'normal':
      return ['fighting'];

    default:
      return [];
  }
};

export const getTypesDefense = types => {
  let typesDefenses = [];
  const weak = getPokemonWeaknesses(types[0].type.name);

  weak?.map(wk => {
    typesDefenses.push({type: wk, value: 2});
  });

  return typesDefenses;
};

export const getImagePokemon = (pokemon: Pokemon) => {
  if (pokemon.sprites === undefined) {
    return {uri: ''};
  } else {
    return {uri: pokemon.sprites.other['official-artwork'].front_default};
  }
};
