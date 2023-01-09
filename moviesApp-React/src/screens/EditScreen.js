import React, {useContext} from "react";
import { View, Text, StyleSheet , ImageBackground} from "react-native";
import { Context } from '../context/movieContext';
import SavedMovieForm from "../components/SavedMovieForm";

const EditScreen = ({navigation}) => {
    const id = navigation.getParam('id');
    const {state, editMovie} = useContext(Context)
    const savedMovie = state.find(
        (savedMovie)=> savedMovie.id === id
        );
    return (
        <ImageBackground
        source={{ uri: savedMovie.Poster }}
        blurRadius={2}
        resizeMode="cover">
            <View style={styles.background}>
                <SavedMovieForm 
            initialValues = {{ description: savedMovie.description}}
            onSubmit={(description) => {
                editMovie(id, description,savedMovie.like, savedMovie.Title, savedMovie.Plot,savedMovie.Poster, savedMovie.imdbID, ()=> navigation.pop())
            }}/></View>
            </ImageBackground>
)}

const styles = StyleSheet.create({
    background: {
        height: '100%'
      },
    
})

export default EditScreen;