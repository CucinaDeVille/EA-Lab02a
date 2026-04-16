import './App.css'

export default function AddButton({myInc, myCallback}) {

    function handleClick(){
        myCallback(myInc);
    }

    return (
        <button className="myButton" onClick={handleClick}>{myInc}</button>
    );
}