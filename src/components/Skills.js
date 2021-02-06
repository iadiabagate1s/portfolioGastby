
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

import pandas from '../images/pandas.png'
import azure from '../images/azure.png'
import scikit from '../images/scikitlearn.jpeg'
import gdb from '../images/graphdb.jpg'

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
                    <li style={{marginBottom:'45px'}}><img src={js} height='110px' width='110px'/>
                        </li>
                    <li><img src={node} height='110px' width='110px'/>
                        </li>
                    <li style={{marginTop:'20px'}}><img src={python} height='100px' width='110px'/>
                        </li>
                        <li style={{marginTop:'20px'}}><img src={pandas} height='100px' width='110px'/>
                        </li>
                        <li style={{marginTop:'20px'}}><img src={scikit} height='100px' width='110px'/>
                        </li>
                        <li style={{marginTop :'50px'}}><img src={firebase2} height='110px' width='110px'/>
                        </li>
                        <li style={{marginTop:'20px'}}><img src={azure} height='100px' width='110px'/>
                        </li>
                    <li style={{marginTop :'50px'}}><img src={react} height='110px' width='110px'/>
                        </li>
                    <li style={{marginTop :'50px'}}><img src={sq} height='110px' width='110px'/>
                        </li>
                        <li style={{marginTop:'20px'}}><img src={gdb} height='100px' width='110px'/>
                        </li>
                        <li style={{marginTop :'50px'}}><img src={vue} height='80px' width='110px'/>
                        </li>

                </ul>
            </div>
            

            
        </div>
    )
}
