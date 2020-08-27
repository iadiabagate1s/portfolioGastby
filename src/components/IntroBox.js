import React from 'react'
import Row from 'react-bootstrap/Row'
import Carousel from 'react-bootstrap/Carousel'
import Container from 'react-bootstrap/Container'
import bgpic from '../images/brain2.jpg'

export default function IntroBox() {
    return (


        <Container fluid>
        <div id='home'  className='intro'>
            <div style={{marginTop : '5rem'}} className='text-container'>
            <h5 id= 'text-1'>Hi Im Isaac, Full Stack Developer </h5>
            <h4 id='text-2'>Scientific Imagination Meets Aesthetic Imagination  </h4>
            <h6 id='text-3'>Bridging the Gap</h6>
            </div>
            

            



        </div>
        </Container>
    )
}
