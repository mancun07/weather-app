import {useState, useCallback, useEffect} from 'react'
import Layout from './components/Layout';
import UserSearch from "./components/UserSearch";
import Weather from './components/Weather';
import { useSelector, useDispatch } from 'react-redux';
import {actionsfetchDataHandler} from './store/actions'
import {uiActions} from './store/uiSlice'
import Notification from './components/Notification';


function App() {
  // const [weather, setWeather] = useState()
  const dispatch = useDispatch()
  // const userValue = useSelector(state => state.city.userValue)
  const weather = useSelector(state => state.city.weather)
  const city = useSelector(state => state.city.city)
  const notification = useSelector(state => state.ui.notification)

  // useEffect(() => {
  //     dispatch(actionsfetchDataHandler('Санкт-Петербург'))
  // }, [dispatch])


  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(uiActions.clearNotification())
    }, 3000)
    return () => clearTimeout(timer)
  }, [dispatch, notification])


  return (
      <Layout>
        {notification && <Notification message={notification.message}/>}
        {weather && city.length > 0 && <Weather/>}
        <UserSearch/>
      </Layout>
  );
}

export default App;
