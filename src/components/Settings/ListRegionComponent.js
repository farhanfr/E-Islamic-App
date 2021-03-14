import React, { Component } from 'react'
import { Alert, FlatList, Text, TouchableOpacity, View } from 'react-native'

import {MMKV} from 'react-native-mmkv'

export default class ListRegionComponent extends Component {

    alertSelected = (dataRegion) =>{
        Alert.alert(
            `E-Islamic`,
            `Pilih kota ${dataRegion.lokasi}?`,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => {
                    MMKV.set('idRegionSetting',dataRegion.id)
                    MMKV.set('nameRegionSetting',dataRegion.lokasi)
                }
                }
            ],{cancelable: false }
        )
    }

    renderItem = ({ item }) => {
        return(
            <View>
            <TouchableOpacity onPress={()=>this.alertSelected(item)}>
            <View style={{padding:20}}>
                <Text>{item.lokasi}</Text>
            </View>
            </TouchableOpacity>
            <View style={{ borderBottomColor: '#000', borderBottomWidth: 0.5 }} />
        </View>
        )
    }
        
     

    render() {
        return (
            <FlatList
            data={this.props.dataCity}
            renderItem={this.renderItem}
            keyExtractor={item=>item.id}
            />
        )
    }
}

