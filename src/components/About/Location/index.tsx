import React, {useEffect, useState} from 'react';
import {View} from 'react-native';

//Utils
import {getBackgroundColor} from '../../../utils/pokemonUtils';

//Libs
import {api} from '../../../libs/api';

//Componets
import {Heading} from '../../Heading';

//Types
import {LocationArea} from '../../../types/LocationArea';
import {Pokemon} from '../../../types/Pokemon';

//Styles
import {styles} from './styles';

//Interface
interface Props {
  pokemon: Pokemon;
}

export function Location({pokemon}: Props) {
  const [location, setLocation] = useState<LocationArea[]>();
  const [locationArea, setLocationArea] = useState();

  useEffect(() => {
    getPokemonLocation();
  }, []);

  useEffect(() => {
    fetchLocations();
  }, []);

  async function fetchLocations() {
    if (location) {
      await fetch('https://pokeapi.co/api/v2/location-area/281/')
        .then(res => res.json())
        .then(pokemon => {
          setLocationArea(pokemon);
        });
    }
  }

  async function getPokemonLocation() {
    const response = await api.get(`pokemon/${pokemon.name}/encounters`);

    const locationResponse = response.data;

    setLocation(locationResponse);
  }

  function getRoutes() {
    locationArea.location.url.substring(35).replace('/', '');
  }

  console.log(location && location);
  return (
    <>
      <Heading
        variant="filter"
        color={getBackgroundColor(pokemon.types)}
        style={{marginTop: 8}}>
        Localização
      </Heading>
      <View style={styles.pokedexData}>
        {location &&
          location.map(loc =>
            loc.version_details.map((vd, key) => (
              <Heading key={key} variant="number" color="#747476">
                ({vd.version.name})
              </Heading>
            )),
          )}

        {location &&
          location.map((loc, key) => (
            <Heading key={key} variant="number" color="#747476">
              ({loc.location_area.name})
            </Heading>
          ))}
      </View>
    </>
  );
}
