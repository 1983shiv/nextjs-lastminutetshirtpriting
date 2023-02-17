import Image from 'next/image'

const Col2Right = ({ title, imgsrc, desc }) => {
  return (
    <section className="text-gray-600 body-font">
    <div className="container mx-auto flex px-5 py-6 md:flex-row flex-col items-center">      
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">{title}
        </h1>
        <p className="mb-8 leading-relaxed">{desc}</p>
        <div className="flex justify-center">
            <button className="inline-flex font-bold bg-orange-600 text-white border-0 py-2 px-6 focus:outline-none  rounded text-lg">Ask for Quick Quote</button>  
        </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6 mb-10 md:mb-0">
      <Image className="object-cover object-center rounded" width="500" height="300" alt="hero" src={`/${imgsrc}`} />
      </div>
    </div>
  </section>
  )
}

export default Col2Right