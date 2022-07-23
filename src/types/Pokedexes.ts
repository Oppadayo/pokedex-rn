export interface Pokedexes {
  id: number;
  name: string;
  is_main_series: boolean;
  descriptions: [
    {
      description: string;
      language: {
        name: string;
        url: string;
      };
    },
  ];
  names: [
    {
      name: string;
      language: {
        name: string;
        url: string;
      };
    },
  ];
  pokemon_entries: [
    {
      entry_number: number;
      pokemon_species: {
        name: string;
        url: string;
      };
    },
  ];
  region: {
    name: string;
    url: string;
  };
  version_groups: [
    {
      name: string;
      url: string;
    },
  ];
}
