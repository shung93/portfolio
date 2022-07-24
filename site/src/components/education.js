import {graphql, useStaticQuery} from 'gatsby';
import React, { useRef } from 'react';
import { Visible } from './hooks/isVisible';
import { ExperienceContainer, 
        ExperienceStyle, 
        ExperienceStyleDetails, 
        ExperienceStyleHeader } from '../styles/_components/_experience.style';
import { SectionTitleStyle, 
        SectionStyle } from '../styles/_components/_sections.style';

const Education = () => {

    const expRef = useRef();
    const expVis = Visible(expRef, '0px');

    const txtLength = (str) => {
        return str.length > 7 ? 'longTxt' : 'shortTxt'
    };
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioCompanyName (
                sort: {
                        fields: [portfolioEntry___positionStartDate], 
                        order: DESC
                    }
                filter: {education: {eq: true}}
            )
            {
                edges {
                    node {
                        companyName
                        teamName
                        portfolioEntry {
                            teamName
                            jobTitle
                            positionStartDate
                            positionEndDate
                            positionDescription {
                                childMarkdownRemark {
                                    html
                                }	
                            }
                            country
                            city
                            state
                            fakeData
                        }
                    }
                }
            }
        }
    `);

    return (
        <SectionStyle
            className={expVis ? "visible" : "not-visible"}
            ref={expRef}
        >
            <SectionTitleStyle
                className='serif'
            >
                <h1
                    className={txtLength('education')}
                >
                    education
                </h1>
                <h1>02</h1>
            </SectionTitleStyle>
            
            <ExperienceContainer>
            {
                data.allContentfulPortfolioCompanyName.edges.map(
                    (edge) => {
                        return (
                            
                            <ExperienceStyle>
                            
                                <ExperienceStyleHeader>
                                    <h1>{edge.node.companyName.toUpperCase()}</h1>
                                </ExperienceStyleHeader>
                                {   
                                    !!edge.node.portfolioEntry ?
                                    edge.node.portfolioEntry.map(
                                        (entry) => {
                                            return (
                                                <ExperienceStyleDetails>
                                                    <div>
                                                        <h3>{entry.jobTitle}</h3>
                                                        <div className='detail-header'>
                                                            <p>{entry.teamName}</p>
                                                            <p className="location">
                                                                {entry.country ? entry.country 
                                                                : entry.city ? entry.city 
                                                                : ""}
                                                            </p>
                                                        </div>
                                                    </div>
                                                </ExperienceStyleDetails>
                                            )
                                        }
                                    ) : null
                                }
                                
                            </ExperienceStyle>
                        )
                    }
                )
            }
            </ExperienceContainer>
        </SectionStyle>
    )
};

export default Education;