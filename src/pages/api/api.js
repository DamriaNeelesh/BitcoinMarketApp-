import axios from 'axios'

const API_URL = 'https://data.messari.io/api/v1/assets?fields=id,slug,symbol,metrics/market_data/price_usd'

const get = async () => {
  const { data } = await axios.get(API_URL)
  return data.data
}

export default getCoins
