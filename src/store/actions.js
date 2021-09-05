import {cityActions} from './citySlice'
import {uiActions} from './uiSlice'

const key = 'dGd4rEiqwfaUUsyWCj29QIVBXP6r7hAP'

export const actionsfetchDataHandler = (userValue) => {
    return async (dispatch) => {
        const fetchDataHandler = async () => {
          const response = await fetch(`http://dataservice.accuweather.com/locations/v1/cities/search?apikey=${key}&q=${userValue}&language=ru`)
          if (!response.ok) {
            throw new Error({message: 'There is a server error'})
          }
          const data = await response.json()
          dispatch(cityActions.addCity(data))
          let cityKey = data[0].Key 
          console.log(data)
          return cityKey
          }

      const fetchWeatherHandler = async (cityKey) => {
        const response2 = await fetch(`http://dataservice.accuweather.com/currentconditions/v1/${cityKey}?apikey=${key}&language=ru`)
        if (!response2.ok) {
          throw new Error({message: 'There is a server error'})
        }
        const data2 = await response2.json() 
        dispatch(cityActions.addWeather(data2))
        console.log(data2)
        return data2
      }

      fetchDataHandler()
      .then(data => fetchWeatherHandler(data))
      .catch(err => {
        dispatch(uiActions.showNotification({
          message:'Проверьте правильность написания города'
        }))  
      })

      // just another option below of using async/await

      // try {
      //   const result1 = await fetchDataHandler()
      //   const result2 = await fetchWeatherHandler(result1)
      //   console.log(result2)
      // } catch (error) {
      //   dispatch(uiActions.showNotification({
      //     message:'Проверьте правильность написания города'
      //   }))  
      // }
  
    }
}






