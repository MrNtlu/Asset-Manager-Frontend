import React from 'react'

function DownloadAds() {
    const downloadImgStyle = 'border-[2px] border-[#232A4E] rounded-[13px] h-[3rem] w-[10rem]'
    return (
        <div className="download">
            <div className="download_images flex">
                <a href="https://apps.apple.com/tr/app/kanma-personal-finance/id1629419797"><img src={require("../img/app_store.png")} alt="" className={downloadImgStyle + ` mr-[1.6rem]`}/></a>
                <a href='https://play.google.com/store/apps/details?id=com.mrntlu.kantan'><img src={require("../img/google_play.png")} alt="" className={downloadImgStyle}/></a>
            </div>
        </div>
    )
}

export default DownloadAds