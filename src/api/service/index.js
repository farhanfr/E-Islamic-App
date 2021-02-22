import axios from "axios"

import {MAIN_API} from '../store'

const JadwalSholatServices = () =>{
    const getAll = async() => await axios.get(`${MAIN_API}/sholat/format/json/jadwal/kota/703/tanggal/2017-02-07`)
    return{getAll}
}

const AlQuranServices = () =>{
    const getAllSurah = async() => await axios.get(`${MAIN_API}/quran/format/json/surat`)
    return{getAllSurah}
}

export{JadwalSholatServices,AlQuranServices}