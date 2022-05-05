import React from 'react'
import { Colors } from '../utils/Colors'

function Header() {
  // const liStyle = "mr-[3rem] hover:cursor-pointer text-2xl"
  const colors = new Colors()
  return (
    <div className="header flex justify-center text-[0.8rem] p-[0.2rem]" style={{ backgroundColor: colors.bgSecondary }}> 
      <img src={require("../img/logo.png")} alt="" className='flex justify-end w-[120px] h-[120px]'/>
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