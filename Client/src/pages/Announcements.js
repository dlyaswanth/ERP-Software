import React from "react";
import Footer from "../components/Footer/HomeFooter";
import HomeNavBar from "../components/Navbar/HomeNavBar";
function Announcements()
{
    return(
        <>
            <HomeNavBar />
            <br /> <br />
            <div className="justify-content-center" style={{marginTop:"5%",maxWidth:"60%",marginLeft:"20%",marginRight:"20%"}}>
                <b className="text-center announcements" style={{marginLeft: "20%"}}>New Announcements</b>
                <br /> <br />
                <ol className="list-group card">
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-light">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Semester resuts are out</div>
                        Semester V
                        </div>
                        <span className="badge bg-secondary rounded-pill">Just Now</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-light">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Achievements</div>
                        Jonel Winners in Volleyball
                        </div>
                        <span className="badge bg-secondary rounded-pill">15 Days Ago</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-light">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Semester time table is released</div>
                        Semester V
                        </div>
                        <span className="badge bg-secondary rounded-pill">3 Months Ago</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-light">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Achievements</div>
                        Jonel Winners in Football
                        </div>
                        <span className="badge bg-secondary rounded-pill">7 Months Ago</span>
                    </li>
                    <li className="list-group-item d-flex justify-content-between align-items-center list-group-item-light">
                        <div className="ms-2 me-auto">
                        <div className="fw-bold">Smart India Hackathon</div>
                        SIH Runners Up
                        </div>
                        <span className="badge bg-secondary rounded-pill">8 Months Ago</span>
                    </li>
                </ol>
            </div>
            <br/> <br/> <br/> <br/><br/> <br/>
            <Footer/>
        </>
    )
}
export default Announcements;