import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import { SkillsList, SkillStyleInner } from '../styles/_components/_skills.style';
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
        <>
            {
                data.allContentfulPortfolioSkills.edges.map(
                    (edge, index) => {
                        const idx = (index + 2).toString().padStart(2, '0')

                        return (
                            <SectionStyle>
                                <SkillStyleInner>
                                    <SectionTitleStyle>
                                        <h1>{edge.node.skillType.toLowerCase()}</h1>
                                        <h1>{idx}</h1>
                                    </SectionTitleStyle>
                                    <SkillsList>
                                        <ul>
                                            {edge.node.skillName.map((skill) => <li>{skill.toUpperCase()}</li>)}
                                        </ul>
                                    </SkillsList>
                                </SkillStyleInner>
                            </SectionStyle>
                        )
                    }
                )
            }
        </>
    )
};

export default Skills;