import React from 'react';
import { View, Text, Pressable } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';
import { useSafeAreaInsets } from 'react-native-safe-area-context';

const NewWalletScreen = ({ route }) => {
  const insets = useSafeAreaInsets();
  const { wallet } = route.params;

  console.log(wallet);

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20, paddingTop: insets.top }}>
      <Text
        style={{
          fontFamily: 'Righteous-Regular',
          color: '#2F2F2F',
          textAlign: 'center',
          fontSize: 25,
        }}
      >
        In order to proceed, you must first save this information in a safe place by writing it down
        and putting it in a safe place. If you lose this information you will lose your money.
      </Text>
      <View style={{ width: '100%' }}>
        <Pressable
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            Clipboard.setString(wallet.privateKey);
          }}
        >
          <Text
            style={{
              fontFamily: 'Righteous-Regular',
              color: '#2F2F2F',
              fontSize: 20,
              marginRight: 5,
            }}
          >
            Your Prvate Key:
          </Text>

          <FontAwesomeIcon icon={faCopy} />
        </Pressable>

        <Text
          style={{ color: '#2F2F2F', fontFamily: 'Righteous-Regular', fontSize: 15, marginTop: 10 }}
        >
          {wallet.privateKey}
        </Text>
        <Pressable
          style={{
            marginTop: 20,
            flexDirection: 'row',
            alignItems: 'center',
          }}
          onPress={() => {
            Clipboard.setString(wallet.mnemonic.phrase);
          }}
        >
          <Text
            style={{
              fontFamily: 'Righteous-Regular',
              color: '#2F2F2F',
              fontSize: 20,
              marginRight: 5,
            }}
          >
            Your Prvate Key:
          </Text>

          <FontAwesomeIcon icon={faCopy} />
        </Pressable>
        <Text
          style={{ color: '#2F2F2F', fontFamily: 'Righteous-Regular', fontSize: 15, marginTop: 10 }}
        >
          {wallet.mnemonic.phrase}
        </Text>
      </View>

      <View style={{ flex: 1, width: '100%', justifyContent: 'flex-end' }}>
        <Pressable
          style={{
            backgroundColor: '#34C4EB',
            marginBottom: 20,
            padding: 10,
            borderRadius: 20,
            justifyContent: 'center',
            alignItems: 'center',
            width: '100%',
          }}
          onPress={() => {}}
        >
          <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 26, color: 'white' }}>
            Continue
          </Text>
        </Pressable>
      </View>
    </View>
  );
};

export default NewWalletScreen;
