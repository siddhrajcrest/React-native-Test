import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { styles } from "./whatsappForm";
import SocialMedia from "./socialMedia";
export default function Website() {
  const handleOpenProfile = () => {
    const url = "https://sidddev7.github.io/web-developer/home.html";
    Linking.openURL(url).then((res) => {});
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TouchableOpacity onPress={() => handleOpenProfile()}>
          <Text style={styles.text}>Created by Siddhrajsinh Gohil</Text>
        </TouchableOpacity>
        {/* <SocialMedia /> */}
      </View>
    </View>
  );
}
