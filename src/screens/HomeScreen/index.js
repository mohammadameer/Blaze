import React, { useEffect } from 'react';
import { useMoralis, useMoralisWeb3Api, useWeb3ExecuteFunction } from 'react-moralis';
import { View, Text, Pressable, ScrollView, RefreshControl } from 'react-native';

// abi
import BlazePoolABI from '../../ABIs/BlazePoolABI.json';

// hooks
import useERC20Balance from '../../hooks/useERC20balance';

// providers
import { useMoralisDapp } from '../../providers/MoralisDappProvider/MoralisDappProvider';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faChartLine } from '@fortawesome/free-solid-svg-icons';
import useNativeBalance from '../../hooks/useNativeBalance';
import { ethers } from 'ethers';
import { useWalletConnect } from '../../WalletConnect';

const HomeScreen = ({ navigation }) => {
  const { account, Web3API } = useMoralisWeb3Api();
  const { walletAddress } = useMoralisDapp();
  const { fetch, error, data } = useWeb3ExecuteFunction();
  const { Moralis } = useMoralis();
  const { nativeBalance } = useNativeBalance('mumbai');

  const [tokens, setTokens] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      const tokensBalances = await account.getTokenBalances({
        chain: 'mumbai',
        address: walletAddress,
      });
      setTokens(tokensBalances);
    };
    getData();
  }, []);

  const invest = async () => {
    const investTxn = await fetch({
      params: {
        contractAddress: '0x190d8Df7BCE35e0b76ef73061ABD3Ff7931C24C3',
        functionName: 'invest',
        abi: BlazePoolABI.abi,
      },
      onError: (err) => console.log(err),
      onSuccess: (res) => console.log(res),
    });

    await investTxn.wait();
  };

  return (
    <ScrollView
      contentContainerStyle={{ flex: 1 }}
      refreshControl={<RefreshControl refreshing={false} onRefresh={() => {}} />}
    >
      <View
        style={{
          padding: 20,
          paddingBottom: 40,
          margin: 20,
          backgroundColor: '#E5E5E5',
          borderRadius: 10,
          alignItems: 'center',
          justifyContent: 'center',
        }}
      >
        <View style={{ width: '100%', flexDirection: 'row', justifyContent: 'space-between' }}>
          <Pressable onPress={() => navigation.navigate('SettingsScreen')}>
            <FontAwesomeIcon icon={faChartLine} size={30} />
          </Pressable>
          <Pressable onPress={() => navigation.navigate('ChartScreen')}>
            <FontAwesomeIcon icon={faCog} size={30} />
          </Pressable>
        </View>
        <View style={{ flexDirection: 'row', alignItems: 'flex-end' }}>
          <Text
            style={{
              color: '#2F2F2F',
              fontFamily: 'Righteous-Regular',
              fontSize: 50,
              marginRight: 10,
            }}
          >
            0$
          </Text>
          <Text
            style={{
              color: '#6BDB69',
              fontFamily: 'Righteous-Regular',
              fontSize: 20,
              marginBottom: 10,
            }}
          >
            15%
          </Text>
        </View>
      </View>

      <View style={{ flexDirection: 'row', margin: 20, marginTop: 0 }}>
        <Pressable
          style={{
            padding: 20,
            backgroundColor: '#E5E5E5',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginRight: 5,
          }}
          onPress={() => navigation.navigate('DepositScreen')}
        >
          <Text style={{ color: '#2F2F2F', fontFamily: 'Righteous-Regular', fontSize: 20 }}>
            Deposit
          </Text>
        </Pressable>

        <Pressable
          style={{
            padding: 20,
            backgroundColor: '#E5E5E5',
            borderRadius: 10,
            alignItems: 'center',
            justifyContent: 'center',
            flex: 1,
            marginLeft: 5,
          }}
          onPress={() => navigation.navigate('WithdrawScreen')}
        >
          <Text style={{ color: '#2F2F2F', fontFamily: 'Righteous-Regular', fontSize: 20 }}>
            Withdraw
          </Text>
        </Pressable>
      </View>

      <View style={{ paddingHorizontal: 20, paddingTop: 0 }}>
        <View
          style={{
            padding: 20,
            backgroundColor: '#E5E5E5',
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
          }}
        >
          <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 20, color: '#2F2F2F' }}>
            Matic
          </Text>
          <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 20, color: '#2F2F2F' }}>
            {nativeBalance?.replace('undefined', '')}
          </Text>
        </View>

        {tokens?.map((token) => (
          <View
            style={{
              backgroundColor: '#CECECE',
              marginTop: 10,
              borderRadius: 10,
            }}
          >
            <View
              style={{
                padding: 20,
                backgroundColor: '#E5E5E5',
                borderRadius: 10,
                alignItems: 'center',
                flexDirection: 'row',
                justifyContent: 'space-between',
              }}
            >
              <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 20, color: '#2F2F2F' }}>
                {token.symbol}
              </Text>
              <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 20, color: '#2F2F2F' }}>
                {Moralis.Units.FromWei(token.balance, token.decimals)}
              </Text>
            </View>
            {token.symbol == 'USDT' ? (
              <Pressable
                style={{ padding: 10, justifyContent: 'center', alignItems: 'center' }}
                onPress={invest}
              >
                <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 20, color: '#2F2F2F' }}>
                  Invest
                </Text>
              </Pressable>
            ) : null}
          </View>
        ))}
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
