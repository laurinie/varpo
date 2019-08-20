import React, { Component } from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";
import ReactMarkdown from 'react-markdown';
import Layout from "../components/layout";
import SEO from "../components/seo"


class Johtaja extends Component {
    render() {
        // console.log(this.props.data.contentfulJohtaja)
        const j = this.props.data.contentfulJohtaja

        return (
            <Layout>
                <SEO title={j.name} />
                <div>
                    <h1>{j.name}</h1>
                    <img src={j.picture.file.url}></img>
                    <p>{j.shortDescription}</p>
                    <p>{j.phone}</p>
                    <p>{j.email}</p>
                    <ReactMarkdown source={j.description.description} />
                </div>
            </Layout>
        )

    }
}
Johtaja.propTypes = {
    data: PropTypes.object.isRequired
}
export default Johtaja;

export const pageQuery = graphql`
query johtajaQuery($name:String!){
    contentfulJohtaja(name:{eq  : $name}){
        name
        shortDescription
        phone
        email
        description{
            description
        }
        picture{
            file{
                url
            }
        }
    }
}`