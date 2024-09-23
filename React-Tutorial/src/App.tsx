import React, { useState, useEffect } from 'react';

export default function App(){
    const [seconds, setSeconds] = useState(0);

    useEffect(() => {
    const timerId = setInterval(() => {
    setSeconds(prev => prev + 1);
    console.log('inside interval...');
    }, 1000);
    return () => {
    clearInterval(timerId);
    }
    }, []);
    
    return <div>Time Elapsed: {seconds} seconds</div>
    }