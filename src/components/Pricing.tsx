import React, { RefObject } from 'react'
import { Colors } from '../utils/Colors'
import PriceCard from './PriceCard'

function Pricing() {
    const colors = new Colors()
    return(
        <div className='flex flex-col items-center bg-black p-4'>
            <div className="mb-2 mt-12 text-center">
                <h1 className="mb-4 text-[6rem] text-white">Pricing</h1>
                <p className="text-lg text-white">Choose the right pricing for you</p>
            </div>
            <div className="flex flex-col gap-8 p-10 xl:flex-row">
                <PriceCard 
                    color={colors.primaryColor} 
                    name="Basic" 
                    description="Free tier with limitations" 
                    features={["10 Investments", "5 Subscriptions", "3 Credit Cards", "Weekly Stats"]}
                />
                <PriceCard 
                    color="#78E3FC" 
                    name="Monthly" 
                    description="Free tier with limitations" 
                    features={["10 Investments", "5 Subscriptions", "3 Credit Cards", "Weekly Stats"]}
                    priceUSD="0.99"
                    priceEUR='0.89'
                />
                <PriceCard 
                    color="#78E3FC" 
                    name="Annual" 
                    description="Free tier with limitations" 
                    features={["10 Investments", "5 Subscriptions", "3 Credit Cards", "Weekly Stats"]}
                    priceUSD="3.99"
                    priceEUR='4.49'
                />
                <PriceCard 
                    color="#78E3FC" 
                    name="Lifetime" 
                    description="Free tier with limitations" 
                    features={["10 Investments", "5 Subscriptions", "3 Credit Cards", "Weekly Stats"]}
                    priceUSD="6.99"
                    priceEUR='6.59'
                />
            </div>
        </div>
    )
}

export default Pricing