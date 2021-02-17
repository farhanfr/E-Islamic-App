import React, { Component } from 'react'
import { Dimensions, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import Swiper from 'react-native-swiper'

export default class SwiperAnnounceComponent extends Component {
    render() {
        return (
            <View style={{paddingHorizontal:10}}>
            <Swiper height={180} style={styles.wrapper} removeClippedSubviews={false} autoplay loop={true}>
            <View testID="Hello" style={styles.slide1}>
              <Text style={styles.text}>Hello Swiper</Text>
            </View>
            <View testID="Beautiful" style={styles.slide2}>
              <Text style={styles.text}>Beautiful</Text>
            </View>
            <View testID="Simple" style={styles.slide3}>
              <Text style={styles.text}>And simple</Text>
            </View>
          </Swiper>
          </View>
        );
      }
}

const styles = StyleSheet.create({
    wrapper: {},
    slide1: {
      flex: 1,
      borderRadius:10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#9DD6EB'
    },
    slide2: {
      flex: 1,
      borderRadius:10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#97CAE5'
    },
    slide3: {
      flex: 1,
      borderRadius:10,
      justifyContent: 'center',
      alignItems: 'center',
      backgroundColor: '#92BBD9'
    },
    text: {
      color: '#fff',
      fontSize: 30,
      fontWeight: 'bold'
    }
  
  });


