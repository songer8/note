import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { increment, decrement } from './Actions';

function App() {
  const counter = useSelector(state => state.counter) //provider中拿到的全局状态
  const isLogged = useSelector(state => state.isLogged)
  const dispatch = useDispatch();

  return (
    <div className="App">
      <h1>counter：{counter}</h1>
      <button onClick={() => { dispatch(increment(5)) }}>+</button> 
      {/* 执行时，入参为5 */}
      <button onClick={() => { dispatch(decrement()) }}>-</button>
      {isLogged ? <h3>yes</h3> : <h3>no</h3>}
    </div>
  );
}

export default App;
