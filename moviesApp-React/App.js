import React from "react";
import { createAppContainer } from "react-navigation";
import { createStackNavigator } from 'react-navigation-stack';
import IndexScreen from "./src/screens/IndexScreen";
import ResultsScreen from "./src/screens/ResultsScreen";
import SavedScreen from "./src/screens/SavedScreen"
import { Provider } from "./src/context/movieContext";
import EditScreen from "./src/screens/EditScreen";

const navigator = createStackNavigator({
  Index: IndexScreen,
  Show: ResultsScreen,
  Saved: SavedScreen,
  Edit: EditScreen
},{
  initialRouteName: 'Index',
  defaultNavigationOptions:{
    title: 'Movies',
  }
})
// export default createAppContainer(navigator)
const App = createAppContainer(navigator)
export default () => {
  return <Provider>
    <App />
  </Provider>
};

