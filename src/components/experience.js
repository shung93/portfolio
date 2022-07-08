import {graphql, useStaticQuery} from 'gatsby';
import React, {useState} from 'react';
import sanitizeHtml from 'sanitize-html-react';
import ToggleContent from './toggleContent';
import { ExperienceContainer, ExperienceStyle, ExperienceStyleDetails, ExperienceStyleHeader } from '../styles/_components/_experience.style';
import { SectionTitleStyle, SectionStyle } from '../styles/_components/_sections.style';

const detailText = 'show details +';



const Experience = () => {
    
    const [show, setShow] = useState(false);
    const showHide = () => { setShow(!show) }
    
    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioCompanyName (
                sort: {
                        fields: [portfolioEntry___positionStartDate], 
                        order: DESC
                    }
            )
            {
                edges {
                    node {
                        companyName
                        teamName
                        portfolioEntry {
                            teamName
                            currentPosition
                            city
                            positionStartDate
                            positionEndDate
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
    
    const getMonthDate = (date, format) => {
        const newDate = new Date(date);

        if (format === 'year') {
            return newDate.toLocaleString('default', {year: 'numeric'});
        } else if (format === 'month') {
            return newDate.toLocaleString('default', {month: 'short'});
        }
    }

    return (
        <SectionStyle>
            <SectionTitleStyle>
                <h1>work</h1>
                <h1>01</h1>
            </SectionTitleStyle>
            
            <button 
                className="detail-button"   
                onClick={ () => showHide() }
            >
                {detailText}
            </button>
            
            <ExperienceContainer>
            {
                data.allContentfulPortfolioCompanyName.edges.map(
                    (edge) => {
                        return (
                            
                            <ExperienceStyle>
                            
                                <ExperienceStyleHeader>
                                    <h1>{edge.node.companyName.toUpperCase()}</h1>
                                    <h2>{edge.node.teamName}</h2>
                                </ExperienceStyleHeader>
                            
                                {
                                    edge.node.portfolioEntry.map(
                                        (entry) => {
                                            return (
                                                <ExperienceStyleDetails>
                                                    <div>
                                                        <h3>{entry.jobTitle}</h3>
                                                        <div className='detail-header'>
                                                            <p>
                                                                {
                                                                    getMonthDate(entry.positionStartDate, 'month')
                                                                } '{
                                                                    getMonthDate(entry.positionStartDate, 'year').substring(2)
                                                                } - {
                                                                    getMonthDate(entry.positionEndDate, 'month')
                                                                    } '{getMonthDate(entry.positionEndDate, 'year').substring(2)}
                                                            </p>
                                                            <p className="location">
                                                                {entry.country ? entry.country 
                                                                : entry.city ? entry.city + ", " + entry.country : null}
                                                            </p>
                                                        </div>
                                                    </div>

                                                    <ToggleContent showState={show}>
                                                        {
                                                            <div
                                                                dangerouslySetInnerHTML={
                                                                    {
                                                                    __html: sanitizeHtml(
                                                                                entry.positionDescription.childMarkdownRemark.html
                                                                                )
                                                                    }
                                                                }
                                                            />
                                                        }
                                                    </ToggleContent>
                                                    
                                                </ExperienceStyleDetails>
                                            )
                                        }
                                    )
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

export default Experience;