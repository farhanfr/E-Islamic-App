import React, { Component } from 'react'
import { ActivityIndicator, SafeAreaView, Text, View } from 'react-native'

import {SurahComponent} from '../components'
import {AlQuranServices} from '../api/service'
import {mainColor} from '../const/color'

export default class SurahScreen extends Component {

    constructor(props) {
        super(props)
        this.state={
            dataSurah:[],
            isLoading:true,
        }
    }

    getAllSurah = async() => {
        const{getAllSurah} = AlQuranServices()
        const result = getAllSurah()
        .then(res=>{
            console.log("gettAllSurah : " + res.data.status)
            this.setState({dataSurah:res.data.data})
            this.setState({isLoading:false})
        })
    }

    _isMounted = false
    componentDidMount(){
        this._isMounted=true
        if (this._isMounted === true) {
            this.getAllSurah()    
        }
    }

    componentWillUnmount(){
        this._isMounted=false
    }

    render() {
        return (
            this.state.isLoading ? <ActivityIndicator size="large" color={mainColor} style={{flex:1,justifyContent:'center'}} /> :
            <SafeAreaView style={{flexGrow:1,backgroundColor:"#fff"}}>
                <SurahComponent dataSurah={this.state.dataSurah} navigation={this.props.navigation}/>
            </SafeAreaView>
        )
    }
}

