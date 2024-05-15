import React from 'react'
// import Common Banner
import CommonBanner from '../component/Common/CommonBanner'
// import TourDetails
import TourDetailsArea from '../component/TourDetails'

const TourDetails = () => {
  return (
    <>
    <CommonBanner heading="Tour Details" pagination="Tour Details"/>
    <TourDetailsArea/>
    </>
  )
}

export default TourDetails