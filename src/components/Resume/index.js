import React from 'react';

// resume export function
export default function Resume() {
    return (
        <div className="resume">
            <div className="download-container">
               <a className="download" href="https://drive.google.com/file/d/1Ifn6YVibMkOZaPQBhQ1qF5OyLCcuUgDL/view?usp=sharing">Open Resume</a>
            </div>
            <div className="resume-text">
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
            <div className="resume-text">
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
            <div className="resume-text">
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