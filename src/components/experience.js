import {graphql, useStaticQuery} from 'gatsby';
import React from 'react';
import sanitizeHtml from 'sanitize-html-react';

const Experience = () => {
    const data = useStaticQuery(graphql`
        query {
            allContentfulPortfolioExperience (
                filter:{
                    fakeData: {
                        in: [false]
                    }
                }
                sort: {fields: [positionStartDate], order: DESC}
            ) {
                edges {
                    node {
                        companyName
                        currentPosition
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
    `);

    return (
        <div>
            {
                data.allContentfulPortfolioExperience.edges.map(
                    (edge) => {
                        return (
                            <div>
                                <h1>{edge.node.companyName}</h1>
                                <h2>{edge.node.jobTitle}</h2>
                                <h3>{edge.node.teamName}</h3>
                                <p>{edge.node.positionStartDate} - {edge.node.positionEndDate}</p>
                                <p>{edge.node.country}</p>
                                <p>{edge.node.city}</p>
                                <p>{edge.node.state}</p>
                                <div
                                    dangerouslySetInnerHTML={{
                                        __html: sanitizeHtml(edge.node.positionDescription.childMarkdownRemark.html)
                                    }}
                                />
                            </div>
                        )
                    }
                )
            }
        </div>
    )
};

export default Experience;