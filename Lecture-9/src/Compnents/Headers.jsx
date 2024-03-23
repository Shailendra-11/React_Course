
import {NavLink } from "react-router-dom"
import vite from "../../public/vite.svg"
import Modal from "./Modal"
import { useState } from "react"
const Headers = () => {
    const [isOpen , setIsOpen] =useState(false)
    return (
        <header className="flex justify-between px-3 py-4 md:py-5 shadow-md  ">
            <img src={vite} alt="" />
            <ul className=" flex gap-7 md:gap-4">
                <li>
                    <NavLink className={({isActive})=> isActive?  'text-blue-800 underline  ' :''}   to="/">Home</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'text-blue-800 underline'  :''} to="/About">About</NavLink>
                </li>
                <li>
                    <NavLink className={({isActive})=> isActive ? 'text-blue-800 underline'  :''} to="/Contact">Contact</NavLink>
                </li>
                 <li>
                     <button onClick={()=> setisOpen(true)}>Sig in</button>
                     <Modal
            header={<div className="text-xl font-bold">Sign In</div>}
            footer={
              <div className="flex justify-end gap-4">
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-gray-300 px-6 py-2 font-semibold hover:bg-gray-400/80 active:bg-gray-400/60"
                >
                  Cancel
                </button>
                <button
                  onClick={() => setIsOpen(false)}
                  className="rounded-md bg-blue-300 px-6 py-2 font-semibold hover:bg-blue-400/80 active:bg-blue-400/60"
                >
                  Sign In
                </button>
              </div>
            }
            isOpen={isOpen}
            setIsOpen={setIsOpen}
          >
            <input
            placeholder="Username"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="text"
          />
          <input
            placeholder="Password"
            className="grow rounded border border-gray-600 px-2 py-1"
            type="password"
          />
          </Modal>
                 </li>
            </ul>
        </header>
    )
}

export default Headers
