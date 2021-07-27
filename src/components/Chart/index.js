import React from 'react';
import {Dimensions, View, Text} from 'react-native';
import {Svg, Line} from 'react-native-svg';
import {scaleLinear} from 'd3';

import CandleStick from '../CandleStick';
import CandleStickDate from '../CandleStickDate';
const fillColorToBottom = '#adaf21';

const {width: size_} = Dimensions.get('window');

const Chart = ({candles, domain}) => {
  const width = size_ / candles.length;
  const scaleY = scaleLinear().domain(domain).range([size_, 0]);
  const scaleBody = scaleLinear()
    .domain([0, Math.max(...domain) - Math.min(...domain)])
    .range([0, size_]);

  return (
    <>
      <Svg width={size_} height={size_}>
        {candles.map((candle, index) => (
          <CandleStick
            key={candle.date}
            {...{candle, index, width, scaleY, scaleBody}}
          />
        ))}
      </Svg>
      {/* <Svg width={500} height={100}>
        {candles.map((candle, index) => (
          <CandleStickDate
            key={candle.date}
            {...{candle, index, width, scaleY, scaleBody}}>
            <Text style={{color: 'red'}}>s</Text>
          </CandleStickDate>
        ))}
      </Svg> */}
    </>
  );
};

export default Chart;
