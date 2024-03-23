import { useContext } from "react";
import {ConterContext} from "../context/Context"
const Conuter = () =>{
    const counterConrtext = useContext(ConterContext)
    return (
         <div className="conter">
            <button onClick={()=>{counterConrtext.setCount(counterConrtext.count+1)}}>Increment</button>
            <button onClick={()=>
                {counterConrtext.setCount(counterConrtext.count-1)}}>Decrement</button>

         </div>

    );
}

export default Conuter;