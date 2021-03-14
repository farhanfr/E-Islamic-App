import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import MaterialCommunityIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import {MMKV} from 'react-native-mmkv'

export default class SettingsComponent extends Component {
    render() {
        return (
            <View>
                <TouchableOpacity onPress={()=>{this.props.navigation.navigate('ListRegionScreen')}}>
                    <View style={{ flexDirection: 'row', justifyContent: 'space-between', padding: 15 }}>
                        <View>
                            <Text style={{ fontSize: 18 }}> Pengaturan Daerah</Text>
                            <Text style={{ fontSize: 15, color: 'silver' }}> {MMKV.getString('nameRegionSetting').toLowerCase()}</Text>
                        </View>
                        <View>
                            <MaterialCommunityIcons name="arrow-right" color="black" size={26} />
                        </View>
                    </View>
                </TouchableOpacity>
                <View style={{ borderBottomColor: '#000', borderBottomWidth: 0.5 }} />
            </View>
        )
    }
}

