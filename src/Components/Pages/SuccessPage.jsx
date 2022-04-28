
import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
const SuccessPage = () => {
  return (
    <div>
        <Navbar />
        <div id="wrapper" style={{ marginTop: "130px" }}>
            <h2>Payment Successfully Completed</h2>
            <img src="https://cdn.dribbble.com/users/2185205/screenshots/7886140/02-lottie-tick-01-instant-2.gif"
             alt=''/>
            <div id="info">
            </div>
        </div >
        <Footer />
    </div>
    
  )
}

export default SuccessPage