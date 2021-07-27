import React, {useState} from 'react';
import {View, TextInput, FlatList, Text, TouchableOpacity} from 'react-native';
import IconMCI from 'react-native-vector-icons/Ionicons';
import styles from './style';

const DATA = [
  {
    id: 'bd7acbea-c1b1-46c2-aed5-3ad53abb28ba',
    companyName: 'IBM',
    stockTitle: 'IBM',
    abbTitle: 'IBM',
  },
  {
    id: '3ac68afc-c605-48d3-a4f8-fbd91aa97f63',
    companyName: 'TESCO',
    stockTitle: 'TSCO.LON',
    abbrTitle: 'TSCO',
  },
  {
    id: '58694a0f-3da1-471f-bd96-145571e29d72',
    companyName: 'GreenPower Motor Company',
    stockTitle: 'GPV.TRV',
    abbrTitle: 'GPV',
  },
  {
    id: '58694a0f-3ma1-471f-bs96-145571e29d72',
    companyName: 'DAIMLER',
    stockTitle: 'DAI.DEX',
    abbrTitle: 'DAI',
  },
  {
    id: '58695a0f-3da1-471f-bd96-145571e29d76',
    companyName: 'SAIC Motor Corporation',
    stockTitle: '600104.SHH',
    abbrTitle: 'SHH',
  },
  {
    id: '58794a0f-3da1-471f-bd96-145571e21d72',
    companyName: 'China Vanke Company',
    stockTitle: '0000002.SHZ',
    abbrTitle: 'SHZ',
  },
  {
    id: '58794a0f-3da1-421f-bd96-145571e21d72',
    companyName: 'China Vanke Company',
    stockTitle: '0000002.SHZ',
    abbrTitle: 'SHZ',
  },
  {
    id: '587194a0f-3da1-471f-bd96-145571e21d72',
    companyName: 'China Vanke Company',
    stockTitle: '0000002.SHZ',
    abbrTitle: 'SHZ',
  },
  {
    id: '587294a0f-3da1-471f-bd96-145571e21d72',
    companyName: 'China Vanke Company',
    stockTitle: '0000002.SHZ',
    abbrTitle: 'SHZ',
  },
  {
    id: '587945a0f-3da1-471f-bd96-145571e21d72',
    companyName: 'China Vanke Company',
    stockTitle: '0000002.SHZ',
    abbrTitle: 'SHZ',
  },
];

function AddNewChar({navigation}) {
  const [enteredText, setEnteredText] = useState({name: ''});

  function saveToAsyncStorage(stockTitle) {
    // console.log('49', stockTitle);
  }

  function ListItem(item) {
    return (
      <TouchableOpacity
        onPress={() => {
          saveToAsyncStorage(item.stockTitle);
        }}
        style={{backgroundColor: '#282828'}}>
        <View
          style={{
            flexDirection: 'column',
            width: '100%',
            height: 70,
            borderBottomWidth: 1,
            borderBottomColor: 'gray',
            marginHorizontal: 10,
          }}>
          <Text style={{fontSize: 18, color: 'white'}}>{item.companyName}</Text>
          <Text style={{fontSize: 13, color: 'white'}}>{item.stockTitle}</Text>
        </View>
      </TouchableOpacity>
    );
  }
  return (
    <View style={styles.container}>
      <View style={styles.searchSection}>
        <IconMCI
          style={styles.searchIcon}
          name="search-outline"
          size={30}
          color="white"
        />
        <TextInput
          style={styles.input}
          placeholder="Company Name"
          onChangeText={text => setEnteredText({...enteredText, name: text})}
          underlineColorAndroid="transparent"
        />
      </View>
      <FlatList
        data={DATA}
        renderItem={({item}) => ListItem(item)}
        keyExtractor={item => item.id}
      />
    </View>
  );
}

export default AddNewChar;
