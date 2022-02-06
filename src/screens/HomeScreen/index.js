import React, { useEffect } from 'react';
import { useMoralisWeb3Api } from 'react-moralis';
import { View, Text, Pressable, ScrollView, RefreshControl } from 'react-native';

// hooks
import useERC20Balance from '../../hooks/useERC20balance';

// providers
import { useMoralisDapp } from '../../providers/MoralisDappProvider/MoralisDappProvider';

// icons
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome';
import { faCog, faChartLine } from '@fortawesome/free-solid-svg-icons';

const HomeScreen = ({ navigation }) => {
  const { account } = useMoralisWeb3Api();
  const { walletAddress } = useMoralisDapp();

  const [assets, setAssets] = React.useState([]);

  useEffect(() => {
    const getData = async () => {
      const tokensBalances = await account.getTokenBalances({
        chain: 'mumbai',
        address: walletAddress,
      });
      setAssets(tokensBalances);
    };
    getData();
  }, []);

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
        <Text style={{ color: 'black', fontFamily: 'Righteous-Regular', fontSize: 50 }}>400$</Text>
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
          <Text style={{ color: 'black', fontFamily: 'Righteous-Regular', fontSize: 20 }}>
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
          <Text style={{ color: 'black', fontFamily: 'Righteous-Regular', fontSize: 20 }}>
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
          <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 20, color: 'black' }}>
            USDT
          </Text>
          <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 20, color: 'black' }}>0$</Text>
        </View>
        <View
          style={{
            padding: 20,
            backgroundColor: '#E5E5E5',
            borderRadius: 10,
            alignItems: 'center',
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginTop: 10,
          }}
        >
          <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 20, color: 'black' }}>
            Blaze
          </Text>
          <Text style={{ fontFamily: 'Righteous-Regular', fontSize: 20, color: 'black' }}>0$</Text>
        </View>
      </View>
    </ScrollView>
  );
};

export default HomeScreen;
