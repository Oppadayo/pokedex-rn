export interface StatsProps {
  id: number;
  name: string;
  game_index: number;
  is_battle_only: boolean;
  affecting_moves: {
    increase: [
      {
        change: number;
        move: {
          name: string;
          url: string;
        };
      },
    ];
    decrease: [
      {
        change: number;
        move: {
          name: string;
          url: string;
        };
      },
    ];
  };
  affecting_natures: {
    increase: [
      {
        name: string;
        url: string;
      },
    ];
    decrease: [
      {
        name: string;
        url: string;
      },
    ];
  };
  characteristics: [
    {
      url: string;
    },
  ];
  move_damage_class: {
    name: string;
    url: string;
  };
  names: [
    {
      name: string;
      language: {
        name: string;
        url: string;
      };
    },
  ];
}
