import { useState } from "react";

export const Counter = () => {
    const [count, setCount] = useState(0);

    return (
        <div>
            <h4>Total Counts: {count}</h4>
            <button onClick={() => setCount(count + 1)}>Add 1</button>
            <button onClick={() => setCount(count - 1)}>Subtract 1</button>
        </div>
    );
};