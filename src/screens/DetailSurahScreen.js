import React, { Component } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'

import {DetailSurahComponent} from '../components'
import {AlQuranServices} from '../api/service'
import {mainColor} from '../const/color'

export default class DetailSurahScreen extends Component {

    constructor(props) {
        super(props)
        this.state={
            dataDetailSurah:"",
            isLoading:true
        }
    }

    getDetailSurah = async(nomorAlQuran) =>{
        const{getDetailSurah}=AlQuranServices()
        const result = getDetailSurah(nomorAlQuran)
        .then(res=>{
            console.log("getDetailSurah : " + res.data.status)
            this.setState({dataDetailSurah:res.data.data})
            this.setState({isLoading:false})
        }).catch(e=>console.log(e))
    }

    componentDidMount(){
        const{nomorAlQuran}=this.props.route.params
        this.getDetailSurah(nomorAlQuran)
        console.log("Nomor surah sekarang : " + nomorAlQuran)
    }

    render() {
        return (
            this.state.isLoading ? <ActivityIndicator size="large" color={mainColor} style={{flex:1,justifyContent:'center'}} /> :
            <SafeAreaView style={{flexGrow:1}}>
                <DetailSurahComponent dataDetailSurah={this.state.dataDetailSurah} navigation={this.props.navigation}/>
            </SafeAreaView>
            
        )
    }
}

