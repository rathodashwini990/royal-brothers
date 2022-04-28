
import React from 'react'
import Footer from '../Footer/Footer'
import Navbar from '../Navbar/Navbar'
import Payment from '../Payment/Payment'
const PaymentPage = () => {
  return (
    <div>
        <Navbar />
        {/* <h1 style={{marginTop: 100}}>Payment Page</h1> */}
        <Payment />
        <Footer />
    </div>
    
  )
}

export default PaymentPage