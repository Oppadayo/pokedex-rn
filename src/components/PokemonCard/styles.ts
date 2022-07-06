import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    width: '100%',
    height: 98,
    borderRadius: 14,
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: 8,
    paddingLeft: 8,
  },
  image: {
    width: 90,
    height: 90,
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
    color: '#000',
    marginBottom: 12,
  },
  pokemonType: {
    fontSize: 12,
    fontWeight: 'bold',
    color: '#000',
    padding: 4,
    borderRadius: 8,
  },
  typeContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  number: {
    position: 'absolute',
    fontSize: 36,
    fontWeight: 'bold',
    color: '#fff',
    bottom: 0,
    right: 0,
    opacity: 0.2,
  },
});
