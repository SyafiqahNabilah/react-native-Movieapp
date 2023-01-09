import axios from "axios";

export default axios.create({
  baseURL: 'http://www.omdbapi.com/?apikey=a091d52e'
})

// export const searchApi = async (searchTerm) => {
//   try {
//     const response = await omdb.get("", {
//       params: {
//         limit: 50,
//         s: searchTerm
//       },
//     });
//     console.log("omdb:" +response.data.Search);
//     return response.data.Search; //RAML object
//   } catch (err) {
//     return console.log("Something went wrong");;
//   }
// };