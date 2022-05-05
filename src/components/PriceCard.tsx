import React from 'react'

interface PriceModel {
    name: string
    description: string
    features: string[]
    priceUSD?: string
    priceEUR?: string
    color: string
    textColor: string
}

function PriceCard({name, description, features, priceUSD, priceEUR, color, textColor}: PriceModel) {
    return(
        <div className='flex min-h-[428px] w-[320px] flex-col rounded-2xl p-8' style={{ backgroundColor: color, color: textColor}}>
            <h2 className="mb-5 text-2xl font-bold">{name}</h2>
            <div className="mb-3 flex items-end text-3xl">
                {priceEUR && priceUSD ? (
                    <>
                        <span>€{priceEUR} ${priceUSD}</span>
                    </>
                ) : (
                    'Free'
                )}
            </div>
            <p className="mb-6 text-lg">{description}</p>
            <ul className="mb-8 flex flex-col gap-y-2">
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