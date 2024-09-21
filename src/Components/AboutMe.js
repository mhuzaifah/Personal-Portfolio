import React, {useState} from "react";
import { faPython, faCss3, faJava, faHtml5, faSwift, faReact } from "@fortawesome/free-brands-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

function AboutMe() {

    const [languages] = useState([
        { name: "Python", progress: 100, className: "python-progress", years: 4 },
        { name: "Java", progress: 75, className: "java-progress", years: 2 },
        { name: "Javascript/HTML5/CSS", progress: 75, className: "web-progress", years: 2 },
        { name: "Swift", progress: 50, className: "swift-progress", years: 1 },
        { name: "MATLAB", progress: 50, className: "processing-progress", years: 1 },
        { name: "C", progress: 50, className: "c-progress", years: 1 },
        { name: "Typescript", progress: 35, className: "web-progress", years: 0.75 },
    ]);

    const [techs] = useState([
        { name: "ReactJS", progress: 100, className: "react-progress", years: 1.5 },
        { name: "Spring Boot", progress: 85, className: "springboot-progress", years: 1 },
        { name: "PostgreSQL", progress: 75, className: "post-progress", years: 0.75 },
        { name: "NextJS", progress: 75, className: "next-progress", years: 0.75 },
        { name: "MongoDB", progress: 50, className: "mongo-progress", years: 0.5 },
        { name: "NodeJS", progress: 35, className: "node-progress", years: 0.35 },
        { name: "Firebase", progress: 25, className: "post-progress", years: 0.25 },

    ]);

    const [devs] = useState([
        { name: "Git", progress: 65, className: "react-progress", years: 2 },
        { name: "Postman", progress: 50, className: "aws-progress", years: 1 },
        { name: "PMD", progress: 35, className: "aws-progress", years: 0.5 },
    ]);

    const [mode, setMode] = useState({title: "Languages", list: languages});

    return (
        <div className="aboutMeContainer" >
            <div className="aboutMeInfo" style={{height:'90%', width:'45%', paddingLeft:'2.5%', display:'flex', flexDirection:'column', justifyContent:'space-evenly'}}>
                <div style={{textAlign:'left', fontSize:'1.15em'}} >I am a very ambitious Software Developer interested in Full Stack, Blockchain, and AI development. I have an unique background that has prepared me to be a team player who communicates effectively, faces problems analytically and has the technical skills to tackle various challenges.< /div>
                <div style={{height:'80%', display: 'flex', flexDirection: 'column' }}>
                    <h2 style={{ alignSelf: 'flex-start' }}>{mode.title}</h2>
                    <ul style={{ listStyle: 'none', padding: '0' }}>
                        {mode.list.map((item, index) => (
                            <li key={index} style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', marginBottom:'10px' }}>
                                <span style={{ textAlign: 'left', width: '100%' }}>{item.name}: {`${item.years} years`}</span>
                                <div className={`progress-bar ${item.className}`} style={{ width: '100%' }}>
                                    <div className="progress" style={{ width: `${item.progress}%` }}></div>
                                </div>
                            </li>
                        ))}
                    </ul>
                </div>
                <div style={{display:'flex', justifyContent:"space-between"}}>
                    <button className={mode.title === 'Languages' ? 'active' : ''} onClick={() => setMode({title: "Languages", list: languages})} >LANGUAGES</button>
                    <button className={mode.title === 'Frameworks & Technologies' ? 'active' : ''} onClick={() => setMode({title: "Frameworks & Technologies", list: techs})} >FRAMEWORKS/TECHNOLOGIES</button>
                    <button className={mode.title === 'Development Tools' ? 'active' : ''} onClick={() => setMode({title: "Development Tools", list: devs})}>DEVELOPMENT TOOLS</button>
                </div>
            </div>
            <div className = "stage-cube-cont">
                <div className = "cubespinner">
                    <div className = "face1">
                        <FontAwesomeIcon icon={faSwift}/>
                    </div>
                    <div className = "face2">
                        <FontAwesomeIcon icon={faHtml5} color="#F06529"/>
                    </div>
                    <div className = "face3">
                        <FontAwesomeIcon icon={faCss3} color="#28A4D9"/>
                    </div>
                    <div className = "face4">
                        <FontAwesomeIcon icon={faReact} color="#5ED4F4"/>
                    </div>
                    <div className = "face5">
                        <FontAwesomeIcon icon={faPython} color="#ffd700"/>
                    </div>
                    <div className = "face6">
                        <FontAwesomeIcon icon={faJava} color="#EC4D28"/>
                    </div>
                </div>
            </div>
        </div>
    )

}

export default AboutMe;