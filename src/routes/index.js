import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import {SplashScreen,HomeScreen,PrayerTimeScreen,SurahScreen,DetailSurahScreen,AlQuranScreen} from '../screens'
import {mainColor} from '../const/color'

const Stack = createStackNavigator()

export const Router = () =>{
    return(
        <Stack.Navigator
            initialRouteName="HomeScreen">
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen 
            name="HomeScreen" 
            component={HomeScreen}
            options={({navigation})=>(
                {
                    headerShown:false
                }
            )}
             />
            <Stack.Screen 
            name="PrayerTimeScreen" 
            component={PrayerTimeScreen}
            options={({navigation})=>(
                {
                    headerTitle:'Jadwal Sholat',
                    headerStyle:{
                        backgroundColor:mainColor
                    }
                }
            )}
             />
            <Stack.Screen 
            name="SurahScreen" 
            component={SurahScreen}
            options={({navigation})=>(
                {
                    headerTitle:'List Surat',
                    headerStyle:{
                        backgroundColor:mainColor
                    }
                }
            )}
             />
            <Stack.Screen 
            name="DetailSurahScreen" 
            component={DetailSurahScreen}
            options={({navigation})=>(
                {
                    headerTitle:'Informasi Surat',
                    headerStyle:{
                        backgroundColor:mainColor
                    }
                }
            )}
             />
             <Stack.Screen 
            name="AlQuranScreen" 
            component={AlQuranScreen}
            options={({navigation})=>(
                {
                    headerStyle:{
                        backgroundColor:mainColor
                    }
                }
            )}
             />
        </Stack.Navigator>
    )
}
