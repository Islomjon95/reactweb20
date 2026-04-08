import React from 'react'
import "./container.css"
import Navbar from '../Navbar/Navbar'
import Header from '../Header/Header'
import Section from '../Section/Section'
import Section2 from '../Section2/Section2'
import Section3 from '../Section3/Section3'
import Section4 from '../Section4/Section4'
import Section5 from '../Section5/Section5'
import Footer from '../Footer/Footer'
function Container() {
  return (
    <div className='container'>
      <Navbar></Navbar>
      <Header></Header>
      <Section></Section>
      <Section2></Section2>
      <Section3></Section3>
      <Section4></Section4>
      <Section5></Section5>
      <Footer></Footer>
    </div>
  )
}

export default Container

