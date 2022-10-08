import axios from 'axios';

const URL = 'https://travel-advisor.p.rapidapi.com/restaurants/list-in-boundary'
const options = {
    params: {
      bl_latitude: '11.847676',
      tr_latitude: '12.838442',
      bl_longitude: '109.095887',
      tr_longitude: '109.149359',
    //   restaurant_tagcategory_standalone: '10591',
    //   restaurant_tagcategory: '10591',
    //   limit: '30',
    //   currency: 'USD',
    //   open_now: 'false',
    //   lunit: 'km',
    //   lang: 'en_US'
    },
    headers: {
      'X-RapidAPI-Key': '8a138d67b3msh7e8f335f1fca62ap17f0bajsn94eaaf5fbd04',
      'X-RapidAPI-Host': 'travel-advisor.p.rapidapi.com'
    }
  };


export const getPlacesData = async()=>{
    try {
        //request
        const {data:{data}} = await axios.get(URL, options);
        //console.log(data);
        return data;
        
    } catch (error) {
        //if request fails...
    }
}