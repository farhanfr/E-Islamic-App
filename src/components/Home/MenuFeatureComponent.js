import React, { Component } from 'react'
import { Image, Text, View } from 'react-native'
import MenusFeatureComponent from './MenusFeatureComponent'

export default class MenuFeatureComponent extends Component {
    render() {
        return (
            <View style={{ flexDirection: 'row', flexWrap: 'wrap' }}>
                <View style={{ justifyContent: 'flex-start', flexDirection: 'row', width: '100%', flexWrap: 'wrap',marginVertical:20}}>
                    <MenusFeatureComponent title="Jadwal Sholat" icon={require('../../assets/icon/time.png')} navigation={this.props.navigation} routeName="PrayerTimeScreen"/>
                    <MenusFeatureComponent title="Al-Quran" icon={require('../../assets/icon/quran.png')} navigation={this.props.navigation} routeName="SurahScreen"/>
                    <MenusFeatureComponent title="Kisah Nabi" icon={require('../../assets/icon/story.png')}/>
                    <MenusFeatureComponent title="Artikel" icon={require('../../assets/icon/story.png')}/>
                    <MenusFeatureComponent title="Toko Halal" icon={require('../../assets/icon/story.png')}/>
                    <MenusFeatureComponent title="Cari Masjid" icon={require('../../assets/icon/story.png')}/>
                    <MenusFeatureComponent title="Arah Kiblat" icon={require('../../assets/icon/story.png')}/>
                    <MenusFeatureComponent title="Pengaturan" icon={require('../../assets/icon/settings.png')} navigation={this.props.navigation} routeName="SettingsScreen"/>
                </View>
            </View>
        )
    }
}

