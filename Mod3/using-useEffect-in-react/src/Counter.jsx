import { useEffect, useState } from "react"


export default function Counter (){
const[count, setCount] = useState(0);

useEffect( () => {
    const interval = setInterval(() => {
        setCount(prevCount => prevCount + 1);
    }, 1000); // using a call back function of the setter value in order to make sure that you are using the current state since state is asynchronous. 
    // if its not used the app can render stale data.
    return () => clearInterval(interval)   
}, []);
 return <h1>Count: {count}</h1>
 
}