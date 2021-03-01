import React, { Component } from 'react'
import { Button, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Sound from 'react-native-sound'
import RBSheet from 'react-native-raw-bottom-sheet'
import { mainColor } from '../../const/color'

export default class AlQuranComponents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSurahPlay: false,
            idProps: ""
        }
    }

    _track;
    
    playSound = (linkSound, idProp) => {
        this._track = new Sound(linkSound, null, (err) => {
            if (err) {
                console.log("sound error")
            }
            this.setState({ idProps: idProp })
            this._track.play((success) => {
                if (success) {
                    console.log('successfully finished playing');
                    this.setState({ isSurahPlay: false })
                    this._track.release()
                }
            })
        })
    }

    stopSound = () =>{
        this._track.stop()
    }

    renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => this[RBSheet + index].open()}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'red', flex: 1 }}>
                        <View style={{ backgroundColor: mainColor, flex: 1, justifyContent: 'center' }}>
                            <Text style={{ textAlign: 'center', fontSize: 18, color: 'white' }}> {item.number.inSurah} </Text>
                        </View>
                    </View>
                    <View style={{ flex: 5, padding: 15 }}>
                        <Text style={{ fontSize: 26 }}>{item.text.arab}</Text>
                        <View style={{ height: 10 }} />
                        <Text style={{ fontSize: 15 }}>{item.text.transliteration.en}</Text>
                        <Text style={{ fontSize: 13 }}>{item.translation.id}</Text>
                        <RBSheet
                            ref={ref => {
                                this[RBSheet + index] = ref;
                            }}
                            height={300}
                            closeOnPressMask={false}
                            openDuration={250}
                            // customStyles={{
                            //     container: {
                            //         justifyContent: "center",
                            //         alignItems: "center"
                            //     }
                            // }}
                            >
                            
                            <View style={{flexDirection:'row',justifyContent:'space-between',paddingHorizontal:20,paddingVertical:20}}>
                                <Text style={{fontWeight:'bold',fontSize:18}}>Pilih Aksi</Text>
                                <TouchableOpacity onPress={()=> this[RBSheet + index].close()}>
                                    <Text style={{fontSize:18}}>x</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{paddingHorizontal:20}}>
                            {
                                (this.state.idProps == item.number.inSurah && this.state.isSurahPlay == true) ?
                                    <TouchableOpacity onPress={
                                        () => {
                                            this.stopSound(item.audio.primary, item.number.inSurah),
                                                this.setState({ isSurahPlay: false })
                                        }
                                    }>
                                        <Text style={{fontSize: 15, color: 'red', fontWeight: 'bold' }}>Stop</Text>
                                    </TouchableOpacity>
                                    :
                                    <TouchableOpacity onPress={
                                        () => {
                                            this.playSound(item.audio.primary, item.number.inSurah),
                                                this.setState({ isSurahPlay: true })
                                        }
                                    }>
                                    <Text style={{ fontSize: 15, color: mainColor, fontWeight: 'bold' }}>Play</Text>
                                    </TouchableOpacity>
                            }
                            <View style={{height:20}}/>
                            <Text>Tandai sebagai terakhir dibaca</Text>
                            <View style={{height:20}}/>
                            <Text>Lihat tafsir</Text>
                            
                            </ScrollView>
                            
                        </RBSheet>
                    </View>
                </View>
                <View style={{ borderBottomColor: '#000', borderBottomWidth: 0.5 }} />
                </TouchableOpacity>
            </View>
        )
    }

    render() {
        return (
            <FlatList
                data={this.props.dataAlquran}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />           
        )
    }
}
