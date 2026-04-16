import './App.css'

export default function AddButton({myInc, myCallback}) {

    // call defined function and pass value to increment variable
    const handleClick = () => {
        myCallback(myInc);
    }

    // define button with corresponding callback function
    return (
        <button className="myButton" onClick={handleClick}>{myInc}</button>
    );
}