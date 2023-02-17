
import { Inter } from '@next/font/google'
import Faq from 'components/Faq'
import HeroSec1 from 'components/HeroSec1'
const inter = Inter({ subsets: ['latin'] })
import { colData, timelineData } from "../../data/coldata"
import Timeline from "../../components/Timeline"

export default function Home() {
  return (
    <>
      <HeroSec1 />
      <h1 className='text-4xl'>Hello World</h1>
      <Faq />
      <div className="lg:px-16 px-6 py-8 text-center">
        <h1 className="text-4xl font-bold my-2 py-2 italic text-shades-900">
          Fast T-Shirt Printing and Express Delivery
        </h1>
        <h4 className="mb-16 leading-relaxed text-xl font-normal">
          Customise your own t-shirts, hoodies and other personalised clothing garments and get them done
          same day with next day express delivery available.
        </h4>

        {timelineData && timelineData.map((item) => {
          <Timeline title={item.title} imgsrc={item.imgsrc} left={item.left} desc={item.desc} />
        })}
      </div>
    </>
  )
}
