import { graphql, useStaticQuery } from "gatsby";
import React, { useState, useRef } from "react";
import sanitizeHtml from "sanitize-html-react";
import ToggleContent from "./hooks/toggleContent";
import { useVisibility } from "./hooks/useVisibility";
import {
  ExperienceContainer,
  ExperienceStyle,
  ExperienceStyleDetails,
  ExperienceStyleHeader,
} from "../styles/_components/_experience.style";
import {
  SectionTitleStyle,
  SectionStyle,
} from "../styles/_components/_sections.style";

const detailTextOn = "show details +";
const detailTextOff = "show details _";

const Experience = () => {
  const [show, setShow] = useState(false);
  const showHide = () => {
    setShow(!show);
  };

  const expRef = useRef();
  const expVis = useVisibility(expRef, "0px");

  const data = useStaticQuery(graphql`
    query {
      allContentfulPortfolioCompanyName(
        sort: { fields: [portfolioEntry___positionStartDate], order: DESC }
        filter: { education: { eq: false } }
      ) {
        edges {
          node {
            companyName
            teamName
            portfolioEntry {
              teamName
              currentPosition
              positionStartDate
              positionEndDate
              jobTitle
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

    if (format === "year") {
      return newDate.toLocaleString("default", { year: "numeric" });
    } else if (format === "month") {
      return newDate.toLocaleString("default", { month: "short" });
    }
  };

  return (
    <SectionStyle className={expVis ? "visible" : "not-visible"} ref={expRef}>
      <SectionTitleStyle className="serif no-select">
        <h1>work</h1>
        <h1>01</h1>
      </SectionTitleStyle>
      <button className="detail-button" onClick={() => showHide()}>
        {show ? detailTextOff : detailTextOn}
      </button>

      <ExperienceContainer className="no-select">
        {data.allContentfulPortfolioCompanyName.edges.map((edge) => {
          return (
            <ExperienceStyle>
              <ExperienceStyleHeader>
                <h1>{edge.node.companyName.toUpperCase()}</h1>
                <h2>{edge.node.teamName}</h2>
              </ExperienceStyleHeader>

              {edge.node.portfolioEntry.map((entry) => {
                return (
                  <ExperienceStyleDetails>
                    <div>
                      <h3>{entry.jobTitle}</h3>
                      <div className="detail-header">
                        <p>
                          {getMonthDate(entry.positionStartDate, "month")} '
                          {getMonthDate(
                            entry.positionStartDate,
                            "year"
                          ).substring(2)}{" "}
                          - {getMonthDate(entry.positionEndDate, "month")} '
                          {getMonthDate(
                            entry.positionEndDate,
                            "year"
                          ).substring(2)}
                        </p>
                        <p className="location">
                          {entry.country
                            ? entry.country
                            : entry.city
                            ? entry.city
                            : ""}
                        </p>
                      </div>
                    </div>

                    <ToggleContent showState={show}>
                      {
                        <div
                          className={show ? "detail-show" : "detail-noshow"}
                          dangerouslySetInnerHTML={{
                            __html: sanitizeHtml(
                              entry.positionDescription.childMarkdownRemark.html
                            ),
                          }}
                        />
                      }
                    </ToggleContent>
                  </ExperienceStyleDetails>
                );
              })}
            </ExperienceStyle>
          );
        })}
      </ExperienceContainer>
    </SectionStyle>
  );
};

export default Experience;
