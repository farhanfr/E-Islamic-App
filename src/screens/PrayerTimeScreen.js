import React, { Component } from 'react'
import { SafeAreaView, ScrollView, StyleSheet, Text, View } from 'react-native'

import {PrayerTimeComponent} from '../components'

export default class PrayerTimeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{flexGrow:1}}>
                <PrayerTimeComponent/>            
            </SafeAreaView>
        )
    }
}





