import React, {useState, useEffect} from 'react';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useWindowDimensions, View} from 'react-native';

// images
import BlazeSvg from '../../assets/svg/Blaze.svg';

const SplashScreen = ({navigation}) => {
  const {width} = useWindowDimensions();
  useEffect(() => {
    setTimeout(() => {
      AsyncStorage.getItem('user_id').then(value =>
        navigation.replace(value === null ? 'Auth' : 'DrawerNavigationRoutes'),
      );
    }, 2000);
  }, []);

  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
        justifyContent: 'center',
        backgroundColor: 'white',
      }}>
      <BlazeSvg width={width / 2} />
    </View>
  );
};

export default SplashScreen;
