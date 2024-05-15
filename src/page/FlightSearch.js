import React from 'react'
// import  CommonBanner
import CommonBanner from '../component/Common/CommonBanner'
// import FlightSearchArea
import FlightSearchArea from '../component/FlightSearch'

const FlightSearch = () => {
  return (
    <>
     <CommonBanner heading="Flight search result" pagination="Flight search result"/>
     <FlightSearchArea/>
    </>
  )
}

export default FlightSearch