import React from 'react';

function Projects() {
    return(
        <div className="portfolio-container">

            {/* manage-it */}
            <div className="row myproject-container">
                <div className="col single-container">
                    <a href="https://cryptic-bastion-04157.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/manageit.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Manage-it<h4 className="project-description">A checklist reminder application</h4></h2>
                    </div>
                    </a>
                </div>
                <div className="col single-container">
                    <h2>Hello there</h2>
                    <p>general kanobi sadfasdfasdfasdf sd fasdfasdfsdf sadf asdf asdfsdf sadf  sdfsdfsdaffasdfasd fasdfasdfasdfsdfasdfsdfasdfs</p>
                    <h3>Tools Used: REEASDASDFASDF</h3>
                    <h3>Github Repo: Linnnnkkkkkkk</h3>
                    <h3>Testing Account</h3>
                    <p>Username: hireBlazeToday@email.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Password: password</p>

                </div>
            </div>

            {/* Taiwanese Street */}
            <div className="row myproject-container">

                <div className="col single-container">
                    <a href="https://still-badlands-04219.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/shopshop.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Shop-Shop<h4 className="project-description">An Ecommerce Store with Redux</h4></h2>
                    </div>
                    </a>
                </div>

                <div className="col single-container">

                </div>
            </div>

            {/* Shop Shop */}
            <div className="row myproject-container">
                <div className="col single-container">
                    <a href="https://evening-fjord-88647.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/friedsnacksdiner.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Fried Snacks Diner<h4 className="project-description">Delicious Taiwanese Street Food</h4></h2>
                    </div>
                    </a>
                </div>

                <div className="col single-container">

                </div>
            </div>


            {/* Deep Thoughts */}
            <div className="row myproject-container">
                <div className="col single-container">
                    <a href="https://majestic-yellowstone-90978.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/deepthoughts.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Deep Thoughts<h4 className="project-description">What's on your mind?</h4></h2>
                    </div>
                    </a>
                </div>

                <div className="col single-container">

                </div>
            </div>
        </div>
    )
}

export default Projects