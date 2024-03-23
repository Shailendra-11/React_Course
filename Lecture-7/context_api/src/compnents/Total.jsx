import { useContext } from "react";
import {CartContext, useCart } from "../context/Cardcontext";

const Total =()=>{
   //  const cart = useCart();
   const cart  = useContext(CartContext)
    const total = cart.item.reduce((a,b)=> a+b.price , 0)
    return(
       <div className="total">
             
            <h1>Card</h1>
            {
               cart  && cart.item.map((item)=>(
                <li>
                    {item.name} - ${item.price}
                </li>
               ))
            }
            <h5>{total}</h5>

       </div>
    );
}

export default Total