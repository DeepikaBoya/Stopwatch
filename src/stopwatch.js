import {useEffect,useState,useRef} from 'react'

const Stopwatch=()=>
{
    const [currentTime,setCurrentTime]=useState(0);

   
    useEffect(()=>
    {
       return()=>
       {
        clearInterval(ref.currentTime)
       }
    },[])

    const handleStart=()=>
    {
        ref.currentTime=  setInterval(()=>
        {
         setCurrentTime(prev=>prev+1)
         console.log(currentTime)
        },1000) 
    }
    const handleStop=()=>
    {
        clearInterval(ref.currentTime)
    }
    const handlerestart=()=>
    {
clearInterval(ref.currentTime);
setCurrentTime(0)
    }
    let ref=useRef();

  
    return(
       
<div>
    <h1>{currentTime}</h1>
    <button onClick={handleStart}>start</button>
    <button onClick={handleStop}>stop</button>
    <button onClick={handlerestart}>Restart</button>
</div>
       
    )
}
export default Stopwatch;