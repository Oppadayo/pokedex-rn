import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: 'column', //column direction
    justifyContent: 'center',
    alignItems: 'center',

    backgroundColor: '#fff',
    padding: 2,
  },
  progressBar: {
    height: 4,
    width: '20%',
    backgroundColor: 'white',
    borderColor: '#000',
    borderWidth: 2,
    borderRadius: 5,
    alignSelf: 'flex-start',
  },
});
