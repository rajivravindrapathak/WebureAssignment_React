import React from "react";
import "./HomePage.module.css"
import verify from "../Image/verify.svg"
import Vector from "../Image/Vector.svg"
import girl from "../Image/girl.svg"
import arroline from "../Image/Vector3.svg"
import slack from "../Image/Vector1.svg"
import produtial from "../Image/Vector2.svg"
import microsoft from "../Image/Vector8.svg"
import zoover from "../Image/Vector9.svg"
import groupgirlimg from "../Image/Group2071.svg"

const HomePage = () => {

    return ( 
        <div>
            <h1>Homepage</h1>

            <div className="headDiv">
                <p>Webure Technologies</p>
                <div className="headsubDiv">
                    <p>About us</p>
                    <p>Services</p>
                    <p>carries</p>
                    <p>ROI Stores</p>
                    <p>Blog</p>
                    <p>contact us</p>
                    <button className="letTalk">Let's Talk</button>
                </div>
            </div>

            <div>

                <div className="topDiv" >

                    <div className="logoDiv">
                        <img src={verify} />
                        <p>Best Bussiness platform - world Record 2021</p>
                    </div>

                    <div className="sideDiv">
                        <h2>Reach your Bussiness Goals in Record Time </h2>
                        <p>
                            support small bussiness and join the nation wide movement to incourage comercial customer
                            support for millions of minorty helping the world ecconomy.
                        </p>
                        <div className="startBtn">
                            <button>Get started</button>
                            <p>Book a 30 mint quick meeting</p>
                        </div>
                    </div>

                    <div>
                        
                    </div>

                </div>

                <div className="rightDiv">
                    <img  />
                    <img className="lineImg" src={Vector} />
                    <img className="girlImage" src={girl} />
                    <img className="arroline" src={arroline} />
                </div>
            </div>

            <div className="secDiv">
                <div className="slackImg">
                    <img src={slack} alt="" />
                </div>
                <div>
                    <img className="produtialImg" src={produtial} />
                </div>
                <div>
                    <img className="microsoftImg" src={microsoft} />
                </div>
                <div>
                    <img className="zooverImg" src={zoover} />
                </div>
            </div>

            <p className="service">Service</p>
            <div className="ThidDiv">
                <div>
                    <h2>Our Capbilities</h2>
                    <p>We will bring the breathe of our experience and industry knowledge to help you succeed</p>
                </div>

                <div>
                    <img />
                    <h3>Consult</h3>
                    <p>Consult Leverage agile framework to provide a robust high level synopsys overviews</p>
                </div>

                <div>
                    <img src="" alt="" />
                    <h3>Create</h3>
                    <p>Create Bring to the table survival strategies to ensure proactive domination</p>
                </div>

                <div>
                    <img />
                    <h3>colloborate</h3>
                    <p>Grow the holistic world view of disruptive innovation workspace</p>
                </div>

            </div>

            <div className="fourthDiv">
                <div className="girlLaptopDiv">
                    <img className="groupgirlimg" src={groupgirlimg} />
                    <img className="group" />
                    <img />
                </div>
                <div>

                </div>
            </div>
            <div>

            </div>
            <div>

            </div>
            <div>

            </div>
        </div>
     );
}
 
export default HomePage;