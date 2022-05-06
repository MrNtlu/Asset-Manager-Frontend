import React from 'react'

function Footer({isHomeVisible}: {isHomeVisible: boolean}) {
    const liStyle = "mt-[1rem] mr-[1rem] hover:cursor-pointer text-black"
    return (
        <div className="footer flex flex-col z-[1]">
            <div className="menu flex items-end">
                <ul className='flex w-[100%] justify-end text-base'>
                    {
                        isHomeVisible
                        ? <a href="/"><li className={liStyle}>Home</li></a>
                        : <></>
                    }
                    <a href="/privacy"><li className={liStyle}>Privacy Policy</li></a>
                    <a href="/terms"><li className={liStyle}>Terms & Policy</li></a>
                </ul>
            </div>
            <span className="text-[0.85rem] items-center text-center m-[1rem] text-black">
                Made with hate&nbsp;❤️&nbsp; I hate frontend&nbsp;😊
            </span>
        </div>
    )
}

export default Footer