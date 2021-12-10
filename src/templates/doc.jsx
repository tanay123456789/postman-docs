/* eslint-disable react/no-danger */
import React from 'react';
import { graphql } from 'gatsby';
import Layout from '../components/layout';
import ContextualLinks from '../components/ContextualLinks/ContextualLinks';
import EditDoc from '../components/Shared/EditDoc';
import { leftNavItems } from '../components/LeftNav/LeftNavItems';
import LeftNav from '../components/LeftNav/LeftNav';
import SEO from '../components/seo';
import './doc.scss';
import 'prismjs/themes/prism-tomorrow.css';
import pose from '../assets/pose-learning-center.svg';
import parse, { attributesToProps  } from 'html-react-parser';
import $ from 'jquery';

const { v4: uuidv4 } = require('uuid');



const DocPage = ({ data }) => {
  const post = data.markdownRemark;
  let contextualLinks;
  if (post.frontmatter.contextual_links) {
    contextualLinks = <ContextualLinks key={uuidv4()} links={post.frontmatter.contextual_links} />;
  }

  $('#exampleModalCenter').on('shown.bs.modal', function () {
    $('#myInput').trigger('focus')
    $('.modal-image').preventDefault();
  })


  const options = {
    replace: domNode => {
      if (domNode.attribs && domNode.name === 'a') {
        const props = attributesToProps(domNode);
        const props2 = attributesToProps(domNode.attribs);
        const h = props.name === 'a'
        const f = props.children[0].name === 'img'
        if (h && f === true) {
          return <></>
        }
      } 
      else if (domNode.attribs && domNode.name === 'img') {
        const props = attributesToProps(domNode.attribs);
        const createModalTarget = 
        props.alt.split(" ").join("");
        return (
          <>
            <a className="modal-image" data-toggle="modal" data-target={`#${createModalTarget}`} >
              <img {...props} />
              </a>
          <div className="modal fade modal-backdrop" id={`${createModalTarget}`}tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <div className="modal-dialog modal-dialog-centered modal-lg mt-10" role="document">
                <div className="container">
              <div className="modal-content row">
                  <div className="modal-column col-8">
                       <img {...props}/>
                    </div>                                 
                </div>
                <div className="ml-auto">
                  <button
                    type="button"
                    className="close"
                    data-dismiss="modal"
                    aria-label="Close"
                  >
                    <span
                      className='close-icon'
                      aria-hidden="true"
                    >
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        viewBox="0 0 16 16"
                      >
                        <g
                          strokeWidth="1"
                          fill="#212121"
                          stroke="#212121"
                          strokeLinecap="round"
                          strokeLinejoin="round"
                        >
                          <line x1="13.5" y1="2.5" x2="2.5" y2="13.5" />
                          <line x1="2.5" y1="2.5" x2="13.5" y2="13.5" />
                        </g>
                      </svg>
                    </span>
                  </button>
                </div>
              </div>
            </div>
            </div>
         </>
        )
      } 
    }
    
    
  };
  return (
    <Layout>
      <SEO title={post.frontmatter.title} slug={post.fields.slug} />
      <div className="container-fluid">
        <div className="row row-eq-height">
          <nav className="col-sm-12 col-md-4 col-lg-3 left-nav-re">
            <LeftNav LeftNavItems={leftNavItems} />
          </nav>
          <div className="col">
            <div className="row row-eq-height">
              <main className="col-sm-12 col-md-12 col-lg-9 offset-lg-0 col-xl-7 doc-page ml-xl-5">
                <h1>{post.frontmatter.title}</h1>
                {parse(post.html, options)};
              </main>
              <aside className="col-sm-12 col-md-12 col-lg-3 offset-lg-0 col-xl-3 offset-xl-1 right-column">
                <hr className="d-block d-lg-none" />
                <div className="edit-button">
                  <EditDoc className="btn btn__small btn__secondary-light edit-button-styles" />
                </div>
                {contextualLinks}
                <figure className="sticky posmanaut-dab">
                  <img src={pose} alt="pose" className="img-fluid" />
                </figure>
              </aside>
            </div>
          </div>
        </div>
      </div>
    </Layout>
  );
};

export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        contextual_links {
          type
          name
          url
          blog_tag
        }
      }
      fields {
        slug
      }
    }
  }
`;
export default DocPage;
/* eslint-enablsse */
