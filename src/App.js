import React from 'react';
import {StyleSheet, View, Text, StatusBar} from 'react-native';
import {Provider} from 'react-redux';
import configureStore from './redux/store/configureStore';
import Dashboard from './Dashboard';

const store = configureStore({});

class App extends React.Component {
  constructor(props) {
    super(props);
    console.log('App constructor');
  }
  render() {
    console.log('rendering app');
    return (
      <>
        <Provider store={store}>
          <StatusBar barStyle="dark-content" />
          <Dashboard />
        </Provider>
      </>
    );
  }
}

export default App;
