import React from 'react';
import { Text } from 'react-native';

export default class A extends React.Component {
  render() {
    return (
        <Text>a : {this.props.a.toString()}</Text>
    );
  }
}