import React, { Component } from 'react'
import { useState } from 'react'
let counter = 0
const Counter1 = () => {

    const [counter, setCounter] = useState(0)

    const maxLimit = 10

    const handleClick = () => {


        // counter++
        // console.log(counter)
        setCounter(prev => prev + 1)
    }


    const reset = () => {

        setCounter(0)
    }

    const handleDecrement = () => {

        setCounter(prev => prev - 1)
    }

    return (
        <div>
            <button onClick={handleClick} disabled={counter >= maxLimit}>Increment</button>
            <p>{counter}</p>

            {counter >= maxLimit && <p >Max limit reached</p>}

            <button onClick={reset}>Reset</button>

            {/* show a Reset button when max limit is reached should reset counter to 0 */}
            <button onClick={handleDecrement} disabled={counter<=0}>Decrement</button>

        </div>
    )
}


export default Counter1 