import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet, TouchableOpacity } from 'react-native';
import { connect } from 'react-redux';
import InputField from '../../components/InputField';
import { fieldChanged } from '../../redux/actions';

const styles = StyleSheet.create({
    emailField: {
        marginLeft: 16,
        textAlignVertical: 'center',
        color: 'green'
    }
});

class LoginScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            password: ''
        };
    }

    render() {

        console.log("Render Called!", this.props);
        return(
            <View style={{ backgroundColor: 'blue', flex: 1, alignItems: 'center', justifyContent: 'center' }}>
                <InputField
                    style={styles.emailField}
                    value={this.props.email}
                    name={"Email Field"}
                    hintText={"Email address"}
                    onTextChange={text => this.props.fieldChanged('EMAIL', text)}
                />
                <InputField
                    value={this.state.password}
                    name={"Password Field"}
                    hintText={"Password"}
                    onTextChange={text => this.setState({ password: text })}
                />
                <TouchableOpacity
                    style={{ width: 200, height: 40, borderRadius: 20, backgroundColor: 'white', margin: 10, alignItem: 'center', justifyContent: 'center'}}
                    onPress={() => this.props.navigation.navigate('Home')}
                >
                    <Text style={{ flex: 1, textAlign: 'center', fontSize: 24}}>Login</Text>
                </TouchableOpacity>
            </View>
        );
    }
}

const mapStateToProps = state => ({
    email: state.account.email,
});

const mapDispatchToProps = dispatch => ({
    fieldChanged: (name, value)  => dispatch(fieldChanged(name, value))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginScreen);



