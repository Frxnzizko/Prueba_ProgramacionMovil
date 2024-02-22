import React, { useState, useEffect } from "react";
import { StyleSheet, Text, View, Image } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import Navigation from "./src/Navigation";

export default function App() {
  const [isSplashScreenVisible, setIsSplashScreenVisible] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsSplashScreenVisible(false);
    }, 3000);

    return () => clearTimeout(timer);
  }, []);

  if (isSplashScreenVisible) {
    return (
      <View style={styles.splashScreen}>
        <Image
          source={require("./assets/uce.png")}
          style={styles.splashImage}
        />
      </View>
    );
  }

  return (
    <NavigationContainer>
      <Navigation />
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  splashScreen: {
    flex: 1,
    backgroundColor: "black",
    alignItems: "center",
    justifyContent: "center",
  },

  splashImage: {
    width: 200,
    height: 200,
  },
});
