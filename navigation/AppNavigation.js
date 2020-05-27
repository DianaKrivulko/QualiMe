import {createAppContainer} from "react-navigation";
import{createBottomTabNavigator} from "@react-navigation/bottom-tabs/src";

import HomeScreen from "../screens/HomeScreen";
import ChooseResourse from "../screens/ChooseResourse";

const AppNavigator = createBottomTabNavigator(
    {
       HomeScreen:{
           screen:HomeScreen,
           navigationOptions:{
               title:'ChooseScreen'
           }
       },
       ChooseResourse:{
           screen:HomeScreen,
           navigationOptions:{
               title:'HomeScreen'
           }
       },
    }
)
export default createAppContainer(AppNavigator);
