import React, { Component } from "react";


import { StackNavigator, createNavigator } from "react-navigation";
import HomeViewController from '../Screens/Home/ViewControllers/HomeViewController';
import AccidentCaseViewController from '../Screens/AccidentCase/ViewControllers/AccidentCaseViewController';



const AppStack = StackNavigator(
  {
    Home: {
      screen: HomeViewController
    },
    AccidentCase: {
      screen: AccidentCaseViewController
    },
  },
  {
    mode: "modal",
    headerMode: "none"
  }
);

export default AppStack;
