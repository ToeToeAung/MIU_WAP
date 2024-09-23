import React, { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);

    useEffect(() => {
        console.log("Effect runs only once after the initial render");

        // Optional clean-up function
        return () => {
            console.log("Clean-up runs on component unmount");
        };
    }, []); // Empty array passed as dependency

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment</button>
        </div>
    );
}

export default App;