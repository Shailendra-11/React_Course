
const Button =({imgUrl ,buttonName , clicked}) =>{
    return(
    <button onClick={clicked} title={buttonName}>
         <img src={imgUrl} alt="buttonName" />
    </button>
    )
}

export default Button;