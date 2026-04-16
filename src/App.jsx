import {useState} from "react";
import AddButton from "./AddButton.jsx";

export default function App() {

    // hold current value of variable
    const [timeInSec, setTimeInSec] = useState(0);

    // update value accordingly - if called by AddButton
    const add = (value) => {
        setTimeInSec (timeInSec + value);
        console.log(timeInSec);
    }

    let hour = Math.floor(timeInSec / 3600);
    let minute = Math.floor((timeInSec % 3600) / 60);
    let second = Math.floor(timeInSec % 60);

    // display counter and call AddButton function
    // pass along increment steps and REFERENCE (!!!) to callback function
    return (
        <div className="App">
            <p>Seconds: {timeInSec}</p>

            <AddButton myInc={ 1 } myCallback = { add }/>
            <AddButton myInc={ 10 } myCallback = { add }/>
            <AddButton myInc={ 100 } myCallback = { add }/>
            <AddButton myInc={ 1000 } myCallback = { add }/>
            <AddButton myInc={ 10000 } myCallback = { add }/>

            <p>{hour}h {minute}m {second}s</p>
        </div>
    );
}