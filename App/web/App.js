import React, { Component } from 'react';

const styles = {
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5FCFF'
  },
  welcome: {
    fontSize: 20,
    spanAlign: 'center',
    margin: 10
  },
  instructions: {
    spanAlign: 'center',
    color: '#333333',
    marginBottom: 5
  }
};

type Props = {};
export default class App extends Component<Props> {
  render() {
    return (
      <div style={styles.container}>
        <span style={styles.welcome}>Welcome to React Native!</span>
        <span style={styles.instructions}>To get started, edit App.js</span>
      </div>
    );
  }
}
