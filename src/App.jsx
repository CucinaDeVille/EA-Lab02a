import {useState} from "react";
import AddButton from "./AddButton.jsx";

export default function App() {

    const [count, setCount] = useState(0);

    function add (value) {
        setCount (count + value);
    }

  return (
    <div className="App">
        <p>Count: {count}</p>
        <AddButton myInc={ 3 } myCallback = { add }/>
    </div>
  );
}