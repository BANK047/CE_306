import React, { useState } from "react";

interface CountProps{
    intitialCount?: number;
}

const Counter: React.FC<CountProps> = ({intitialCount = 0}) => {
    const [count, setCount] = useState<number>(intitialCount);    
    const [name, setName] = useState<string>('');
    const increment = () => {
        setCount(prevCount => prevCount + 1);
    };    

    const decrement = () => {
        setCount(count - 1);
    };

    const handleNameChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setName(e.target.value);
    }
    
    return(
        <div>
            <h1>Count: {count}</h1>
            <button onClick={increment}>Increment</button>
            <button onClick={decrement}>Decreement</button>
            <h2>Name: {name}</h2>
            {/* <input type="text"value={name} onChange={(e) => setName(e.target.value)}/> */}
            <input type="text" value={name} onChange={handleNameChange} placeholder="Enter your name"/>
        </div>
    );
};

export default Counter;