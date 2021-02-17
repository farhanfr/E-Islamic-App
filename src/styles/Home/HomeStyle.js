import React, { Component } from 'react'
import { StyleSheet } from 'react-native'

import { mainColor } from '../../const/color'

export const HomeStyle = StyleSheet.create({
    headerContainer: {
        position:'relative'
    },
    containerImage:{
        width:'100%',
        height:150
    },
    darker:{
        position:'absolute',backgroundColor:'#000',opacity:0.2,width: '100%', height: '100%'
    },
    containerQuote:{
        position:'absolute',top:0,width:'100%',height:'100%',alignItems:'center',justifyContent:'center',paddingHorizontal:5
    }
})
