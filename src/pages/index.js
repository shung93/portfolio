import React, {useRef} from 'react';
import Experience from '../components/experience';
import Layout from '../components/layout/layout';
import { Parallax, ParallaxLayer } from '@react-spring/parallax';
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
        <IntroStyle>
          <IntroBgText>
                united kingdom.<br></br>
                washington.<br></br>
                new york.<br></br>
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
        <Experience/>
        <Skills/>
      </Layout>
    </>
  )
}

export default IndexPage;