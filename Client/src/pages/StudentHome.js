/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable jsx-a11y/anchor-has-content */
import React, { useEffect, useState } from "react";
import { toast } from "react-toastify";
import StudentNavbar from "../components/Navbar/StudentNavbar";
function StudentHome()
{
    const getinfodata=JSON.parse(sessionStorage.getItem('User'))
    const [studentDetails,setStudentDetails]=useState([])
    const [personalDetails,setPersonalDetails]=useState({})
    useEffect(()=>{
        fetch('/getStudentDetails',{
            method:'POST',
            headers:{
                'Content-Type':'Application/json'
            },
            body:JSON.stringify({
                email:getinfodata['email'],
            })
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.error)
            {
                toast.error(data.error,{autoClose:2500})
                console.log(data.error);
            }
            else
            {
                setStudentDetails(data)
                setPersonalDetails(data.Details)
            }
        })
    },[])
    return (
        <div id="main" style={{minWidth:"100%",marginTop:"10px",marginLeft:"70px"}}>
             <h3 className="text-center">Welcome back !</h3>
             <br />
            <StudentNavbar />
            <div className="container" >
                <div className="row" style={{marginLeft:"3%",marginRight:"3%",minWidth:"80%"}}>
               
                <br />
                    <div className="col-4" >
                        <div className="our-team">
                            <div className="picture">
                            <img className="img-fluid" alt="student-profile" src="https://th.bing.com/th/id/R.1c0973cfbfd25178d72b0b0a93206625?rik=z8y8Ftm1919VOw&riu=http%3a%2f%2fcdn.onlinewebfonts.com%2fsvg%2fimg_299586.png&ehk=LBhfOw4KDHaDyrvk21Bac0nzxkAym5hWC8dHAAZ58oo%3d&risl=&pid=ImgRaw&r=0" />
                            </div>
                            <div className="team-content">
                            <h3 className="name">{studentDetails.name}</h3>
                            <h4 className="title">{getinfodata.type}</h4>
                            </div>
                            <div className="social">
                            Department : {personalDetails.department}
                            </div>
                        </div>
                        </div>
                        <div className="picture our-team col-4 info-student" style={{marginLeft:"55px"}}>  
                            <strong>Gender :</strong> {personalDetails.gender}<br />
                            <strong>Blood Group:</strong> {personalDetails.blood_Group}<br />
                            <strong>Mother Tongue :</strong> {personalDetails.mother_Tongue}<br />
                            <strong>Mail : </strong> {studentDetails.email}<br />
                            <strong>DOB : </strong> {personalDetails.dob}<br />
                            <strong>Cut Of Mark :</strong> {personalDetails.cut_of_Mark}<br />
                            <strong>Batch : </strong>{personalDetails.batch}<br />
                            <strong>Admission Date : </strong>{personalDetails.admissionDate}<br />
                            <strong>Admission Type :</strong> {personalDetails.admissionType}<br />
                            <strong>Student Identity :</strong> {personalDetails.student_Identity}<br />
                            <strong>Roll Number : </strong> {personalDetails.roll_no}<br />
                            <strong>Registration Number : </strong> {personalDetails.reg_no}<br />
                            <strong>Tutor's Name : </strong> {personalDetails.tutorName}
                        </div>
                        </div>
                    <div className="row">
                       
                    <div className="col-11" style={{marginLeft:"10px"}}>
                    <hr />
                        <ul className="nav nav-pills  flex-column flex-sm-row" id="pills-tab" role="tablist">
                            <li className="nav-item" role="presentation">
                                <button className="flex-sm-fill text-sm-center nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">Personal Details</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="flex-sm-fill text-sm-center nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Statutory & Address Info</button>
                            </li>
                            <li className="nav-item" role="presentation">
                                <button className="flex-sm-fill text-sm-center nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">Contact & Other's</button>
                            </li>
                            </ul>
                            <hr />
                            <div className="tab-content" id="pills-tabContent">
                                <br />
                                <div className="tab-pane fade show active" id="pills-home" role="tabpanel" aria-labelledby="pills-home-tab">
                                    <div className="card  mb-3">
                                    <div className="card-header text-center"><h5>Details</h5></div>
                                    <div className="card-body start-0">
                                        <div className="card-text">
                                        <div className="row p-2 ">
                                                <div className="col-4"><b>Gender :</b> {personalDetails.gender}</div>
                                                <div className="col-4"><b>Mother Tongue :</b> {personalDetails.mother_Tongue}</div>
                                                <div className="col-4"><b>Blood Group:</b> {personalDetails.blood_Group}</div>
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-5"><b>Admission Type :</b> {personalDetails.admissionType}</div>
                                                <div className="col-6"><b>Student Identity :</b> {personalDetails.student_Identity}</div>
                                               
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-4"><b>Father's Name :</b> {personalDetails.father_Name}</div>
                                                <div className="col-4"><b>Father's Work :</b> {personalDetails.father_WorkInfo}</div>
                                                <div className="col-4"><b>Father's Qualification:</b> {personalDetails.father_Qualification}</div>
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-4"><b>Mother's Name :</b> {personalDetails.mother_Name}</div>
                                                <div className="col-4"><b>Mother's Work :</b> {personalDetails.mother_WorkInfo}</div>
                                                <div className="col-4"><b>Mother's Qualification:</b> {personalDetails.mother_Qualification}</div>
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-3"></div>
                                                <div className="col-4"><b>Father's Income :</b> {personalDetails.father_Income}</div>
                                                <div className="col-4"><b>Mother's Income :</b> {personalDetails.mother_Income}</div>
                                            </div>
                                            <div className="row p-2 ">
                                            
                                            <div className="col-6"> <b>Mode of Transport : </b>{personalDetails.modeofTransport}</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-profile" role="tabpanel" aria-labelledby="pills-profile-tab">
                            <div className="card  mb-3">
                                    <div className="card-header text-center"><h5>Details</h5></div>
                                    <div className="card-body start-0">
                                        <div className="card-text">
                                        <div className="row p-2 ">
                                                <div className="col-4"><b>Gender :</b> {personalDetails.gender}</div>
                                                <div className="col-4"><b>Mother Tongue :</b> {personalDetails.mother_Tongue}</div>
                                                <div className="col-4"><b>Blood Group:</b> {personalDetails.blood_Group}</div>
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-5"><b>Admission Type :</b> {personalDetails.admissionType}</div>
                                                <div className="col-6"><b>Student Identity :</b> {personalDetails.student_Identity}</div>
                                               
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-4"><b>Father's Name :</b> {personalDetails.father_Name}</div>
                                                <div className="col-4"><b>Father's Work :</b> {personalDetails.father_WorkInfo}</div>
                                                <div className="col-4"><b>Father's Qualification:</b> {personalDetails.father_Qualification}</div>
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-4"><b>Mother's Name :</b> {personalDetails.mother_Name}</div>
                                                <div className="col-4"><b>Mother's Work :</b> {personalDetails.mother_WorkInfo}</div>
                                                <div className="col-4"><b>Mother's Qualification:</b> {personalDetails.mother_Qualification}</div>
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-3"><b>Cut Of Mark :</b> {personalDetails.cut_of_Mark}</div>
                                                <div className="col-4"><b>Father's Income :</b> {personalDetails.father_Income}</div>
                                                <div className="col-4"><b>Mother's Income :</b> {personalDetails.mother_Income}</div>
                                            </div>
                                            <div className="row p-2 ">
                                            
                                            <div className="col-6"> <b>Mode of Transport : </b>{personalDetails.modeofTransport}</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            <div className="tab-pane fade" id="pills-contact" role="tabpanel" aria-labelledby="pills-contact-tab">
                            <div className="card  mb-3">
                                    <div className="card-header text-center"><h5>Details</h5></div>
                                    <div className="card-body start-0">
                                        <div className="card-text">
                                        <div className="row p-2 ">
                                                
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-5"><b>Admission Type :</b> {personalDetails.admissionType}</div>
                                                <div className="col-6"><b>Student Identity :</b> {personalDetails.student_Identity}</div>
                                               
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-4"><b>Father's Name :</b> {personalDetails.father_Name}</div>
                                                <div className="col-4"><b>Father's Work :</b> {personalDetails.father_WorkInfo}</div>
                                                <div className="col-4"><b>Father's Qualification:</b> {personalDetails.father_Qualification}</div>
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-4"><b>Mother's Name :</b> {personalDetails.mother_Name}</div>
                                                <div className="col-4"><b>Mother's Work :</b> {personalDetails.mother_WorkInfo}</div>
                                                <div className="col-4"><b>Mother's Qualification:</b> {personalDetails.mother_Qualification}</div>
                                            </div>
                                            <div className="row p-2 ">
                                                <div className="col-3"><b>Cut Of Mark :</b> {personalDetails.cut_of_Mark}</div>
                                                <div className="col-4"><b>Father's Income :</b> {personalDetails.father_Income}</div>
                                                <div className="col-4"><b>Mother's Income :</b> {personalDetails.mother_Income}</div>
                                            </div>
                                            <div className="row p-2 ">
                                            
                                            <div className="col-6"> <b>Mode of Transport : </b>{personalDetails.modeofTransport}</div>
                                            </div>
                                            
                                        </div>
                                    </div>
                                </div>
                            </div>
                            </div>
                        </div>
                    </div>
                </div>
        </div>
    )
}
export default StudentHome;