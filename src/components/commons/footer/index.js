import React from 'react';

const Footer = () => {
    return (
        <div className="hero-foot has-background-hblack1">
            <div className="">
                <div className="content has-text-centered pb-2">
                    <a href="#twitter" target="_blank" rel="noopener noreferrer">
                        <span className="icon is-size-4">
                            <i className="fa-brands fa-twitter" />
                        </span>
                    </a>
                    <a href="#opensea" target="_blank" rel="noopener noreferrer">
                        <span className="icon  is-size-4">
                            <i className="fa-solid fa-sailboat" />
                        </span>
                    </a>
                    <a href="#discord" target="_blank" rel="noopener noreferrer">
                        <span className="icon  is-size-4">
                            <i className=" fa-brands fa-discord" />
                        </span>
                    </a>
                </div>
            </div>
        </div>
    );
};
export default Footer;
