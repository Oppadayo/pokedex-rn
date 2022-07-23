import React from 'react';
import {View} from 'react-native';
import {styles} from './styles';

// import { Container } from './styles';

import {GrassIcon} from '../../assets/icons/grass';
import {PoisonIcon} from '../../assets/icons/poison';
import {FireIcon} from '../../assets/icons/fire';
import {ElectricIcon} from '../../assets/icons/electric';
import {FairyIcon} from '../../assets/icons/fairy';
import {BugIcon} from '../../assets/icons/bug';
import {DarkIcon} from '../../assets/icons/dark';
import {DragonIcon} from '../../assets/icons/dragon';
import {FightingIcon} from '../../assets/icons/fighting';
import {FlyingIcon} from '../../assets/icons/flying';
import {GhostIcon} from '../../assets/icons/ghost';
import {GroundIcon} from '../../assets/icons/ground';
import {IceIcon} from '../../assets/icons/ice';
import {NormalIcon} from '../../assets/icons/normal';
import {PsychicIcon} from '../../assets/icons/psychic';
import {RockIcon} from '../../assets/icons/rock';
import {SteelIcon} from '../../assets/icons/steel';
import {WaterIcon} from '../../assets/icons/water';

interface Props {
  types: {};
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
      <View style={{marginRight: 8}}>{getTypesIcon(types[0].type.name)}</View>
      <View>{types[1] && getTypesIcon(types[1].type.name)}</View>
    </View>
  );
}
