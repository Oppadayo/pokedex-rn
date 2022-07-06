import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFF',
    paddingHorizontal: 24,
  },
  loading: {
    flex: 1,
    backgroundColor: '#FFF',
    alignItems: 'center',
    justifyContent: 'center',
  },
  menuHeader: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    paddingVertical: 24,
  },
  title: {
    fontSize: 32,
    color: '#000',
    fontWeight: 'bold',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginVertical: 12,
  },
  search: {
    flex: 1,
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    paddingLeft: 12,
    color: '#000',
  },
  filter: {
    backgroundColor: '#F5F5F5',
    borderRadius: 50,
    padding: 14,
    marginLeft: 12,
  },
});
