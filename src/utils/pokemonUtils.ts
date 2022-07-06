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

    default:
      return '#B5B9C4';
  }
};

export const upperCaseFirstLetter = (text: string) => {
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
