import React, {useContext, useEffect, useState} from "react";
import { View, Text, FlatList, StyleSheet, LogBox } from "react-native";
import ResultsDetail from "./ResultsDetails";
import { Context } from "../context/movieContext";
import jsonServer from '../api/jsonServer';

const ResultsList = ({ results, searchTerm, filter, saved}) => {
  const {state, getMovies} = useContext(Context)
  const [movies, setMovies] = useState([])
  const [statusLike, setStatusLike] = useState(false)
  const [curId, setCurId] = useState()

  // const getMovie = () => {
  //   setMovies(getMovies());
  //   movies.push(getMovies())
  // };
  // useEffect(() => {
  //   getMovies()
  // }, []);
   if(!saved){
    return saved = null
  }
  function currId (currItemId){
    if(currItemId && saved){
      return saved.some(item => currItemId === item.imdbID)
    }
      return false
  } 


  return (
    <View style={styles.container}>
      <Text style={styles.title}>Search result: {searchTerm}, for year: {filter}</Text>

      <FlatList
        data={results}
        style={styles.row}
        numColumns= {2}
        keyExtractor={(movies) => movies.imdbID}
        renderItem={({ item }) => {
          return (
              <ResultsDetail result={item} liked={currId(item.imdbID)} key={item.imdbID} />
          );
        }}
      /> 
    </View>
  );
};
const styles = StyleSheet.create({
  title: {
    fontSize: 14,
    marginBottom: 5,
    marginLeft: 5
  },
  container: {
    flex: 2,
    width: '100%',
  },
  row:{
    width: '100%', 
    // alignContent: 'space-between'
  }
});
export default ResultsList;
