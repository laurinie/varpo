import React from 'react'
import get from 'lodash/get'
import { graphql } from "gatsby"

import footerStyles from '../components/footer.css'

class Footer extends React.Component {
    render() {
        const post = get(this.props, 'data.contentfulFooter')
        // const siteTitle = get(this.props, 'data.site.siteMetadata.title')
        return (
            <div className={footerStyles.footer}>
                <div className="wrapper">
                    <div
                        // className={heroStyles.block}
                        dangerouslySetInnerHTML={{
                            __html: post.text.content.childMarkdownRemark.html,
                        }}
                    />
                </div>
            </div>
        )
    }
}

export default Footer

export const pageQuery = graphql`
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
  
`
