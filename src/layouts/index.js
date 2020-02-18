import React from 'react'
import Container from '../components/container'
import Navigation from '../components/navigation'
import Footer from "../components/footer";
import SEO from "../components/SEO";
import base from './base.css'
class Template extends React.Component {
  render() {
    
    const { children } = this.props
    return (
      <Container>
        <SEO/>
        <Navigation />
        {children}   
        <Footer/> 
      </Container>
    )
  }
}

export default Template
