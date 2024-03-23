
import './App.css';
import Counter from "./components/Counter"
import { ConterContext } from './context/Context';
import { useContext } from 'react';
function App() {
   const couterState = useContext (ConterContext)
    // console.log(couterState);
  return (
    <>
        <div className="heading">
            <h1>Count is  {couterState.count}</h1>
            <Counter/>
            <Counter/>
            <Counter/>
            <Counter/>
        </div>
       
    </>
  )
}

export default App
