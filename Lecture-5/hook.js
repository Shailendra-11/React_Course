import { useEffect, useState } from "react";


const Hook = () =>{
    const [windowSize , setwindow] = useState({width:window.innerWidth ,  heigth:window.innerHeight})
    useEffect(()=>{
        window.addEventListener('resize', () =>{
            setwindow({
                width:window.innerWidth,
                heigth:window.innerHeight,});
        })
    })
    return(
        <>
         <h1>{windowSize.width}*{windowSize.heigth}</h1>
        
        </>
    );
}


export default Hook;