/* eslint-disable no-unused-vars */
import React from "react";
import {Link} from 'react-router-dom'
import { ToastContainer,toast } from 'react-toastify'
import { PieChart } from 'react-minimal-pie-chart';
import AdminNavbar from "../components/Navbar/AdminNavbar";
function AdminHome()
{
    return (
        <div id="main" style={{minHeight:"100%",marginLeft:"70px"}}>
            <ToastContainer />
            <div style={{minHeight:"100%"}}>
            <AdminNavbar />
            </div>
            <h3 style={{marginTop:"2%"}}>Welcome back !</h3>
            
            <div className="row">
                <div className="col col-sm-12 col-md-8 col-lg-6" style={{maxWidth:"60%"}}>
                    <h5 style={{marginTop:"4%"}}>Institution Information</h5>
                    <br />
                <div className="card container homecard">
                <div className="row gy-3 row-cols-4" style={{marginTop:"1px",marginBottom:"20px"}}>
                    <div className="col">
                    <div><b>Professors</b></div>
                    </div>
                    <div className="col">
                    <div><b>Students</b></div>
                    </div>
                    <div className="col">
                    <div><b>Workers</b></div>
                    </div>
                    <div className="col">
                    <div><b>Total Count</b></div>
                    </div>
                    <div className="col">
                    <div>0</div>
                    </div>
                    <div className="col">
                    <div>0</div>
                    </div>
                    <div className="col">
                    <div>0</div>
                    </div>
                    <div className="col">
                    <div><b><i>0</i></b></div>
                    </div>
                    <div className="col">
                    <Link to="/viewdetails">View Details</Link>
                    </div>
                    <div className="col">
                    <Link to="/viewdetails">View Details</Link>
                    </div>
                    <div className="col">
                    <Link to="/viewdetails">View Details</Link>
                    </div>
                </div>
            </div>
            <h5 style={{marginTop:"4%"}}>Today's Attendance Information</h5>
            <br />
            <div className="card container homecard" >
                <div className="row gy-3 row-cols-4" style={{marginTop:"1px",marginBottom:"20px"}}>
                    <div className="col">
                    <div><b>Professors Present</b></div>
                    </div>
                    <div className="col">
                    <div><b>Students Present</b></div>
                    </div>
                    <div className="col">
                    <div><b>Workers Present</b></div>
                    </div>
                    <div className="col">
                    <div><b>Total Count</b></div>
                    </div>
                    <div className="col">
                    <div>0</div>
                    </div>
                    <div className="col">
                    <div>0</div>
                    </div>
                    <div className="col">
                    <div>0</div>
                    </div>
                    <div className="col">
                    <div><b>0</b></div>
                    </div>
                    <div className="col">
                    <Link to="/viewdetails">View Details</Link>
                    </div>
                    <div className="col">
                    <Link to="/viewdetails">View Details</Link>
                    </div>
                    <div className="col">
                    <Link to="/viewdetails">View Details</Link>
                    </div>
                </div>
                </div>
                </div>
                <div className="col" style={{maxHeight:"300px",maxWidth:"35%",marginLeft:"230px"}}>
                    <h5 style={{marginLeft:"110px",marginTop:"80px"}}>Pie Chart for Institution</h5>
                    <br />
                <PieChart
                data={[
                    { title: 'Staff', value: 35, color: '#76c893' },
                    { title: 'Student', value: 40, color: '#34a0a4' },
                    { title: 'Workers', value: 25, color: '#168aad' },
                ]}
                lineWidth={50}
                animate="true"
                paddingAngle={1.5}
                labelPosition="70"
                labelStyle={(index) => ({
                    fontSize: '5px',
                    fontFamily: 'sans-serif',
                  })}
                label={({ dataEntry }) => dataEntry.value+"%"}
                style={{maxWidth:"80%"}}
                />         
                </div>
            </div>
        </div>
    )
}
export default AdminHome;