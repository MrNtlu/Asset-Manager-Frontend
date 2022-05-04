import { motion } from 'framer-motion'
import React, { RefObject, useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { Colors } from '../utils/Colors'
import DownloadAds from './DownloadAds'

function Hero() {
    const colors = new Colors()
    const [elementIsVisible, setElementIsVisible] = useState(false) 
    const leftImage = {
        true: {
            left: "19rem",
        },
        false: {
            left: "13rem",
        },
    };
    const rightImage = {
        true: {
            left: "7rem",
        },
        false: {
            left: "13rem",
        },
    }
    return (
        <VisibilitySensor onChange={(isVisible: boolean) => setElementIsVisible(isVisible)} minTopValue={300}>
            <div className="wrapper flex items-center justify-between px-[5rem] rounded-b-[5rem] w-[100%] h-[35rem] relative z-[3]">
                <div className="headings flex flex-col items-start justify-center h-[100%] text-[3rem]">
                    <span>Kanma</span>{" "}
                    <span><b>Investment & Subscription</b></span>
                    <span className="text-[20px] text-gray-400">
                        Track and manager your investments and subscriptions.
                    </span>
                    <div className='mt-[2rem]'>
                        <DownloadAds/>
                    </div>
                </div>
                <div className="images relative w-[50%]">
                    <motion.img 
                        variants={leftImage}
                        animate={`${elementIsVisible}`}
                        transition={{
                            duration: 1,
                            type: "ease-out"
                        }}
                        src={require("../img/img_2.png")} 
                        alt="" 
                        className='absolute top-[-15rem] left-[19rem] h-[30rem]'
                    />
                    <motion.img 
                        variants={rightImage}
                        animate={`${elementIsVisible}`}
                        transition={{
                        type: "ease-out",
                        duration: 1,
                        }}
                        src={require("../img/img_3.png")} 
                        alt="" 
                        className='absolute top-[-15rem] left-[7rem] h-[30rem]'
                    />
                    <img src={require("../img/img_1.png")} alt="" className='absolute top-[-15rem] left-[13rem] h-[30rem]'/>
                </div>
            </div>
        </VisibilitySensor>
    )
}

export default Hero