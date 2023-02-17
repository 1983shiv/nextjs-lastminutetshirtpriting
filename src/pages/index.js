
import { Inter } from '@next/font/google'
import Faq from 'components/Faq'
import Col2 from "components/Col2"
import Col2Right from 'components/Col2Right'
import HeroSec1 from 'components/HeroSec1'
const inter = Inter({ subsets: ['latin'] })
import { colData, timelineData } from "../../data/coldata"
import Timeline from "../../components/Timeline/index"

export default function Home() {
  return (
    <>
      <HeroSec1 />

      <div class="lg:px-16 px-6 py-8 text-center">
        <h1 class="text-4xl font-bold my-2 py-2 italic text-shades-900">
          Fast T-Shirt Printing and Express Delivery
        </h1>
        <h4 class="mb-16 leading-relaxed text-xl font-normal">
          Customise your own t-shirts, hoodies and other personalised clothing garments and get them done
          same day with next day express delivery available.
        </h4>

        {colData && colData.map((item, index) => {
          if (item.left) {
            return (<Col2 key={index} title={item.title} imgsrc={item.imgsrc} desc={item.desc} />)
          } else {
            return (<Col2Right key={index} title={item.title} imgsrc={item.imgsrc} desc={item.desc} />)
          }

        })}
      </div>

      <Faq />
      <div className="lg:px-16 px-6 py-8 text-center">
        <h1 className="text-4xl font-bold my-2 py-2 italic text-shades-900">
          Fast T-Shirt Printing and Express Delivery
        </h1>
        <h4 className="mb-16 leading-relaxed text-xl font-normal">
          Customise your own t-shirts, hoodies and other personalised clothing garments and get them done
          same day with next day express delivery available.
        </h4>

        {timelineData && timelineData.map((item, index) => {
          return (<Timeline key={index} title={item.title} imgsrc={item.imgsrc} left={item.left} desc={item.desc} />)
        })}
      </div>
    </>
  )
}
