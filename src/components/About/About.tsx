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
                {`Welcome to our innovative platform, designed to revolutionize the way you approach international
                trade forecasting. As a part of our thesis project, our team of four dedicated researchers
                has developed a cutting-edge tool that predicts import and export FOB (Free on Board)
                values for the upcoming year using advanced Bayesian Neural Network algorithms.

                Our mission is to provide businesses, economists, and policymakers with accurate, data-driven insights
                to enhance strategic decision-making in the dynamic world of global trade. By leveraging the power
                of machine learning and probabilistic modeling, our platform delivers reliable forecasts that
                help you stay ahead of market trends and optimize your trade strategies.`}
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
                            {`Our head researcher in our team. He provides the outline on how
                            we must proceed with the project to ensure the best possible outcome.

                            Furthermore, he acquires the information through our collaborators.`}
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
                            {`She acts as the co-head researcher in our team, giving out reliable
                            sources and references for the project to provide developers information
                            on how to proceed with the project.

                            She is also the most knowledgeable about the research itself and can
                            answer any question about this specific topic.`}
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
                            {`Is the main developer of this project, he acts as the backend
                            developer and leads the progression of the system, ensuring the
                            system can provide as much accurate data as possible.

                            He also has multiple sources and collaborators to help him with the
                            complicated side of developing an algorithm.`}
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
                            {`He is acting as the front-end developer of the project, providing the
                            best quality user interface and user experience.

                            He also collaborates with the main developer closely as to ensure
                            project consistency and having one vision in completing the system.`}
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