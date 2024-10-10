import React from 'react'
import Header from '../Components/Header/Header'
import './home.css'
import OneSect from '../Components/Main/OneSection/OneSect'
import TwoSect from '../Components/Main/TwoSection/TwoSect'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <>
      <Header/>
      <OneSect/>
      <TwoSect/>
      <Footer/>
    </>
  )
}

export default Home
