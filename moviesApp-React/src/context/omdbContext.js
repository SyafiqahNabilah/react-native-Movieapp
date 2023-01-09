import createDataContext from "./createDataContecxt";
import omdb from "../api/omdb";

const omdbReducer = (state, action) => {
  switch (action.type) {
    case "get_omdb":
      return action.payload;
    default:
      return state;
  }
};

const getOMDB = (dispatch) => {
  return async (s) => {
    const response = await omdb.get(`&limit=50&s=${s}`);
    dispatch({ type: "get_omdb", payload: response.data });
  };
};

export const { Context, Provider } = createDataContext(
    omdbReducer,
  { getOMDB },
  // {getMovies,addBlogPost, deleteBlogPost, editBlogPost},
  [
    // {"content": {"Actors": "Christian Bale, Michael Caine, Ken Watanabe", "Awards": "Nominated for 1 Oscar. 13 wins & 79 nominations total", "BoxOffice": "$206,863,479", "Country": "United States, United Kingdom", "DVD": "18 Oct 2005", "Director": "Christopher Nolan", "Genre": "Action, Crime, Drama", "Language": "English, Mandarin", "Metascore": "70", "Plot": "After training with his mentor, Batman begins his fight to free crime-ridden Gotham City from corruption.", "Poster": "https://m.media-amazon.com/images/M/MV5BOTY4YjI2N2MtYmFlMC00ZjcyLTg3YjEtMDQyM2ZjYzQ5YWFkXkEyXkFqcGdeQXVyMTQxNzMzNDI@._V1_SX300.jpg", "Production": "N/A", "Rated": "PG-13", "Ratings": [Array], "Released": "15 Jun 2005", "Response": "True", "Runtime": "140 min", "Title": "Batman Begins", "Type": "movie", "Website": "N/A", "Writer": "Bob Kane, David S. Goyer, Christopher Nolan", "Year": "2005", "imdbID": "tt0372784", "imdbRating": "8.2", "imdbVotes": "1,468,798"}, "description": "sedikit notes", "id": 25306}
  ]
);
