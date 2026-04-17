import './App.css'

export default function AddButton({myInc, myCallback}) {

    // call defined function and pass value to increment variable
    const handleClick = () => {
        myCallback(myInc);
    }

    // define button with corresponding callback function
    // onClick expects pointer to function; workaround by providing a
    // reference to a function that calls the callback function and passes along a value
    // onClick ALWAYS expects a reference to a function and never calls a function itself
    return (
        <button className="myButton" onClick={handleClick}>{myInc}</button>
    );
}