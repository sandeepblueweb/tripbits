import React from 'react'
// import ComonBanner
import CommonBanner from '../component/Common/CommonBanner'
// import TopDestinationsArea
import TopDestinationsArea from '../component/TopDestinations'

const TopDestinationsMain = () => {
  return (
    <>
    <CommonBanner heading="Top destinations" pagination="Top destinations"/>
    <TopDestinationsArea/>
    </>
  )
}

export default TopDestinationsMain