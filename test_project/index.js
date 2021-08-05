/**
 * @format
 */

// import React from 'react';
import { AppRegistry } from 'react-native';
import App from './App';
import { name as appName } from './app.json';
// import { Provider } from 'react-redux';
// import configStore from './src/configstore/index.';

// const Store = configStore();

// class AppScreen extends React.PureComponent {
//     render() {
//         return (
//             <Provider store={Store}>
//                 <App />
//             </Provider>
//         )
//     }
// }

AppRegistry.registerComponent(appName, () => App);
