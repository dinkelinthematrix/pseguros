import { useFetch } from '@vueuse/core'
import axios from 'axios'

const API_BASE_URL = 'http://localhost:3000'
const ADDRESS_API_URL = 'https://apis.datos.gob.ar/georef/api'

export const fetchStatesData = async () => {
  const {
    isFetching: isFetchingProvinces,
    error: errorProvinces,
    data: provincias
  } = await useFetch(`${ADDRESS_API_URL}/provincias`).get().json()
  return { isFetchingProvinces, errorProvinces, provincias }
}

export const fetchBranchesData = async () => {
  const { data } = await axios.get(`${API_BASE_URL}/sucursales`)
  return { data }
}
