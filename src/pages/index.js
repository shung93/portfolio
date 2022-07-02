import React from 'react';
import Experience from '../components/experience';
import Layout from '../components/layout/layout';
import Skills from '../components/skills';
import { IntroBgText, 
        IntroStyle, 
        IntroTitleStyle, 
        IntroSubStyle } from '../styles/_components/_index.style';
import { GlobalStyle } from '../styles/_global.style';

const IndexPage = () => {
  return (
    <>
      <GlobalStyle/>
      <Layout>
        <title></title>
        <IntroStyle>
          <IntroBgText>
            united kingdom.<br></br>
            washington.<br></br>
            new york.<br></br>
          </IntroBgText>
          <IntroTitleStyle>
            hihi welcome.
          </IntroTitleStyle>
          <IntroSubStyle>
            just a data boy, living in a data world.
          </IntroSubStyle>
          <IntroSubStyle>
            currently based out of the United Kingdom.
          </IntroSubStyle> 
        </IntroStyle>
        <Experience/>
        <Skills/>
      </Layout>
    </>
  )
}

export default IndexPage;