import {useNavigation, useRoute} from '@react-navigation/native';
import {ArrowLeft} from 'phosphor-react-native';
import React, {useEffect, useState} from 'react';
import {Image, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {About} from '../../components/About';
import {BottomSheet} from '../../components/BottomSheet';
import {Heading} from '../../components/Heading';
import {PokemonTypes} from '../../components/PokemonTypes';
import {api} from '../../libs/api';
import {PokemonSpecies} from '../../types/PokemonSpecies';
import {EvolutionChains} from '../../components/EvolutionChains';
import {
  getBackgroundColor,
  hashNumber,
  capitalize,
  getImagePokemon,
} from '../../utils/pokemonUtils';

import {styles} from './styles';

export function Pokemon() {
  const route = useRoute();
  const {pokemons} = route.params;
  const navigation = useNavigation();

  const [training, setTraining] = useState<PokemonSpecies>();

  useEffect(() => {
    getPokemonTraining();
  }, []);

  async function getPokemonTraining() {
    if (pokemons) {
      const response = await api.get(`/pokemon-species/${pokemons.name}`);

      const trainingResponse = response.data;

      setTraining(trainingResponse);
    }
  }

  return (
    <>
      {pokemons && (
        <GestureHandlerRootView style={{flex: 1}}>
          <View
            style={{
              backgroundColor: getBackgroundColor(pokemons.types),
              ...styles.container,
            }}>
            <View style={{position: 'absolute', width: '300%'}}>
              <Heading variant="title" color="#fff" style={{opacity: 0.2}}>
                {training?.names[0].name}
              </Heading>
            </View>
            <View style={styles.menuHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft size={24} weight="bold" color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.head}>
              <Image style={styles.image} source={getImagePokemon(pokemons)} />

              <View>
                <Heading variant="filter" color="#17171B">
                  #{hashNumber(pokemons.id)}
                </Heading>
                <Heading variant="appTitle" color="#FFF">
                  {capitalize(pokemons.name)}
                </Heading>

                <PokemonTypes types={pokemons.types} />
              </View>
            </View>
          </View>

          <BottomSheet>
            {training && <EvolutionChains species={training} />}

            {/*<About pokemons={pokemons} training={training} />

            <Stats pokemon={pokemons} />

              <Location pokemon={pokemons} />*/}
          </BottomSheet>
        </GestureHandlerRootView>
      )}
    </>
  );
}
