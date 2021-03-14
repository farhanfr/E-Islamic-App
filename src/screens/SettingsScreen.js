import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {SettingsComponent} from '../components'

export default class SettingsScreen extends Component {
    render() {
        return (
            <View style={{backgroundColor:'white',flex:1}}>
                <SettingsComponent navigation={this.props.navigation}/>
            </View>
        )
    }
}

