import { createAppContainer } from 'react-navigation';
import { createStackNavigator } from 'react-navigation-stack';
import {createDrawerNavigator} from 'react-navigation-drawer';

import SplashScreen from "../features/SplashScreen";
import SideMenu from './sideMenu';
//@BlueprintImportInsertion
import BlankScreen2165532Navigator from '../features/BlankScreen2165532/navigator';
import BlankScreen1165531Navigator from '../features/BlankScreen1165531/navigator';
import BlankScreen0165530Navigator from '../features/BlankScreen0165530/navigator';

/**
 * new navigators can be imported here
 */

const AppNavigator = {

    //@BlueprintNavigationInsertion
BlankScreen2165532: { screen: BlankScreen2165532Navigator },
BlankScreen1165531: { screen: BlankScreen1165531Navigator },
BlankScreen0165530: { screen: BlankScreen0165530Navigator },

    /** new navigators can be added here */
    SplashScreen: {
      screen: SplashScreen
    }
};

const DrawerAppNavigator = createDrawerNavigator(
  {
    ...AppNavigator,
  },
  {
    contentComponent: SideMenu
  },
);

const AppContainer = createAppContainer(DrawerAppNavigator);

export default AppContainer;
