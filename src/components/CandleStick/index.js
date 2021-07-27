import React from 'react';
import {Text, View} from 'react-native';
import {Line, Rect, Text as SvgText} from 'react-native-svg';
import moment from 'moment';

const MARGIN = 3;

const CandleStick = ({candle, index, width, scaleY, scaleBody}) => {
  const {close, open, high, low, date} = candle;

  const fill = close > open ? '#4AFAAB' : '#E44';
  const x = index * width;
  const max = Math.max(open, close);
  const min = Math.min(open, close);
  const fillColorToBottom = '#AAA';

  let formattedDate = moment(date).format('hh');
  // console.log(index, formattedDate);
  // console.log(scaleBody(max - min));
  return (
    <>
      <Line
        x1={x + width / 2}
        y1={scaleY(low)}
        x2={x + width / 2}
        y2={scaleY(high)}
        stroke={fill}
        strokeWidth={2}
      />
      <Rect
        x={x + MARGIN}
        y={scaleY(max)}
        width={width - MARGIN * 2}
        height={scaleBody(max - min)}
        fill={fill}
      />
      <Line
        x1={x + width / 2}
        y1={scaleY(low)}
        x2={x + width / 2}
        y2={scaleY(high) + 500}
        stroke={fillColorToBottom}
        strokeWidth={0.2}
      />
    </>
  );
};

export default CandleStick;
