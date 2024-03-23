
import './App.css'
import ItemCard from "./compnents/Card"
import Total from './compnents/Total'
function App() {
  return (
    <>
      <div className="App">
        <ItemCard name="Mackbook" price="450000" />
        <ItemCard name="pendrive" price="450" />
        <ItemCard name="Mobile-Phone" price="4500" />
        <ItemCard name="Watch" price="50000" />
        <Total/>
      </div>
    </>
  )
}

export default App
