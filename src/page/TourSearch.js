import React from 'react'
// import Commonbanner
import CommonBanner from '../component/Common/CommonBanner'
// import Search Form
import SearchForm from '../component/Home/SearchForm'
// import Tour Search Area
import TourSearchArea from '../component/TourSearch'


const TourSearch = () => {
  return (
    <>
        <CommonBanner heading="Tour search result" pagination="Tour"/>
        <SearchForm/>
        <TourSearchArea/>
    </>
  )
}

export default TourSearch