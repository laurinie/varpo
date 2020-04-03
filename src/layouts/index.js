import React from 'react'
import Container from '../components/container'
import Footer from "../components/footer";
import Navigation from "../components/navigation";
import './base.css';
import Info from "../components/info"

function Template(props){
    const { children } = props
    return (
      <Container>
        <Navigation/>
        {children}   
        <Footer/>
        <Info/>
      </Container>
    )
}

export default Template
