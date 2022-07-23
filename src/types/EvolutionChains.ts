export interface EvolutionChainsProps {
  id: number;
  baby_trigger_item: string;
  chain: {
    is_baby: boolean;
    species: {
      name: string;
      url: string;
    };
    evolution_details: string;
    evolves_to: [
      {
        is_baby: boolean;
        species: {
          name: string;
          url: string;
        };
        evolution_details: [
          {
            item: string;
            trigger: {
              name: string;
              url: string;
            };
            gender: string | null;
            held_item: string | null;
            known_move: string | null;
            known_move_type: string | null;
            location: string | null;
            min_level: number;
            min_happiness: string | null;
            min_beauty: string | null;
            min_affection: string | null;
            needs_overworld_rain: boolean;
            party_species: string | null;
            party_type: string | null;
            relative_physical_stats: string | null;
            time_of_day: string;
            trade_species: string | null;
            turn_upside_down: boolean;
          },
        ];
        evolves_to: [
          {
            item: string;
            trigger: {
              name: string;
              url: string;
            };
            gender: string | null;
            held_item: string | null;
            known_move: string | null;
            known_move_type: string | null;
            location: string | null;
            min_level: number;
            min_happiness: string | null;
            min_beauty: string | null;
            min_affection: string | null;
            needs_overworld_rain: boolean;
            party_species: string | null;
            party_type: string | null;
            relative_physical_stats: string | null;
            time_of_day: string;
            trade_species: string | null;
            turn_upside_down: boolean;
          },
        ];
      },
    ];
  };
}
