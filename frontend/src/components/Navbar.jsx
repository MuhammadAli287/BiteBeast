import { useState } from "react";
import { Link } from "react-router-dom";

function Navbar (){

    const [isOpen, setIsOpen] =useState(false)
    return(
        <>
        <div className="flex justify-between p-6 bg-orange-400/90 items-center">
            <div className="text-4xl font-bold font-serif ">Craving  <span className="text-xl"><i>by Ali</i></span>🥢</div>
            <nav className=" hidden md:flex gap-10 font-bold items-center">
                <Link to='/' className="hover:text-white hover:border-b-2 hover:border-b-black" >Home</Link>
                <Link to='/about' className="hover:text-white hover:border-b-2 hover:border-b-black" >About</Link>
                <Link to='/menu' className="hover:text-white hover:border-b-2 hover:border-b-black" >Menu</Link>
                <Link to='/contact' className="hover:text-white hover:border-b-2 hover:border-b-black" >Contact</Link>

            </nav>
           
            {/* Hamburger */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden w-14 h-14 rounded-full 
                       bg-white/20 backdrop-blur-md 
                       border border-white/40
                       flex items-center justify-center
                       text-3xl"
          >
            {isOpen ? "✕" : "☰"}
          </button>

        </div>

 {isOpen && (
        <div
          className="md:hidden 
                     absolute top-24 left-5 right-5
                     z-50
                     p-6
                     rounded-3xl
                     bg-gradient-to-r from-yellow-300/50 to-yellow-300/50
                     backdrop-blur-xl
                     border border-white/40
                     shadow-xl
                     fixed
                     "
                     
        >

          <div className="flex flex-col gap-6">

            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-yellow-300/60
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl font-semibold
                         text-gray-700
                         hover:bg-gradient-to-r from-yellow-200/90 to-gray-500
                         hover:border-1 hover:border-gray-300 hover:shadow-xl"
            >
              Home
            </Link>

            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-yellow-300/60
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl font-semibold
                         text-gray-700
                          hover:bg-gradient-to-r from-yellow-200/90 to-gray-500
                         hover:border-1 hover:border-gray-300 hover:shadow-xl"
            >
              About
            </Link>

            <Link
              to="/menu"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-yellow-300/60
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl font-semibold
                         text-gray-700
                          hover:bg-gradient-to-r from-yellow-200/90 to-gray-500
                         hover:border-1 hover:border-gray-300 hover:shadow-xl"
            >
             Menu
            </Link>

            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="w-full py-5
                         rounded-2xl
                         bg-yellow-300/60
                         backdrop-blur-md
                         border border-white/40
                         text-center
                         text-2xl  font-semibold
                         text-gray-700
                          hover:bg-gradient-to-r from-yellow-200/90 to-gray-500
                         hover:border-1 hover:border-gray-300 hover:shadow-xl"
            >
              Contact
            </Link>

          </div>

        </div>
      )}

        </>
    )
}
export default Navbar;