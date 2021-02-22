import React, { Component } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

export default class SurahComponent extends Component {
    render() {
        // const{dataSurah}=this.props
        return (
            <ScrollView>
                {this.props.dataSurah.map((listSurah) => {
                    return (
                        <View key={listSurah.nomor}>
                        <TouchableOpacity onPress={()=>this.props.navigation.navigate('DetailSurahScreen')}>
                        <View style={{ flexDirection: "row", justifyContent: 'space-around',paddingVertical:18}}>
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: 18 }}>{listSurah.nomor}</Text>
                            </View>
                            <View style={{ flex: 2, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: 14 }}>{listSurah.name}</Text>
                                <Text style={{ textAlign: 'center', fontSize: 14 }}>{listSurah.arti}</Text>
                            </View>
                            <View style={{ flex: 1 }} />
                            <View style={{ flex: 1, justifyContent: 'center' }}>
                                <Text style={{ textAlign: 'center', fontSize: 15 }}>{listSurah.type}</Text>
                            </View>
                        </View>
                        </TouchableOpacity>
                        <View style={{borderBottomColor: '#CFCFCF',borderBottomWidth: 1}}/>
                        </View>
                    )
                })}
            </ScrollView>
        )
    }
}


