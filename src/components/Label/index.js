import React from 'react';
import {Text, View} from 'react-native';

import style from './style';

const Label = ({domain: [min, max]}) => {
  return (
    <>
      <View style={style.container}>
        <View>
          <Text style={style.textColor}>{max}</Text>
        </View>
        <View>
          <Text style={style.textColor}>{min}</Text>
        </View>
      </View>
    </>
  );
};
export default Label;
