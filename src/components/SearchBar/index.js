import React, {useState} from 'react';
import {View, Text, TextInput} from 'react-native';
import IconMCI from 'react-native-vector-icons/Ionicons';
import styles from './style';

function SearchBar() {
  const [enteredText, setEnteredText] = useState({name: ''});

  return (
    <View style={styles.searchSection}>
      <IconMCI
        style={styles.searchIcon}
        name="search-outline"
        size={30}
        color="red"
      />
      <TextInput
        style={styles.input}
        placeholder="Company"
        onChangeText={text => setEnteredText({...enteredText, name: text})}
        underlineColorAndroid="transparent"
      />
    </View>
  );
}
export default SearchBar;
