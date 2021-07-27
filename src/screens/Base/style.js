import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'black',
  },
  valuesContainer: {
    color: '#fff',
  },
  scrollHorizontalContainer: {
    marginVertical: 20,
    width: '100%',
    height: 30,
    backgroundColor: '#555',
    borderRadius: 10,
    justifyContent: 'center',
  },
  scrollHorizontalIcons: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginHorizontal: 5,
  },
});
export default styles;
