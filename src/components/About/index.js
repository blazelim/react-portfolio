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
                        <p>Hello! My name is Blaze Lim and I am a 24 year old, raised in the not so small suburb of Walnut, California. I am in love with the weather of Southern California, but I am always down to find any adventure offered to me. My current hobbies are going to the gym, video games, and smoking meats. If there’s ever a party or potluck, trust that I’ll be able to bring a smoked salmon filet or some smoked pork belly. I am also the owner of 3 wonderful dogs of various temperaments and ages. One is a husky who will literally demand that I take him on daily 2-mile walks. Another is an older Pomeranian that demands that I carry her for the previously mentioned 2-mile walk. The last dog is a Mini Schnauzer Pup that is happy and playful in every situation. </p>
                        <h2>Why I started coding</h2>
                        <p>The reason I decided to get into coding is that I’ve always had a knack for fixing things, including things that I have never seen before. I have fixed the clock inside of my old car, which involved me picking up the skill of using a soldering iron. I have fixed various leaking pipes connected to my sprinkler system, which involved me learning a lot of skills related to plumbing. I have fixed my house’s ceiling light system that constantly flickered even after switching lightbulbs. The list goes on and on. And every time, I had to consider the situation, think of prudent solutions, pick up the relevant skills, and then finally apply them. When its successful, I get a sense of joy that I can’t find anywhere else. I find that this situation is very common in coding, which is what attracted me to the field.</p>
                    </div>
                </div>
            </div>
        )
}

export default About