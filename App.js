/* eslint-disable no-alert */
import * as React from "react";
import { View, StyleSheet } from "react-native";
import Whatappform from "./screens/whatsappForm";
import Website from "./screens/website";
import SocialMedia from "./screens/socialMedia";
export default function AssetExample() {
  return (
    <View style={styles.container}>
      <Whatappform />
      <Website />
      {/* <SocialMedia /> */}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: "center",
    justifyContent: "center",
    padding: 5,
    backgroundColor: "#150033",
    minHeight: "100%",
    borderWidth: 1,
    borderColor: "#12dfff",
    borderRadius: 15,
  },
});
