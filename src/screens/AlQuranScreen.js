import React, { Component } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'

import {AlQuranComponent} from '../components'
import {AlQuranServices} from '../api/service'
import {mainColor} from '../const/color'

export default class AlQuranScreen extends Component {

    constructor(props) {
        super(props)
        this.state={
            dataAlquran:[],
            isLoading:true
        }
    }

    getAlQuran = async(nomorSurah) =>{
        const{getAlQuran}=AlQuranServices()
        const result=getAlQuran(nomorSurah)
        .then(res=>{
            console.log("getDataAlquran : ", res.data.status)
            this.setState({dataAlquran:res.data.data.verses})
            this.setState({isLoading:false})
        })
    }

    componentDidMount(){
        const{nomorSurah,nameSurah}=this.props.route.params
        this.getAlQuran(nomorSurah)
        this.props.navigation.setOptions({
            title: nameSurah,
        })
    }

    render() {
        return (
            this.state.isLoading ? <ActivityIndicator size="large" color={mainColor} style={{flex:1,justifyContent:'center'}} /> :
            <SafeAreaView style={{backgroundColor:'white',flexGrow:1}}>
                <AlQuranComponent dataAlquran={this.state.dataAlquran}/>
            </SafeAreaView>
        )
    }
}

