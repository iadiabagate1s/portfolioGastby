
import React from 'react'

export default function Skills() {
    return (
        <div id='skills'>
            <h4 className='sectitle'>Top Skills</h4>

            <div style={{backgroundColor:"white"}}>
                <ul>
                    <li><img src='/icons/htmlcsslogo.png' height='110px' width='110px'/>
                        HTML/CSS</li>
                    <li><img src='/icons/javascriptlogo.png' height='110px' width='110px'/>
                        JAVASCRIPT</li>
                    <li><img src='/icons/nodelogo.png' height='110px' width='110px'/>
                        NODE JS</li>
                    <li style={{marginTop :'50px'}}><img src='/icons/pypynew.jpg' height='110px' width='110px'/>
                        PYTHON</li>
                    <li style={{marginTop :'30px'}}><img src='/icons/reactlogo.png' height='110px' width='110px'/>
                        REACT</li>
                    <li style={{marginTop :'50px'}}><img src='/icons/lp.jpeg' height='110px' width='110px'/>
                        SQL</li>

                </ul>
            </div>


            
        </div>
    )
}
