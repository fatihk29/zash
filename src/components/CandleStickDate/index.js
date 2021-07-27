import React from 'react';
import {Text, View} from 'react-native';
import {Line, Rect, Text as SvgText} from 'react-native-svg';
import moment from 'moment';

const MARGIN = 3;

const CandleStickDate = ({candle, index, width, scaleY, scaleBody}) => {
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
      <SvgText
        x1={x + width / 2}
        y1={scaleY(low) - 1000}
        x2={x + width / 2}
        y2={scaleY(high)}
        stroke={fill}>
        aa
      </SvgText>
    </>
  );
};

export default CandleStickDate;
