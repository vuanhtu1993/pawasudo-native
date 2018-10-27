import React, { Component } from 'react';
import {
  Text,
  Image,
  TouchableHighlight,
  View,
  ActivityIndicator,
  Animated,
  ProgressBarAndroid
} from 'react-native';
import Style from './Styles';

class Loader extends Component {
  constructor(props) {
    super(props);

    this.show = this.show.bind(this);
    this.hide = this.hide.bind(this);

    var animatedOpacity = new Animated.Value(props.visible ? 1 : 0);
    animatedOpacity.addListener(value => {
      if (value.value === 0) {
        this.setState({ renderComponent: false });
      }
    });

    this.state = {
      renderComponent: props.visible,
      visible: props.visible,
      opacity: animatedOpacity
    };
  }

  show() {
    this.setState({ renderComponent: true });
    Animated.timing(this.state.opacity, {
      toValue: 1,
      friction: 1,
      duration: this.props.fadeDuration
    }).start();
  }

  hide() {
    Animated.timing(this.state.opacity, {
      toValue: 0,
      friction: 1,
      duration: this.props.fadeDuration
    }).start();
  }

  componentWillReceiveProps(newProps) {
    if (this.state.visible === false && newProps.visible) {
      this.show();
    }
    if (this.state.visible === true && !newProps.visible) {
      this.hide();
    }
    if (this.state.visible !== newProps.visible) {
      this.setState({ visible: newProps.visible });
    }
  }

  render() {
    const containerStyle = {
      opacity: this.state.opacity,
      backgroundColor: `rgba(0,0,0,${this.props.opacity})`
    };

    if (this.state.renderComponent) {
      return (
        <Animated.View style={[Style.background, containerStyle]}>
          <View style={[Style.backgroundLoader]}>
            <ActivityIndicator size="large" animating={true} color="#000" />
            <Text style={Style.text}>{this.props.text}</Text>
          </View>
        </Animated.View>
      );
    } else {
      return <View />;
    }
  }
}

Loader.defaultProps = {
  text: 'Loading...',
  fadeDuration: 100,
  opacity: 0.3
};

export default Loader;
