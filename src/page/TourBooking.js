import React from 'react'
import CommonBanner from '../component/Common/CommonBanner'
// import TourBooking
import TourBookingArea from '../component/TourBooking'
const TourBooking = () => {
  return (
    <>
    <CommonBanner heading="Booking submission" pagination="Booking submission"/>
    <TourBookingArea/>
    </>
  )
}

export default TourBooking