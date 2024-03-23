
import { useContext } from "react";
import {CartContext, useCart } from "../context/Cardcontext";
const ItemCard = (props) => {
    // const cart = useCart();
    const cart = useContext(CartContext)

  console.log(cart);
    return (
        <div className="itemCard">
            <h3>{props.name}</h3>
            <h5>price : ${props.price}</h5>
            <button onClick={()=>{
                cart.setitem([...cart.item,
                    {name:props.name, price:props.price}])
            }}>Add to Cart</button>
        </div>
    );
}

export default ItemCard;