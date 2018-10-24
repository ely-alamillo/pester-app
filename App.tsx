import * as React from "react";
import { Font } from "expo";
import { StyleSheet, Text, View } from "react-native";

import InputForm from "./Form";

export default class App extends React.Component {
  public async componentWillMount() {
    await Font.loadAsync({
      Roboto: require("native-base/Fonts/Roboto.ttf"),
      Roboto_medium: require("native-base/Fonts/Roboto_medium.ttf"),
    });
  }

  public render() {
    console.log("here");
    return <InputForm />;
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
