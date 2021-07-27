import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  header: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  icon: {
    marginRight: 16,
  },
  title: {
    color: 'white',
    fontSize: 20,
    fontWeight: '500',
  },
  subtitle: {
    fontSize: 16,
    color: '#d3d3d3',
  },
  rightColumn: {
    flex: 1,
  },
  leftColumn: {
    flex: 1,
    alignItems: 'flex-end',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginTop: 16,
  },
  tabContainer: {
    backgroundColor: '#222324',
    borderRadius: 8,
    flexDirection: 'row',
  },
  tab: {
    padding: 8,
  },
  tabLabel: {
    fontSize: 14,
    // fontVariant: ['tabular-nums'],
    color: '#d3d3d3',
  },
  tabLabelActive: {
    fontSize: 14,
    // fontVariant: ['tabular-nums'],
    color: 'white',
    fontWeight: '500',
  },
});

export default styles;
