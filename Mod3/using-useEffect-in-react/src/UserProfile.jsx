import { useEffect, useState } from "react"



function UserProfile({userId}){
const[user, setUser]=useState(null);

useEffect(() => {
        async function featchData (){
            const r = await fetch(URL)
            const data = await r.json();
            setUser(data)
        }
        featchData();
    }, [userId]);

    useEffect(() => {
        console.log("Component mounted")
        return () => {
            console.log("Cleanup on unmount")
        };    
    }, []);

    return user ? <h1>{user.name}</h1> : <p>Loading..</p>

    }