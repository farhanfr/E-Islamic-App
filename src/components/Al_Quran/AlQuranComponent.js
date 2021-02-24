import React, { Component } from 'react'
import { ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Sound from 'react-native-sound'
import {mainColor} from '../../const/color'

export default class AlQuranComponents extends Component {

    playSound = (linkSound) =>{
        const track=new Sound(linkSound,null,(err)=>{
            if(err){
                console.log("sound error")
            }
            track.play()
        })
    }

    render() {
        return (
            <ScrollView>
                {this.props.dataAlquran.map((listDataAlquran => {
                    return (
                        <View key={listDataAlquran.number.inQuran}>
                        <View style={{ flexDirection: 'row' }}>
                            <View style={{ backgroundColor: 'red', flex: 1 }}>
                                <View style={{ backgroundColor: mainColor, flex: 1, justifyContent: 'center' }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18,color:'white'}}> {listDataAlquran.number.inSurah} </Text>
                                    <View style={{ height: 25 }} />
                                    <TouchableOpacity onPress={()=>this.playSound(listDataAlquran.audio.primary)}>
                                        <Text style={{ textAlign: 'center', fontSize: 15,color:'white',fontWeight:'bold'}}> Play </Text>
                                    </TouchableOpacity>
                                </View>
                            </View>
                            <View style={{ flex: 5, padding: 15 }}>
                                <Text style={{ fontSize: 26 }}>{listDataAlquran.text.arab}</Text>
                                <View style={{ height: 10 }} />
                                <Text style={{ fontSize: 15 }}>{listDataAlquran.text.transliteration.en}</Text>
                                <Text style={{ fontSize: 13 }}>{listDataAlquran.translation.id}</Text>
                            </View>
                        </View>
                        <View style={{borderBottomColor: '#000',borderBottomWidth: 0.5}}/>
                        </View>
                    )
                }))}
            </ScrollView>
        )
    }
}
