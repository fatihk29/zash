import React, {useState, useEffect} from 'react';
import {
  SafeAreaView,
  TouchableOpacity,
  Text,
  StyleSheet,
  Alert,
} from 'react-native';
import AsyncStorage from '@react-native-async-storage/async-storage';

const TimeIntervalList = [
  // {name: '1M', key: '1456-T5U9-16'},
  // {name: '1W', key: '1457-T5U9-17'},
  {name: '1D', id: '1458-T5U9-18'},
  {name: '1h', id: '1459-T5U9-19'},
  {name: '5m', id: '1460-T5U9-20'},
];
const STORAGE_KEY = 'TIME_INTERVAL';

const SelectTimeInterval = () => {
  const [selectedTimeInterval, setSelectedTimeInterval] = useState('1D');

  const saveData = async value => {
    try {
      await AsyncStorage.setItem(STORAGE_KEY, value);
    } catch (e) {
      Alert.alert('Failed to save the data to the storage');
    }
  };

  const readData = async () => {
    try {
      const storedData = await AsyncStorage.getItem(STORAGE_KEY);

      if (storedData !== null) {
        console.log('37', storedData);
      }
    } catch (e) {
      Alert.alert('Failed to fetch the data from storage');
    }
  };

  useEffect(() => {
    readData();
  }, [selectedTimeInterval]);

  const RenderItem = props => {
    return (
      <TouchableOpacity
        style={[
          styles.item,
          selectedTimeInterval === props.title ? styles.tabActive : null,
        ]}
        onPress={() => {
          saveData(props.title);
          setSelectedTimeInterval(props.title);
        }}>
        <Text style={styles.title}>{props.title}</Text>
      </TouchableOpacity>
    );
  };

  return (
    <SafeAreaView style={styles.container}>
      {TimeIntervalList.map(item => {
        return <RenderItem title={item.name} key={item.id} />;
      })}
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    paddingBottom: 15,
  },
  item: {
    width: '8%',
    marginLeft: 3,
    paddingVertical: 3,
    backgroundColor: '#222',
    justifyContent: 'center',
    alignItems: 'center',
  },
  tabActive: {
    borderBottomColor: 'green',
    borderBottomWidth: 1,
  },
  title: {
    color: 'white',
    fontSize: 12,
  },
});

export default SelectTimeInterval;
