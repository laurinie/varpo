import React, {Component} from "react";
import PropTypes from "prop-types";
import { graphql } from "gatsby";

class Johtaja extends Component{
    renderContent(j){
        let component =[];
        for(let p in j){
            component.push(<p>{j[p]}</p>)
        }
        return component
    }
    render(){
        console.log(this.props.data.contentfulJohtaja)
        const j = this.props.data.contentfulJohtaja
        
        return (
            <div>
                <h1>{j.name}</h1>
                {this.renderContent(j)}
            </div>
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
    }
}`