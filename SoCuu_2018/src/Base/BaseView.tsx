import React, { Component } from "react";

import { NavigationActions } from "react-navigation";
import { EventRegister } from "react-native-event-listeners";

export default class BaseView extends Component {
  style: any;
  state:any = {};

  constructor(props?) {
    super(props);
    if (props.state) {
      this.state = props.state;
	}
	if (props.style) {
		this.style = props.style;
	  }
  }

  reload() {
    super.forceUpdate();
  }
  
}
