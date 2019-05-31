import React from "react";
import { WebView, View } from "react-native";

// import MapView from 'react-native-maps'

export default class Map extends React.Component {

 
  render() {
    return (
      <View style={{flex: 1}}>
      <WebView
            source={{uri: 'https://www.google.com/maps/search/?api=1&query=5.299265,-2.001717'}}
            style={{marginTop: 20}}
          />
        {/* <MapView
        style={{flex: 1}}
        region={{
          latitude: 42.882004,
          longitude: 74.582748,
          latitudeDelta: 0.0922,
          longitudeDelta: 0.0421
        }}
        showsUserLocation={true}
      /> */}
      </View>
    );
  }
}