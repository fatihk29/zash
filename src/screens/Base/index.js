import React, {useEffect, useState} from 'react';
import {StyleSheet, View, Dimensions, ScrollView} from 'react-native';
import {PanGestureHandler, State} from 'react-native-gesture-handler';

import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import Animated, {
  add,
  diffClamp,
  eq,
  modulo,
  sub,
} from 'react-native-reanimated';
import {onGestureEvent, useValues} from 'react-native-redash/lib/module/v1';

import data from '../../components/data';
import Chart from '../../components/Chart'; //
import Values from '../../components/Values';
import Line from '../../components/Line';
import Label from '../../components/Label';
import Content from '../../components/Content';
import SelectTimeInterval from '../../components/SelectTimeInterval';
import styles from './style';

import fetchStockData from '../../helpers/FetchStockData';

const {width: size} = Dimensions.get('window');

// const fetching = async () => {
//   const result = await fetchStockData();
// };
// fetching();
const Base = () => {
  const [value, setValue] = useState(0);
  const [stockData, setStockData] = useState([]);
  const [candles, setCandles] = useState(data.slice(0, 20));
  const [x, y, state] = useValues(0, 0, State.UNDETERMINED);
  const gestureHandler = onGestureEvent({
    x,
    y,
    state,
  });
  const caliber = size / candles.length;
  const translateY = diffClamp(y, 0, size);
  const translateX = add(sub(x, modulo(x, caliber)), caliber / 2);
  const opacity = eq(state, State.ACTIVE);

  const getDomain = rows => {
    const values = rows.map(({high, low}) => [high, low]).flat();
    return [Math.min(...values), Math.max(...values)];
  };
  const domain = getDomain(candles);

  function chunkData(start) {
    let array = [];
    for (let i = start; i < start + 20; i++) {
      array.push(data[i]);
    }
    return array;
  }

  useEffect(() => {
    const fetching = async () => {
      const result = await fetchStockData();
      setStockData(result);
      setCandles(result.slice(0, 20));
    };
    fetching();
  }, []);

  useEffect(() => {
    let newCandles = chunkData(value);
    setCandles(newCandles);
  }, [value]);

  return (
    <ScrollView style={styles.container}>
      <Content />
      <View>
        <Animated.View style={styles.valuesContainer} pointerEvents="none">
          <Values {...{candles, translateX, caliber}} />
        </Animated.View>
        <SelectTimeInterval />
      </View>
      <View>
        <Chart {...{candles, domain}} />
        <PanGestureHandler minDist={10} {...gestureHandler}>
          <Animated.View style={StyleSheet.absoluteFill}>
            <Animated.View
              style={{
                transform: [{translateY}],
                opacity,
                ...StyleSheet.absoluteFillObject,
              }}>
              <Line x={size} y={0} />
            </Animated.View>
            <Animated.View
              style={{
                transform: [{translateX}],
                opacity,
                ...StyleSheet.absoluteFillObject,
              }}>
              <Line x={0} y={size} />
            </Animated.View>
            <Label y={translateY} {...{size, domain, opacity}} />
          </Animated.View>
        </PanGestureHandler>
      </View>
      <PanGestureHandler
        onGestureEvent={({nativeEvent}) => {
          if (nativeEvent.x > size / 2) {
            let s = value;
            setValue(s + 2);
          } else {
            let s = value;
            if (s <= 0) {
              return setValue(0);
            }
            setValue(s - 2);
          }
        }}>
        <View style={styles.scrollHorizontalContainer}>
          <View style={styles.scrollHorizontalIcons}>
            <IconFA5 name="angle-left" size={30} color="white" />
            <IconFA5 name="angle-right" size={30} color="white" />
          </View>
        </View>
      </PanGestureHandler>
    </ScrollView>
  );
};

export default Base;
