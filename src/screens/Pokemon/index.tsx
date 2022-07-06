import {useNavigation, useRoute} from '@react-navigation/native';
import {ArrowLeft} from 'phosphor-react-native';
import React from 'react';
import {Image, Text, TouchableOpacity, View} from 'react-native';
import {GestureHandlerRootView} from 'react-native-gesture-handler';
import {BottomSheet} from '../../components/BottomSheet';
import {PokemonTypes} from '../../components/PokemonTypes';
import {
  getBackgroundColor,
  getPokemonHeight,
  getPokemonWeight,
  hashNumber,
  upperCaseFirstLetter,
} from '../../utils/pokemonUtils';
import {styles} from './styles';

export function Pokemon() {
  const route = useRoute();
  const {pokemons} = route.params;
  const navigation = useNavigation();

  return (
    <>
      {pokemons && (
        <GestureHandlerRootView style={{flex: 1}}>
          <View
            style={{
              backgroundColor: getBackgroundColor(pokemons.types),
              ...styles.container,
            }}>
            <View style={styles.menuHeader}>
              <TouchableOpacity onPress={() => navigation.goBack()}>
                <ArrowLeft size={24} weight="bold" color="#fff" />
              </TouchableOpacity>
            </View>

            <View style={styles.head}>
              <Image
                style={styles.image}
                source={{uri: pokemons.sprites.front_default}}
              />

              <View style={styles.info}>
                <Text style={styles.number}>#{hashNumber(pokemons.id)}</Text>
                <Text style={styles.name}>
                  {upperCaseFirstLetter(pokemons.name)}
                </Text>
                <PokemonTypes types={pokemons.types} />
              </View>
            </View>
          </View>
          <BottomSheet>
            <Text
              style={{
                color: getBackgroundColor(pokemons.types),
              }}>
              Pokedex Data
            </Text>
            <View style={styles.pokedexData}>
              <View>
                <Text style={styles.data}>Height</Text>
                <Text style={styles.data}>Weight</Text>
                <Text style={styles.data}>Abilities</Text>
                <Text style={styles.data}>Weaknesses</Text>
              </View>
              <View style={styles.box}>
                <Text style={styles.data}>
                  {getPokemonHeight(pokemons.height)}
                </Text>
                <Text style={styles.data}>
                  {getPokemonWeight(pokemons.weight)}
                </Text>
                {pokemons.abilities.map(ab => (
                  <Text style={styles.data}>{ab.ability.name}</Text>
                ))}
              </View>
            </View>
          </BottomSheet>
        </GestureHandlerRootView>
      )}
    </>
  );
}
