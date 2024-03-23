import "../styles/styles.css";
import Button from "./button"
import Left  from  '../assets/left.jpg';
import rigth from  '../assets/rigth.jpg';
import Apple_Basket from "./Apples_Basket";
import { useState } from "react";


  // let RigthApplesCount = 0;
  // let leftApllesCount = totalApples-RigthApplesCount;
const Applecouter=()=> {
       const totalApples =10;
      const  [RigthApplesCount , setRigthApplesCount] = useState(0);
      const [LeftApplesCount ,setLeftApplesCount]= useState(totalApples-RigthApplesCount);
       const leftApples = () =>{
          if (RigthApplesCount>0) {
              setRigthApplesCount(RigthApplesCount-1);
              setLeftApplesCount(LeftApplesCount+1);
          }
          
       }
       const rigthApples = () =>{
        if (LeftApplesCount>0) {
            setLeftApplesCount(LeftApplesCount-1);
            setRigthApplesCount(RigthApplesCount+1)
     }        
  }
  return (
    <section>
      <Apple_Basket cout={LeftApplesCount} name="Basket-1"/>
      <Button clicked={leftApples}  imgUrl={Left} buttonName="Left-Arrow"/>
      <Button clicked={rigthApples} imgUrl={rigth} buttonName="Rigth-Arrow"/>
      <Apple_Basket cout={RigthApplesCount} name="Basket -2"/>
    </section>
  )
}

export default Applecouter;


