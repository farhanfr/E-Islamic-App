import React, { Component } from 'react'
import { Button, Image, Text, View } from 'react-native'

import {HomeStyle} from '../../styles'

export default class HeaderHomeComponent extends Component {
    render() {
        return (
            <View style={HomeStyle.headerContainer}>
                <View style={HomeStyle.containerImage}>
                    <Image source={require('../../assets/img/header.png')} style={{width:undefined,height:undefined,flex:1,resizeMode:'cover'}}/>
                </View>
                <View style={HomeStyle.darker}></View>
                <View style={HomeStyle.containerQuote}>
                    <Text style={{fontSize:18.0,color:'#fff',fontWeight:'bold',textAlign:'center'}}>Semoga lelahmu hari ini dan kerja kerasmu menjadi lillah</Text>
                </View>

            </View>
        )
    }
}

