/**
 * @format
 */

import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';

AppRegistry.registerComponent(appName, () => App);

module.exports = {
    project: {
        ios: {},
        android: {}
    },
    assets: ['./src/assets/fonts'],
}