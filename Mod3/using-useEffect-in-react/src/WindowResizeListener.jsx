import { useEffect } from "react";


function WindowResizeListerner(){
    useEffect(() => {
        const handleResize = () => console.log("Window resized");
        window.addEventListener(
            "resize", handleResize
        );
        return () => {
            window.removeEventListener("resize", handleResize);
        };    
    }, [])
    return <p>Resize the window and check the console</p>;

}