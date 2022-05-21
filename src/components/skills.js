import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import { SkillStyleInner } from '../styles/_components/_skills.style';
import { SectionTitleStyle, SectionStyle } from '../styles/_components/_sections.style';

const Skills = () => {
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
        <SectionStyle>
            {
                data.allContentfulPortfolioSkills.edges.map(
                    (edge) => {
                        return (
                            <SkillStyleInner>
                                <SectionTitleStyle>
                                    <h1>{edge.node.skillType.toLowerCase()}</h1>
                                </SectionTitleStyle>
                                <ul>
                                    {edge.node.skillName.map((skill) => <li>{skill.toUpperCase()}</li>)}
                                </ul>
                            </SkillStyleInner>
                        )
                    }
                )
            }
        </SectionStyle>
    )
};

export default Skills;