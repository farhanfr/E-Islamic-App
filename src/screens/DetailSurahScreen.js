import React, { Component } from 'react'
import { SafeAreaView, Text, View } from 'react-native'

import {DetailSurahComponent} from '../components'

export default class DetailSurahScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flexGrow:1}}>
                <DetailSurahComponent/>
            </SafeAreaView>
            
        )
    }
}

