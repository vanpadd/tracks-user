import React, { useContext } from 'react';
import { View, StyleSheet } from 'react-native';
import { SafeAreaView } from 'react-navigation';
import { Button, Text } from 'react-native-elements';
import { Context as AuthContext } from '../context/AuthContext';
import Spacer from '../components/Spacer';

const AccountScreen = () => {
  const { signout } = useContext(AuthContext);

  return (
    <SafeAreaView forceInset={{ top: 50 }}>
      <View style={{ alignItems: 'center' }}>
        <Text h3>My Account</Text>
        <Spacer>
          <Button
            buttonStyle={{ paddingHorizontal: 100 }}
            title="Sign Out"
            onPress={() => signout()}
          />
        </Spacer>
      </View>
    </SafeAreaView>
  );
};

const styles = StyleSheet.create({});

export default AccountScreen;
