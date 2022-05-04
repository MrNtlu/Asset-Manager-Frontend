import React, { RefObject } from 'react'
import { Colors } from '../utils/Colors';
import Feature from './Feature';

function Descriptions() {
    const colors = new Colors()
    return(
        <div className="flex flex-col items-center justify-start px-[5rem] h-[45rem] pt-[8rem] relative z-[2] bg-[#000000BF]">
            <div className="headline mt-7 flex flex-col items-center text-[2rem]">
                <span>Kanma will help you track your investments and subscriptions</span>
            </div>
            <div className="feature flex items-center justify-around mt-[6rem] w-[100%]">
                <Feature icon="Group 2" title="Investments" description="Track all your investments in one app."/>
                <Feature icon="music icon" title="Subscriptions" description="Never miss subscription's payment time."/>
                <Feature icon="Group 4" title="Statistics" description="Get detailed statistics for investments, subscriptions and credit cards."/>
            </div>
        </div>  
    )
}

export default Descriptions