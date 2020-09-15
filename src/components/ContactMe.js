import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'
import gitl from '../images/github logo.png'
import linked from '../images/linked in logo.png'
import resume from '../images/Oct_Res_n_Cover_IsaacDiabagate.pdf'

export default function ContactMe() {
    return (
        <div  id='contact'>
            <h1 className='sectitle'>Get in touch</h1>
            <div style={{backgroundColor:""}}>
            <Container fluid>
            <Row style={{backgroundColor : 'rgba(144, 192, 236, 0.637)',marginBottom : "10px"}}>
                <Col style={{marginLeft : "7px"}} className='inforow'><div id='Emailbox' className="proj">Email: </div>
                <h6>iadiabagate95@gmail.com</h6>
                
                </Col>
                <Col style={{marginTop:'30px'}}> <a  ><Button onClick={() => window.open(`${resume}`)} variant='danger' >Resume</Button></a></Col>
     
               
                <Col className='inforow'>
                <a href='https://www.linkedin.com/in/isaac-diabagate-5b1897173' className='linkedincon'><img src={linked} height='40px' width='40px'/></a>
                <a href='https://github.com/iadiabagate1s' className="giticon"><img src={gitl} height='40px' width='40px'/></a>
                 </Col>

            </Row>
            
            </Container>
            </div>

        </div>
    )
}
