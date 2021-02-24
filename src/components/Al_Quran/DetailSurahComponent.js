import React, { Component } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import { mainColor } from '../../const/color'

export default class DetailSurahComponent extends Component {
    render() {
        const{dataDetailSurah}=this.props
        return (
            <ScrollView style={{ paddingHorizontal: 10,paddingVertical:20}}>
                
                <View key={dataDetailSurah.number}>
                            <View style={{ width: '100%', height: 150, backgroundColor: '#fff', borderRadius: 20, elevation: 3, position: 'relative' }}>
                                <View style={{ width: '100%', height: '100%', position: 'absolute', top: 0 }}>
                                    <Image source={require('../../assets/img/header.png')} style={{ width: undefined, height: undefined, flex: 1, borderRadius: 20 }} resizeMode={'cover'} />
                                </View>
                                <View style={{ position: 'absolute', width: '100%', height: '100%', backgroundColor: '#000', top: 0, opacity: 0.4, borderRadius: 20 }} />
                                <View style={{ position: 'absolute', top: 0, justifyContent: 'center', width: '100%', height: '100%', paddingHorizontal: 20 }}>
                                    <Text style={{ color: "white", fontSize: 20, fontWeight: 'bold' }}>{dataDetailSurah.name.transliteration.id}</Text>
                                    <Text style={{ color: "white", textAlign: 'left', fontSize: 20 }}>{dataDetailSurah.name.short}</Text>
                                    <Text style={{ color: "white" }}>{dataDetailSurah.name.translation.id}</Text>
                                </View>
                            </View>
                            <View style={{ height: 20 }} />
                            <View style={{ width: '100%', backgroundColor: '#fff', borderRadius: 20, elevation: 3, paddingBottom: 20 }}>
                                <View style={{ flexDirection: 'row', justifyContent: 'space-around', paddingVertical: 20 }}>
                                    <Text>Surat ke - {dataDetailSurah.number}</Text>
                                    <Text>Jumlah ayat {dataDetailSurah.numberOfVerses}</Text>
                                        <Text>{dataDetailSurah.revelation.id}</Text>
                                    </View>
                                <View style={{ paddingHorizontal: 22 }}>
                                    <Text style={{fontSize:16,fontWeight:'bold'}}>Keterangan</Text>
                                    <View style={{ height: 10 }}></View>

                                    <Text style={{ textAlign: 'justify' }}>
                                        {dataDetailSurah.tafsir.id}
                                    </Text>

                                </View>
                            </View>
                            <View style={{ height: 20 }} />
                            <TouchableOpacity onPress={()=>this.props.navigation.navigate('AlQuranScreen',{nomorSurah:dataDetailSurah.number,nameSurah:dataDetailSurah.name.transliteration.id})}>
                                <View style={{ backgroundColor: mainColor, width: '100%', paddingVertical: 15, borderRadius: 20 }}>
                                    <Text style={{ textAlign: 'center', fontSize: 18, color: '#fff', fontWeight: "bold" }}>Baca Surat</Text>
                                </View>
                            </TouchableOpacity>
                            <View style={{ height: 30 }} />
                        </View>
                 
            </ScrollView>
        )
    }
}

