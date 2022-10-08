import axios from 'axios';
import { getUserCoords} from '../components/map/Map';
const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'



export const getPlacesData = async()=>{
    try {
        //request
        const {data:{data}} = await axios.get(URL, {
          params: {
          bl_latitude: '11.847676',
          tr_latitude: '12.838442',
          bl_longitude: '109.095887',
          tr_longitude: '109.149359',
    
        },
        headers: {
          'X-RapidAPI-Key': '8a138d67b3msh7e8f335f1fca62ap17f0bajsn94eaaf5fbd04',
          'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
        }
      });
        //console.log(data);
        return data;
        
    } catch (error) {
        //if request fails...
    }
}