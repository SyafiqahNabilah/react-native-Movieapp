import React, { useState, useContext } from "react";
import {
  View,
  StyleSheet,
  TouchableOpacity,
  ImageBackground,
} from "react-native";
import * as Animatable from "react-native-animatable";
import Icon from "react-native-vector-icons/AntDesign";
import { withNavigation } from "react-navigation";

const AnimatedIcon = Animatable.createAnimatableComponent(Icon);
const colors = {
  transparent: "transparent",
  white: "#fff",
  heartColor: "#e92f3c",
  textPrimary: "#fff",
  black: "#000",
};
const ResultsDetail = ({ result, liked, navigation }) => {



  return (
    <View style={styles.container}>
    <ImageBackground source={{ uri: result.Poster }} style={styles.cardbg}>
      <TouchableOpacity
        disabled={liked}
        onPress={(id) => {
          navigation.navigate("Show", { id: result.imdbID, like: true });
        }}
      >
        <AnimatedIcon
          name={liked ? "heart" : "hearto"}
          color={liked ? colors.heartColor : colors.textPrimary}
          size={18}
          style={styles.icon}
        />
      </TouchableOpacity>
    </ImageBackground>
    </View>
  );
};

const styles = StyleSheet.create({
  container:{
    width: '50%',
    marginBottom: 1,
    padding: 5
  },
  cardbg: {
    width: '100%',
    height: 280,
    // padding: 2
  },
  icon: {
    fontSize: 20,
    textAlign: "right",
    padding: 6
  },
  animatedIcon: {
    position: "absolute",
    justifyContent: "center",
    alignItems: "center",
    zIndex: 2,
    borderRadius: 160,
    opacity: 0,
  },
});

export default withNavigation(ResultsDetail);
