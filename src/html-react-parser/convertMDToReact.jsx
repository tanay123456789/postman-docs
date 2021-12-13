/* eslint-disable react/no-danger */
import React from 'react';
import { attributesToProps } from 'html-react-parser';
import './convertMDToReact.scss';


const convertMDToReact = {
  
  replace: domNode => {
      // Remove A Tag
      // This will remove the need for content writers to manually delete these jpg links
      // Example: [![API Key Auth](https://assets.postman.com/postman-docs/api-key-auth-selection-v9.jpg)](https://assets.postman.com/postman-docs/api-key-auth-selection-v9.jpg)
      if (domNode.attribs && domNode.name === 'a') {
        // Get all <img> elements and convert into {src: '', alt: ''} object
        const getImageProps = attributesToProps(domNode).children[0].attribs 
        const useImageObject = getImageProps !== undefined && getImageProps.src !== undefined ? getImageProps : { src: '', alt: '' };
        // Get href from all <and> elements and save as a string
        const getLinkUrlObject = attributesToProps(domNode).attribs
        // If the img src string matches the a href string, the <a> element will be removed
        if ( useImageObject.src === getLinkUrlObject.href) {
          return (
            <></>
          )
        }
      }

      // display modal when user clicks on image
      if (domNode.attribs && domNode.name === 'img') {
        const getAllImages = attributesToProps(domNode);
        const { attribs } = getAllImages;
        // assign a key ID for the modal
        const create_id = `img-${Math.random().toString(36).slice(2)}`
        const images = { id: create_id, ...attribs };
        const { width, src, alt, id } = images;
        return (
          <>
            {/* If width, use standard <img> tag */ }
            {width ? (
              <img src={src} alt={alt || ''} width={width}/>
            ) : (
                <>
              {/* If no width, use modal with clickable image */ }
              <a data-target={`#${id}`} className="modal-image" data-toggle="modal">
              <img src={src} alt={alt || ''}/>
                  </a>                
            <span id={`${id}`} className="modal fade modal-backdrop" tabIndex="-1" role="dialog" aria-labelledby={`#${id}`} aria-hidden="true">
              <span className="modal-dialog modal-dialog-centered" role="document">
                  <span className="modal-content">
                    <span className="modal-column">
                      <img src={src} alt={alt || ''} />
                    </span>
                  <span className="modal-close-button">
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
                        width="32"
                        height="32"
                        viewBox="0 0 32 32"
                      >
                        <title>e-remove</title>
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

export default convertMDToReact;
/* eslint-enable */
