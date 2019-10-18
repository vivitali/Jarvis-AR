import React from "react";
import Icon from "react-native-vector-icons/FontAwesome";
import Colors from "../../constants/Colors";

export default class Index extends React.Component {
  render() {
    return (
      <Icon
        name={this.props.name}
        size={26}
        style={{ marginTop: 10 }}
        color={
          this.props.focused ? Colors.tabIconSelected : Colors.tabIconDefault
        }
      />
    );
  }
}
