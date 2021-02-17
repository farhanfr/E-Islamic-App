import React, { Component } from 'react'
import { Text, View } from 'react-native'

import {createStackNavigator} from '@react-navigation/stack'
import {SplashScreen,HomeScreen,PrayerTimeScreen} from '../screens'
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
        </Stack.Navigator>
    )
}