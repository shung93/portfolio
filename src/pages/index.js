import React from 'react';
import Experience from '../components/experience';
import Layout from '../components/layout/layout';
import Skills from '../components/skills';
import { IntroBgText, IntroStyle, IntroTitleStyle, IntroSubStyle } from '../styles/_components/_index.style';
import { GlobalStyle } from '../styles/_global.style';

const IndexPage = () => {
  return (
    <>
      <GlobalStyle/>
      <Layout>
        <title></title>
        <IntroBgText>
          united kingdom<br></br>
          washington<br></br>
          new york<br></br>
        </IntroBgText>
        <IntroStyle>
          <IntroTitleStyle>hihi welcome.</IntroTitleStyle>
          <IntroSubStyle>just a data boy, living in a data world.</IntroSubStyle>
          <IntroSubStyle>currently based out of the United Kingdom.</IntroSubStyle> 
        </IntroStyle>
        <Skills/>
        <Experience/>
      </Layout>
    </>
  )
}

export default IndexPage;