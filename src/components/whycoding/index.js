import React from 'react';

function WhyCoding() {
        return (
            <div>
                <div className="row">
                    <div className="col myphoto-container">
                        <img className="myphoto" src={require("../../assets/dimmer.png").default}></img>
                        
                    </div>
                    <div className="col about-text about-padding">
                        <h2>Why I started coding</h2>
                        <p>The reason I decided to get into coding is that I’ve always had a knack for fixing things, including things that I have never seen before. I have fixed the clock inside of my old car, which involved me picking up the skill of using a soldering iron. I have fixed various leaking pipes connected to my sprinkler system, which involved me learning a lot of skills related to plumbing. I have fixed my house’s ceiling light system that constantly flickered even after switching lightbulbs. The list goes on and on. And every time, I had to consider the situation, think of prudent solutions, pick up the relevant skills, and then finally apply them. When its successful, I get a sense of joy that I can’t find anywhere else. I find that this situation is very common in coding, which is what attracted me to the field.</p>
                        <img className="myphoto" src={require("../../assets/soldering.png").default}></img>
                    </div>
                </div>
            </div>
        )
}

export default WhyCoding

