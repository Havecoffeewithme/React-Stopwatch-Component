import React,{useState,useEffect, useRef} from "react"


function Stopwatch(){

    const [isRunning, setRunning] = useState(false);

    const [elapsedTime, setElapsedTime] = useState(0);

    const intervalIdRef = useRef(null);
    const startTimeRef = useRef(0);

    useEffect(() => {

        if(isRunning){
            intervalIdRef.current = setInterval(()=> {
                setElapsedTime(Date.now()- startTimeRef.current);
            }, 10)
        }

        return () => {
            clearInterval(intervalIdRef.current);
        }

    }, [isRunning]

    );

    function start(){
        setRunning(true);
        startTimeRef.current = Date.now() - elapsedTime;

    }

    function stop(){
        setRunning(false);

    }

    function reset(){
        setElapsedTime(0);
        setRunning(false);

    }

    function formatTime(){

        let hours = Math.floor(elapsedTime/ (100 * 60 * 60));
        let minutes = Math.floor(elapsedTime/ (100 * 60) % 60);
        let seconds = Math.floor(elapsedTime/ (100) % 60);
        //let hours = Math.floor(elapsedTime/ (100 * 60 * 60));

        hours = String(hours).padStart(2,"0");
        minutes = String(minutes).padStart(2,"0");
        seconds = String(seconds).padStart(2,"0");




        return `${hours}:${minutes}:${seconds}`;

    }




    return(<div className="stopwatch">
        <div className="display">{formatTime()}</div>
        <div className="controls">
            <button onClick={start} className="start-button">Start</button>
            <button onClick={stop} className="start-button">Stop</button>
            <button onClick={reset} className="start-button">reset</button>
        
        </div>

    </div>);

}


export default Stopwatch;