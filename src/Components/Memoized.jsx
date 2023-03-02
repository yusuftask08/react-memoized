import React, { useState, useMemo, useCallback } from 'react'

const Memoized = () => {
    const [count, setCount] = useState(0);

    const handleClick = useCallback(() => {
        setCount((prev) => prev + 1)
    }, [])

    const sum = useMemo(() => {
        let sum = 0;
        for (let i = 0; i < 100000000; i++) {
            sum += i;
        }
        return sum
    }, [])

    return (
        <div>
            <h2>Memoized Component</h2>
            <p>Count: {count} </p>
            <button onClick={handleClick}> Increment Count </button>
            <p> Sum: {sum} </p>
        </div>
    )
}

export default Memoized