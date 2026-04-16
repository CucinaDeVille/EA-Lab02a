import {useState} from "react";
import AddButton from "./AddButton.jsx";

export default function App() {

    // hold current value of variable
    const [count, setCount] = useState(0);

    // update value accordingly - if called by AddButton
    function add (value) {
        setCount (count + value);
        console.log(count);
    }

    // display counter and call AddButton function
    // pass along increment steps and REFERENCE (!!!) to callback function
    return (
        <div className="App">
            <p>Count: {count}</p>
            <AddButton myInc={ 3 } myCallback = { add }/>
        </div>
    );
}