import React from "react";
import { FaRobot, FaRecycle, FaExternalLinkAlt, FaPray } from "react-icons/fa";
import { GiMaze, GiDeliveryDrone, GiSwordsEmblem } from "react-icons/gi";
import { PiSoccerBallFill } from "react-icons/pi";

function Projects() {

    const projects = [
        { title: "The Maze Runner", icon: <GiMaze />, description: "A Maze Solver", technologies: "React.js, JS, HTML, CSS, SpringBoot, Java, JUnit" },
        { title: "Auto Sniper Bot", icon: <FaRobot />, description: "A bot for automating trading tokens on DEXs within Solana Blockchain", technologies: "TypeScript, JS, HTML, CSS" },
        { title: "Ihsan", icon: <FaPray />, description: "An Islamic app to help Muslims with their religious practices", technologies: "Swift, SwiftUI, UIKit" },
        { title: "Island Rescue Sim", icon: <GiDeliveryDrone />, description: "A Island Rescue simulator", technologies: "Java, JUnit" },
        { title: "Soccer Team Tracker", icon: <PiSoccerBallFill />, description: "Track your favorite soccer teams", technologies: "React.js, Node.js, MongoDB, SpringBoot, Python, Express.js" },
        { title: "Recycling Bot", icon: <FaRecycle />, description: "Automated recycling sorting bot", technologies: "Python, Raspberry PI, Quanser Robotics" },
        { title: "Warfare Sim", icon: <GiSwordsEmblem />, description: "2D war simulation", technologies: "Processing, Java" },
    ];

    return (
        <div className='projectsContainer'>
            {projects.map((project, index) => (
                <div key={index} className="card animate-pop">
                    <div className="cardContainer">
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