import React,{useEffect,useState} from 'react'
import {useParams} from 'react-router-dom'
import AdminNavbar from "../components/Navbar/AdminNavbar";
import EmpProfile from '../components/Profile/EmpProfile';
import EmpEducation from '../components/Profile/EmpEducation';
import EmpExperience from '../components/Profile/EmpExperience';
import EmpDocs from '../components/Profile/EmpDocuments';
import Loader from '../components/Loader/loader'
function EmployeeId()
{
    const {id}=useParams();
    const [empDeatils,setEmpDetails]=useState({});
    const [loading,setLoading]=useState(true)
    function getEmpDeatils()
    {
        fetch(`/employee/${id}`,{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+sessionStorage.getItem("JWT"),
                'Content-Type':'Application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setEmpDetails(res);
            setLoading(false)
        })
    }
    useEffect(()=>{
        getEmpDeatils();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div id="main" style={{marginTop:"1%",marginLeft:"70px",marginRight:"1%"}}>
            <AdminNavbar />
            {
                loading
                ?
                <Loader />
                :
                <div>
                    <h4>{empDeatils.name} - Profile</h4>
                    <br />
                    <div className='card employeecard' hidden={loading}>
                        <div className='row'>
                            <div className='col-sm-12 col-md-8 col-lg-3'>
                                <div className='row'>
                                <img className='col-4'  style={{marginTop:"5px",marginBottom:"5px"}} src={empDeatils.profile} alt='profile_image' width="90%" height="90%"/>
                                <div className='col-8' style={{marginTop:"15px",marginLeft:"-10px"}}>
                                    <h4>{empDeatils.name}</h4>
                                    <h6>{empDeatils.role}</h6>
                                </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-10 col-lg-6'>
                                <div className='row' style={{marginTop:"15px",marginBottom:"5px"}}>
                                    <div className='col-12' ><h5>Subjects Handling</h5></div>
                                    <div className='col'>
                                        {
                                            empDeatils.details
                                            ?
                                            empDeatils.details.subjects.map((sub,index)=>{
                                                return (
                                                    <span key={index}>
                                                        <span className="highlightme" >&nbsp;&nbsp;{sub}&nbsp;&nbsp;</span>
                                                        <span>&nbsp;&nbsp;</span>
                                                    </span>
                                                )
                                            })
                                            :
                                            <div className='col'>No Subjects</div>
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className='col-sm-12 col-md-8 col-lg-3'>
                                <div className='row' style={{marginTop:"15px",marginBottom:"5px"}}>
                                    <div className='col-12' ><h5>Contact Details</h5></div>
                                        <div className='col-12'>
                                            <span><i className="fas fa-envelope"></i>{" "}{empDeatils.email}</span>
                                        </div>
                                        <div className='col-12'>
                                            {
                                                empDeatils.details
                                                ?
                                                <span><i className="fas fa-mobile"></i>{" "}&nbsp;{empDeatils.phoneNumber}</span>
                                                :
                                                ""
                                            }
                                        </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <br />
                    <div className='card employeecard'>
                        <nav className='g-2'>
                            <div className="nav nav-tabs" id="nav-tab" role="tablist">
                                <button className="nav-link active" id="nav-home-tab" data-bs-toggle="tab" data-bs-target="#nav-home" role="tab" aria-controls="nav-home" aria-selected="true">Personal Info</button>
                                <button className="nav-link" id="nav-profile-tab" data-bs-toggle="tab" data-bs-target="#nav-profile" role="tab" aria-controls="nav-profile" aria-selected="false">Education</button>
                                <button className="nav-link" id="nav-contact-tab" data-bs-toggle="tab" data-bs-target="#nav-contact" role="tab" aria-controls="nav-contact" aria-selected="false">Experience</button>
                                <button className="nav-link" id="nav-contact-document" data-bs-toggle="tab" data-bs-target="#nav-document" role="tab" aria-controls="nav-document" aria-selected="false">Documents</button>
                                <button className="nav-link" id="nav-contact-review" data-bs-toggle="tab" data-bs-target="#nav-review" role="tab" aria-controls="nav-review" aria-selected="false">Reviews</button>
                            </div>
                        </nav>
                        <br />
                        <div className="tab-content" id="nav-tabContent">
                            <div className="tab-pane fade show active" id="nav-home" role="tabpanel" aria-labelledby="nav-home-tab" style={{marginLeft:"1%",marginRight:"1%"}}>
                                <EmpProfile
                                    name={empDeatils.name}
                                    role={empDeatils.role}
                                    email={empDeatils.email}
                                    gender={empDeatils.gender}
                                    phoneNumber={empDeatils.phoneNumber}
                                    blood_Group={empDeatils.blood_Group}
                                    dob={empDeatils.dob}
                                    details={empDeatils.details} 
                                />
                            </div>
                            <div className="tab-pane fade" id="nav-profile" role="tabpanel" aria-labelledby="nav-profile-tab" style={{marginLeft:"1%",marginRight:"1%"}}>
                                <EmpEducation 
                                    education={empDeatils.details.education}
                                />
                            </div>
                            <div className="tab-pane fade" id="nav-contact" role="tabpanel" aria-labelledby="nav-contact-tab"style={{marginLeft:"1%",marginRight:"1%"}}>
                                <EmpExperience
                                    experience={empDeatils.details.experience} 
                                />  
                            </div>
                            <div className="tab-pane fade" id="nav-document" role="tabpanel" aria-labelledby="nav-document-tab"style={{marginLeft:"1%",marginRight:"1%"}}>
                                <EmpDocs 
                                    docs={empDeatils.details.documents} 
                                />
                            </div>
                            <div className="tab-pane fade" id="nav-review" role="tabpanel" aria-labelledby="nav-review-tab"style={{marginLeft:"1%",marginRight:"1%"}}>
                            Reviews
                            </div>
                        </div>
                        </div>
                        <br />
                </div>
            }
        </div>
    )
}
export default EmployeeId;