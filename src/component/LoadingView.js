import React from 'react';
import {View, Text, ActivityIndicator, StyleSheet} from 'react-native';
import Colors from '../utility/colors';

export default class LoadingView extends React.Component {
  constructor() {
    super();
    this.state = {timeout: false};
  }

  render() {
    return (
      <View style={styles.container}>
        <ActivityIndicator size="large" color={Colors.BrandOrange} />
        <Text style={styles.text}>Please wait...</Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    top: 250,
    height: 100,
    width: 100,
    position: 'absolute',
    justifyContent: 'center',
    alignItems: 'center',
    alignSelf: 'center',
    backgroundColor: '#F1F1F1',
    borderRadius: 5,
  },
  text: {
    top: 10,
    textAlign: 'center',
    backgroundColor: 'transparent',
  },
});
