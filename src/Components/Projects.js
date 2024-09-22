import React from "react";
import { FaRobot, FaRecycle, FaExternalLinkAlt, FaPray } from "react-icons/fa";
import { GiMaze, GiDeliveryDrone, GiSwordsEmblem } from "react-icons/gi";
import { PiSoccerBallFill } from "react-icons/pi";
import { BiSolidDish } from "react-icons/bi";
import 'animate.css';


function Projects() {

    const projects = [
        { title: "The Maze Runner", icon: <GiMaze />, description: "A Maze Solver", technologies: "ReactJS, SpringBoot, Java, HTML/CSS, JUnit", link: "https://github.com/mhuzaifah/The-Maze-Runner" },
        { title: "Auto Sniper Bot", icon: <FaRobot />, description: "A bot for automating trading tokens on DEXs within Solana Blockchain", technologies: "TypeScript, NodeJS, XtermJS", link: "https://github.com/mhuzaifah/Auto-Sniper-Sol-Trading-Bot" },
        { title: "Ihsan", icon: <FaPray />, description: "An Islamic app to help Muslims with their religious practices", technologies: "Swift, SwiftUI, UIKit", link: "https://apps.apple.com/ca/app/ihsan/id6498401513" },
        { title: "Island Drone Rescue", icon: <GiDeliveryDrone />, description: "A Island Rescue simulator", technologies: "Java, JUnit, PMD", link: "https://github.com/mhuzaifah/Drone-Rescue-Mission" },
        { title: "iFooty", icon: <PiSoccerBallFill />, description: "Track your favorite soccer teams and players amidst your busy lives", technologies: "ReactJS, SpringBoot, PostgreSQL, Python", link: "https://github.com/mhuzaifah/iFooty" },
        { title: "Recycling Bot", icon: <FaRecycle />, description: "Automated recycling sorting bot", technologies: "Python, Raspberry PI, Quanser Robotics", link: "https://www.notion.so/Revenge-of-the-Recycling-System-6842f32697154d6e97929c90830d29c6" },
        { title: "Warfare Sim", icon: <GiSwordsEmblem />, description: "2D war simulation", technologies: "Processing", link: "https://github.com/mhuzaifah/Medieval-Warfare-Simulation" },
        { title: "Pantry Tracker", icon: <BiSolidDish />, description: "Track pantry items and generate recipes", technologies: "NextJS, Firebase, MUI", link: "https://pantry-tracker-opal-eta.vercel.app/" }
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
                        <div onClick={() => window.open(project.link)} className="cardTitle card">
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