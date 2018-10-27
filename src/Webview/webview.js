import React, { Component } from 'react'
import { View, WebView, StyleSheet, Dimensions, Platform } from 'react-native'
import Loader from "../loader/Loader";

class WebViewCustom extends Component{
    constructor() {
        super();
        this.state = {
            url: "http://zcom-explorer-v2.s3-website-us-west-2.amazonaws.com",
            isLoading: true
        }
    }

    webViewLoaded = () => {
        this.setState({ isLoading: false })
    };

    render() {
        return (
            <View style = {styles.container}>
                <WebView
                    source = {{ uri: this.state.url }}
                    ref="webview"
                    style={{width: Dimensions.get('window').width}}
                    automaticallyAdjustContentInsets={false}
                    javaScriptEnabled={true}
                    domStorageEnabled={true}
                    decelerationRate="normal"
                    scalesPageToFit={true}
                    onLoad={this.webViewLoaded}
                />
                <Loader visible={this.state.isLoading}/>
            </View>
        )
    }
};
export default WebViewCustom;
const styles = StyleSheet.create({
    container: {
        paddingTop: Platform.OS === "ios" ? 20 : 0,
        height: Dimensions.get('window').height,
    }
});
