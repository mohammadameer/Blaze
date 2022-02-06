import React, { useState, useEffect } from 'react';
import { StyleSheet, View, Text, Pressable } from 'react-native';

import { useMoralis } from 'react-moralis';
import { useWalletConnect } from '../WalletConnect';
import { ethers } from 'ethers';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const LoginScreen = ({ navigation }) => {
  const insets = useSafeAreaInsets();

  const connector = useWalletConnect();
  const { authError, isAuthenticated, authenticate } = useMoralis();

  const connectWallet = () => {
    authenticate({ connector })
      .then(() => {
        if (authError) {
          console.log('authError', authError);
        } else {
          if (isAuthenticated) {
            navigation.replace('DrawerNavigationRoutes');
          }
        }
      })
      .catch(() => {});
  };

  const skip = () => {
    const wallet = ethers.Wallet.createRandom();

    navigation.replace('NewWalletScreen', { wallet });
  };

  useEffect(() => {
    if (isAuthenticated) navigation.replace('DrawerNavigationRoutes');
  }, [isAuthenticated]);

  return (
    <View
      style={{
        flex: 1,
        padding: 20,
        justifyContent: 'flex-end',
        paddingTop: insets.top,
        paddingBottom: insets.bottom,
      }}
    >
      <Pressable
        style={{
          backgroundColor: '#34C4EB',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <Text
          style={{ fontFamily: 'Righteous-Regular', fontSize: 26, color: 'white' }}
          onPress={connectWallet}
        >
          Connect Wallet
        </Text>
      </Pressable>

      <Pressable
        style={{
          backgroundColor: '#E5E5E5',
          padding: 10,
          borderRadius: 20,
          justifyContent: 'center',
          alignItems: 'center',
          marginTop: 25,
          marginBottom: 20,
        }}
        onPress={skip}
      >
        <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 26, color: '#2F2F2F' }}>
          Skip
        </Text>
      </Pressable>
    </View>
  );
};
export default LoginScreen;

const styles = StyleSheet.create({
  mainBody: {
    flex: 1,
    justifyContent: 'center',
    backgroundColor: 'white',
    alignContent: 'center',
  },
  SectionStyle: {
    flexDirection: 'row',
    height: 40,
    marginTop: 20,
    marginLeft: 35,
    marginRight: 35,
    margin: 10,
  },
  buttonStyle: {
    backgroundColor: '#7DE24E',
    borderWidth: 0,
    color: '#FFFFFF',
    borderColor: '#7DE24E',
    height: 40,
    alignItems: 'center',
    borderRadius: 30,
    marginLeft: 35,
    marginRight: 35,
    marginTop: 20,
    marginBottom: 25,
  },
  buttonTextStyle: {
    color: '#FFFFFF',
    paddingVertical: 10,
    fontSize: 16,
    fontWeight: '600',
  },
  inputStyle: {
    flex: 1,
    color: 'white',
    paddingLeft: 15,
    paddingRight: 15,
    borderWidth: 1,
    borderRadius: 30,
    borderColor: '#dadae8',
  },
  registerTextStyle: {
    color: '#2F2F2F',
    textAlign: 'center',
    fontWeight: 'bold',
    fontSize: 14,
    alignSelf: 'center',
    padding: 10,
  },
  errorTextStyle: {
    color: 'red',
    textAlign: 'center',
    fontSize: 14,
  },
});
