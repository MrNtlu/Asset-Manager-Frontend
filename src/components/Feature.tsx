import { motion } from 'framer-motion';
import React, { useState } from 'react'
import VisibilitySensor from 'react-visibility-sensor'

function Feature({icon, title, description}:{icon: String, title: String, description: String}) {
    const [elementIsVisible, setElementIsVisible] = useState(false);
    const variant = {
        true: {
            transform: "scale(1)",
        },
        false: {
            transform: "scale(0.5)",
        },
    };
    return(
        <VisibilitySensor onChange={(isVisible: boolean) => setElementIsVisible(isVisible)}>
            <div className="feature flex items-center justify-center flex-col relative text-center mx-12 w-[20rem]">
                <motion.div 
                    variants={variant}
                    transition={{
                      duration: 1,
                      type: "ease-out",
                    }}
                    animate={`${elementIsVisible}`}
                    className="icon bg-[#081730] rounded-2xl p-4">
                    <img src={require(`../img/investment.png`)} alt="" className='w-[6rem]'/> {/* src={require(`../img/${icon}.png`)} */}
                    
                </motion.div>

                <span className="mt-5 text-xl">{title}</span>

                <span className="text-gray-400 mt-4">
                    {description}
                </span>
            </div>
        </VisibilitySensor>
    )
}

export default Feature