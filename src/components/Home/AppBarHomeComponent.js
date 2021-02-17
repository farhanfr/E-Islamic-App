import React, { Component } from 'react'
import { Text, View} from 'react-native'

import {AppBarHomeStyle} from '../../styles'

export default class AppBarHomeComponent extends Component {
    render() {
        return (
            <View style={AppBarHomeStyle.container}>
                <Text> Mon 12 Feb 2021 </Text>
                <Text> 1 Ramadhan 1440 </Text>
            </View>
        )
    }
}
