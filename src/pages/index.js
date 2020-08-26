import React from "react"


import { Link } from "gatsby"

import Layout from "../components/layout"
import Image from "../components/image"
import SEO from "../components/seo"
import NavBar from '../components/NavBar'
import IntroBox from '../components/IntroBox'
import Skills from '../components/Skills'
import Projects from '../components/Projects'
import Aboutme from '../components/Aboutme'
import ContactMe from '../components/ContactMe'

const IndexPage = () => (
  <>
    <SEO title="Home" />
    <NavBar/>
    <IntroBox/>
    <Skills/>
    <Projects/>
    <Aboutme/>
    <ContactMe />

    
    

    </>
 
)

export default IndexPage
