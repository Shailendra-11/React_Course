import { Outlet } from "react-router-dom"
import Headers from "./Compnents/Headers"
function App() {
  
  return (
    <>
    <Headers/>
    <Outlet/>  
    </>
  )
}

export default App
