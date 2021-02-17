import React, { Component } from 'react'
import { ScrollView, Text, View } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

import { AppBarHomeComponent, HeaderHomeComponent, MenuFeatureComponent, SwiperAnnounceComponent, FeaturedArticleComponent } from '../components'

export default class HomeScreen extends Component {
    render() {
        return (
            <SafeAreaView style={{ flex: 1 }}>
                <AppBarHomeComponent />
                <ScrollView style={{ flex: 1, backgroundColor: 'white' }}>
                    <HeaderHomeComponent />
                    <MenuFeatureComponent navigation={this.props.navigation}/>
                    <SwiperAnnounceComponent />
                    <FeaturedArticleComponent navigation={this.props.navigation}/>
                </ScrollView>
            </SafeAreaView>
        )
    }
}

