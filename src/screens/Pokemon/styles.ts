import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 24,
  },
  menuHeader: {
    paddingVertical: 24,
  },
  head: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  image: {
    width: 180,
    height: 180,
  },
  info: {},
  number: {
    fontSize: 16,
    fontWeight: 'bold',
    color: '#fff',
  },
  name: {
    fontSize: 26,
    fontWeight: 'bold',
    color: '#fff',
    marginBottom: 12,
  },
  pokedexData: {
    flexDirection: 'row',
  },
  data: {
    color: '#000',
    marginVertical: 8,
  },
  box: {
    padding: 28,
  },
});
