import Image from "next/image"
import logo from "../public/logo-lastminutetshirtprinting-dark.png"
import Link from "next/link"

const Logo = ({ width = 'auto', height = 'auto' }) => {
    console.log("width", width)
    return (
        <div class="flex-1 flex justify-between items-start">
            <Link href="/" class="flex flex-nowrap inline">
                <Image className="object-cover object-center rounded" width={width} height={height} alt="hero" src={logo} />
            </Link>
        </div>
    )
}

export default Logo