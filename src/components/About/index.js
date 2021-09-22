import React from 'react';

function About() {
        return (
            <div>
                <div className="row">
                    <div className="col myphoto-container">
                    <img className="myphoto" src={require("../../assets/selfie.jpg").default}></img>
                    </div>
                    <div className="col about-text about-padding">
                        <h1>Bio</h1>
                        <p>Back End Web Developer with a background in Accounting. Educated by UCLA Extension in and earned a Certificate in Full Stack Web Development. Excels at finding simple logical paths, even in large, complicated problems. Known among peers for a methodological approach to any situation and building upon past mistakes and experiences. Strong ability to create, build, and maintain databases from planning to deployment. I find beauty in systems that can perform complicated tasks in a logically simple manner.</p>
                        <h2>Contact Information</h2>
                        <p>Email: blazebentleycolim@gmail.com</p>
                        <p>Phone: (626) 863-3503</p>
                        <p>Find my GitHub Here: <a href="https://github.com/blazelim">/blazelim</a></p>
                        <p>Find my LinkedIn Here:<a href="https://www.linkedin.com/in/blaze-bentley-814852187/">Blaze Bentley Co Lim</a></p>
                    </div>
                </div>
            </div>
        )
}

export default About