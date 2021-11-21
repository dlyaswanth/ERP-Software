import React from 'react'
import HomeNavBar from '../components/Navbar/HomeNavBar'
import mongo from '../assets/images/mongodb.png'
import react from '../assets/images/reactjs.png'
import node from '../assets/images/nodejs.png'
import express from '../assets/images/express.png' 
import Footer from '../components/Footer/HomeFooter'
// import {Link} from 'react-router-dom'
function Home()
{
    return (
        <>
        <HomeNavBar />
        <br /><br /> <br /><br /><br />
        <div id="carouselExampleDark" className="carousel carousel-dark slide" data-bs-ride="carousel">
            <div className="carousel-indicators">
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="0" className="active" aria-current="true" aria-label="Slide 1"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="1" aria-label="Slide 2"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="2" aria-label="Slide 3"></button>
                <button type="button" data-bs-target="#carouselExampleDark" data-bs-slide-to="3" aria-label="Slide 4"></button>
            </div>
            <div className="carousel-inner">
                <div className="carousel-item active" data-bs-interval="20000">
                <a href="https://www.mongodb.com/"><img src={mongo} className="d-block w-100" alt="Mongo DB" width="80" height="580"/></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Used As a DataBase</h5>
                    <p>NoSQL</p>
                </div>
                </div>
                <div className="carousel-item" data-bs-interval="2000">
                <a href="https://reactjs.org/"><img src={react} className="d-block w-100" alt="React JS"  width="80" height="580"/></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Used As a Front-End</h5>
                    <p>Single Page Application</p>
                </div>
                </div>
                <div className="carousel-item">
                <a href="http://expressjs.com/">
                    <img src={express} className="d-block w-100" alt="Express JS" width="80" height="580" /></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Used As a Back-End</h5>
                    <p>Routers & etc</p>
                </div>
                </div>
                <div className="carousel-item">
                <a href="https://nodejs.org/"><img src={node} className="d-block w-100" alt="Node JS" width="80" height="580" /></a>
                <div className="carousel-caption d-none d-md-block">
                    <h5>Run Time Environment for Back-End</h5>
                    <p>Runs the server</p>
                </div>
                </div>
            </div>
            <button className="carousel-control-prev" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="prev">
                <i className="far fa-arrow-alt-circle-left arrow"></i>
            </button>
            <button className="carousel-control-next" type="button" data-bs-target="#carouselExampleDark" data-bs-slide="next">
                <i className="far fa-arrow-alt-circle-right arrow"></i>
            </button>
        </div>
        <br /><br /><br /> <br />
        <div className="homeContent">
        <br /><br />
            <h3 className="homehead">Key Features of Our Application</h3>
            <br />
            <ul className="homelist">
                <li>SPA (Single Page Application) more faster</li>
                <li>NoSQL - Queries execution is faster than SQL</li>
                <li>All in one Application</li>
                <li>Secure Payment GateWay</li>
            </ul>
        </div>
        <br />
        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320"><path fill="#989c9e" fillOpacity="1" d="M0,160L12.6,160C25.3,160,51,160,76,165.3C101.1,171,126,181,152,176C176.8,171,202,149,227,128C252.6,107,278,85,303,69.3C328.4,53,354,43,379,64C404.2,85,429,139,455,144C480,149,505,107,531,101.3C555.8,96,581,128,606,117.3C631.6,107,657,53,682,32C707.4,11,733,21,758,64C783.2,107,808,181,834,192C858.9,203,884,149,909,128C934.7,107,960,117,985,149.3C1010.5,181,1036,235,1061,234.7C1086.3,235,1112,181,1137,144C1162.1,107,1187,85,1213,90.7C1237.9,96,1263,128,1288,122.7C1313.7,117,1339,75,1364,58.7C1389.5,43,1415,53,1427,58.7L1440,64L1440,320L1427.4,320C1414.7,320,1389,320,1364,320C1338.9,320,1314,320,1288,320C1263.2,320,1238,320,1213,320C1187.4,320,1162,320,1137,320C1111.6,320,1086,320,1061,320C1035.8,320,1011,320,985,320C960,320,935,320,909,320C884.2,320,859,320,834,320C808.4,320,783,320,758,320C732.6,320,707,320,682,320C656.8,320,632,320,606,320C581.1,320,556,320,531,320C505.3,320,480,320,455,320C429.5,320,404,320,379,320C353.7,320,328,320,303,320C277.9,320,253,320,227,320C202.1,320,177,320,152,320C126.3,320,101,320,76,320C50.5,320,25,320,13,320L0,320Z"></path></svg>
        <Footer />
        </>
    )
}
export default Home