import React from 'react';
import {View, Text} from 'react-native';
import {
  VictoryCandlestick,
  VictoryChart,
  VictoryAxis,
  VictoryLabel,
} from 'victory-native';
import moment from 'moment';

const StockCandleStick = ({data}) => {
  let sortedData = [...data].reverse();
  let sortedData2 = [];
  sortedData.map(obj => {
    let {date} = obj;
    let month = moment(date).format('MM');

    if (month === '02') {
      sortedData2.push(obj);
    }
  });
  let crossAxis = [];
  sortedData2.map(obj => {
    crossAxis.push(obj.date);
  });

  return (
    <View>
      <VictoryChart domainPadding={{x: 25}} scale={{x: 'time'}}>
        <VictoryAxis
          tickValues={crossAxis}
          tickFormat={t => {
            let month = moment(t).format('MM');
            let day = moment(t).format('DD');
            // console.log(day);
            // if (month === '03') {
            //   return 'a';
            // }
          }}
        />
        <VictoryAxis dependentAxis />
        <VictoryCandlestick
          candleRatio={1}
          candleColors={{positive: 'red', negative: 'green'}}
          data={sortedData2}
          closeLabels={({datum}) => {
            // return <VictoryLabel />;
          }}
          labelComponent={<VictoryLabel angle={-45} textAnchor="assssssss" />}
        />
      </VictoryChart>
    </View>
  );
};

export default StockCandleStick;
