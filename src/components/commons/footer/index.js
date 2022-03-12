import React from 'react';

const Footer = () => {
    return (
        <div className="hero-foot has-background-hblack1">
            <div className="container">
                <div className="content has-text-centered pb-2">
                    <a href="#twitter" target="_blank" rel="noopener noreferrer">
                        <span className="icon has-text-white is-size-5 mx-3">
                            <i className="is-white fa-brands fa-twitter" />
                        </span>
                    </a>
                    <a href="#opensea" target="_blank" rel="noopener noreferrer">
                        <span className="icon has-text-white is-size-5 mx-3">
                            <i className="is-white fa-solid fa-sailboat" />
                        </span>
                    </a>
                    <a href="#discord" target="_blank" rel="noopener noreferrer">
                        <span className="icon has-text-white is-size-5 mx-3">
                            <i className="is-white fa-brands fa-discord" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Footer;
