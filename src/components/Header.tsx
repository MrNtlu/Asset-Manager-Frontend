import React, { RefObject } from 'react'
import { Colors } from '../utils/Colors'


function Header() {
  const colors = new Colors()
  const liStyle = "mr-[3rem] hover:cursor-pointer text-2xl"
  return (
    <div className="header flex justify-center text-[0.8rem] p-[0.2rem]"> 
      <img src={require("../img/investment.png")} alt="" className='flex justify-end w-[100px] h-[100px]'/>
      <div className="menu flex">
            <ul className='flex w-[100%] justify-between'>
                {/* <li className={liStyle}>Home</li>
                <li className={liStyle}>About</li>
                <li className={liStyle}>Pricing</li> */}
            </ul>
        </div>
    </div>
  )
}

export default Header