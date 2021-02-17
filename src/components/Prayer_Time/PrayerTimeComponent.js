import React, { Component } from 'react'
import { ScrollView, StyleSheet, Text, View } from 'react-native'

import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'
import {alarmOnColor,alarmOffColor} from '../../const/color'

export default class PrayerTimeComponent extends Component {
    render() {
        return (
            <View>
                <View style={style.clockPrayer}>
                    <Text>Test</Text>
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
    clockPrayer: {
        height: '50%',
        backgroundColor: 'blue'
    },
    listPrayer: {
        height: '50%',
        backgroundColor: 'white'
    }
})

