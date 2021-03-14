import React, { Component } from 'react'
import { Text, View } from 'react-native'

import allCityData from '../api/local/allCity.json'
import {ListRegionComponent} from '../components'

export default class ListRegionScreen extends Component {

    constructor(props) {
        super(props)
        this.state={
            dataCity:"",
            isLoading:false
        }
    }

    componentDidMount(){
        this.setState({dataCity:allCityData})
    }
    
    render() {
        return (
            <View style={{backgroundColor:'white'}}>
                <ListRegionComponent dataCity={this.state.dataCity}/>
            </View>
        )
    }
}

