import React, { createContext, useEffect, useState } from "react";
import runChat from "../../config/Gemini";
import { Alert, Text } from "react-native";

const Context = createContext();

const ContextProvider = ({ children }) => {
  const [input, setInput] = useState("");
  const [recentPrompt, setrecentPrompt] = useState("");
  const [prevPrompts, setprevPrompts] = useState([]);
  const [showResult, setShowResult] = useState(false);
  const [loading, setLoading] = useState(false);
  const [resultData, setresultData] = useState("");

  const formatText = (text) => {
    // Use regular expression to find text between ** and apply bold style
    const parts = text.split(/\*\*(.*?)\*\*/g);
    return (
      <>
        {parts.map((part, index) => {
          if (index % 2 === 0) {
            // Normal text
            return <Text key={index}>{part}</Text>;
          } else {
            // Bold text
            return (
              <Text key={index} style={{ fontWeight: "bold" }}>
                {part}
              </Text>
            );
          }
        })}
      </>
    );
  };

  const onSent = async () => {
    setresultData("");
    setLoading(true);
    setShowResult(true);
    setrecentPrompt(input);
    setprevPrompts((prev) => [...prev, input]);
    try {
      const response = await runChat(input);
      setresultData(formatText(response));
      setShowResult(true);
      setLoading(false);
      setInput("");
    } catch (e) {
      Alert.alert("Error", "An error occurred, please try again later.");
    }
  };

  const contextValue = {
    onSent,
    recentPrompt,
    showResult,
    loading,
    resultData,
    input,
    setInput,
  };

  return <Context.Provider value={contextValue}>{children}</Context.Provider>;
};

export { ContextProvider, Context };
