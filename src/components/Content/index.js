import React from 'react';
import {Text, View} from 'react-native';
import styles from './style';

let companyName = 'IBM';

const Content = props => {
  return (
    <View style={styles.tabs}>
      <View style={styles.tabActive}>
        <Text style={styles.tabLabelActive}>{companyName}</Text>
      </View>
      <View style={styles.tab}>
        <Text style={styles.tabLabel}>Compare</Text>
      </View>
    </View>
  );
};

export default Content;
