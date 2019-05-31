import React from 'react';
import AppNav from './AppNavigator';

// import GlobalFont from 'react-native-global-font'


export default class App extends React.Component {
  componentDidMount() {
    let fontName = 'YourFontName'
    // GlobalFont.applyGlobal(fontName)
 }
 
  render() {

    return (
      <AppNav/>
    );
  }
}
