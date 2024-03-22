import {useEffect , useState} from 'react'
import axios from 'axios'

function usecurrencyInfo() {

   const [data, setData] = useState({})

     useEffect( () => {

         const func = async () => {

            try {
               const response = await axios.get(`http://localhost:3000/allconversions`)
      
               console.log(response.data)
      
               setData(response)
             } catch (error) {
      
               console.log('error in getting conversion rates')
               
             }




          }

          func()
       
       

     },([]))
    
    return data
}

export default usecurrencyInfo