import React from "react";
import Footer from "../components/Footer/HomeFooter";
import HomeNavBar from "../components/Navbar/HomeNavBar";
function TimeTable()
{
    return (
        <>
        <div>
            <HomeNavBar />
            <br /><br />
            <div style={{marginTop:"7%",marginLeft:"35%",marginRight:"35%",maxWidth:"30%"}}>
            <b className="text-center announcements" style={{marginLeft:"23%"}}>Time Table</b>
            <div className="container-fluid card timetable">
                <br />
                <div className="d-flex justify-content-center">
                    <div data-bs-toggle="collapse" data-bs-target="#collapseExample"  aria-expanded="false" aria-controls="collapseExample" style={{cursor:"pointer"}}>
                        <h5><li>Ist &nbsp;&nbsp;Year Time Internals Time Table</li></h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div data-bs-toggle="collapse" data-bs-target="#collapseExample"  aria-expanded="false" aria-controls="collapseExample" style={{cursor:"pointer"}}>
                        <h5><li>IInd Year Time Internals Time Table</li></h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div data-bs-toggle="collapse" data-bs-target="#collapseExample"  aria-expanded="false" aria-controls="collapseExample" style={{cursor:"pointer"}}>
                        <h5><li>IIIrd Year Time Internals Time Table</li></h5>
                    </div>
                </div>
                <div className="d-flex justify-content-center">
                    <div data-bs-toggle="collapse" data-bs-target="#collapseExample"  aria-expanded="false" aria-controls="collapseExample" style={{cursor:"pointer"}}>
                        <h5><li>IVth Year Time Internals Time Table</li></h5>
                    </div>
                    <br/><br/>
                </div>
            </div>
            </div>
            <div className="collapse" id="collapseExample" style={{marginLeft:"20%",marginRight:"20%",maxWidth:"60%"}}>
                <br />
                <br />
                <table className="table">
                    <thead className="table-dark">
                        <tr>
                            <th scope="col">S.NO</th>
                            <th scope="col">Date</th>
                            <th scope="col">Subject</th>
                            <th scope="col">Timings</th>
                        </tr>
                    </thead>
                    <tbody>
                        <tr>
                            <th scope="row">1</th>
                            <td>14-09-2021</td>
                            <td>Python</td>
                            <td>10:00 AM - 12:30 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">2</th>
                            <td>15-09-2021</td>
                            <td>Engineering Chemistry</td>
                            <td>10:00 AM - 12:30 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">3</th>
                            <td>16-09-2021</td>
                            <td>Engineering Physics</td>
                            <td>10:00 AM - 12:30 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">4</th>
                            <td>17-09-2021</td>
                            <td>Engineering Graphics</td>
                            <td>10:00 AM - 12:30 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">5</th>
                            <td>18-09-2021</td>
                            <td>Engineering Communication</td>
                            <td>10:00 AM - 12:30 PM</td>
                        </tr>
                        <tr>
                            <th scope="row">6</th>
                            <td>19-09-2021</td>
                            <td>Engineering Mathematics I</td>
                            <td>10:00 AM - 12:30 PM</td>
                        </tr>
                    </tbody>
                </table>
            </div>
            
        </div>
        <br/> <br/> <br/> <br/><br/> <br/>
          <Footer/>
        </>
    )
}
export default TimeTable