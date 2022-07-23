export interface LocationArea {
  location_area: {
    name: string;
    url: string;
  };
  version_details: [
    {
      max_chance: number;
      encounter_details: [
        {
          min_level: number;
          max_level: number;
          condition_values: [
            {
              name: string;
              url: string;
            },
          ];
          chance: number;
          method: {
            name: string;
            url: string;
          };
        },
      ];
      version: {
        name: string;
        url: string;
      };
    },
  ];
}
