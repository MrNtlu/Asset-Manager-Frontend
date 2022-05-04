import React from 'react'
import DownloadAds from './DownloadAds';

function Download() {
    return(
        <div className="flex flex-col items-center justify-start bg-[#020917] p-[6rem] relative z-[0] rounded-b-[5rem]">
            <div className="headline mt-7 flex flex-col items-center text-[2rem]">
                <span>Download The Best Music</span>
                <span>
                <b>App Now!</b>
                </span>
                <span className="text-[1rem] text-gray-400 px-[15rem] text-center mt-[1rem]">
                Duis feugiat congue metus, ultrices vulputate nibh viverra eget.
                Vestibulum ullamcorper volutpat varius.
                </span>
            </div>
            <div className="mt-14">
                <DownloadAds />
            </div>
        </div>
    )
}

export default Download