import { useState } from "react"

function Buttons(){

    let [counter,setCounter]=useState(1)



    function increaseValue(){
        if (counter>=0 && counter<10){
            setCounter(counter+1)
        }
    }


    function decreaseValue(){
        if(counter>0){
            setCounter(counter-1)
        }
    }

    return(
        <>
        <div><h3>Rating:{counter}</h3></div>
        <button onClick={increaseValue}>Add</button>
        <br />
        <br />
        <button onClick={decreaseValue}>Subtract</button>
        </>


    )
}

export default Buttons;