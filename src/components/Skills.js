
import React from 'react'
import js from '../images/javascriptlogo.png'
import ht from '../images/htmlcsslogo.png'
import node from '../images/nodelogo.png'
import python from '../images/pypynew.jpg'
import sq from '../images/lp.jpeg'
import react from '../images/reactlogo.png'

export default function Skills() {
    console.log(js)
    return (
        <div id='skills'>
            <h4 className='sectitle'>Top Skills</h4>

            <div style={{backgroundColor:"white"}}>
                <ul>
                    <li><img src={ht} height='110px' width='120px'/>
                        </li>
                    <li><img src={js} height='110px' width='110px'/>
                        </li>
                    <li><img src={node} height='110px' width='110px'/>
                        </li>
                    <li style={{marginTop :'50px'}}><img src={python} height='110px' width='110px'/>
                        </li>
                    <li style={{marginTop :'50px'}}><img src={react} height='110px' width='110px'/>
                        </li>
                    <li style={{marginTop :'50px'}}><img src={sq} height='110px' width='110px'/>
                        </li>

                </ul>
            </div>


            
        </div>
    )
}
