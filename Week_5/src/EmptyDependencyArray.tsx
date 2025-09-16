import React, { useState, useEffect} from "react";

const EmptyDepentdentcyEffect: React.FC = () => {
    const [count, setCount] = useState<number>(0);
    const [name, setName] = useState<string>(''); 
    
    useEffect(() => {
        console.log('NoDepentdentcy Effect: Component re-rendered!');
    },[]);

    console.log('Component redered of re-rendered');
    return(
        <div>
            <h2>Empty depandency Arrey</h2>
            <p>Count: {count}</p>
            <button onClick={() => setCount(preCount => preCount + 1)}>Increment</button>
            <br />
            <p>Name: {name}</p>
            <input type="text"
                    value={name}
                    onChange={(e: React.ChangeEvent<HTMLInputElement>) => setName(e.target.value)}
            />
        </div>
    );
};

export default EmptyDepentdentcyEffect;