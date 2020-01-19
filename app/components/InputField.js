import React, { Component } from 'react';
import { View, Text, TextInput, StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    textStyle: {
        margin: 8,
        width: 200, 
        height: 40, 
        borderRadius: 20, 
        backgroundColor: 'white'
    }
});

export default class InputField extends Component {
    constructor(props) {
        super(props);

        // this.state = {
        //     text: ''
        // };
    }

    render() {
        // console.log("Component Render Called", this.state.text);
        return(
            <View style={{ backgroundColor: 'blue', alignItems: 'center', justifyContent: 'center' }}>
                <TextInput
                    style={{ ...styles.textStyle, ...this.props.style}}
                    placeholder={this.props.hintText}
                    placeholderTextColor='red'
                    onChangeText={text => {
                        this.props.onTextChange(text);
                        // this.setState({ text });
                    }}
                    value={this.props.value} 
                    {...this.props}

                />
            </View>
        );
    }
}


InputField.defaultProps = {
    onTextChange: () => {}
}



