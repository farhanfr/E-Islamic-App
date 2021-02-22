import React, { Component } from 'react'
import { Image, ScrollView, StyleSheet, Text, View } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {alarmOnColor,alarmOffColor} from '../../const/color'

export default class PrayerTimeComponent extends Component {
    render() {
        return (
            <View>
                <View style={style.containerCountdownPrayer}>
                    <View style={{width:'100%',height:'100%',position:'absolute',top:0}}>
                        <Image source={require('../../assets/img/night.jpg')} style={{width:undefined,height:undefined,flex:1}} resizeMode='cover'/>
                    </View>
                    <View style={{position:'absolute',backgroundColor:'#000',opacity:0.2,width: '100%', height: '100%'}}></View>
                    <View style={{flex:1,alignItems:'center',justifyContent:'center'}}>
                        <Text style={{fontSize:32,color:'white'}}>Isya akan tiba</Text>
                        <Text style={{fontSize:20,color:'white'}}>00:30:00</Text>
                    </View>
                </View>
                <View style={style.listPrayer}>
                    <ScrollView>
                        <View style={{ flexDirection: 'column' }}>
                            {this.props.dataJadwalSholat.map((listJadwal) => {
                                return (
                                    <View key={listJadwal.id}>
                                        <View style={{ flexDirection: 'row', justifyContent: 'space-around',padding:10 }}>
                                            <View style={{ flex: 2 }}>
                                                <Text style={{ textAlign: 'center',fontSize:18}}>{listJadwal.name}</Text>
                                            </View>
                                            <View style={{ flex: 2 }}>
                                                <Text style={{ textAlign: 'center',fontSize:18}}>{listJadwal.time}</Text>
                                            </View>
                                            <View style={{ flex: 1 }}/>
                                            <View style={{ flex: 1 }}>
                                                <MaterialCommunityIcons name="bell" color={alarmOnColor} size={20}/>
                                            </View>
                                            <View style={{ flex: 0.5 }}/>
                                        </View>
                                        {listJadwal.id != 6 ? <View style={{borderBottomColor: '#CFCFCF',borderBottomWidth: 1}}/> : <View></View>}
                                        
                                    </View>
                                )
                            })}

                        </View>
                    </ScrollView>
                </View>
            </View>
        )
    }
}

const style = StyleSheet.create({
    containerCountdownPrayer: {
        position:'relative',
        height: '50%',
        backgroundColor: 'blue'
    },
    listPrayer: {
        height: '50%',
        backgroundColor: 'white'
    }
})

