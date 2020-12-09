import React from 'react';
import { TouchableOpacity, Text, StyleSheet } from 'react-native';
import { withNavigation } from 'react-navigation';

const NavLink = ({ link, navigation: { navigate }, routeName }) => {
  return (
    <TouchableOpacity onPress={() => navigate(`${routeName}`)}>
      <Text style={styles.linkStyle}>{link}</Text>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  linkStyle: {
    color: 'blue',
  },
});

export default withNavigation(NavLink);
