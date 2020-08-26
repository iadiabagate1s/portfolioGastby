import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'


export default function Projects() {
    return (
        <div style={{marginTop: '80px'}} id='projects'>
            <h4 className='sectitle'>Projects</h4>
            <Container fluid>
            <Row >
                <Col sm={12}><div id='proj1' className="proj"> </div>
                <p>
                News App : Technologies : Python, PostgreSQL,  HTML, CSS, JavaScript, news API, openweather API, and MapQuest API
Based on the location imputed the data is sent to the server which makes a call to get weather data and top headlines for the country. News cards and a weather widget are appended to the DOM relaying the information from the API’s.</p>
                <a href='https://amp-news-app.herokuapp.com/ '><div className='links'>Live </div></a>  <a href=' https://github.com/iadiabagate1s/newsapp'><div className='links'>Code </div></a> 
                </Col >
                <Col sm={12}><div id='proj2' className="proj"> </div><p>Lab Manager : Technologies : Python, PostgreSQL,  HTML, CSS, JavaScript
An associate signs in, they have access to a dashboard with their tasks and projects. These are assigned by an admin user who has an additional dashboard where they can create projects, and delegate different tasks upon team members. When projects and tasks are created they are saved in the PostgreSQL database. Users have the ability to mark tasks complete and that change is reflected on the admin dashboard.
 </p>
                <a href='https://lab-manager-webapp.herokuapp.com/'><div className='links'>Live </div></a>  <a href='https://github.com/iadiabagate1s/LabappManager'><div className='links'>Code </div></a> </Col>
                <Col><div id='proj3' className="proj"></div><p> Events app : Technologies : React, Node , PostgreSQL, JavaScript, HTML, CSS,Bootstrap, Google API, Yelp API, TicketMaster, API,Skyscanner flights API, Express
On the landing page a user can see several categories of featured events or search for events by category and location up top. If they select an event they can then see a map with the event location , hotels and even get directions from their location. They also see nearby businesses that are popular for that area.
</p>
                <a href=' https://amplifyetravel.vercel.app'><div className='links'>Live </div></a>  <a href='https://github.com/iadiabagate1s/AmplifyeTravel2 '><div className='links'>Code </div></a> </Col>

         
            </Row>
            
            </Container>
           
        </div>
    )
}
