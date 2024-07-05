import { AppRegistry } from 'react-native';
import 'react-native-gesture-handler';
import App from './App';
import { name as appName } from './app.json';

// Register the App component as the main component
AppRegistry.registerComponent(appName, () => App);
