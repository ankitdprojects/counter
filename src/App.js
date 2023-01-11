import React,{useState} from 'react';
import './App.css';

function App() {
  const [count,setCount] = useState(0);
    function add(){
      setCount(count+1);
    }
    function minus(){
      setCount(count-1);
    }
    function reset(){
      setCount(0);
    }
  return (
    <div className="img">
    
      <h1 className='font'>Counter</h1>
      <p className='font'>{count}</p>
      <button className='button' onClick={add}>Increment</button>
      <button className='button' onClick={minus}>Decrement</button>
      <button className='button' onClick={reset}>Reset</button>
    </div>
  );
}

export default App;
