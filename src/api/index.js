import { get } from "axios"

const URL_BASE = "http://127.0.0.1:5000/api";

function getCountries(){
    return get(`${URL_BASE}/countries`)
}

function getState(country_id){
    return get(`${URL_BASE}/states/${country_id}`)
}

function getCities(state_id){
    return get(`${URL_BASE}/cities/${state_id}`)
}

export { getCountries, getState, getCities }