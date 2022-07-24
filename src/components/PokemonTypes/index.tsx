import React from 'react';
import {View} from 'react-native';

import {GrassIcon} from '../../assets/icons/badge/grass';
import {PoisonIcon} from '../../assets/icons/badge/poison';
import {FireIcon} from '../../assets/icons/badge/fire';
import {ElectricIcon} from '../../assets/icons/badge/electric';
import {FairyIcon} from '../../assets/icons/badge/fairy';
import {BugIcon} from '../../assets/icons/badge/bug';
import {DarkIcon} from '../../assets/icons/badge/dark';
import {DragonIcon} from '../../assets/icons/badge/dragon';
import {FightingIcon} from '../../assets/icons/badge/fighting';
import {FlyingIcon} from '../../assets/icons/badge/flying';
import {GhostIcon} from '../../assets/icons/badge/ghost';
import {GroundIcon} from '../../assets/icons/badge/ground';
import {IceIcon} from '../../assets/icons/badge/ice';
import {NormalIcon} from '../../assets/icons/badge/normal';
import {PsychicIcon} from '../../assets/icons/badge/psychic';
import {RockIcon} from '../../assets/icons/badge/rock';
import {SteelIcon} from '../../assets/icons/badge/steel';
import {WaterIcon} from '../../assets/icons/badge/water';

import {styles} from './styles';

interface Props {
  types: [
    {
      slot: number;
      type: {
        name: string;
        url: string;
      };
    },
  ];
}

export function getTypesIcon(type: string) {
  if (type === 'fire') {
    return <FireIcon />;
  }

  if (type === 'water') {
    return <WaterIcon />;
  }

  if (type === 'poison') {
    return <PoisonIcon />;
  }

  if (type === 'grass') {
    return <GrassIcon />;
  }

  if (type === 'electric') {
    return <ElectricIcon />;
  }

  if (type === 'rock') {
    return <RockIcon />;
  }

  if (type === 'dark') {
    return <DarkIcon />;
  }

  if (type === 'flying') {
    return <FlyingIcon />;
  }

  if (type === 'dragon') {
    return <DragonIcon />;
  }

  if (type === 'bug') {
    return <BugIcon />;
  }

  if (type === 'ground') {
    return <GroundIcon />;
  }

  if (type === 'psychic') {
    return <PsychicIcon />;
  }

  if (type === 'fighting') {
    return <FightingIcon />;
  }

  if (type === 'ghost') {
    return <GhostIcon />;
  }

  if (type === 'ice') {
    return <IceIcon />;
  }

  if (type === 'steel') {
    return <SteelIcon />;
  }

  if (type === 'fairy') {
    return <FairyIcon />;
  }

  if (type === 'normal') {
    return <NormalIcon />;
  }
}

export function PokemonTypes({types}: Props) {
  return (
    <View style={styles.typeContainer}>
      {types.map((tp, key) => (
        <View key={key} style={{marginRight: 8}}>
          {getTypesIcon(tp.type.name)}
        </View>
      ))}
    </View>
  );
}
