import React, { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect runs on every render");

        // Optional clean-up function
        return () => {
            console.log("Clean-up runs before the next effect");
        };
    });

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default App;