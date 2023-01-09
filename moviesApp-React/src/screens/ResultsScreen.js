import axios from "axios";
import React, { useState, useEffect, useContext} from "react";
import { View, Text, StyleSheet, Image, ImageBackground } from "react-native";
import { SafeAreaView } from "react-navigation";
import SavedMovieForm from "../components/SavedMovieForm";
import { Context } from '../context/movieContext';
import omdb from "../api/omdb";

const SavedScreen = ({ navigation }) => {
  const id = navigation.getParam("id");
  const like = navigation.getParam("like");
  const [savedMovies] = useState([]);
  const [result, setResult] = useState(null);
  const { addMovie } = useContext(Context);

  const getResult = async (id) => {
    const response = await omdb.get("", {
      params: {
        limit: 50,
        i: id
      }
    });
    setResult(response.data);
  };

  useEffect(() => {
    getResult(id);
  }, []);
  if (!result) {
    return null;
  }

  return (
    <SafeAreaView>
      <ImageBackground
        source={{ uri: result.Poster }}
        blurRadius={3}
        resizeMode="cover">
        <View style={styles.background}>
        <View style={styles.container}>
          <Text style={styles.title}>{result.Title}</Text>
          
          <Image
            style={styles.image}
            source={{ uri: result.Poster }}
          />
          <Text style={styles.plot}>Plot: {result.Plot}</Text>
          <Text style={styles.plot}>Language: {result.Language}</Text>
          <SavedMovieForm onSubmit={(descrption, like) =>{
            addMovie(descrption,like, result.Title, result.Plot,result.Poster, result.imdbID, () => navigation.pop())
          }}/>
        </View> 
        </View>
      </ImageBackground>
      </SafeAreaView>
  );
};
const styles = StyleSheet.create({
  background: {
    color: '#fff',
    height: '100%'
  },
  image: {
    marginTop: 15,
    minHeight: 200,
    borderRadius: 4,
    marginBottom: 10,
    resizeMode: "contain"
  },
  title: {
    fontSize: 20,
    color: '#fff',
    fontWeight: "500",
  },
  plot:{
    fontSize: 14,
    color: '#fff',
    marginBottom: 5

  }
});
export default SavedScreen;
