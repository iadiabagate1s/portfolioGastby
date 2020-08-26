
import React from 'react'
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'

export default function NavBar() {
    return (
        <div className='divnav'>
          {/* <Nav style={{
            // textDecoration: 'none',
            // width: '99vw',
            // height: '10vh',
            // backgroundColor: 'rgba(138, 171, 180, 0.637)',
            // position: 'sticky',


          }}id='nav' className="justify-content-center" activeKey="/home">
    <Nav.Item className='nav-items'>
      <Nav.Link className="nav-item" href="#home">Home</Nav.Link>
    </Nav.Item >
    <Nav.Item className='nav-items'>
      <Nav.Link className="nav-item" eventKey="link-1" href='#skills'>Skills</Nav.Link>
    </Nav.Item>
    <Nav.Item className='nav-items'>
      <Nav.Link className="nav-item" eventKey="link-2" href='#projects'>Projects</Nav.Link>
    </Nav.Item>
    <Nav.Item className='nav-items'>
    <Nav.Link className="nav-item" eventKey="link-3"href='#aboutme'>About Me</Nav.Link>
    </Nav.Item>
    <Nav.Item className='nav-items'>
    <Nav.Link className="nav-item" eventKey="link-4" href='#contact'>Contact</Nav.Link>
    </Nav.Item>
    
  </Nav> */}


  <Navbar fixed='top' style={{backgroundColor: ' rgba(144, 192, 236, 0.637)'}} expand="lg">
  <Navbar.Toggle aria-controls="basic-navbar-nav" />
  <Navbar.Collapse id="basic-navbar-nav">
    <Nav   className="mr-auto">
      <Nav.Link style={{color:'crimson', fontSize : '1.3rem'}} href="#home">Home</Nav.Link>
      <Nav.Link style={{color:'crimson', fontSize : '1.3rem'}} href="#skills">Skills</Nav.Link>
      <Nav.Link style={{color:'crimson', fontSize : '1.3rem'}} href="#projects">Projects</Nav.Link>
      <Nav.Link style={{color:'crimson', fontSize : '1.3rem'}}href="#aboutme">About</Nav.Link>
      <Nav.Link style={{color:'crimson', fontSize : '1.3rem'}}href="#Contact">Contact</Nav.Link>
     
    </Nav>
    
  </Navbar.Collapse>
</Navbar>
  
 
            
        </div>
    )
}
