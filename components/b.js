import React from 'react';
import { Text } from 'react-native';

export default class B extends React.Component {
  render() {
    return (
        <Text>b : {this.props.b.toString()}</Text>
    );
  }
}