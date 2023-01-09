import React, { useState, useContext, useEffect } from "react";
import { View, StyleSheet, Text } from "react-native";
import SearchBar from "../components/SearchBar";
import ResultsList from "../components/ResultsList";
import { withNavigation } from "react-navigation";
import useResults from "../hooks/useResults";
import FilterOpt from "../components/FilterOpt";
import { Feather } from "@expo/vector-icons";
//import data structures
import { Context } from "../context/movieContext";
import { Button} from "@rneui/themed";

const IndexScreen = ({ navigation }) => {
  const [term, setTerm] = useState("Batman");
  const [searchApi, results, errorMessage] = useResults();
  const [modalVisible, setModalVisible] = useState(false);
  const [filter, setFilter] = useState('2022');
  const { state, getMovies } = useContext(Context);
  const [type, setType] = useState("movie");

  useEffect(() => {
    getMovies();
    // searchApi(term)

    //fetch again when back again
    const listner = navigation.addListener("didFocus", () => {
      getMovies();
      // searchApi(term)
    });

    return () => {
      listner.remove();
    };
  }, []);
console.log(state);
  const changeType = (type) => {
    setType(type);
  };

  const filterResultsByType = (Type, filter) => {
    if (Type != undefined && typeof Type === 'object') {
      return "movies";
    } else {
      return results.filter((result) => {
        return result.Type === Type && result.Year === filter;
        // console.log("result filter: "result);
      });
    }
  };

  //added because of saved.state undefined
const savedMovie = Object.values(state)
  // creating the year filter
  const yearResult = results.map((item) => item.Year)
        .filter((value, index, self) => self.indexOf(value) === index);
  //get input from filter

  return (
    <>
      <View style={styles.backgroundStyle}>
        <SearchBar
          style={styles.search}
          term={term}
          onTermChange={setTerm}
          onTermSubmit={() => searchApi(term)}
        />
        <Feather
          name="sliders"
          style={styles.iconStyle}
          onPress={() => setModalVisible(!modalVisible)}
        />
      </View>
      {errorMessage ? <Text>{errorMessage}</Text> : null}
      <View style={{ flexDirection: "row" }}>
        <Button
          title="Movies"
          buttonStyle={{
            backgroundColor: "rgba(78, 116, 289, 1)",
            borderRadius: 3,
          }}
          containerStyle={{
            width: 100,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onPress={() => changeType("movie")}
        />
        <Button
          title="Series"
          buttonStyle={{
            backgroundColor: "rgba(78, 116, 289, 1)",
            borderRadius: 3,
          }}
          containerStyle={{
            width: 100,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onPress={() => changeType("series")}
        />
        <Button
          title="episode"
          buttonStyle={{
            backgroundColor: "rgba(78, 116, 289, 1)",
            borderRadius: 3,
          }}
          containerStyle={{
            width: 100,
            marginHorizontal: 10,
            marginVertical: 10,
          }}
          onPress={() => changeType("episode")}
        />
      </View>
      <ResultsList
        results={filterResultsByType(type, filter)}
        searchTerm={term}
        filter={filter}
        saved={savedMovie}
      />

      <FilterOpt
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
        filter={filter}
        setFilter={setFilter}
        yearResult={yearResult}
      />
      <Button title="View Saved Movies" 
      onPress={() => {
        navigation.navigate("Saved")
        movies={savedMovie}
        }}/>
    </>
  );
};

const styles = StyleSheet.create({
  backgroundStyle: {
    marginTop: 10,
    backgroundColor: "#F0EEEE",
    height: 50,
    borderRadius: 5,
    marginHorizontal: 15,
    flexDirection: "row",
    minWidth: 50,
    marginBottom: 10,
  },
  resultList: {
    marginBottom: 10,
  },
  iconStyle: {
    fontSize: 20,
    alignSelf: "center",
    marginHorizontal: 15,
  },
  buttonStyle: {
    backgroundColor: "rgba(78, 116, 289, 1)",
    borderRadius: 3,
  },
  containerStyle: {
    width: 200,
    marginHorizontal: 50,
    marginVertical: 10,
  },
});

export default withNavigation(IndexScreen);
