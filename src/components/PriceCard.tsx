import React from 'react'

interface PriceModel {
    name: string
    description: string
    features: string[]
    priceUSD?: string
    priceEUR?: string
    color: string
}

function PriceCard({name, description, features, priceUSD, priceEUR, color}: PriceModel) {
    return(
        <div className='flex min-h-[428px] w-[320px] flex-col rounded-3xl p-8' style={{ backgroundColor: color }}>
            <h2 className="mb-5 text-xl font-medium">{name}</h2>
            <div className="mb-5 flex items-end text-4xl">
                {priceEUR && priceUSD ? (
                    <>
                        <span>€{priceEUR} ${priceUSD}</span>
                    </>
                ) : (
                    'Free'
                )}
            </div>
            <p className="mb-5">{description}</p>
            <ul className="mb-10 flex flex-col gap-y-2">
                {features.map((feature) =>
                    <li className="flex items-center text-xl">
                        <img src={require("../img/check.png")} alt="" className='mr-3 h-4 w-4'/>
                        {feature}
                    </li>
                )}
            </ul>
        </div>
    )
}

export default PriceCard