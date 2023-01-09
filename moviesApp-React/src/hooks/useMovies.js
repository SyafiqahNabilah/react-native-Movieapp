import { useEffect, useState, useContext } from "react";
import json from "../api/jsonServer";
import { Context } from "../context/movieContext";

export default () =>{
    const [results, setResults] = useState([]);
    const [errorMessage, setErrorMessage] = useState("");

  
    const searchApi = async (searchTerm) => {
      try {
        const response = await json.get("", {
          params: {
            limit: 50,
            s: searchTerm
          },
        });
        setResults(response.data.Search); //RAML object
      } catch (err) {
        setErrorMessage("Something went wrong");
      }
    };

    useEffect(() => {
      searchApi("Batman");
    }, []);

    return [searchApi, results, errorMessage]
}
