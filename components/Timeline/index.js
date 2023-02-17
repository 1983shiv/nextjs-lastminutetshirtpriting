import Image from 'next/image'
import { styles } from "./index.module.css"
import Link from 'next/link'

const Timeline = ({ title, left, imgsrc, desc }) => {
    return (
        <div className={styles.timeline}>
            <div className={`${left ? "left" : "right"} container`}>
                <div className="content">
                    <div className="w-full cover">
                        <div className="shadow rounded-lg overflow-hidden">
                            <Link className="mt-2" href="/">
                                <Image
                                    className="w-full object-cover object-center overflow-hidden max-h-60"
                                    src={imgsrc}
                                    alt={title}
                                    width="400px"
                                    height="auto"
                                />

                                <div className="p-2">
                                    <h1 className="title-font text-lg font-medium text-shades-900 mb-3">
                                        {title}
                                    </h1>
                                    <p className="mb-2 p-2 leading-relaxed text-sm">{desc}</p>
                                </div>

                            </Link>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Timeline