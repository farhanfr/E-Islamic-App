import axios from "axios"

import {MAIN_API1,MAIN_API2} from '../store'

const JadwalSholatServices = () =>{
    const getAll = async() => await axios.get(`${MAIN_API1}/sholat/format/json/jadwal/kota/703/tanggal/2017-02-07`)
    return{getAll}
}

const AlQuranServices = () =>{
    const getAllSurah = async() => await axios.get(`${MAIN_API2}/surah`)
    const getDetailSurah = async(nomorAlQuran) => await axios.get(`${MAIN_API2}/surah/${nomorAlQuran}`)
    const getAlQuran = async(nomorSurah) => await axios.get(`${MAIN_API2}/surah/${nomorSurah}`)
    return{getAllSurah,getDetailSurah,getAlQuran}
}

export{JadwalSholatServices,AlQuranServices}
