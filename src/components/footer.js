import React from 'react'
import { useStaticQuery, graphql } from "gatsby"

import '../components/footer.css'

const Footer = () =>{
        const data = useStaticQuery(graphql`
        query FooterQuery {
            contentfulFooter {
              third {
                childMarkdownRemark {
                  html
                }
              }
              first {
                childMarkdownRemark {
                  html
                }
              }
              second {
                childMarkdownRemark {
                  html
                }
              }
              text {
                childMarkdownRemark {
                  html
                }
              }
            }
          }
          
        `)
        console.log(data);
        return (
            <footer>
                <div className="wrapper">
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.contentfulFooter.text.childMarkdownRemark.html,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.contentfulFooter.first.childMarkdownRemark.html,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.contentfulFooter.second.childMarkdownRemark.html,
                        }}
                    />
                    <div
                        dangerouslySetInnerHTML={{
                            __html: data.contentfulFooter.third.childMarkdownRemark.html,
                        }}
                    />
                </div>
            </footer>
        )
    }

export default Footer
