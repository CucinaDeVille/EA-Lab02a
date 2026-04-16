import './App.css'

export default function AddButton({myInc}) {

    function handleClick(){
        alert(myInc)
    }

    return (
        <button className="myButton" onClick={handleClick}>{myInc}</button>
    );
}