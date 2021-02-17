import React, { Component } from 'react'
import { ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'

import {textGrey,mainColor} from '../../const/color'

export default class FeaturedArticleComponent extends Component {
    render() {
        return (
            <View style={{paddingTop:30}}>
                <ImageBackground source={require('../../assets/img/header.png')} style={{ width: '100%', position: 'relative' }} resizeMode={'cover'}>
                    <View style={{paddingVertical:10}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between',paddingHorizontal:10}}>
                        <Text style={{fontSize:20,color:'#fff',fontWeight:'bold'}}>Artikel saat ini</Text>
                        <Text style={{fontSize:15,color:'#fff'}}>View all</Text>
                    </View>
                    <View style={{paddingTop:50,paddingBottom:20}}>
                        <ScrollView horizontal={true} showsHorizontalScrollIndicator={false}>
                            <View style={{ height: 160, width: 300, marginLeft: 10,backgroundColor:'white',borderRadius:10,padding:15}}>
                                <View>
                                    <Text style={{fontSize:16,fontWeight:'bold'}}>Puasa ditetapkan tanggal 1 April 2021</Text>
                                    <Text numberOfLines={3} style={{color:textGrey}}>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Aenean ac sapien odio. Interdum et malesuada fames ac ante ipsum primis in faucibus. Integer arcu leo, sollicitudin et est vitae, gravida pharetra felis.</Text>
                                    <View style={{flexDirection:'row',justifyContent:'space-between',paddingVertical:10}}>
                                        <Text></Text>
                                        <Text style={{color:mainColor}}>1 Hours Ago</Text>
                                    </View>
                                </View>
                            </View>
                        </ScrollView>
                    </View>
                    </View>
                </ImageBackground>
            </View>
        )
    }
}

// const styles = StyleSheet.create({

// })


