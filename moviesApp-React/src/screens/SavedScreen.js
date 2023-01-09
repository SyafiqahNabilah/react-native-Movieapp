import React, { useContext, useEffect} from "react";
import {
  Text,
  StyleSheet,
  Image,
  ImageBackground,
  FlatList,
  SafeAreaView,
  ScrollView,
} from "react-native";
import { Context } from "../context/movieContext";
import { Card, Button } from "@rneui/themed";

const SavedScreen = ({ navigation }) => {
  const { state, deleteSavedMovie, getMovies } = useContext(Context);

  const _renderItem = ({ item }) => (
    <Card containerStyle={styles.cardbg} wrapperStyle={{}} key={item.id}>
      <Card.Title style={styles.title}>{item.Title}</Card.Title>
      <Image source={{ uri: item.Poster }} style={styles.image} />
      {/* <Text style={styles.textPlot}>Movie plot: {item.Plot}</Text> */}
      <Text style={styles.text}>Your Note: {item.description}</Text>
      <Button
        title="Edit Movie"
        onPress={() => navigation.navigate("Edit", { id: item.id })}
        buttonStyle={{ backgroundColor: "rgba(127, 220, 103, 1)" }}
        containerStyle={{
          marginTop: 50,
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{
          color: "white",
          marginHorizontal: 20,
        }}
      />
      <Button
        buttonStyle={{ backgroundColor: "rgba(214, 61, 57, 1)" }}
        containerStyle={{
          height: 40,
          width: 200,
          marginHorizontal: 50,
          marginVertical: 10,
        }}
        titleStyle={{ color: "white", marginHorizontal: 20 }}
        title="Delete from list"
        onPress={() => deleteSavedMovie(item.id)}
      />
    </Card>
  );
  return (
    <SafeAreaView>
      <ImageBackground
        source={{ uri: "https://wallpaperaccess.com/full/2677518.jpg" }}
        blurRadius={5}
        resizeMode="cover"
      >
        <ScrollView style={styles.background}>
          <FlatList
            showsHorizontalScrollIndicator={false}
            horizontal
            data={state}
            keyExtractor={(item) => item.id}
            renderItem={_renderItem}
          />
        </ScrollView>
      </ImageBackground>
    </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    color: "#fff",
    height: "100%",
    alignContent: "center",
  },
  cardbg: {
    width: 325,
    height: "95%",
    flexDirection: "column",
    backgroundColor: "purple",
    borderColor: "transparent",
    marginVertical: 50,
  },

  title: {
    fontSize: 24,
    color: "white",
    fontWeight: "bold",
    marginBottom: 5,
    marginTop: 1,
  },
  image: {
    width: "100%",
    height: 250,
    resizeMode: "contain",
  },
  text: {
    fontSize: 18,
    color: "white",
    textAlign: "justify",
    marginTop: 10,
  },
  textPlot: {
    fontSize: 18,
    color: "white",
    textAlign: "justify",
    marginTop: 10,
    maxHeight: 50,
  },
  btn: {
    marginTop: 10,
  },
});
export default SavedScreen;
