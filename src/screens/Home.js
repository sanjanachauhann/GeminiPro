import {
  View,
  Text,
  Dimensions,
  ScrollView,
  TouchableOpacity,
  Platform,
  TouchableWithoutFeedback,
} from "react-native";
import React, { useContext } from "react";
import { TextInput } from "react-native";
import { StyleSheet } from "react-native";
import { Context } from "../context/MyContext";
import { Ionicons } from "@expo/vector-icons";
import SpeechComponent from "../../components/SpeechComponent";
import { KeyboardAvoidingView } from "react-native";
import { Keyboard } from "react-native";

const Home = () => {
  const {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  } = useContext(Context);

  return (
    <KeyboardAvoidingView
      style={{ flex: 1 }}
      behavior={Platform.OS === "ios" ? "padding" : undefined}
    >
      <ScrollView
        style={{
          height: Dimensions.get("screen").height,
          backgroundColor: "#fff",
        }}
        contentContainerStyle={{ alignItems: "center" }}
      >
        {/* Search Result */}
        <View
          style={{
            marginTop: 10,
            marginBottom: 10,
            height: Dimensions.get("screen").height * 0.72,
          }}
        >
          {!showResult ? (
            <View
              style={{
                borderRadius: 10,
                marginVertical: 30,
                flexDirection: "row",
              }}
            >
              <View style={{ alignContent: "flex-start" }}>
                <Text style={{ fontSize: 15, fontWeight: 400, color: "gray" }}>
                  Start with GeminiPro
                </Text>
              </View>
              <View style={{ marginLeft: 5 }}>
                <Ionicons name="sparkles-outline" size={20} color="gray" />
              </View>
            </View>
          ) : (
            <View>
              <ScrollView
                showsVerticalScrollIndicator={false}
                style={{
                  paddingHorizontal: 10,
                  paddingStart: 5,
                  paddingTop: 5,
                  height: "90%",
                }}
              >
                <View
                  style={{
                    alignItems: "flex-start",
                    justifyContent: "flex-start",
                    backgroundColor: "white",
                    width: Dimensions.get("screen").width * 0.95,
                  }}
                >
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: "lightgray",
                      borderRadius: 20,
                      marginVertical: 5,
                    }}
                  >
                    <Text style={{ fontSize: 15 }}>{recentPrompt}</Text>
                  </View>
                  <View
                    style={{
                      padding: 15,
                      backgroundColor: "lightblue",
                      borderRadius: 15,
                      marginTop: 10,
                    }}
                  >
                    {loading ? (
                      <Text> Loading...</Text>
                    ) : (
                      <View>
                        <Text
                          style={{ fontSize: 15 }}
                          // dangerouslySetInnerHTML={{ __html: resultData }}
                        >
                          {resultData}
                        </Text>
                        <SpeechComponent text={resultData} />
                      </View>
                    )}
                  </View>
                </View>
              </ScrollView>
            </View>
          )}
        </View>
        {/* Prompt TextBox */}
        <TouchableWithoutFeedback onPress={Keyboard.dismiss}>
          <View
            style={{
              backgroundColor: "lightgray",
              flexDirection: "row",
              width: Dimensions.get("screen").width * 0.95,
              paddingHorizontal: 10,
              borderRadius: 10,
              justifyContent: "center",
            }}
          >
            <TextInput
              style={[
                styles.input,
                {
                  width: Dimensions.get("screen").width * 0.7,
                  paddingRight: 10,
                },
              ]}
              placeholder="How can I assist you today..."
              value={input}
              onChangeText={(text) => {
                setInput(text);
              }}
            />
            {input.length > 0 && (
              <TouchableOpacity
                style={{ marginLeft: 40 }}
                onPress={() => onSent(input)}
              >
                <Ionicons
                  name="send-outline"
                  size={20}
                  color="black"
                  style={styles.icon}
                />
              </TouchableOpacity>
            )}
          </View>
        </TouchableWithoutFeedback>
      </ScrollView>
    </KeyboardAvoidingView>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "flex-end",
  },
  inputContainer: {
    backgroundColor: "#e0e0e0",
    padding: 10,
  },
  input: {
    height: 60,
    borderRadius: 10,
    paddingHorizontal: 10,
  },
  icon: {
    marginTop: 20,
    color: "black",
  },
});

export default Home;
