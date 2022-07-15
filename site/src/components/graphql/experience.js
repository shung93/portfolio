// import {graphql, useStaticQuery} from 'gatsby';

// export const experienceData = useStaticQuery(graphql`
//         query {
//             allContentfulPortfolioCompanyName (
//                 sort: {
//                         fields: [portfolioEntry___positionStartDate], 
//                         order: DESC
//                     }
//             )
//             {
//                 edges {
//                     node {
//                         companyName
//                         teamName
//                         portfolioEntry {
//                             teamName
//                             currentPosition
//                             city
//                             positionStartDate
//                             positionEndDate
//                             jobTitle
//                             positionStartDate
//                             positionEndDate
//                             positionDescription {
//                                 childMarkdownRemark {
//                                     html
//                                 }	
//                             }
//                             country
//                             city
//                             state
//                             fakeData
//                         }
//                     }
//                 }
//             }
//         }
//     `);