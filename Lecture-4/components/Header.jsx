import { useState } from "react"

export default function Header() {
  const [isdark ,setisdark] = useState(JSON.parse(localStorage.getItem('isDarkMode')))
   if(isdark){
    document.body.classList.add('dark')
   }else{
    document.body.classList.remove('dark')
   }
  return (
    <header className="header-container">
      <div className="header-content">
        <h2 className="title">
          <a href="/">Where in the world?</a>
        </h2>
        <p className="theme-changer" onClick={()=>{
         
          setisdark(!isdark);
          localStorage.setItem('isDarkMode' ,!isdark)
        }}>
          <i className={`fa-solid fa-${isdark ? 'moon':'sun'}` }/>
          &nbsp;&nbsp;{isdark ? "Light":'Dark'}Mode
        </p>
      </div>
    </header>
  )
}
