import { useState } from 'react'

export const useCounter = (initial =0, max) => {

    const [counter, setCounter] = useState(initial)

    const handleSumar = () =>{
        counter < max && setCounter(counter + 1)
    }

    const handleRestar = () =>{
        counter > 0 && setCounter(counter - 1)
    }

    return {
        counter,
        handleSumar,
        handleRestar,
        max
    }
}