import React from 'react'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import Container from 'react-bootstrap/Container'
import Button from 'react-bootstrap/Button'


export default function Projects() {
    return (
        <div style={{marginTop: '80px'}} id='projects'>
            <h4 className='sectitle'>Projects </h4>
            <hr ></hr>
            <Container fluid>
            <Row >
            <Col sm={12} md={4} style={{textAlign:'justify' }}><div id='proj5' className="proj"> </div>
                <h4 style={{color : 'red'}}>Demo Workout Application </h4>
                <h6>Technologies: React.js, HTML/CSS, JavaScript, Google Firebase, Google FireStore, Google sig in/ sign out</h6>
                <p>A Demo for a full stack workout platform that allows users to subscribe to workout plans, and receive workout routines daily to achieve the plans goal.</p>
                <p>Users sign in using google sign in, then are directed to go select a plan. After selecting a plan they can begin and see a single days workout routine.
                    Once they finish the current days workout they can click next and the following days workout is shown. All of their personal information, the plan they selected, and the daily progress they are making is saved to the cloud database. 
                </p>
                <p>This allows a user to sign in and sign out, leave the page and comeback with the ability to pick up where they left off every time. Whether if it's the next day or weeks later</p>
                <Button onClick={() => window.open('https://amplifyeworkoutdemoapp.web.app/')} variant='outline-info' className='links'>Live </Button>  <Button onClick={() => window.open('https://github.com/iadiabagate1s/WorkoutApp')}  variant='outline-danger' className='links'>Code </Button>
                </Col >


                <Col sm={12} md={4} style={{textAlign:'justify' }}><div id='proj1' className="proj"> </div>
                <h4 style={{color : 'red'}}>News App </h4>
                <h6>Technologies: Python, PostgreSQL, HTML/CSS, JavaScript, news API, openweather API, and MapQuest API, Bcrypt</h6>
                <p>
Based on the location imputed the data is sent to the server which gets weather data and top headlines for the country of choice. News cards and a weather widget are appended to the DOM relaying the information from the API’s.</p>
<p>Users can also create an and gain the ability to save articles for later, save search keyword that will generate articles without having to search anything</p>
                <Button onClick={() => window.open('https://amp-news-app.herokuapp.com/ ')} variant='outline-info' className='links'>Live </Button>  <Button onClick={() => window.open('https://github.com/iadiabagate1s/newsapp')}  variant='outline-danger' className='links'>Code </Button>
                </Col >
                <Col sm={12} md={4} style={{textAlign:'justify'}}><div id='proj2' className="proj"> </div>
                <h4 style={{color : 'red'}}>Lab Manager</h4>
                <h6>Technologies: Python, PostgreSQL, HTML/CSS, JavaScript, Bcrypt</h6>
                <p> 
An associate signs in, they have access to a dashboard with their tasks and projects. These are assigned by an admin user who has an additional dashboard where they can create projects, and delegate different tasks upon team members. </p>
<p>When projects and tasks are created they are saved in the PostgreSQL database. Users have the ability to mark tasks complete and that change is reflected on the admin dashboard.all users can also visit pages where all current projects and tasks can be seen.
 </p>
                <Button onClick={() => window.open('https://lab-manager-webapp.herokuapp.com/')}  variant='outline-info' className='links'>Live </Button>  <Button onClick={() => window.open('https://github.com/iadiabagate1s/LabappManager')} variant='outline-danger' className='links'>Code </Button> </Col>
                <Col sm={12} md={4} style={{textAlign:'justify'}}><div id='proj3' className="proj"></div>
                <h4 style={{color : 'red'}}>Event App</h4>
                <h6>Technologies: React, Node JS , PostgreSQL, JavaScript, HTML/CSS, Google API, Yelp API, TicketMaster API, Skyscanner flights API, Express JS </h6>
                <p>On the landing page a user can see several categories of featured events or search for events by category and location. If they select an event they can then see a map with the event location , hotels nearby, and even get the distance from a location of their choice. They can also see popular nearby attractions and businesses.
</p>
                <Button onClick={() => window.open(' https://amplifyetravel.vercel.app')}  variant='outline-info' className='links'>Live </Button>  <Button onClick={() => window.open('https://github.com/iadiabagate1s/AmplifyeTravel2')} variant='outline-danger' className='links'>Code </Button> </Col>


                <Col sm={12} md={4} style={{textAlign:'justify',  }}><div id='proj4' className="proj"> </div>
                <h4 style={{color : 'red'}}>Amazon Reviews w/ Vue.js </h4>
                <h6>Technologies: Vue.js, HTML/CSS, JavaScript, Google Firebase, Google FireStore</h6>
                <p>A simple Project that allows users to submit reviews for an amazon echo, Theres a form component, and at the bottom the 3 most recent reviews are shown</p>
                <p> this project is the first for me. I decided to learn Vue.js and this is my first complete project with it.The database is on google firestore and the site is hosted through Google firebase</p>
                <Button onClick={() => window.open('https://dosemedia-reviews.web.app ')} variant='outline-info' className='links'>Live </Button>  <Button onClick={() => window.open('https://github.com/iadiabagate1s/amazon_reviews_vue')}  variant='outline-danger' className='links'>Code </Button>
                </Col >

         
            </Row>
            
            </Container>
           
        </div>
    )
}
