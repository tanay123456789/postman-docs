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
  // HTML-React-Parser (Allows you to grab elements before page load and return a component)
  const enableModal = {
    replace: domNode => {

      // Why do we need this? Doc files contain markdown for images - if a user clicks on an image, it will open up in the same window and we don't want this behavior.
      // Removes the need for content writers to manually delete these link. Example: [![API Key Auth](https://assets.postman.com/postman-docs/api-key-auth-selection-v9.jpg)](https://assets.postman.com/postman-docs/api-key-auth-selection-v9.jpg)
      // Conditional strips out the a tag if the SRC and HREF match. This is required because with a pop-up modal, a user could click on the image again.
      // Console.log variables to see data

      // Start - A tag removal 
      if (domNode.attribs && domNode.name === 'a') {
        // Get all image elements and convert into {src: '', alt: ''} object
        const getImageProps = attributesToProps(domNode).children[0].attribs 
        const useImageObject = getImageProps !== undefined && getImageProps.src !== undefined ? getImageProps : { src: '', alt: '' };
        // Get link URL and save as an object
        const getLinkUrlObject = attributesToProps(domNode).attribs
        // If the Image src matches the Link Src, the a tag will be removed
        if ( useImageObject.src === getLinkUrlObject.href) {
          return (
            <></>
          )
        }
      }
      // End - A tag removal 

      // Start - Functionality for images to display as a modal when clicked
      if (domNode.attribs && domNode.name === 'img') {
        const getAllImages = attributesToProps(domNode);
        const { attribs } = getAllImages;
        const create_id = `img-${Math.random().toString(36).slice(2)}`
        const images = { id: create_id, ...attribs };
        const { width, src, alt, id } = images;
        return (
          <>
            {width ? (
              <img src={src} alt={alt || ''} width={width}/>
            ) : (
                <>
              <a data-target={`#${id}`} className="modal-image" data-toggle="modal">
              <img src={src} alt={alt || ''}/>
                  </a>                
            <span id={`${id}`} className="modal fade modal-backdrop" tabIndex="-1" role="dialog" aria-labelledby="exampleModalCenterTitle" aria-hidden="true">
              <span className="modal-dialog modal-dialog-centered modal-lg mt-10" role="document">
                <span className="container">
                  <span className="modal-content row">
                    <span className="modal-column col-8">
                      <img src={src} alt={alt || ''} />
                    </span>
                  </span>
                  <span className="ml-auto">
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
                  </span>
                </span>
              </span>
            </span>
            </>
            )}
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
                {parse(post.html, enableModal)}
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
