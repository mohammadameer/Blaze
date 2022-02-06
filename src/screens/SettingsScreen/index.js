import React, { useEffect } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import { View, Text } from 'react-native';

// hooks
import useERC20Balance from '../../hooks/useERC20balance';
import { useMoralisDapp } from '../../providers/MoralisDappProvider/MoralisDappProvider';

const SettingsScreen = () => {
  const { account } = useMoralisWeb3Api();
  const { walletAddress } = useMoralisDapp();

  useEffect(() => {
    const getData = async () => {
      const tokensBalances = await account.getTokenBalances({
        chain: 'mumbai',
        address: walletAddress,
      });
      console.log('tokensBalances', tokensBalances);
    };
    getData();
  }, []);

  return (
    <View style={{ flex: 1 }}>
      <View
        style={{
          padding: 20,
          margin: 20,
          backgroundColor: '#E5E5E5',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <Text style={{ color: 'black', fontFamily: 'Righteous-Regular', fontSize: 40 }}>400$</Text>
      </View>

      <View style={{ flexDirection: 'row', margin: 20, marginTop: 0 }}>
        <View
          style={{
            padding: 20,
            backgroundColor: '#E5E5E5',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginRight: 5,
          }}
        >
          <Text style={{ color: 'black', fontFamily: 'Righteous-Regular', fontSize: 20 }}>
            Deposit
          </Text>
        </View>

        <View
          style={{
            padding: 20,
            backgroundColor: '#E5E5E5',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginLeft: 5,
          }}
        >
          <Text style={{ color: 'black', fontFamily: 'Righteous-Regular', fontSize: 20 }}>
            Withdraw
          </Text>
        </View>
      </View>
    </View>
  );
};

export default SettingsScreen;
