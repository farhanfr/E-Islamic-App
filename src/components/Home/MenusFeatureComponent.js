import React from 'react'
import { View, Text, Image, TouchableOpacity } from 'react-native'

const MenusFeatureComponent = (props) => {
    return (
        
        <View style={{ width: `${100 / 4}%`, alignItems: 'center', marginBottom: 18 }}>
            <TouchableOpacity onPress={()=>props.navigation.navigate(props.routeName)}>
            <View style={{ width: 58, height: 58, borderWidth: 1, borderColor: '#EFEFEF', borderRadius: 18, justifyContent: 'center', alignItems: 'center' }}>
                <Image source={props.icon} style={{ width: 32, height: 32 }} />
            </View>
            </TouchableOpacity>
            <Text style={{ fontSize: 11, fontWeight: 'bold', textAlign: 'center', marginTop: 10 }}>{props.title}</Text>
        </View>
        
    )
}

export default MenusFeatureComponent
