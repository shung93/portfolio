import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import sanitizeHtml from 'sanitize-html-react';
import { ExperienceStyle, ExperienceStyleDetails, ExperienceStyleHeader } from '../styles/_components/_experience.style';
import { SectionTitleStyle, SectionStyle } from '../styles/_components/_sections.style';

const Experience = () => {
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
                <h1>.01</h1>
            </SectionTitleStyle>
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
                                                    <div class='detail-header'>
                                                        <h3>{entry.jobTitle}</h3>
                                                        <p>
                                                            {
                                                                getMonthDate(entry.positionStartDate, 'month')
                                                            } {
                                                                getMonthDate(entry.positionStartDate, 'year').substring(2)
                                                            }' - {
                                                                getMonthDate(entry.positionEndDate, 'month')
                                                                } {
                                                                getMonthDate(entry.positionEndDate, 'year').substring(2)
                                                                }'
                                                        </p>
                                                    </div>
                                                    <p class="location">
                                                        {
                                                            entry.country ? entry.country : 
                                                                entry.city ? entry.city + ", " + entry.country : null
                                                        }
                                                    </p>
                                                    <div
                                                        dangerouslySetInnerHTML={
                                                            {
                                                            __html: sanitizeHtml(
                                                                        entry.positionDescription.childMarkdownRemark.html
                                                                        )
                                                            }
                                                        }
                                                    />
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
        </SectionStyle>
    )
};

export default Experience;