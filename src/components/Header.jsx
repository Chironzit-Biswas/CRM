import {Link, NavLink} from "react-router";
import {useState} from "react";
import logo from "../assets/CRM Shouldn’t suck website logo final 1.png"

export const Header = () => {
    const [open, setOpen] =useState(false)
    const myNav=<>
        <NavLink to={'/'}>CRM Self-Assessment</NavLink>
        <NavLink to={'/'}>The Book</NavLink>
        <NavLink to={'/'}>About Empellor CRM</NavLink>
        <NavLink to={'/'}>Resources</NavLink>
    </>
   
    return (
       
            <nav className="  mx-auto flex items-center border-2 justify-between px-6 md:px-16 lg:px-24 xl:px-32 py-4 border-b border-gray-300 bg-white relative transition-all">

                {/* Desktop Menu */}
                {/*logo start */}
                <div>
                    <Link to="/" >
                        <img src={logo} className={'w-[60%]'} alt=""/>
                    </Link>
                </div>
                {/*logo End*/}

               {/*Menu Start*/}
                <div className="hidden sm:flex items-center gap-8 text-black font-semibold ">
                    {myNav}
                </div>
                {/*Menu End*/}

                {/*Button Start*/}
                <div className={'flex gap-2'}>
                    <button className="cursor-pointer hidden md:flex px-8 py-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-xl">
                        Login
                    </button>
                    <button className="cursor-pointer hidden md:flex px-8 py-2 text-black outline-1 outline-red-500 rounded-xl ">
                        Sign Up
                    </button>
                </div>
                {/*Button End*/}

                <button onClick={() => open ? setOpen(false) : setOpen(true)} aria-label="Menu" className="sm:hidden">
                    {/* Menu Icon SVG */}
                    <svg width="21" height="15" viewBox="0 0 21 15" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <rect width="21" height="1.5" rx=".75" fill="#426287" />
                        <rect x="8" y="6" width="13" height="1.5" rx=".75" fill="#426287" />
                        <rect x="6" y="13" width="15" height="1.5" rx=".75" fill="#426287" />
                    </svg>
                </button>

                {/* Mobile Menu */}
                <div className={`${open ? 'flex' : 'hidden'} absolute top-[60px] left-0 w-full bg-white shadow-md py-4 flex-col items-start gap-2 px-5 text-sm md:hidden`}>
                    {myNav}
                    <button className="cursor-pointer lg:hidden  px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                        Login
                    </button>
                    <button className="cursor-pointer lg:hidden  px-6 py-2 mt-2 bg-indigo-500 hover:bg-indigo-600 transition text-white rounded-full text-sm">
                        Sign Up 
                    </button>
                </div>

            </nav>
      
    )
}
