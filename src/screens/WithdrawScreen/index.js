import React, { useEffect } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import { View, Text } from 'react-native';

// hooks
import useERC20Balance from '../../hooks/useERC20balance';
import { useMoralisDapp } from '../../providers/MoralisDappProvider/MoralisDappProvider';

const WithdrawScreen = () => {
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
    <View style={{ flex: 1, padding: 20 }}>
      <Text
        style={{
          fontSize: 25,
          fontFamily: 'Righteous-Regular',
          color: 'black',
          textAlign: 'center',
        }}
      >
        Withdrawable amount is: 400$
      </Text>
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
          Instant Withdraw
        </Text>
      </View>
    </View>
  );
};

export default WithdrawScreen;
