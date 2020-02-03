import React, { Component } from 'react';
import { View, Text } from 'react-native';
import UnityView, { MessageHandler, UnityModule } from 'react-native-unity-view';

class HomeScreen extends Component {
    constructor(props) {
        super(props);

        this.state = {
            clickCount: 0
        };
    }

    onMessage(event) {
        console.log('OnUnityMessage: ' + event.nativeEvent.message); 
    }

    onUnityMessage(messageHandler: MessageHandler) {
        this.setState({
            clickCount: this.state.clickCount + 1
        });
        setTimeout(() => {
            console.log("Handler", messageHandler);
            messageHandler.send('I am click callback!');
        }, 2000);
    }

    render() {
        return (
            <View style={{ flex: 1 }}>
                <UnityView
                    style={{ position: 'absolute', left: 0, right: 0, top: 0, bottom: 0 }}
                    onUnityMessage={this.onUnityMessage.bind(this)}
                />
                <Text>Hello</Text>
            </View>
        );
    }
}

export default HomeScreen;