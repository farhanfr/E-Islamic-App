import axios from "axios"

import {MMKV} from 'react-native-mmkv'
import {MAIN_API1,MAIN_API2} from '../store'

const JadwalSholatServices = () =>{
    var date = new Date()
    var year = date.getFullYear()
    var month = date.getMonth()+1
    var day = date.getDate()

    var regionId = MMKV.getNumber('idRegionSetting')
    // today=date.getDate() + "/"+parseInt(date.getMonth()+1)+"/"+date.getFullYear()
    // const getAll= async()=>console.log(today)
    const getAll = async() => await axios.get(`${MAIN_API1}/v1/sholat/jadwal/${regionId}/${year}/${month}/${day}`)
    
    return{getAll}
}

const AlQuranServices = () =>{
    const getAllSurah = async() => await axios.get(`${MAIN_API2}/surah`)
    const getDetailSurah = async(nomorAlQuran) => await axios.get(`${MAIN_API2}/surah/${nomorAlQuran}`)
    const getAlQuran = async(nomorSurah) => await axios.get(`${MAIN_API2}/surah/${nomorSurah}`)
    return{getAllSurah,getDetailSurah,getAlQuran}
}

export{JadwalSholatServices,AlQuranServices}
