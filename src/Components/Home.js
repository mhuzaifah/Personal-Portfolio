import React from "react";
import Spline from '@splinetool/react-spline';

function Home() {

    return (
        <div className="homeContainer" >
            <Spline scene="https://prod.spline.design/LEVsv8dRhWfFDsbe/scene.splinecode" className='homeLogo' />
            <div className='homeText'>
                <h1 className='homeTextChild'>Hi,</h1>
                <h1 className="homeTextChild">I'm <span className="textStyle">Muhammad Huzaifah</span></h1>
                <h1 className='homeTextChild'>an aspiring Software Engineer.</h1>
            </div>
        </div>
    )

}

export default Home;