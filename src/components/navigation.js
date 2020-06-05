import React from 'react'
import Link from 'gatsby-link'
import "./navigation.css";
import { useStaticQuery, graphql } from "gatsby"
import { useRef, useState, useEffect } from 'react';
import Logo from '../images/varpo.png';
import { Arrow } from "./svgs";

const Navigation = () => {
  const [open, setOpen] = useState(false);
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);

  const onChange = () => {
    setOpen(!open);
  }
  function useOutsideAlerter(ref) {
    useEffect(() => {

      function handleClickOutside(event) {
        if (ref.current && !ref.current.contains(event.target)) {
          setOpen(false);
        }
      }

      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  const data = useStaticQuery(graphql`
        query NavigationQuery {
            contentfulNavigation {
              title
              links{
                ... on ContentfulPage {
                    slug
                    title
                  }
                ... on ContentfulExternalLink{
                  title
                  link
                }
              }
              backgroundImage{
                fluid(quality: 20) {
                  src
                }
              }
            }
          }
          
        `)
  const nav = data.contentfulNavigation;
  return (
    <nav>
      <button onClick={onChange}>
        {
          open ?
            <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
            : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
        }
      </button>
      <h3>Vartiovuoren Pojat</h3>
      <img src={Logo} alt="logo"></img>
      <ul
        style={{
          display: !open && "none",
          backgroundImage: `url(${nav.backgroundImage.fluid.src})`,
          backgroundPosition: 'center',
          backgroundSize: 'cover',
          backgroundRepeat: 'no-repeat'
        }}
        ref={wrapperRef}>
        <div className="backdrop">

          <button onClick={onChange}>
            {
              open ?
                <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M19 6.41L17.59 5 12 10.59 6.41 5 5 6.41 10.59 12 5 17.59 6.41 19 12 13.41 17.59 19 19 17.59 13.41 12z" /><path d="M0 0h24v24H0z" fill="none" /></svg>
                : <svg xmlns="http://www.w3.org/2000/svg" height="24" viewBox="0 0 24 24" width="24"><path d="M0 0h24v24H0z" fill="none" /><path d="M3 18h18v-2H3v2zm0-5h18v-2H3v2zm0-7v2h18V6H3z" /></svg>
            }
          </button>
          {nav && nav.links.map(p => (
            p.slug === "/" ?
              <Link key={p.slug} to={p.slug}><li>{nav && nav.title}<Arrow color="white" /></li></Link> :
              p.link ?
                <li><a href={p.link} target="_blank" rel="noopener noreferrer">{p.title}</a><Arrow color="white" /></li> :
                <Link key={p.slug} to={"/" + p.slug}><li>{p.title}<Arrow color="white" /></li></Link>
          ))}
        </div>
      </ul>

    </nav>
  )
}

export default Navigation
