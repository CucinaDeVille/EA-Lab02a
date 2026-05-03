import './App.css'

export default function AddButton({values, callBack}) {

    // call defined function and pass value to increment variable
    //const handleClick = () => { integrated inline
        //myCallback(myInc);
    //}

    // iterate through array and create buttons with corresponding value
    // onClick expects pointer to function; workaround by providing a
    // reference to a function that calls the callback function and passes along a value
    // onClick ALWAYS expects a reference to a function and never calls a function itself
    return (
        <div>
            {values.map((item, index)=>(
                <button
                    key={index}
                    className="myButton"
                    onClick={()=>(callBack(item))}>{item}</button>
            ))}
        </div>
    );
}