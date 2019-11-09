import React from 'react';
import {StyleSheet, View} from 'react-native';
import createHOC from './createHOC';
import LoadingView from '../component/LoadingView';

export default function(WrappedComponent, isBlocking = false) {
  return createHOC(
    WrappedComponent,
    class extends React.PureComponent {
      state = {isLoading: false, loaderText: ''};

      showLoader = (status, message = 'Loading...') => {
        this.setState({isLoading: status, loaderText: message});
      };

      render() {
        return (
          <>
            <WrappedComponent showLoader={this.showLoader} {...this.props} />
            {this.state.isLoading ? (
              isBlocking ? (
                <View style={styles.loaderBackground}>
                  <LoadingView />
                </View>
              ) : (
                <LoadingView />
              )
            ) : null}
          </>
        );
      }
    },
  );
}

const styles = StyleSheet.create({
  loaderBackground: {
    ...StyleSheet.absoluteFillObject,
    backgroundColor: '#cccccc7F',
  },
});
