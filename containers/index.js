import React from 'react';
import { StyleSheet, Text, View, Button } from 'react-native';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import * as actionsA from '../actions/a';
import * as actionsB from '../actions/b';
import AComponent from '../components/a';
import BComponent from '../components/b';

class Index extends React.Component {
  render() {
    const { a, b, actions } = this.props;
    return (
      <View style={styles.container}>
        <AComponent a={a}/>
        <BComponent b={b}/>
        <Button
            title={"change A"}
            onPress={() => {
                actions.a();
            }} />      
        <Button
            title={"change B"}
            onPress={() => {
                actions.b();
            }} />                    
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});


function mapStateToProps(state) {
    return {
        a: state.a.a,
        b: state.b.b
    };
}

function mapDispatchToProps(dispatch) {
    return {
        actions: bindActionCreators({...actionsA, ...actionsB}, dispatch)
    }
}

export default connect(mapStateToProps, mapDispatchToProps)(Index)