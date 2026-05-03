import {useState} from "react";
import AddButton from "./AddButton.jsx";

export default function App() {

    // available values for buttons
    const values = [1, 10, 100, 1000, 10000];

    // hold current state of timeInSec
    const [timeInSec, setTimeInSec] = useState(0);

    // transfer seconds into alternative format
    let hour = Math.floor(timeInSec / 3600);
    let minute = Math.floor((timeInSec % 3600) / 60);
    let second = Math.floor(timeInSec % 60);

    // update timeInSec accordingly - if called by component AddButton
    function handleClick(value){
        setTimeInSec(i => i + value);
    }

    // display counter and button component
    // pass along values for buttons and REFERENCE (!!!) to callback function
    return(
        <div>
            <p>Count: {timeInSec}</p>
            <AddButton values={values} callBack={handleClick}/>
            <p>{hour}h {minute}min {second}sec</p>
        </div>
    );
}