import React, { Component } from 'react'
import { ActivityIndicator, SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import {PrayerTimeComponent} from '../components'
import {JadwalSholatServices} from '../api/service'
import {mainColor} from '../const/color'

export default class PrayerTimeScreen extends Component {

    constructor(props) {
        super(props)
        this.state={
            isLoading:true,
            dataJadwalSholat:[]
        }
    }

    getJadwalSholat = async()=>{
        const{getAll}=JadwalSholatServices()
        const result= await getAll()
        .then(res=>{
            var arrJadwalSholat = new Array(6)
            const dataSholat=res.data.jadwal.data
            arrJadwalSholat[0] = {id:1,name:"Shubuh",time:dataSholat.subuh}
            arrJadwalSholat[1] = {id:2,name:"Terbit",time:dataSholat.terbit}
            arrJadwalSholat[2] = {id:3,name:"Dhuhur",time:dataSholat.dzuhur}
            arrJadwalSholat[3] = {id:4,name:"Ashar",time:dataSholat.ashar}
            arrJadwalSholat[4] = {id:5,name:"Magrib",time:dataSholat.maghrib}
            arrJadwalSholat[5] = {id:6,name:"Isya",time:dataSholat.isya}
            this.setState({dataJadwalSholat:arrJadwalSholat})
            this.setState({isLoading:false})
            console.log(arrJadwalSholat)
        })
    }

    componentDidMount(){
        this.getJadwalSholat()
    }

    render() {
        return (
            this.state.isLoading ? <ActivityIndicator size="large" color={mainColor} style={{flex:1,justifyContent:'center'}} /> :
            <SafeAreaView style={{flexGrow:1}}>
                <PrayerTimeComponent dataJadwalSholat={this.state.dataJadwalSholat}/>            
            </SafeAreaView>
        )
    }
}





