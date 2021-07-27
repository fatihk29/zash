import React from 'react';
import {StyleSheet} from 'react-native';
import Svg, {Line} from 'react-native-svg';

const LineComp = ({x, y}) => {
  return (
    <Svg style={StyleSheet.absoluteFill}>
      <Line
        x1={0}
        y1={0}
        x2={x}
        y2={y}
        strokeWidth={2}
        stroke="#c5c6c7"
        strokeDasharray="6 6"
      />
    </Svg>
  );
};

export default LineComp;
