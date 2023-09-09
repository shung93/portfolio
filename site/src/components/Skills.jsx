import { graphql, useStaticQuery } from "gatsby";
import React, { useRef } from "react";
import {
  SkillsList,
  SkillStyleInner,
} from "../styles/_components/_skills.style";
import {
  SectionTitleStyle,
  SectionStyle,
} from "../styles/_components/_sections.style";
import { useVisibility } from "./hooks/useVisibility";

const Skills = () => {
  const skillsRef1 = useRef();
  const skillsVis1 = useVisibility(skillsRef1);

  const skillsRef2 = useRef();
  const skillsVis2 = useVisibility(skillsRef2);

  const skillsRefArray = [skillsRef1, skillsRef2];
  const skillsVisArray = [skillsVis1, skillsVis2];

  const txtLength = (str) => {
    return str.length > 7 ? "longTxt" : "shortTxt";
  };

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioSkills {
        edges {
          node {
            skillType
            skillName
          }
        }
      }
    }
  `);

  return (
    <div className="no-select">
      {data.allContentfulPortfolioSkills.edges.map((edge, index) => {
        const idx = (index + 3).toString().padStart(2, "0");

        return (
          <SectionStyle
            ref={skillsRefArray[index]}
            className={skillsVisArray[index] ? "visible" : "not-visible"}
          >
            <SkillStyleInner>
              <SectionTitleStyle className={`serif`}>
                <h1 className={txtLength(edge.node.skillType)}>
                  {edge.node.skillType.toLowerCase()}
                </h1>
                <h1>{idx}</h1>
              </SectionTitleStyle>
              <SkillsList>
                <ul>
                  {edge.node.skillName.map((skill) => (
                    <li>{skill.toUpperCase()}</li>
                  ))}
                </ul>
              </SkillsList>
            </SkillStyleInner>
          </SectionStyle>
        );
      })}
    </div>
  );
};

export default Skills;
