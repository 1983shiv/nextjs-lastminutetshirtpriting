import React, { useState } from 'react'
import Logo from "./Logo"
import Link from 'next/link'

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(true)

    const toggleNav = () => {
        setIsOpen(!isOpen);
    }

    return (
        <header className="lg:px-16 px-6 bg-shades-50 flex flex-wrap items-center lg:py-2 py-2">
            <Logo width="250" />

            <label htmlFor="menu-toggle" className="pointer-cursor lg:hidden block" onClick={toggleNav}>
                <svg className="fill-current text-shades-900" xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 20 20"><title>menu</title><path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" /></svg></label>
            <input className={isOpen ? "hidden" : ""} type="hidden" id="menu-toggle" />

            <div className={`${isOpen ? 'hidden' : ''} lg:flex lg:items-center lg:w-auto w-full"`} id="menu">
                <nav>
                    <ul className="lg:flex items-center justify-between text-base text-shades-700 pt-4 lg:pt-0" >
                        <li onClick={toggleNav}>
                            <Link
                                className="lg:p-4 py-3 px-0 block border-b-2 font-2xl border-transparent hover:border-main-400"
                                href="/">Home</Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link
                                className="lg:p-4 py-3 px-0 block border-b-2 font-2xl border-transparent hover:border-main-400"
                                href="/">Custom T-Shirts
                            </Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link
                                className="lg:p-4 py-3 px-0 block border-b-2 font-2xl border-transparent hover:border-main-400"
                                href="/">Printing Techniques
                            </Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link
                                className="lg:p-4 py-3 px-0 block border-b-2 font-2xl border-transparent hover:border-main-400"
                                href="/">Locations
                            </Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link
                                className="lg:p-4 py-3 px-0 block border-b-2 font-2xl border-transparent hover:border-main-400"
                                href="/">Case Studies
                            </Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link
                                className="lg:p-4 py-3 px-0 block border-b-2 font-2xl border-transparent hover:border-main-400"
                                href="/">Blog
                            </Link>
                        </li>
                        <li onClick={toggleNav}>
                            <Link
                                className="lg:px-4 lg:py-2 py-2 px-0 block font-bold bg-orange-600 rounded-md text-white border-transparent hover:border-main-400 hover:bg-slate-200 hover:text-orange-600"
                                href="/">Get a Quote
                            </Link>
                        </li>
                    </ul>
                </nav>
            </div>
        </header>
    )
}

export default Navbar