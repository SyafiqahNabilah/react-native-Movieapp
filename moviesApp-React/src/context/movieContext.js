import createDataContext from './createDataContecxt';
const url =  'http://www.omdbapi.com/?apikey=a091d52e';
import jsonServer from '../api/jsonServer';

const movieReducer = (state, action) => {
  switch (action.type) {
    case 'get_blogposts':
      return action.payload;
    case 'add_blogpost':
      return [
        ...state, 
        {
            id: Math.floor(Math.random() * 99999), 
            content: action.payload.content,
            description: action.payload.description
        }];
    case 'delete_blogpost':
      return state.filter(blogPost => blogPost.id !== action.payload);
    case 'edit_blogpost':
      return state.map((blogPost) =>{
        return blogPost.id === action.payload.id ? action.payload : blogPost;
      });

    default:
      return state;
  }
};

const getMovies = dispatch => {
  return async () => {
    const response =  await jsonServer.get('/movies');
    dispatch({type: 'get_blogposts', payload: response.data})
  }
}

const addMovie = dispatch => {
    return async ( description, like, Title, Plot, Poster,imdbID, callback) =>{
      const res = await jsonServer.post('/movies', { description, like, Title, Plot, Poster, imdbID});
        if(callback){
          callback();
        }
    };
    
  };
  const deleteSavedMovie = (dispatch) => {
    return async (id) => {
      await jsonServer.delete(`/movies/${id}`)
      dispatch({ type: 'delete_blogpost', payload: id });
    };
  };
  const editMovie = (dispatch) => {
    return async (id, description, like, Title, Plot, Poster,imdbID, callback) => {
      await jsonServer.put(`/movies/${id}`, {description, like, Title, Plot, Poster, imdbID})
      dispatch({
        type: 'edit_blogpost',
        payload: {id:id, description},
      });
      if (callback) {
        callback();
      }
    };
  };
  export const {Context, Provider} = createDataContext(
    movieReducer, 
    {getMovies,addMovie, deleteSavedMovie, editMovie}, []
    );