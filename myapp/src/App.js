import logo from './logo.svg';
import './App.css';
import { useEffect, useState } from 'react';

function App() {
  const [no,setNo] = useState(0);
  const Plus = ()=>{
    setNo(
      no+1
    )
  }
  const Resent = ()=>{
    setNo(
      0
    )
  }
  const Minus = ()=>{
    setNo(
      no-1
    )
  }

  useEffect(()=>{
    console.log("useEffect is running");
  },[])

  return (
   <center>
    <h2>Counter</h2>
    <div className="counter">
        <center>
          <h1>{no}</h1>
          <button className="btn1"onClick={()=>Plus()}>+</button>
          <button className="btn2" onClick={()=>Resent()}>Resent</button>
          <button className="btn1" onClick={()=>Minus()}>-</button>
        </center>
      </div>
   </center>
    
  );
}

export default App;
