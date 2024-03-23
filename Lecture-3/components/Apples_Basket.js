
const Apple_Basket = ({cout, name })=>{
    return(
       <div>
            <h1>
                <span>{cout}</span>
            </h1>
             <p>{name} {cout===10 && ('full')} {cout===0 && '(empty)'}</p>
       </div>
    );
}

export default  Apple_Basket;