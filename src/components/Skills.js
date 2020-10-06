
import React from 'react'
import js from '../images/javascriptlogo.png'
import ht from '../images/htmlcsslogo.png'
import node from '../images/nodelogo.png'
import python from '../images/pypynew.jpg'
import sq from '../images/lp.jpeg'
import react from '../images/reactlogo.png'
import vue from '../images/vuejs-wide.png'
import firebase from '../images/firebaselogo-standard.png'
import firebase2 from '../images/gc.jpeg'

export default function Skills() {
    console.log(js)
    return (
        <div id='skills'>
            <h4 className='sectitle'>Top Skills</h4>
            <hr ></hr>

            <div style={{backgroundColor:"white", margin: 'auto'}}>
                <ul>
                    <li style={{marginRight :''}}><img src={ht} height='110px' width='120px'/>
                        </li>
                    <li><img src={js} height='110px' width='110px'/>
                        </li>
                    <li><img src={node} height='110px' width='110px'/>
                        </li>
                    <li style={{marginTop:'20px'}}><img src={python} height='100px' width='110px'/>
                        </li>
                        <li style={{marginTop :'50px'}}><img src={firebase2} height='110px' width='110px'/>
                        </li>
                    <li style={{marginTop :'50px'}}><img src={react} height='110px' width='110px'/>
                        </li>
                    <li style={{marginTop :'50px'}}><img src={sq} height='110px' width='110px'/>
                        </li>
                        <li style={{marginTop :'50px'}}><img src={vue} height='80px' width='110px'/>
                        </li>

                </ul>
            </div>
            

            
        </div>
    )
}
