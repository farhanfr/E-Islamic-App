import React, { Component } from 'react'
import { Alert, Button, FlatList, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import Sound from 'react-native-sound'
import RBSheet from 'react-native-raw-bottom-sheet'
import {MMKV} from 'react-native-mmkv'
import { mainColor } from '../../const/color'

export default class AlQuranComponents extends Component {

    constructor(props) {
        super(props)
        this.state = {
            isSurahPlay: false,
            idSurah: "",
            idSurahLastRead:"",
            temporaryIdSurahLastRead:"",
            isLastSurahPressed:false,
            nameSurah:""
        }
    }

    _track;
    
    playSound = (linkSound, idProp) => {
        this._track = new Sound(linkSound, null, (err) => {
            if (err) {
                console.log("sound error")
            }
            this.setState({ idSurah: idProp })
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

    alertLastRead = (idSurahLastRead) =>{
        Alert.alert(
            `${this.state.nameSurah}`,
            `Tandai ayat ini sebagai terakhir dibaca `,
            [
                {
                    text: "Cancel",
                    onPress: () => console.log("Cancel Pressed"),
                    style: "cancel"
                },
                { text: "OK", onPress: () => {
                    this.setState({temporaryIdSurahLastRead:idSurahLastRead}),
                    // this.setState({idSurahLastRead:null}), ==> BISA DIGUNAKAN,BISA TIDAK
                    MMKV.set('idSurahLastRead',idSurahLastRead),
                    MMKV.set('nameSurah',this.state.nameSurah)
                    MMKV.set('isLastSurahPressed',true)
                    }
                }
            ],{cancelable: false }
        )   
    }

    renderItem = ({ item, index }) => {
        return (
            <View>
                <TouchableOpacity onPress={() => this[RBSheet + index].open()}>
                <View style={{ flexDirection: 'row' }}>
                    <View style={{ backgroundColor: 'red', flex: 1 }}>
                        <View style={{ 
                            backgroundColor: (this.state.temporaryIdSurahLastRead == item.number.inSurah) ? 'red' :
                            (this.state.idSurahLastRead == item.number.inSurah && this.state.nameSurah == MMKV.getString('nameSurah'))? 'blue' :
                            mainColor, flex: 1, justifyContent: 'center' }}>
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
                                <Text style={{fontWeight:'bold',fontSize:18}}>Pilih aksi ayat {item.number.inSurah}</Text>
                                <TouchableOpacity onPress={()=> this[RBSheet + index].close()}>
                                    <Text style={{fontSize:18}}>x</Text>
                                </TouchableOpacity>
                            </View>
                            <ScrollView style={{paddingHorizontal:20}}>
                            {
                                (this.state.idSurah == item.number.inSurah && this.state.isSurahPlay == true) ?
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
                            <TouchableOpacity onPress={()=>{this.alertLastRead(item.number.inSurah)}}>
                                <Text>Tandai sebagai terakhir dibaca</Text>
                            </TouchableOpacity>
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

    componentDidMount(){
        const{nameSurah}=this.props
        this.setState({idSurahLastRead:MMKV.getNumber('idSurahLastRead')})
        // this.setState({isLastSurahPressed:MMKV.getBoolean('isLastSurahPressed')})
        this.setState({nameSurah})
        console.log(nameSurah)
    }

    render() {
        return (
            <View>
            {this.props.isFirstBismillah != true ?
            <View style={{backgroundColor:mainColor}}>
                <Text style={{color:'white',fontSize:28,textAlign:'center',paddingVertical:10}}>بِسْمِ اللَّهِ الرَّحْمَٰنِ الرَّحِيمِ</Text>
            </View>    
            :
            <View></View>
            }
            <FlatList
                data={this.props.dataAlquran}
                renderItem={this.renderItem}
                keyExtractor={(item, index) => index.toString()}
            />    
            </View>       
        )
    }
}
