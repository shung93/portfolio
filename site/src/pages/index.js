import { Helmet } from "react-helmet";
import React from "react";

import Education from "../components/education";
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
import TransitionProgress from "../components/transition";

const IndexPage = () => {
  
  return (
    <>
      <Helmet 
        title="sam-h | portfolio" 
      />
      <ScrollProgress/>
      <GlobalStyle/>
      <IntroStyle
        className="light-mode"
      >
        <Header/>
        <IntroDescription
          className="no-select"
        >
          <h1>hihi welcome.</h1>
          <p>just a data boy, living in a data world.</p>
          <p>currently based out of the United Kingdom.</p>
        </IntroDescription>
        <IntroBgText
          className="serif no-select"
        >
          <h1>{`new york.`}<br></br></h1>
          <h1>{`washington.`}<br></br></h1>
          <h1>{`united kingdom.`}<br></br></h1>
        </IntroBgText>
      </IntroStyle>
      <TransitionProgress/>
      <SectionContainer
        className="dark-mode"
      >
        <Experience/>
        <Education/>
        <Skills/>
      </SectionContainer>
      <Footer
      />
    </>
  )
}

export default IndexPage;