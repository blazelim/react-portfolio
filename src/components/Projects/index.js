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
                       <h2 className="project-text">Manage-it<h4 className="project-description">Click here for the application</h4></h2>
                    </div>
                    </a>
                </div>
                <div className="col single-container project-description-text">
                    <h2>Description</h2>
                    <p>Manage mundane repetitve tasks quickly and easily. 
                        Send reminders via a timed text to yourself or others. 
                        Manage it is a simple, barebones checklist application that lets you create checklists and edit it to your desires.</p>
                    <h3>Tools Used: SQL, bcrypt, Express, Node-Cron, Twilio</h3>
                    <h3>Github Repo: <a href="https://github.com/Xavy-Romeo/manage-it">https://github.com/Xavy-Romeo/manage-it</a></h3>
                    <h3>Testing Account</h3>
                    <p>Username: testingaccount@email.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Password: password</p>
                </div>
            </div>

            {/* Shop Shop  */}
            <div className="row myproject-container">

                <div className="col single-container">
                    <a href="https://still-badlands-04219.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/shopshop.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Shop-Shop<h4 className="project-description">Click here for the application</h4></h2>
                    </div>
                    </a>
                </div>

                <div className="col single-container project-description-text">
                <h2>Description</h2>
                    <p>A sample eCommerce storefront using a backend to organize the products as well as Redux to manage global variables</p>
                    <h3>Tools Used: React, Redux, MongoDB, GraphQL, Stripe</h3>
                    <h3>Github Repo: <a href="https://github.com/blazelim/shop-shop-with-redux">https://github.com/blazelim/shop-shop-with-redux</a></h3>
                </div>
            </div>

            {/* Taiwanese Street */}
            <div className="row myproject-container">
                <div className="col single-container">
                    <a href="https://evening-fjord-88647.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/friedsnacksdiner.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Fried Snacks Diner<h4 className="project-description">Click here for the application</h4></h2>
                    </div>
                    </a>
                </div>

                <div className="col single-container project-description-text">
                    <h2>Description</h2>
                    <p>Order delicious taiwanese style street food from Fried Snacks Diner! (Or at least pretend to as our planned client didn't go through with his shop)</p>
                    <h3>Tools Used: React, Redux, MongoDB, GraphQL, Stripe, React, Redux</h3>
                    <h3>Github Repo: <a href="https://github.com/blazelim/taiwanese-street">https://github.com/blazelim/taiwanese-street</a></h3>
                </div>
            </div>


            {/* Deep Thoughts */}
            <div className="row myproject-container">
                <div className="col single-container">
                    <a href="https://majestic-yellowstone-90978.herokuapp.com/">
                    <img className="projectPhoto col" src={require("../../assets/deepthoughts.png").default}></img>
                    <div className="project-text-container">
                       <h2 className="project-text">Deep Thoughts<h4 className="project-description">Click here for the application</h4></h2>
                    </div>
                    </a>
                </div>

                <div className="col single-container project-description-text">
                <h2>Description</h2>
                    <p>Share your thoughts with your friends. See what your friends think and react to what they post</p>
                    <h3>Tools Used: GraphQL, Faker, Express, MongoDB, React</h3>
                    <h3>Github Repo: <a href="https://github.com/blazelim/deep-thoughts">https://github.com/blazelim/deep-thoughts</a></h3>
                    <h3>Testing Account</h3>
                    <p>Username: testingaccount@email.com &nbsp;&nbsp;&nbsp;&nbsp;&nbsp; Password: password</p>
                </div>
            </div>
        </div>
    )
}

export default Projects