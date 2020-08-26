
import React from 'react'
import js from '../../public/static/javascriptlogo.png'
import ht from '../../public/static/htmlcsslogo.png'
import node from '../../public/static/nodelogo.png'
import python from '../../public/static/pypynew.jpg'
import sq from '../../public/static/lp.jpeg'
import react from '../../public/static/reactlogo.png'

export default function Skills() {
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
