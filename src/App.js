import { useEffect } from 'react'
import Layout from './components/Layout';
import UserSearch from "./components/UserSearch";
import Weather from './components/Weather';
import { useSelector, useDispatch } from 'react-redux';
import {actionsfetchDataHandler} from './store/actions'
import {uiActions} from './store/uiSlice'
import Notification from './components/Notification';
import Loading from './components/Loading';

function App() {

  const dispatch = useDispatch()
  const weather = useSelector(state => state.city.weather)
  const city = useSelector(state => state.city.city)
  const notification = useSelector(state => state.ui.notification)
  const loading = useSelector(state => state.ui.loading)

  useEffect(() => {
      dispatch(actionsfetchDataHandler('Санкт-Петербург'))
  }, [dispatch])


  useEffect(() => {
    let timer = setTimeout(() => {
      dispatch(uiActions.clearNotification())
    }, 3000)
    return () => clearTimeout(timer)
  }, [dispatch, notification])


  return (
      <Layout>
        {loading && <Loading/>}
        {!loading && notification && <Notification message={notification.message}/>}
        {!loading && weather && city.length > 0 && <Weather/>}
        <UserSearch/>
      </Layout>
  );
}

export default App;
