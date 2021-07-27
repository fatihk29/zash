import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  tabs: {
    flexDirection: 'row',
    padding: 7,
    justifyContent: 'space-between',
  },
  tabActive: {
    borderBottomWidth: 1,
    borderColor: 'white',
    paddingBottom: 8,
  },
  tabLabelActive: {
    color: 'white',
    fontSize: 20,
  },
  tab: {
    borderBottomWidth: 1,
    borderColor: '#555',
    flex: 1,
  },
  tabLabel: {
    fontSize: 20,
    color: '#333',
    marginLeft: 16,
  },
});

export default styles;
