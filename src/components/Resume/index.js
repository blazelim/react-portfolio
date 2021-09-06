import React from 'react';
import downloadResume from '../../assets/blazelim_resume.txt';

// resume export function
export default function Resume() {
    return (
        <div className="resume">
            <div className="download-container">
               <a className="download" href={downloadResume} download>Download Resume</a>
            </div>
            <div>
                <h2>Front-End</h2>
                <ul>
                    <li>HTML</li>
                    <li>CSS</li>
                    <li>Javascript</li>
                    <li>Jquery</li>
                    <li>Bootstrap</li>
                    <li>Pure CSS</li>
                    <li>React</li>
                </ul>
            </div>
            <div>
                <h2>Back-End</h2>
                <ul>
                    <li>NodeJS</li>
                    <li>Express</li>
                    <li>MySQL</li>
                    <li>MongoDB</li>
                    <li>Mongoose</li>
                    <li>Model View Controllers</li>
                    <li>Progressive Web Applications</li>
                    <li>Twilio NodeJS</li>
                </ul>
            </div>
            <div>
                <h2>Development</h2>
                <ul>
                    <li>Node</li>
                    <li>Git</li>
                    <li>Jest</li>
                    <li>Github</li>
                    <li>Heroku</li>
                </ul>
            </div>
        </div>
    )
}