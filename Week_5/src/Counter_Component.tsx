import React from 'react';
import { useState } from 'react';
import './Counter_Component.css';

interface CounterCompoentProps{
    intitail?: number;
}

const Counter: React.FC<CounterCompoentProps> = ({intitail = 0}) => {
    const [count, setCount] = useState(intitail);
    const incress = () => {
        setCount(preCount => preCount + 1);
    }
    const decress = () => {
        setCount(preCount => preCount - 1);
    }
    const reset = () => {
        setCount(preCount => preCount = 0);
    }
    return(
        <div className='counter-component'>
            <h2>Counter Exercise - Solution</h2>
            <h1>{count}</h1>
            <div className='button'>
                <button className='incress' onClick={incress}>+ เพิ่ม</button>
                <button className='decress' onClick={decress}>- ลด</button>
                <button className='reset' onClick={reset}>Reset</button>
            </div>
        </div>
    );
};

export default Counter;