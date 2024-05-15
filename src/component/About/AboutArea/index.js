import React from 'react'
// Import Link
import { Link } from 'react-router-dom'
// import Img
import Img from '../../../assets/img/common/abour_right.png'


const AboutArea = () => {
  return (
    <>
     <section id="about_us_top" className="section_padding">
        <div className="container">
            <div className="row">
                <div className="col-lg-6">
                    <div className="about_us_left">
                        <h5>About us</h5>
                        <h2>"Embark on a Journey with Tripbit.io: Embrace the Dominican Spirit"</h2>
                        <p>At Tripbit.io, we are proudly Dominican. We have a passion for sharing the beauty and diversity of our country with the world. We love showcasing the wonders of the Dominican Republic, from its white sandy beaches and crystal-clear waters to its vibrant culture and delicious cuisine.</p>
                        <p>Our team is made up of passionate and dedicated individuals who know the country well and are committed to providing exceptional service to our customers. We value hospitality and attention to detail, and we make sure that every customer feels at home while exploring all that the Dominican Republic has to offer. </p>
                        <p>We are proud to be a Dominican company and are committed to supporting our community and our country. We work with local suppliers and promote sustainable tourism to help preserve our natural and cultural resources for future generations. </p>
                        <p>Join us at Tripbit.io and discover all the offer. We welcome you to our home!</p>
                        <Link to="#!" className="btn btn_theme btn_md">Find tours</Link>
                    </div>
                </div>
                <div className="col-lg-6">
                    <div className="about_us_right">
                        <img src={Img} alt="img" />
                    </div>
                </div>

            </div>
        </div>
    </section>

    </>
  )
}

export default AboutArea