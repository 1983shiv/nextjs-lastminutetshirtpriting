import Logo from "./Logo"
import Link from "next/link"

const Footer = () => {
  return (

    <footer className="text-gray-600 body-font bg-gray-50">
      <div className="container px-5 py-24 mx-auto">
        <div className="flex flex-wrap md:text-left text-center order-first">
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <Logo width="140" />
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-2xl text-gray-900 tracking-widest mb-3">Useful Links</h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-600 hover:text-gray-800 hover:font-bold" href="/">Tshirt Printing</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800 hover:font-bold" href="/">Tshirt Printing Techniques</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800 hover:font-bold" href="/">Last Minute DTG Tshirt Printing</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800 hover:font-bold" href="/">Case Studies</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800 hover:font-bold" href="/">Blog</Link>
              </li>
            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-2xl text-gray-900 tracking-widest mb-3">Legal</h2>
            <nav className="list-none mb-10">
              <li>
                <Link className="text-gray-600 hover:text-gray-800 hover:font-bold" href="/">Privacy Policy</Link>
              </li>
              <li>
                <Link className="text-gray-600 hover:text-gray-800 hover:font-bold" href="/">Terms & Conditions</Link>
              </li>

            </nav>
          </div>
          <div className="lg:w-1/4 md:w-1/2 w-full px-4">
            <h2 className="title-font font-bold text-2xl text-gray-900 tracking-widest mb-3">Aditional Info</h2>
            <div className="flex xl:flex-nowrap md:flex-nowrap lg:flex-wrap flex-wrap justify-center items-end md:justify-start">

              <button className="lg:mt-2 xl:mt-0 flex-shrink-0 inline-flex text-white bg-orange-600 border-0 py-2 px-6 focus:outline-none hover:transform hover:scale-125 rounded">Quick Quote</button>
            </div>

          </div>
        </div>
      </div>
      <div className="bg-gray-100">
        <div className="container px-5 py-6 mx-auto flex items-center sm:flex-row flex-col">
          <p className="text-sm text-gray-500 sm:ml-6 sm:mt-0 mt-4">?? 2023 Last Minute T-Shirt Printing All rights Reserved</p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link className="text-gray-500 hover:bg-orange-600 hover:text-white hover:scale-110" href="/">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-gray-500 hover:bg-orange-600 hover:text-white hover:scale-110" href="/">
              <svg fill="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-gray-500 hover:bg-orange-600 hover:text-white hover:scale-110" href="/">
              <svg fill="none" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" className="w-5 h-5" viewBox="0 0 24 24">
                <rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
                <path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
              </svg>
            </Link>
            <Link className="ml-3 text-gray-500 hover:bg-orange-600 hover:text-white hover:scale-110" href="/">
              <svg fill="currentColor" stroke="currentColor" strokeLinecap="round" strokeLinejoin="round" strokeWidth="0" className="w-5 h-5" viewBox="0 0 24 24">
                <path stroke="none" d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"></path>
                <circle cx="4" cy="4" r="2" stroke="none"></circle>
              </svg>
            </Link>
          </span>
        </div>
      </div>
    </footer>
  )
}

export default Footer