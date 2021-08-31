import React from 'react';

function Projects() {
    return(
        <div className="portfolio-container">
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
                    <a href="https://evening-fjord-88647.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/friedsnacksdiner.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Fried Snacks Diner<h4 className="project-description">Delicious Taiwanese Street Food</h4></h2>
                    </div>
                    </a>
                </div>
            </div>

            <div className="row myproject-container">
                <div className="col single-container">
                    <a href="https://github.com/blazelim/pseudo-twitter">
                    <img className="projectPhoto col" src={require("../../assets/pseudotwitter.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Pseudo Twitter<h4 className="project-description">A Social Media Backend</h4></h2>
                    </div>
                    </a>
                </div>
                <div className="col single-container">
                    <a href="https://still-badlands-04219.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/shopshop.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Shop-Shop<h4 className="project-description">An Ecommerce Store with Redux</h4></h2>
                    </div>
                    </a>
                </div>
            </div>

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
                    <a href="https://blazelim.github.io/photo-port/">
                    <img className="projectPhoto col" src={require("../../assets/photoport.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Photo Port<h4 className="project-description">Sample Photography Portfolio</h4></h2>
                    </div>
                    </a>
                </div>
            </div>
        </div>
    )
}

export default Projects