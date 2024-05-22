// src/components/About.tsx

import React, { useEffect } from "react";
import "./About.css";

const About: React.FC = () => {
    useEffect(() => {
        window.scrollTo(0, 0); // Scrolls to the top when component is mounted
      }, []);

  return (
    <main className="about-main-content">
        <div className="about-header-container">
            <div className="about-header">
                <h1>
                    ABOUT ARTEMIS
                </h1>
            </div>
            <div className="about-desc" style={{ whiteSpace: 'pre-line' }}>
                {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et 
                dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip 
                ex ea commodo consequat.

                Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. 
                Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est 
                laborum.`}
            </div>
        </div>
        <div className="about-header-containers">

            <div className="about-container" >
                <div className="about-user">
                    <div className="about-user-img"></div>
                    <div className="about-user-text">
                        <div className="about-user-name">
                            <h1>
                                Raymond Jeb Cabalog
                            </h1>
                        </div>
                        <div className="about-user-desc" style={{ whiteSpace: 'pre-line' }}>
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat.`}
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-container_2" >
                <div className="about-user_2">
                    <div className="about-user-text_2">
                        <div className="about-user-name_2">
                            <h1>
                                Laime Jubel Ellacanao
                            </h1>
                        </div>
                        <div className="about-user-desc_2" style={{ whiteSpace: 'pre-line' }}>
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat.`}
                        </div>
                    </div>
                    <div className="about-user-img_2" ></div>
                </div>
            </div>

            <div className="about-container_3" >
                <div className="about-user_3">
                    <div className="about-user-img_3"></div>
                    <div className="about-user-text_3">
                        <div className="about-user-name_3">
                            <h1>
                                Karl Siegfred Reyes
                            </h1>
                        </div>
                        <div className="about-user-desc_3" style={{ whiteSpace: 'pre-line' }}>
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat.`}
                        </div>
                    </div>
                </div>
            </div>

            <div className="about-container_4" >
                <div className="about-user_4">
                    <div className="about-user-text_4">
                        <div className="about-user-name_4">
                            <h1>
                                Adriene Ross Macapagal
                            </h1>
                        </div>
                        <div className="about-user-desc_3" style={{ whiteSpace: 'pre-line' }}>
                            {`Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do 
                            eiusmod tempor incididunt ut labore et dolore magna aliqua.

                            Ut enim ad minim veniam, quis nostrud exercitation ullamco 
                            laboris nisi ut aliquip ex ea commodo consequat.`}
                        </div>
                    </div>
                    <div className="about-user-img_4"></div>
                </div>
            </div>

        </div>
    </main>
  );
};

export default About;