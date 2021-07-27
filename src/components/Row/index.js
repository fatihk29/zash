import React from 'react';
import {StyleSheet, Text, View} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  label: {
    fontSize: 14,
    color: 'grey',
  },
  value: {
    fontSize: 16,
  },
});

const Row = ({label, value, color}) => {
  return (
    <View style={styles.container}>
      <Text style={styles.label}>{label}</Text>
      <Text style={[styles.value, {color: color || 'white'}]}>{value}</Text>
    </View>
  );
};
export default Row;
