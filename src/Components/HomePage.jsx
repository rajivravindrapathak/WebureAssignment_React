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
import blueImg from "../Image/Rectangle3.svg"
import penblue from "../Image/designthinking.svg"
import textblue from "../Image/Contrary.svg"
import Rectangle from "../Image/Rectangle.svg"
import setting1 from "../Image/setting1.svg"
import FrontEndDevelopment from "../Image/FrontEndDevelopment.svg"
import setting13 from "../Image/setting13.svg"
import BackEndDevelopment from "../Image/BackEndDevelopment.svg"
import setting113 from "../Image/setting113.svg"
import ApplicationDevelopment from "../Image/ApplicationDevelopment.svg"
import setting12 from "../Image/setting12.svg"
import CloudServices from "../Image/CloudServices.svg"
import setting11 from "../Image/setting11.svg"
import Analytics1 from "../Image/Analytics1.svg"
import setting from "../Image/setting.svg"
import QAAndTesting from "../Image/QAAndTesting.svg"
import settingh from "../Image/settingh.svg"
import BackOfficeSupport from "../Image/BackOfficeSupport.svg"
import girl12 from "../Image/girl12.svg"
import CosmeticForcestMarketing1 from "../Image/CosmeticForcestMarketing1.svg"
import Rectangle123 from "../Image/Rectangle123.svg"
import SalesAnalytic from "../Image/SalesAnalytic.svg"
import Rectangle1041 from "../Image/Rectangle1041.svg"
import FashionStoreMobileApps from "../Image/FashionStoreMobileApps.svg"
import Rectangle10415 from "../Image/Rectangle10415.svg"
import LaurasCloreBrandingIdentity from "../Image/LaurasCloreBrandingIdentity.svg"
import Rectangle10416 from "../Image/Rectangle10416.svg"
import SEOMarketing4 from "../Image/SEOMarketing4.svg"
import PROJECTS1 from "../Image/PROJECTS1.svg"
import SelectedWorksfromUs from "../Image/SelectedWorksfromUs.svg"
import Rectangle10 from "../Image/Rectangle10.svg"
import SeeMore from "../Image/SeeMore.svg"


const HomePage = () => {

    return ( 
        <div className="mainDiv">
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

            <div className="mainblueDiv">
                <div className="blueDiv">
                    <img src={blueImg} />
                    <img className="penblue" src={penblue} />
                    <img className="textblue" src={textblue} />
                </div>
                <div className="bluesDiv">
                    <img className="rectangle" src={Rectangle} alt="" />
                    <img className="setting1" src={setting1} />
                    <img className="FrontEndDevelopment" src={FrontEndDevelopment} alt="" />
                </div>
                <div>
                    <img className="rectangle" src={Rectangle} alt="" />
                    <img className="setting13" src={setting13} />
                    <img className="BackEndDevelopment" src={BackEndDevelopment} alt="" />
                </div>
                <div>
                    <img className="rectangle" src={Rectangle} alt="" />
                    <img className="setting113" src={setting113} />
                    <img className="ApplicationDevelopment" src={ApplicationDevelopment} alt="" />
                </div>
            </div>

            <div className="mainblueDiv">
                <div className="blueDiv">
                    <img className="rectangle" src={Rectangle} alt="" />
                    <img className="setting12" src={setting12} />
                    <img className="CloudServices" src={CloudServices} />
                </div>
                <div className="bluesDiv">
                    <img className="rectangle" src={Rectangle} alt="" />
                    <img className="setting11" src={setting11} />
                    <img className="Analytics1" src={Analytics1} alt="" />
                </div>
                <div>
                    <img className="rectangle" src={Rectangle} alt="" />
                    <img className="setting" src={setting} />
                    <img className="QAAndTesting" src={QAAndTesting} alt="" />
                </div>
                <div>
                    <img className="rectangle" src={Rectangle} alt="" />
                    <img className="settingh" src={settingh} />
                    <img className="BackOfficeSupport" src={BackOfficeSupport} alt="" />
                </div>
            </div>

            <div className="girlDiv"> 
                <div>
                    <img className="girl12" src={girl12} alt="" /><br />
                    <img className="CosmeticForcestMarketing1" src={CosmeticForcestMarketing1} />
                </div>
                <div>
                    <img className="Rectangle123" src={Rectangle123} alt="" /><br />
                    <img className="SalesAnalytic" src={SalesAnalytic} />
                </div>
                <div>
                    <img className="Rectangle1041" src={Rectangle1041} alt="" /><br />
                    <img className="FashionStoreMobileApps" src={FashionStoreMobileApps} />
                </div>
            </div>

            <div className="girlDiv"> 
                <div>
                    <img className="Rectangle10415" src={Rectangle10415} alt="" /><br />
                    <img className="LaurasCloreBrandingIdentity" src={LaurasCloreBrandingIdentity} />
                </div>
                <div>
                    <img className="Rectangle10416" src={Rectangle10416} alt="" /><br />
                    <img className="SEOMarketing4" src={SEOMarketing4} />
                </div>
                <div>
                    <img className="PROJECTS1" src={PROJECTS1} alt="" /><br />
                    <img className="SelectedWorksfromUs" src={SelectedWorksfromUs} />
                    <img className="Rectangle10" src={Rectangle10} alt="" />
                    <img className="SeeMore" src={SeeMore} alt="" />
                </div>
            </div>

        </div>
     );
}
 
export default HomePage;