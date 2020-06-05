import Img from "gatsby-image";
import React from 'react'

export default(props)=>{
    let normalizedProps = props
    if (props.fluid && props.fluid.presentationWidth) {
      normalizedProps = {
        ...props,
        style: {
          ...(props.style || {}),
          maxWidth: props.fluid.presentationWidth,
          margin: "0 auto", // Used to center the image
        },
      }
    }
  
    return props.file.contentType==="image/svg+xml"?<img src={props.file.url} alt=""/>:<Img imgStyle={{objectFit: props.objectFit}} {...normalizedProps} />
  }