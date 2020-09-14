import { createStackNavigator} from '@react-navigation/stack';
import { createAppContainer } from '@react-navigation/stack';

import Home from '../src/components/Home';

const screens = {
    Home: {
        screen:Home
    }
}

const HomeStack = createStackNavigator(screens);

export default createAppContainer(HomeStack);