import { View, Text, TouchableOpacity, Linking } from "react-native";
import React from "react";
import { styles } from "./whatsappForm";
import { FontAwesomeIcon } from "@fortawesome/react-native-fontawesome";
import { faCode, faCoffee } from "@fortawesome/free-solid-svg-icons";
export default function SocialMedia() {
  const handleOpenProfile = () => {
    const url = "https://sidddev7.github.io/web-developer/home.html";
    Linking.openURL(url).then((res) => {});
  };
  return (
    <View style={styles.container}>
      <View style={styles.form}>
        <TouchableOpacity onPress={() => handleOpenProfile()}>
          <FontAwesomeIcon icon={faCode} style={styles.icon} />
        </TouchableOpacity>
      </View>
    </View>
  );
}
