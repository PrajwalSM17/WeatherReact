import axios from "axios";





const API_KEY ="30471112e4c43b39bf91374622173646"

const URL ="https://api.openweathermap.org/data/2.5/weather"



 const fetchWeather= async (query)=>{
  const {data}=  await axios.get(URL,{
        params:{
             q:query,
             units:"metric",
             AppID:API_KEY
        }
    })
    return data
}


export default fetchWeather;
