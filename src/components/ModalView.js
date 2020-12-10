import React from 'react';
import {
  StyleSheet,
  TouchableWithoutFeedback,
  ScrollView,
  Keyboard,
} from 'react-native';

const ModalView = ({ children }) => {
  return (
    <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
      <ScrollView contentContainerStyle={styles.containerStyle}>
        {children}
      </ScrollView>
    </TouchableWithoutFeedback>
  );
};

const styles = StyleSheet.create({
  containerStyle: {
    alignItems: 'center',
    flex: 1,
    justifyContent: 'center',
    marginBottom: 200,
  },
});

export default ModalView;
