import React from "react"; 
import {Text, View, StyleSheet, Dimensions} from 'react-native';
import Bulb from './Bulb';
const LIGHT_GRAY  = '#ebebed';
const GRAY  = '#d7dae0';
const PRIMARY_COLOR = '#3454F6';
const FULL_WIDTH = Dimensions.get('window').width;
const TRACK_HEIGHT = 36;

const test = ["one", "two", "three"];

class StatusIndicator extends React.Component { 
  constructor(props) { 
    super(props); 
    this.state = { change: true }; 
  } 

  
  
  render() { 
    let increment = FULL_WIDTH / test.length;
    let initialPosition = 0;
    return ( 
        <View dimens={TRACK_HEIGHT} style={styles.parent}>
            {
                test.map(element => {
                    <Bulb dimens={TRACK_HEIGHT} isSelected={false} position={initialPosition} key={element}/> 
                    initialPosition = initialPosition + increment;

                })
            }
            
            {/* <View style={styles.filler}/> */}
            <View  style={styles.track}>
            </View>
        </View>
    )
  } 
} 

const styles = StyleSheet.create({
    track: {
        height: TRACK_HEIGHT,
        backgroundColor: LIGHT_GRAY,
        borderRadius: (TRACK_HEIGHT/2),
        alignSelf: 'stretch',
        flexDirection: 'row',
        position: 'absolute',
        zIndex: -1,
        top: 0,
        left: 0,
        right: 0,
    },

    filler: {
        height: TRACK_HEIGHT,
        backgroundColor: PRIMARY_COLOR,
        borderRadius: (TRACK_HEIGHT/2),
        width: (FULL_WIDTH / 2),
        flexDirection: 'row',
        
    },

    parent: {
        backgroundColor: '#fff',
        alignSelf: 'stretch',
        position: 'relative',
    }
})


  
export default StatusIndicator;