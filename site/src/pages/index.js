import React from "react";

import Experience from '../components/experience';
import Footer from '../components/layout/footer';
import Header from '../components/layout/header';
import Skills from '../components/skills';
import ScrollProgress from "../components/hooks/scrollProgress";

import { SectionContainer } from '../styles/_components/_sections.style';
import {IntroBgText, 
        IntroStyle, 
        IntroDescription} from '../styles/_components/_index.style';
import { GlobalStyle } from '../styles/_global.style';


const IndexPage = () => {
  
  return (
    <>
      <style>
        @import url('https://fonts.googleapis.com/css2?family=Ibarra+Real+Nova:wght@400;500;600;700&family=Montserrat:wght@100;200;300;400;500;600;700;800;900&display=swap');
      </style>
      <ScrollProgress/>
      <GlobalStyle/>
      <IntroStyle
        className="light-mode-accent"
      >
        <Header/>
        <IntroDescription>
          <h1>hihi welcome.</h1>
          <p>just a data boy, living in a data world.</p>
          <p>currently based out of the United Kingdom.</p>
        </IntroDescription>
        <IntroBgText
          className="serif"
        >
          <h1>{`new york.`}<br></br></h1>
          <h1>{`washington.`}<br></br></h1>
          <h1>{`united kingdom.`}<br></br></h1>
        </IntroBgText>
      </IntroStyle>
      <SectionContainer
        className="dark-mode-accent"
      >
        <Experience/>
        <Skills/>
      </SectionContainer>
      <Footer/>
    </>
  )
}

export default IndexPage;