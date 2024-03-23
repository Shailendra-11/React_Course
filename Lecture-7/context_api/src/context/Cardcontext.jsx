import { useState } from "react";
import { createContext } from "react";

export const CartContext  = createContext(null);
export const useCart=()=>{
       const cart = useContext(CartContext);
       return cart;
}

 const CartProvider = (props) =>{
    const [item ,setitem] = useState([])
    return(
        <CartContext.Provider value={{item ,setitem}}>
         {props.children}
        </CartContext.Provider>

    );
}

export  default CartProvider;