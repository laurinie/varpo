import React from "react";

class Slice extends React.Component {
  render() {
    return (
      <div className="slice">
        <div className="triangle-left" />
        <div className="slice-content">
          <h2>{this.props.content.title}</h2>
          <p>{this.props.content.textBody.textBody}</p>
        </div>
      </div>
    )
  }
  // <svg className = "slice" width={window.innerWidth/2} height={332.12} viewBox={`0 0 ${window.innerWidth/2} 332.12`}>
  //   <defs>
  //     <style>{".a{fill:none;}.b{clip-path:url(#a);}.c{fill:red;}"}</style>
  //     <clipPath id="a">
  //       <rect className="a" width={window.innerWidth/2} height={332.12} />
  //     </clipPath>
  //   </defs>
  //   <g className="b">
  //     <path
  //       className="c"
  //       d="M166.06,0,332.12,357.207H0Z"
  //       transform="translate(0 332.12) rotate(-90)"
  //     />
  //   </g>
  // </svg>
}

export default Slice;
