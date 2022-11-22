import React, { useEffect, useState } from 'react'
import { AddData, fetchuser } from './redux/actions/useraction';
import store from './redux/stores/store';

function FirstCom() {

    // const [array, setarray] = useState([])

    // useEffect(() => {
    //   store.dispatch(fetchuser())
    // }, [])
  
    // setTimeout(() => {
    //   setarray(store.getState())
    // }, 100);
    
    // const dataAdd = () => {
    //     let obj = {
    //         "firstName": "dsdsfdsdsdfdf",
    //         "lastName": "Ambdfdxcxfdfder",
    //         "hobbies": "Fottdfdfdfball",
    //         "gender": "Male",
    //         "city": "Ahmedabad",
    //         "age": 77
    //       }
    //       // store.dispatch(AddData(obj))
    //       setarray(store.getState())
    // }
  return (
    <>
        {/* <div>FirstCom</div>
        <button onClick={() => dataAdd()}>Click</button>
        {console.log(array)} */}
    </>
  )
}

export default FirstCom