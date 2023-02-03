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
import roundtirimg from "../Image/Vector10.svg"
import statelineimg from "../Image/Vector11.svg"
import ticimg from "../Image/Vector12.svg"
import mainimg from "../Image/Solutions.svg"
import Countdown from "../Image/Countdown.svg"
import dotimg from "../Image/dot1.svg"
import dotimg1 from "../Image/dot.svg"
import dotimg2 from "../Image/dot2.svg"


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
                    <img className="grouproundtirimg" src={roundtirimg} />
                    <img className="statelineimg" src={statelineimg} />
                </div>
                
                <div className="girlLaptopRightDiv">
                    <p>why choose us</p>
                    <div>
                        <h3>Take any challenge of digital world</h3>
                        
                        <div className="ticimg">
                            <img src={ticimg} />
                            <p>Corporate Financial Advisory </p>
                        </div>

                        <div className="ticimg">
                            <img src={ticimg} />
                            <p>Development of Financial Models</p>
                        </div>
                        <div className="ticimg">
                            <img src={ticimg} />
                            <p>Deal Structuring</p>
                        </div>

                    </div>

                    <div className="emailDiv">
                        <h3>Enter your email ID </h3>
                        <div>
                            <button>Get Started</button>
                        </div>
                    </div>

                </div>
            </div>

            <div className="fifthDiv">
                <img className="" src={mainimg} />
                {/* <img src={submainimg} alt="" /> */}

                {/* <div className="childfifthDiv"> */}
                    {/* <p className="our">OUR SOLUTIONS</p>
                    <h2>Launch and scale your marketings campaigns</h2>
                    <p>
                        We start with a kick-off call with the respective project owners,
                        onboard the teams on the project management platform and, take off.
                    </p>
                    <button className="learnMore">Learn more</button> */}
                {/* </div> */}

                {/* <div>

                </div> */}

            </div>

            <div className="sixDiv">
                <img src={Countdown} />
            </div>

            <div>
                <img className="dotimg2" src={dotimg2} />
                <img className="dotimg" src={dotimg} alt="" />
                <img className="dotimg1" src={dotimg1} alt="" />
                <h1>What We Do</h1>
            </div>

            <div className="text">
                <h3>Our Services</h3>
                <p>It has roots in a piece of classical Latin literature from 45 BC, making it over 2000 years old. Richard McClintock, a Latin professor at Hampden-Sydney College in Virginia, looked up one of the more obscure Latin words, consectetur, from a Lorem Ipsum passage, and going through the cites of the word in classical literature</p>
            </div>

        </div>
     );
}
 
export default HomePage;