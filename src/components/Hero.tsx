import { motion } from 'framer-motion'
import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'
import { Colors } from '../utils/Colors'
import DownloadAds from './DownloadAds'

function Hero() {
    const colors = new Colors()
    const [elementIsVisible, setElementIsVisible] = useState(false) 
    const leftImage = {
        true: {
            marginLeft: "10rem",
        },
        false: {
            marginLeft: "0rem",
        },
    };
    const rightImage = {
        true: {
            marginRight: "10rem",
        },
        false: {
            marginRight: "0rem",
        },
    }
    return (
        <VisibilitySensor onChange={(isVisible: boolean) => setElementIsVisible(isVisible)} offset={{bottom: 300}} partialVisibility={true}>
            <div className="wrapper flex flex-col items-center relative z-[3]" style={{ backgroundColor: colors.bgSecondary }}>
                <div className="headings flex flex-col items-center justify-center text-[3rem] text-center">
                    <span>Kanma</span>{" "}
                    <span><b>Personal Finance</b></span>
                    <span className="text-[20px] text-gray-400">
                        Track and manage your investments and subscriptions.
                    </span>
                    <div className='mt-[2rem] mb-[1rem]'>
                        <DownloadAds/>
                    </div>
                </div>
                <div className="flex flex-col items-center images relative w-[100%] mb-[22rem]">
                    <motion.img 
                        variants={leftImage}
                        animate={`${elementIsVisible}`}
                        transition={{
                            duration: 1,
                            type: "ease-out"
                        }}
                        src={require("../img/img_2.png")} 
                        alt="" 
                        className='absolute h-[31rem] ml-[10rem]'
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
                        className='absolute h-[31rem] mr-[10rem]'
                    />
                    <img className='absolute h-[31rem]' src={require("../img/img_1.png")} alt=""/>
                </div>
            </div>
        </VisibilitySensor>
    )
}

export default Hero