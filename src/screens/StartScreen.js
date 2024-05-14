import React from "react";
import { View, Text, Dimensions } from "react-native";
import { useNavigation } from "@react-navigation/native";
import { TouchableOpacity } from "react-native-gesture-handler";

const StartScreen = () => {
  const navigation = useNavigation();
  return (
    <View
      style={{
        alignItems: "center",
        marginHorizontal: 20,
      }}
    >
      <View style={{ marginTop: 200 }}>
        <Text style={{ fontSize: 50, fontWeight: 600 }}>
          Welcome to GeminiPro
        </Text>
      </View>
      <TouchableOpacity
        style={{
          height: 60,
          width: Dimensions.get("screen").width * 0.9,
          backgroundColor: "lightblue",
          borderRadius: 30,
          alignItems: "center",
          marginTop: 50,
        }}
        onPress={() => navigation.navigate("Home")}
      >
        <View style={{ marginTop: 19 }}>
          <Text style={{ fontSize: 17, fontWeight: 500 }}> Get Started</Text>
        </View>
      </TouchableOpacity>
    </View>
  );
};

export default StartScreen;
