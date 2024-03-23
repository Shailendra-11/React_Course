import { createContext, useState } from "react";

export const ConterContext =createContext(null);


export const ConterProvider = (props) =>{

    const [count , setCount] = useState(0)
    return(
        <ConterContext.Provider value={{count ,setCount}}>
            {props.children}
        </ConterContext.Provider>

    );
}