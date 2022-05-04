// import { useState } from 'react'
// import logo from './logo.svg'
import './App.css'
import { store } from "./Redux/store"
import { addCount } from './Redux/action'
import { useDispatch, useSelector } from 'react-redux'
import { Todos } from './components/Todos';

function App() {
  // const state = store.getState();
  // console.log(state);
  const dispatch = useDispatch();
  const count = useSelector((store) => store.counter)

  return (
    <div className="App">
      <h3>Counter:{count}</h3>
      <button onClick={() => {
        dispatch(addCount(1))
      }}>ADD 1</button>
      <hr />
      <Todos/>
    </div>
  )
}

export default App
