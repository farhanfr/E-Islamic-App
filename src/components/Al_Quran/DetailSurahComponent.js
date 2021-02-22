import React, { Component } from 'react'
import { Image, ScrollView, Text, TouchableOpacity, View } from 'react-native'

import {mainColor} from '../../const/color'

export default class DetailSurahComponent extends Component {
    render() {
        return (
            <View style={{paddingHorizontal:10,paddingVertical:10}}>
                <View style={{width:'100%',height:150,backgroundColor:'#fff',borderRadius:20,elevation:3,position:'relative'}}>
                    <View style={{width:'100%',height:'100%',position:'absolute',top:0}}>
                        <Image source={require('../../assets/img/header.png')} style={{width:undefined,height:undefined,flex:1,borderRadius:20}} resizeMode={'cover'}/>
                    </View>
                    <View style={{position:'absolute',width:'100%',height:'100%',backgroundColor:'#000',top:0,opacity:0.4,borderRadius:20}}/>
                    <View style={{position:'absolute',top:0,justifyContent:'center',width:'100%',height:'100%',paddingHorizontal:20}}>
                        <Text style={{color:"white",fontSize:20,fontWeight:'bold'}}>Al Fatihah</Text>
                        <Text style={{color:"white",textAlign:'left',fontSize:20}}>المائدة</Text>
                        <Text style={{color:"white"}}>Hidangan</Text>
                    </View>
                </View>
                <View style={{height:20}}/>
                <View style={{width:'100%',backgroundColor:'#fff',borderRadius:20,elevation:3,paddingBottom:20}}>
                   <View style={{flexDirection:'row',justifyContent:'space-around',paddingVertical:20}}>
                        <Text>Surat ke - 5</Text>
                        <Text>Jumlah ayat 120</Text>
                        <Text>Madinah</Text>
                   </View>
                   <View style={{paddingHorizontal:22}}>
                       <Text>Keterangan</Text>
                       <View style={{height:10}}></View>
                    
                       <Text style={{textAlign:'justify'}}>Surat Al Maa'idah terdiri dari 120 ayat 
                           termasuk golongan surat Madaniyyah. 
                           Sekalipun ada ayatnya yang turun di Mekah, 
                           namun ayat ini diturunkan sesudah Nabi Muhammad s.a.w. hijrah ke Medinah, 
                           yaitu di waktu haji wadaa'. Surat ini dinamakan Al Maa'idah (hidangan) 
                           karena memuat kisah pengikut-pengikut setia Nabi Isa a.s. meminta kepada Nabi Isa a.s. 
                           agar Allah menurunkan untuk mereka Al Maa'idah (hidangan makanan) dari langit (ayat 112). 
                           Dan dinamakan Al Uqud (perjanjian), karena kata itu terdapat pada ayat pertama surat ini, 
                           dimana Allah menyuruh agar hamba-hamba-Nya memenuhi janji prasetia terhadap Allah dan perjanjian-perjanjian 
                           yang mereka buat sesamanya. Dinamakan juga Al Munqidz (yang menyelamatkan), 
                           karena akhir surat ini mengandung kisah tentang Nabi Isa a.s. penyelamat pengikut-pengikut 
                           setianya dari azab Allah</Text>
                           
                   </View>
                </View>
                <View style={{height:20}}/>
                <TouchableOpacity>
                    <View style={{backgroundColor:mainColor,width:'100%',paddingVertical:15,borderRadius:20}}>
                        <Text style={{textAlign:'center',fontSize:18,color:'#fff',fontWeight:"bold"}}>Baca Surat</Text>
                    </View>
                </TouchableOpacity>
            </View>
        )
    }
}

