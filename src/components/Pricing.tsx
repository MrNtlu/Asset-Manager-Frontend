import React from 'react'
import { Colors } from '../utils/Colors'
import PriceCard from './PriceCard'

function Pricing() {
    const colors = new Colors()
    return(
        <div className='flex flex-col items-center' style={{ backgroundColor: colors.bgSecondary }}>
            <h2 className="pt-10 text-[5rem] text-white">Pricing</h2>
            <div className="gap-6 p-10 grid xl:grid-cols-4 lg:grid-cols-2 md:grid-cols-2">
                <PriceCard
                    color={colors.bgPrimary}
                    textColor="#FFFFFF" 
                    name="Basic" 
                    description="Free tier with limitations" 
                    features={["10 Investments", "5 Subscriptions", "10 Daily Transactions", "3 Credit Cards", "2 Bank Accounts", "Weekly Stats"]}
                />
                <PriceCard 
                    color="#FFFFFF"
                    textColor="#000000"
                    name="Monthly" 
                    description="Premium Membership,&nbsp;monthly." 
                    features={["Unlimited Investments", "Unlimited Subscriptions", "Unlimited Transactions", "Unlimited Credit Cards", "Unlimited Bank Accounts", "Increased Watchlist Limit", "Subscription Reminder", "More soon..."]}
                    priceUSD="0.99"
                    priceEUR='0.89'
                />
                <PriceCard 
                    color="#FFFFFF"
                    textColor="#000000"
                    name="Annual" 
                    description="Premium Membership,&nbsp;annual." 
                    features={["Unlimited Investments", "Unlimited Subscriptions", "Unlimited Transactions", "Unlimited Credit Cards", "Unlimited Bank Accounts", "Increased Watchlist Limit", "Subscription Reminder", "Better monthly price", "More soon..."]}
                    priceUSD="3.99"
                    priceEUR='4.49'
                />
                <PriceCard 
                    color={colors.bgAccent}
                    textColor="#FFFFFF"
                    name="Lifetime" 
                    description="Premium Membership,&nbsp;lifetime." 
                    features={["Unlimited Investments", "Unlimited Subscriptions", "Unlimited Transactions", "Unlimited Credit Cards", "Unlimited Bank Accounts", "Increased Watchlist Limit", "Subscription Reminder", "Lifetime access", "Best price", "More soon..."]}
                    priceUSD="6.99"
                    priceEUR='6.59'
                />
            </div>
        </div>
    )
}

export default Pricing