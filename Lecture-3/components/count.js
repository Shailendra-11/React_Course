import { useState } from "react";
const Count = ()=>{
    const [count ,setCount]  = useState(0);
    // const arraysfist  =arraySet[0]
    // const arraysSecond = arraySet[1];
    console.log(useState);
    return(
        <div className="count">
            <h2>{count}</h2>
            <button onClick={()=>{
                 setCount(count+1);
            }}>Increse</button>
        </div>



    );
}

export default Count;