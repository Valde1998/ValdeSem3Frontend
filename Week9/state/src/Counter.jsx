import React, { useEffect, useState } from 'react';

function Counter () {
    const [count, setCount] = useState(0);
    const [amount, setAmount] = useState(1);

    const inc = () => {
        setCount(count + amount);
    }
    const dec = () => {
        setCount(count - amount);
    }
    useEffect(()=>{
        localStorage.setItem('count', count);
    },[count]);
    useEffect(()=> {
        if(count === 0) {
            setCount(Number(localStorage.getItem('count')));
        }
    }, []);
    return (
        <>
            <p>{count}</p>
            <input type="number" value={amount} onChange={e => setAmount(Number(e.target.value))} />
            <button id='inc' onClick={inc}>inc</button>  
            <button id='dec' onClick={dec}>dec</button>  
        </>
    );
}

export default Counter;