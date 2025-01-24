import React from 'react'
import { HeroBannerList } from '../home/HeroBannerList'

function HeroBottomBannerList() {
  return (
    <div className="absolute bottom-[-180px] left-1/2 transform -translate-x-1/2 rounded-2xl border border-white shadow">
    <div className="bg-white rounded-2xl  md:w-[700px] m-2 shadow-[1px_-30px_100px_50px_rgba(187,_0,_255,_0.2)]">
            <HeroBannerList />
        </div>
    </div>
  )
}

export default HeroBottomBannerList