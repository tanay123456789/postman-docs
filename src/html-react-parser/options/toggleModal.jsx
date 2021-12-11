/* eslint-disable react/no-danger */
import React from 'react';
import { attributesToProps } from 'html-react-parser';
import './toggleModal.scss';

// HTML-React-Parser (Allows you to grab elements before page load and return a component)
const ToggleModal = {
  
    replace: domNode => {

      // Why do we need this? Doc files contain markdown for images - if a user clicks on an image, it will open up in the same window and we don't want this behavior.
      // Removes the need for content writers to manually delete these link. Example: [![API Key Auth](https://assets.postman.com/postman-docs/api-key-auth-selection-v9.jpg)](https://assets.postman.com/postman-docs/api-key-auth-selection-v9.jpg)
      // Conditional strips out the a tag if the SRC and HREF match. This is required because with a pop-up modal, a user could click on the image again.
      // Console.log variables to see data

      // <a> tag removal 
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

      // Display modal when user clicks on image
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

export default ToggleModal;
/* eslint-enable */
