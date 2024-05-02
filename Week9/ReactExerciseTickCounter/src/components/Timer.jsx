import React, { useEffect, useState } from "react";


function formatTime(totalSeconds) {
    const minutes = Math.floor(totalSeconds / 60);
    const seconds = totalSeconds % 60;
    const minutesStr = minutes.toString().padStart(2, '0'); 
    const secondsStr = seconds.toString().padStart(2, '0'); 
    return `${minutesStr}:${secondsStr}`; 
  } 

export default function Timer(){
    const [minutes, setMinutes] = useState(0);
    const [seconds, setSeconds] = useState(0);
    const [started, setStarted] = useState(false);
    const [time, setTime] = useState(0);

    
    function startTimer(){
        const minutesToSeconds = minutes *60;
        const totalTime = minutesToSeconds + seconds;
        setTime(totalTime);
        setStarted(true);
    }

    
    function pauseTimer(){
        setStarted(false);
        let mins = Math.floor(time / 60); 
        let secs = time % 60; 
        setMinutes(mins); 
        setSeconds(secs);
    }

    //Function that resets the timer.
    function resetTimer(){
        setStarted(false);
        setMinutes(0);
        setSeconds(0);
        setTime(0);
    }

   
    useEffect(() => {
        let interval; 

        if(started && time > 0){ 
            interval = setInterval(() => {
                setTime(prevTime => prevTime - 1);
            }, 1000);
        } else if(time === 0){
            setStarted(false); //If the time is 0, we stop the timer.
        }

        
        return () => {
            clearInterval(interval);
        }

    }, [started,time]) 

    return (
        <>
            <div>
                <h2>Time Remaining: {formatTime(time)}</h2>
            </div>
            <div>
                <input type="number" placeholder="Minutes" value={minutes} onChange={(e) => setMinutes(parseInt(e.target.value))}></input>
                <input type="number" placeholder="Seconds" value={seconds} onChange={(e) => setSeconds(parseInt(e.target.value))}></input>
                {!started && <button onClick={startTimer}>Start</button>}
                {started && <button onClick={pauseTimer}>Pause</button>}
                <button onClick={resetTimer}>Reset</button>
            </div>
        </>
    );
}