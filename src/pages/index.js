import React, {useRef} from 'react';
import Experience from '../components/experience';
import Layout from '../components/layout/layout';
import Skills from '../components/skills';
import { SectionContainer } from '../styles/_components/_sections.style';
import { IntroBgText, 
        IntroStyle, 
        IntroTitleStyle, 
        IntroSubStyle } from '../styles/_components/_index.style';
import { GlobalStyle } from '../styles/_global.style';
import {Controller, Scene} from 'react-scrollmagic';

const IndexPage = () => {

  return (
    <>
      <GlobalStyle/>
      
      <Layout>
        <Controller>
          <IntroStyle>
              <IntroBgText>
                  <h1>united kingdom.<br></br></h1>
                  <h1>washington.<br></br></h1>
                  <h1>new york.<br></br></h1>
              </IntroBgText>
            
              <div class="bottom">
                <IntroTitleStyle>
                  hihi welcome.
                </IntroTitleStyle>
              
                <IntroSubStyle>
                  just a data boy, living in a data world.
                </IntroSubStyle>
              
                <IntroSubStyle>
                  currently based out of the United Kingdom.
                </IntroSubStyle> 
              </div>
          </IntroStyle>
          
          <SectionContainer>
            <Experience/>
            <Skills/>
          </SectionContainer>
        </Controller>
        

      </Layout>
    </>
  )
}

export default IndexPage;