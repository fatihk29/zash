import React from 'react';
import {TouchableOpacity, View, Text, StyleSheet} from 'react-native';
import {createStackNavigator} from '@react-navigation/stack';
import {NavigationContainer} from '@react-navigation/native';
import AddNewChar from '../screens/AddNewChar';
import IconFA5 from 'react-native-vector-icons/FontAwesome5';
import IconMCI from 'react-native-vector-icons/Ionicons';
import Base from '../screens/Base';

const Stack = createStackNavigator();

function StackNavigator() {
  function HeaderLeftTitle({navigation}) {
    return (
      <View>
        <TouchableOpacity
          onPress={() => navigation.navigate('Base')}
          style={style.leftHeader}>
          <View style={style.subContainer}>
            <IconFA5 name="angle-left" size={30} color="#fff" />
          </View>
        </TouchableOpacity>
      </View>
    );
  }
  function HeaderMidTitle({title}) {
    return (
      <View style={style.midHeader}>
        <Text style={style.midHeaderText}>{title}</Text>
      </View>
    );
  }

  function HeaderRightTitle({navigation}) {
    return (
      <TouchableOpacity
        style={style.searchSection}
        onPress={() => {
          navigation.navigate('AddNewChar');
        }}>
        <View style={style.searchContainer}>
          <IconMCI name="search-outline" size={30} color="gray" />
        </View>
      </TouchableOpacity>
    );
  }

  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Base"
          component={Base}
          options={({navigation}) => ({
            headerLeft: () => <View />,
            headerTitle: () => <HeaderMidTitle title={'ZASH'} />,
            headerRight: () => <HeaderRightTitle navigation={navigation} />,
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
        <Stack.Screen
          name="AddNewChar"
          component={AddNewChar}
          options={({navigation}) => ({
            headerLeft: () => <HeaderLeftTitle navigation={navigation} />,
            headerTitle: () => <HeaderMidTitle title={'ZASH'} />,
            headerRight: () => <View />,
            headerStyle: {
              backgroundColor: 'black',
            },
            headerTitleStyle: {
              fontWeight: 'bold',
            },
          })}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const style = StyleSheet.create({
  midHeader: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'black',
    width: '100%',
  },
  midHeaderText: {
    fontSize: 32,
    fontWeight: 'bold',
    color: 'green',
  },
  leftHeader: {
    backgroundColor: 'black',
  },
  subContainer: {
    flexDirection: 'row',
    paddingLeft: 6,
  },
  searchSection: {
    flexDirection: 'row',
    justifyContent: 'flex-start',
    height: '100%',
  },
  searchContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginRight: 6,
  },
  searchText: {
    color: 'gray',
    marginLeft: 10,
  },
});

export default StackNavigator;
