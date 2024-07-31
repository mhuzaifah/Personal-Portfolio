import './App.css';
import Home from "./Components/Home";
import Header from "./Components/Header";
import Projects from "./Components/Projects";
import { BrowserRouter as Router, Routes, Route, useLocation } from "react-router-dom";
import Contact from "./Components/Contact";
import AboutMe from "./Components/AboutMe";
import { useEffect, useState } from "react";
import Loader from "./Components/Loader";

function App() {
    const location = useLocation();
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        const handleStart = () => setLoading(true);
        const handleComplete = () => setLoading(false);

        handleStart();

        const timeout = setTimeout(handleComplete, 1000);

        return () => clearTimeout(timeout);
    }, [location]);

    return (
        <div className="App">
            <Header />
            <div className='content'>
                { loading ?
                    (
                        <Loader />
                    )
                    :
                    (
                        <Routes>
                            <Route path="/" element={<Home />} />
                            <Route path="/about-me" element={<AboutMe />} />
                            <Route path="/projects" element={<Projects />} />
                            <Route path="/contact" element={<Contact />} />
                        </Routes>
                    )
                }
            </div>
        </div>
    );
}

const AppWrapper = () => (
    <Router>
        <App />
    </Router>
);

export default AppWrapper;