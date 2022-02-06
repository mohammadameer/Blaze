import React, { useState, createRef, useEffect } from 'react';
import {
  StyleSheet,
  View,
  Text,
  ScrollView,
  Image,
  TouchableOpacity,
  KeyboardAvoidingView,
  Linking,
  Pressable,
} from 'react-native';
import { Button, Paragraph, Dialog, Portal, Provider, ActivityIndicator } from 'react-native-paper';

import { useMoralis } from 'react-moralis';
import { useWalletConnect } from '../WalletConnect';
import LottieView from 'lottie-react-native';
import { ethers } from 'ethers';

import AsyncStorage from '@react-native-async-storage/async-storage';
import Animation from '../splashLottie.json';

const LoginScreen = ({ navigation }) => {
  const connector = useWalletConnect();
  const { authError, isAuthenticating, isAuthenticated, authenticate } = useMoralis();

  const [visible, setVisible] = useState(false);
  const [errortext, setErrortext] = useState(false);

  const connectWallet = () => {
    authenticate({ connector })
      .then((data) => {
        console.log('data', data);
        if (authError) {
          setErrortext(authError.message);
          setVisible(true);
        } else {
          if (isAuthenticated) {
            navigation.replace('DrawerNavigationRoutes');
          }
        }
      })
      .catch(() => {});
  };

  const skip = () => {
    navigation.replace('DrawerNavigationRoutes');
    // const wallet = ethers.Wallet.createRandom();
    // console.log('address:', wallet.address);
    // console.log('mnemonic:', wallet.mnemonic.phrase);
    // console.log('privateKey:', wallet.privateKey);
  };

  useEffect(() => {
    if (isAuthenticated) navigation.replace('DrawerNavigationRoutes');
  }, [isAuthenticated]);

  return (
    <View style={{ flex: 1, padding: 20, justifyContent: 'flex-end' }}>
      <Pressable
        style={{
          backgroundColor: '#18596B',
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
        }}
      >
        <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 26, color: 'black' }}>Skip</Text>
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
    color: 'black',
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
