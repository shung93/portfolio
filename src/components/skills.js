import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import { SkillStyle, SkillStyleInner } from '../styles/_components/_skills.style';

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
        <SkillStyle>
            {
                data.allContentfulPortfolioSkills.edges.map(
                    (edge) => {
                        return (
                            <SkillStyleInner>
                                <h1>{edge.node.skillType.toLowerCase()}</h1>
                                <ul>
                                    {edge.node.skillName.map((skill) => <li>{skill}</li>)}
                                </ul>
                            </SkillStyleInner>
                        )
                    }
                )
            }
        </SkillStyle>
    )
};

export default Skills;