import Image from 'next/image'
import img1 from "../public/personalised-clothing.png"

const HeroSec1 = () => {
  return (
    <section className="text-white body-font bg-[#10243D]">
    <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
      <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
        <h1 className="title-font sm:text-4xl text-6xl mb-4 font-bold text-white">Your brand on anything 
          <br className="hidden lg:inline-block" />you can imagine
        </h1>
        <p className="mb-8 leading-relaxed text-xl">Personalised clothing is one of the best ways to promote your brand. We offer a wide range of high quality products that you can customise and get delivered to your door. It couldn’t be easier to show case your brand</p>
        <div className="flex justify-center transform hover:scale-200">
          <button className="inline-flex font-bold bg-gray-50 text-[#10243D] hover:bg-orange-600 hover:text-white border-0 py-2 px-6 focus:outline-none  rounded text-lg">Ask for Quick Quote</button>
          </div>
      </div>
      <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
        <Image className="object-cover object-center rounded" width="auto" height="auto" alt="hero" src={img1} />
      </div>
    </div>
  </section>
  )
}

export default HeroSec1