import React, { useState, useEffect } from 'react';

function App() {
    const [count, setCount] = useState(0);
    const [text, setText] = useState("");

    useEffect(() => {
        console.log("Effect runs when 'count' or 'text' changes");

        // Optional clean-up function
        return () => {
            console.log("Clean-up runs before 'count' or 'text' changes");
        };
    }, [count, text]); // Dependencies: count and text

    return (
        <div>
            <p>Count: {count}</p>
            <button onClick={() => setCount(count + 1)}>Increment Count</button>
            <input
                type="text"
                value={text}
                onChange={(e) => setText(e.target.value)}
                placeholder="Type something"
            />
        </div>
    );
}

export default App;
