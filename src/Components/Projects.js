import React from "react";
import { FaRobot, FaRecycle, FaExternalLinkAlt, FaPray } from "react-icons/fa";
import { GiMaze, GiDeliveryDrone, GiSwordsEmblem } from "react-icons/gi";
import { PiSoccerBallFill } from "react-icons/pi";
import { BiSolidDish } from "react-icons/bi";
import 'animate.css';


function Projects() {

    const projects = [
        { title: "The Maze Runner", icon: <GiMaze />, description: "A Maze Solver", technologies: "ReactJS, SpringBoot, Java, HTML/CSS, JUnit" },
        { title: "Auto Sniper Bot", icon: <FaRobot />, description: "A bot for automating trading tokens on DEXs within Solana Blockchain", technologies: "TypeScript, NodeJS, XtermJS" },
        { title: "Ihsan", icon: <FaPray />, description: "An Islamic app to help Muslims with their religious practices", technologies: "Swift, SwiftUI, UIKit" },
        { title: "Island Drone Rescue", icon: <GiDeliveryDrone />, description: "A Island Rescue simulator", technologies: "Java, JUnit" },
        { title: "iFooty", icon: <PiSoccerBallFill />, description: "Track your favorite soccer teams and players amidst your busy lives", technologies: "ReactJS, SpringBoot, PostgreSQL, Python" },
        { title: "Recycling Bot", icon: <FaRecycle />, description: "Automated recycling sorting bot", technologies: "Python, Raspberry PI, Quanser Robotics" },
        { title: "Warfare Sim", icon: <GiSwordsEmblem />, description: "2D war simulation", technologies: "Processing" },
        { title: "Pantry Tracker", icon: <BiSolidDish />, description: "Track pantry items and generate recipes", technologies: "NextJS, Firebase, MUI" }
    ];

    return (
        <div className='projectsContainer'>
            {projects.map((project, index) => (
                <div key={index} className="card ">
                    <div className="cardContainer animate__jackInTheBox">
                        <div className="img">
                            <span className='projectIcon'>{project.icon}</span>
                        </div>
                        <div className="cardDescription">
                            <p>{project.description}</p>
                            <p><strong>Technologies:</strong> {project.technologies}</p>
                        </div>
                        <div className="cardTitle card">
                            <span className="title">{project.title}</span>
                            <span style={{fontSize:'12px'}} ><FaExternalLinkAlt /></span>
                        </div>
                    </div>
                </div>
            ))}
        </div>
    )

}

export default Projects;