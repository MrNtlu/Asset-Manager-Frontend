import React from 'react'
import Feature from './Feature';

function Descriptions() {
    return(
        <div className="flex flex-col items-center justify-start px-[5rem] p-[5rem] relative z-[2] pt-[6rem] bg-[#FFFFFF]">
            <h2 className="pt-10 text-[5rem] text-black">Features</h2>
            <div className="headline flex flex-col text-center items-center text-[1.4rem] mt-[0.5rem] text-black">
                <span>Kanma will help you track your investments and subscriptions</span>
            </div>
            <div className="feature mt-[5rem] grid lg:grid-cols-3 sm:grid-cols-1 lg:gap-0 gap-6">
                <Feature icon="investment" title="Investments" description="Track all your investments in one app."/>
                <Feature icon="subscription" title="Subscriptions" description="Never miss subscription's payment time."/>
                <Feature icon="statistics" title="Statistics" description="Get detailed statistics for investments, subscriptions and credit cards."/>
            </div>
        </div>  
    )
}

export default Descriptions