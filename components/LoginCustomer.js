import React, { Component } from 'react';
import { TextInput, StyleSheet, Button, View } from 'react-native';

export default class LoginManager extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      code:""
    };
    this.submit = this.submit.bind(this);

  }

  render() {
    return (
      <View style={styles.container}>
          <TextInput
            style={styles.input}
            onChangeText={(text) => this.setState({code: text})}
            placeholder="Code"
          />
          
          <Button
            style={styles.input}
            onPress={this.submit}
            title="Submit"
            color="#841584"
          />

          
          <Button
            style={styles.input}
            onPress={() => this.props.navigation.push('LoginManager')}
            title="Login as a manager"
            color="#841584"
          />
          
        </View>
    );
  }

  submit() {
    console.log(this.state.email);
  }
  

}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  input: {
    width: 250,
    margin: 50
  },

})
  