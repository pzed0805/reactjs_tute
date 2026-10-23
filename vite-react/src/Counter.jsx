import { useState } from "react";


function Counter() {
    const [counter, setCounter ] = useState(15)
    const addValue = () => {
        setCounter(counter + 1)
    }
    const  subValue = () => {
        setCounter(Math.max(0 , counter -1))
    }
    return (
        <>
            counter  = {counter}
            <br />
            <button
                onClick={addValue}
            >Add Value</button>
            <br />
            <button
                onClick={subValue}
            >Sub Value</button>
            <p>Footer : {counter}</p>
        </>
    )
}

export default Counter;