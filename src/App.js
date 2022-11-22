import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';
import {useDispatch , useSelector} from 'react-redux'
import { fetchuser } from './redux/actions/useraction';
import store from './redux/stores/store';
import FirstCom from './FirstCom';

function App() {
  // const [array, setarray] = useState([])
  const array = useSelector(state => state.user.user)

  const dispatch = useDispatch()
  useEffect(() => {
    dispatch(fetchuser())
  }, [])
  
  return (
    <>
      {console.log(array)}
    </>
  );
}

export default App;
