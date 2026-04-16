import './App.css'
import {useState} from "react";

export default function App() {

    const [count, setCount] = useState(0);

    function doClick (){
        setCount(count + 1);
        console.log(count);
    }

  return (
    <div className="App">
        <p>Count: {count}</p>
        <button className="myButton" onClick={doClick}>increment</button>
    </div>
  );
}