// import React, { useState } from 'react';
// import { View, StyleSheet, Text } from 'react-native';
// import MapView, {region, Marker} from 'react-native-maps';

// export default function MapField({ navigation }) {
//     const [mapRegion, setmapRegion] = useState({
//         latitude: 37.51301474169193,
//         longitude: 127.0590256713309,
//         latitudeDelta: 0.01,
//         longitudeDelta: 0.01,
//       });
  
//     return (
//         <View style={{flex: 1}}>
//           <MapView
//             style={{ alignSelf: 'stretch', height: '100%' }}
//             region={mapRegion}
//           >
//           <Marker
//             coordinate={{
//               latitude: 37.5095714212126,
//         longitude: 127.05754911527038,
//             }}
//             image = {require("../assets/images/map_marker.png")}
//           />
//         <Marker
//             coordinate={{
//             latitude: 37.51389207002637,
//             longitude: 127.05829141661525,
//             }}
//             image = {require("../assets/images/map_marker.png")}
//           />
//         <Marker
//             coordinate={{
//             latitude: 37.515542492085714,
//             longitude: 127.05728625878692,
//             }}
//             image = {require("../assets/images/map_marker.png")}
//           />
//           <Marker
//             coordinate={{
//             latitude: 37.51047809510764,
//             longitude: 127.05996779724956,
//             }}
//             image = {require("../assets/images/map_marker.png")}
//           />
//           </MapView>
//         </View>
//     );
//   }