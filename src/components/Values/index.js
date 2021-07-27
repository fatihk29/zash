import React, {useState} from 'react';
import {Text, View} from 'react-native';
import {call, divide, floor, onChange, useCode} from 'react-native-reanimated';
import moment from 'moment';
import {SafeAreaView} from 'react-native-safe-area-context';

import styles from './style';
import Row from '../../components/Row';

const Values = ({translateX, caliber, candles}) => {
  const [{date, open, close, high, low}, setCandle] = useState(candles[0]);
  const diff = `${((close - open) * 100) / open}`;
  const change = close - open < 0 ? diff.substring(0, 5) : diff.substring(0, 4);

  useCode(
    () =>
      onChange(
        translateX,
        call([floor(divide(translateX, caliber))], ([index]) => {
          setCandle(candles[index]);
        }),
      ),
    [caliber, candles, translateX],
  );

  return (
    <SafeAreaView style={styles.container}>
      <View style={styles.table}>
        <View style={styles.column}>
          <Row label="Open" value={open} />
          <Row label="Close" value={close} />
          <Row label="Volume" value="" />
        </View>
        <View style={styles.separator} />
        <View style={styles.column}>
          <Row label="High" value={high} />
          <Row label="Low" value={low} />
          <Row
            label="Change"
            value={`${change}%`}
            color={close - open > 0 ? '#4AFA9A' : '#E33F64'}
          />
        </View>
      </View>
      <Text style={styles.date}>
        {moment(date).format('hh:mm/ DD:MM:YYYY')}
      </Text>
    </SafeAreaView>
  );
};

export default Values;
