import React from 'react';
import { View, Text, useWindowDimensions, Pressable, Alert } from 'react-native';
import Clipboard from '@react-native-clipboard/clipboard';

// components
import QRCode from 'react-native-qrcode-svg';
import { useMoralisDapp } from '../../providers/MoralisDappProvider/MoralisDappProvider';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCopy } from '@fortawesome/free-solid-svg-icons';

const ChartScreen = () => {
  const { walletAddress } = useMoralisDapp();
  const { width: screenWidth } = useWindowDimensions();

  return (
    <View style={{ flex: 1, alignItems: 'center', padding: 20 }}>
      <View style={{ marginTop: 20 }}>
        <QRCode value={walletAddress} size={screenWidth / 2} />
      </View>
      <Pressable
        style={{ marginTop: 20, flexDirection: 'row', alignItems: 'center' }}
        onPress={() => {
          Clipboard.setString(walletAddress);
          Alert.prompt('Copied to clipboard');
        }}
      >
        <Text
          style={{ fontSize: 20, color: 'black', fontFamily: 'Righteous-Regular', marginRight: 5 }}
        >{`${walletAddress.slice(0, 6)}...${walletAddress.slice(-6, -1)}`}</Text>

        <FontAwesomeIcon icon={faCopy} />
      </Pressable>

      <View
        style={{
          backgroundColor: '#E5E5E5',
          width: '100%',
          padding: 5,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: 30, color: 'black', fontFamily: 'Righteous-Regular' }}>
          MoonPay
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#E5E5E5',
          width: '100%',
          padding: 5,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: 30, color: 'black', fontFamily: 'Righteous-Regular' }}>
          Peer to Peer
        </Text>
      </View>

      <View
        style={{
          backgroundColor: '#E5E5E5',
          width: '100%',
          padding: 5,
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
          marginTop: 40,
        }}
      >
        <Text style={{ fontSize: 30, color: 'black', fontFamily: 'Righteous-Regular' }}>
          Instant
        </Text>
      </View>
    </View>
  );
};

export default ChartScreen;
