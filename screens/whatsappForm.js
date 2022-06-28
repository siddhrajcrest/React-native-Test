import React, { useState } from "react";
import {
  TouchableOpacity,
  Linking,
  TextInput,
  View,
  StyleSheet,
  Text,
  Image,
  Switch,
} from "react-native";

export default function Whatappform() {
  const [mobile, setMobile] = useState(null);
  const [message, SetMessage] = useState(
    "This Message is Sent From direct Whatsapp App"
  );
  const [refer, setrefer] = useState(true);

  const handleChat = () => {
    if (mobile) {
      const finalMessage =
        message +
        " created by https://sidddev7.github.io/web-developer/home.html";
      const url = `whatsapp://send?text=${
        refer ? finalMessage : message
      }&phone=+91${mobile}`;
      Linking.openURL(url)
        .then((data) => console.log(data))
        .catch((err) => console.log(err));
    } else {
      alert("Please enter mobile no");
    }
  };
  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/images/play_store_512.png")}
        style={styles.image}
      ></Image>
      <Text style={styles.textTitle}>Whatsapp Direct</Text>
      <View style={styles.form}>
        <TextInput
          style={styles.input}
          maxLength={10}
          placeholder={"Enter Mobile Number"}
          onChangeText={(e) => setMobile(e)}
          keyboardType={"numeric"}
        />
        <TextInput
          style={styles.input}
          defaultValue={message}
          multiline={true}
          numberOfLines={4}
          placeholder="Enter the Message here"
          onChangeText={(e) => SetMessage(e)}
        />
        <Switch
          style={{ marginTop: 10 }}
          value={refer}
          onValueChange={(value) => setrefer(value)}
        />
        <TouchableOpacity style={styles.chat} onPress={() => handleChat()}>
          <Text style={styles.text}>Chat Now</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
}

export const styles = StyleSheet.create({
  container: {
    padding: 5,
  },
  form: {
    backgroundColor: "#030e4d",
    justifyContent: "center",
    marginVertical: 30,
    borderRadius: 15,
    width: 300,
    padding: 10,
  },
  icon: { color: "white" },
  input: {
    alignSelf: "center",
    textAlign: "center",
    borderBottomColor: "#12dfff",
    borderBottomLeftRadius: 15,
    borderBottomRightRadius: 15,
    borderBottomWidth: 1,
    paddingLeft: 15,
    paddingRight: 15,
    width: "100%",
    color: "white",
  },
  image: {
    maxHeight: 100,
    maxWidth: 100,
    alignSelf: "center",
  },
  chat: {
    alignItems: "center",
    borderRadius: 15,
    height: 35,
    backgroundColor: "#030e4d",
    justifyContent: "center",
    borderColor: "#12dfff",
    borderWidth: 2,
    marginTop: 15,
  },
  text: {
    textAlign: "center",
    color: "#12dfff",
  },
  textTitle: {
    fontSize: 20,
    textAlign: "center",
    color: "#12dfff",
  },
});
