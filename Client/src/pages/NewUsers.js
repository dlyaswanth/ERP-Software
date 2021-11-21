/* eslint-disable no-unused-vars */
/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-useless-computed-key */
/* eslint-disable array-callback-return */
/* eslint-disable no-use-before-define */
import React,{useEffect, useState} from "react";
import { useHistory } from "react-router-dom/cjs/react-router-dom.min";
import { ToastContainer,toast } from 'react-toastify'
import Loader from "../components/Loader/loader";
import AdminNavbar from "../components/Navbar/AdminNavbar";
function NewUser()
{
    let history=useHistory()
    // Tutors list to add student under s tutor
    const[tutors,setTutors]=useState([])
    const [userName,setUserName]=useState('')
    const [password,setPassword]=useState('')
    const [email,setEmail]=useState('')
    const [newrole,setNewRole]=useState('');
    const [newdep,setNewDep]=useState('');
    const [type,setType]=useState('default')
    let temp=[]
    // Getting staff sujects 
    const [subjects,setSubjects]=useState('');
    // Certificates given by students
    let certificates=[
        ["SSLC Mark Sheet",false],
        ["HSC Mark Sheet",false],
        ["HSC TC",false],
        ["Joint Declaration",false],
        ["Counselling Call Letter",false],
        ["Diplomo Certificate",false],
        ["UG Certificate",false],
        ["First Degree Certificate",false],
        ["Contact Certificate",false],
        ["Migration Certificate",false],
        ["Community Certificate",false],
        ["Income Certificate",false],
        ["Nativity Certificate",false],
    ]
    const [studentDetails,setStudentDetails]=useState({})
    const [staffDeatils,setStaffDetails]=useState({})
    /* Post request for adding new role */
    function newRole()
    {
        if (newrole.length === 0)
        {
            toast.error('Enter the role name');
            return ;
        }
        fetch('/addRole',{
            method:"POST",
            headers:{
                'Authorization':'Bearer '+sessionStorage.getItem("JWT"),
                'Content-Type':'Application/json'
            },
            body:JSON.stringify({
                role:newrole
            })
        })
        .then(res=>res.json())
        .then(res=>{
            if (res.error)
            toast.error(res.error);
            else
            toast.success(res.message);
        })
        setNewRole('')
    }
    function newDep()
    {
        if (newdep.length === 0)
        {
            toast.error('Enter the department name');
            return ;
        }
        fetch('/addDepartment',{
            method:"POST",
            headers:{
                'Authorization':'Bearer '+sessionStorage.getItem("JWT"),
                'Content-Type':'Application/json'
            },
            body:JSON.stringify({
                name:newdep
            })
        })
        .then(res=>res.json())
        .then(res=>{
            if (res.error)
            toast.error(res.error);
            else
            toast.success(res.message);
        })
        setNewDep('')
    }
    //get request for getting the departments in clg
    function getDepartments()
    {
        fetch('/getDepartments',{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+sessionStorage.getItem("JWT"),
                'Content-Type':'Application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>console.log(res))
    }
    /* Get request for getting tutors list */
    function getTutors()
    {
        fetch('/getTutors',{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+sessionStorage.getItem("JWT"),
                'Content-Type':'Application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>setTutors(res))
    }
    useEffect(()=>{
        getTutors();
        getDepartments();
    },[])
    // Resetting the student form
    function studentReset()
    {
        setType('default')
        setUserName('')
        setPassword('')
        setEmail('')
        document.getElementById("student-form").reset();
        setStudentDetails({});
    }
    // Resetting the staff form
    function staffReset()
    {
        setType('default')
        setUserName('')
        setPassword('')
        setEmail('')
        document.getElementById("staff-form").reset();
        setStaffDetails({});
    }
    // Handler for students
    function changeHandler(event)
    {
        const {name,value}=event.target;
        setStudentDetails({
            ...studentDetails,
            [name]:value,
        })
    }
     // Handler for staffs
    function staffChangeHandler(event)
    {
        const {name,value}=event.target;
        setStaffDetails({
            ...staffDeatils,
            [name]:value,
        })
    }
    // API to create users 
    function SignUp()
    {
        let body={};
        body['name']=userName.trim()
        body['password']=password.trim()
        body['email']=email.trim()
        body['role']=type
        if (type === 'Student')
        {
            body['details']=studentDetails
            body['certificates']=temp
            console.log(temp);
        }
        else if (type === 'Professor')
        {
            body['details']=staffDeatils
            body['subjects']=subjects
        }
        fetch('/addUser',{
            method:'post',
            headers:{
                'Authorization':'Bearer '+sessionStorage.getItem("JWT"),
                "Content-Type":"application/json"
            },
            body:JSON.stringify({body})
        })
        .then(res=>res.json())
        .then(data=>{
            if (data.error)
            toast.error(data.error,{autoClose:2500})
            else
            toast.success(data.message,{autoClose:2500})
        })
        studentReset();
        staffReset();
        getTutors();
    }
    return (
        <div id="main" style={{maxWidth:"90%",marginLeft:"70px",marginRight:"5%",borderColor:"black",marginTop:"3%"}}>
            <ToastContainer />
            <AdminNavbar />
            <ul className="nav nav-pills mb-3" id="pills-tab" role="tablist" >
                <li className="nav-item" role="presentation">
                    <button className="nav-link active" id="pills-home-tab" data-bs-toggle="pill" data-bs-target="#pills-home" type="button" role="tab" aria-controls="pills-home" aria-selected="true">New User</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-profile-tab" data-bs-toggle="pill" data-bs-target="#pills-profile" type="button" role="tab" aria-controls="pills-profile" aria-selected="false">New Roles</button>
                </li>
                <li className="nav-item" role="presentation">
                    <button className="nav-link" id="pills-department-tab" data-bs-toggle="pill" data-bs-target="#pills-department" type="button" role="tab" aria-controls="pills-department" aria-selected="false">New Department</button>
                </li>
            </ul>
            <div className="tab-content" id="pills-tabContent">
                <div className="tab-pane fade show active" id="pills-home" role="tabpanel">
                    <h2 className="text-center">Add User</h2>
                    <div className="card container-fluid" style={{maxWidth:"90%",marginLeft:"5%",marginRight:"5%",borderColor:"black"}} > 
                    <br />
                    <div className="row g-3">
                <div className="col-12">
                    <div className="col-5">
                        <label htmlFor="inputType" className="form-label">User Type : </label>
                        <select className="form-select" aria-label="Default select example" value={type}  onChange={(event)=>setType(event.target.value)}>
                            <option value="default">Choose One</option>
                            <option value="Admin">Admin</option>
                            <option value="Professor">Professor</option>
                            <option value="Student">Student</option>
                        </select>
                    </div> 
                </div>
            <div className="row g-3" hidden={type === 'default' ?true:false}>
                <div className="col-md-4">
                    <label htmlFor="inputName4" className="form-label">Name :  </label>
                    <input type="text" className="form-control" id="inputName4" value={userName} onChange={(event)=>setUserName(event.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputEmail4" className="form-label">Email : </label>
                    <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(event)=>setEmail(event.target.value)}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputPassword4" className="form-label">Password : </label>
                    <input type="password" className="form-control" id="inputPassword4" value={password}  onChange={(event)=>setPassword(event.target.value)}/>
                </div>
                {/* End of common values */}


                {/* Start of Student Values */}
                <form hidden={type === 'Student' ? false:true} className="row g-3" id="student-form">                    
                <div className="col-md-4">
                    <label  className="form-label">DOB : </label>
                    <input type="date" className="form-control"  name="dob" onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Roll No : </label>
                    <input type="text" className="form-control"  name="roll_no"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Reg No : </label>
                    <input type="text" className="form-control"  name="reg_no"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Admission Type : </label>
                    <select className="form-select" aria-label="Default select example" name="admissionType"  defaultValue="" onChange={(e)=>changeHandler(e)}>
                            <option value="default">Select One </option>
                            <option value="Management Quota">Management Quota</option>
                            <option value="Government Quota">Government Quota</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Batch : </label>
                    <input type="text" className="form-control"  name="batch"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Admission Date : </label>
                    <input type="date" className="form-control"  name="admissionDate"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Cut Of Mark : </label>
                    <input type="text" className="form-control"  name="cut_of_Mark"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Gender : </label>
                    <select className="form-select" aria-label="Default select example" name="gender" defaultValue="" onChange={(e)=>changeHandler(e)}>
                            <option value="default">Select One </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Third Gender">Third Gender</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Religion : </label>
                    <input type="text" className="form-control"  name="religion"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Community : </label>
                    <select className="form-select" aria-label="Default select example" name="community"   onChange={(e)=>changeHandler(e)}>
                            <option value="default">Choose one</option>
                            <option value="OC">OC</option>
                            <option value="BC">BC</option>
                            <option value="MBC">MBC</option>
                            <option value="SC/ST">SC/ST</option>
                            <option value="Others">Others</option>
                            
                    </select>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Caste : </label>
                    <input type="text" className="form-control"  name="caste"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Mother Tongue : </label>
                    <input type="text" className="form-control"  name="mother_Tongue"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Blood Group : </label>
                    <select defaultValue="default" className="form-select" aria-label="Default select exampl1e" name="blood_Group"   onChange={(e)=>changeHandler(e)}>
                            <option value="default">Select One</option>
                            <option value="A -">A -ve</option>
                            <option value="A +">A +ve</option>
                            <option value="B -">B -ve</option>
                            <option value="B +">B +ve</option>
                            <option value="AB -">AB -ve</option>
                            <option value="AB +">AB +ve</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Student Identity : </label>
                    <input type="text" className="form-control"  name="student_Identity"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Father's Name : </label>
                    <input type="text" className="form-control"  name="father_Name"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Mother's Name : </label>
                    <input type="text" className="form-control"  name="mother_Name"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Father's Qualification : </label>
                    <input type="text" className="form-control"  name="father_Qualification"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Mother's Qualification : </label>
                    <input type="text" className="form-control"  name="mother_Qualification"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Father's Business : </label>
                    <input type="text" className="form-control"  name="father_WorkInfo"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Mother's Business : </label>
                    <input type="text" className="form-control"  name="mother_WorkInfo"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Father's Income : </label>
                    <input type="text" className="form-control"  name="father_Income"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Mother's Income : </label>
                    <input type="text" className="form-control"  name="mother_Income"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-8">
                    <label htmlFor="inputAddress" className="form-label">Address : </label>
                    <textarea className="form-control" id="inputAddress" name="address" onChange={(e)=>changeHandler(e)}></textarea>
                </div>
                
                <div className="col-md-4">
                    <label htmlFor="inputCity" className="form-label">City : </label>
                    <input type="text" className="form-control" id="inputCity" name="city"  onChange={(e)=>changeHandler(e)} />
                </div>
                
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State : </label>
                    <input type="text" className="form-control" id="inputState" name="state"  onChange={(e)=>changeHandler(e)}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">Postal Code : </label>
                    <input type="text" className="form-control" id="inputZip" name="postalCode"  onChange={(e)=>changeHandler(e)}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputDepartment" className="form-label">Department : </label>
                    <select className="form-select" aria-label="Default select example" name="department"  onChange={(e)=>changeHandler(e)}>
                            <option value="default">Choose any department</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="MECH">MECH</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputphone" className="form-label">Personal Phone Number :</label>
                    <input type="tel" className="form-control" id="Pinputphone" name="student_Number"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputphone" className="form-label">Father's Phone Number :</label>
                    <input type="tel" className="form-control" id="Finputphone" name="father_Number"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputphone" className="form-label">Mother's Phone Number :</label>
                    <input type="tel" className="form-control" id="inputphone" name="mother_Number"  onChange={(e)=>changeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputtutorname" className="form-label">Tutor's Name : </label>
                    <select className="form-select" aria-label="Default select example" name="tutorName" defaultValue="default" onChange={(e)=>changeHandler(e)}>
                            <option value="default">Select One</option>
                            {
                                tutors.map((values,index)=>{
                                    return(
                                        <option key={values+index} value={values}>{values}</option>
                                    )
                                })
                            }
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputTransport" className="form-label" >Transport Mode : </label>
                    <select className="form-select" aria-label="Default select example" name="modeofTransport" defaultValue="default" onChange={(e)=>changeHandler(e)}>
                            <option value="default">Types of Mode</option>
                            <option value="By Walk">By Walk</option>
                            <option value="Own Transport">Own Transport</option>
                            <option value="College Transport">College Transport</option>
                            <option value="Public Transport">Public Transport</option>
                    </select>
                </div>
                <div className="col-md-8 container-fluid">
                    <label htmlFor="inputCertificate" className="form-label">Certificates Given : </label>
                    <br />
                    <div  className="inlineformcheck"
                        style={{padding: "8px 8px",borderWwidth: "2px",borderRadius: "2px"}}>
                        {certificates.map((values,i)=>{
                            // console.log(values)
                            return(
                                <div className="form-check form-check-inline" key={i}>
                                    <input className="form-check-input" type="checkbox" value={values[0]} key={values[0]} onChange={()=>{
                                        values[1]=!values[1];
                                        if (values[1] === true)
                                        temp.push(values[0])
                                        else
                                        temp.pop(temp.indexOf(values[0]))
                                        }} />
                                    <label className="form-check-label" >{values[0]}</label>
                                </div>
                            )
                        })}
                    </div>
                </div>
                
                <div className="col-md-4">
                    <label htmlFor="inputPhoto" className="form-label">Profile Photo : </label>
                    <input type="file" className="form-control" id="inputProfile" name="profile_Url"  onChange={(e)=>changeHandler(e)} />
                </div>     
               {/*End of the Student  values */}

            </form>


            {/* Start Value's of the professor */}
            <form id ="staff-form" hidden={type === 'Professor' ? false:true} className="row g-3">
            <div className="col-md-4">
                    <label htmlFor="inputphone" className="form-label">DOB : </label>
                    <input type="date" className="form-control" id="inputphone11" name="dob"  onChange={(e)=>staffChangeHandler(e)} />
                </div>
               
                <div className="col-md-4">
                    <label htmlFor="inputDepartment" className="form-label">Department : </label>
                    <select  defaultValue="default" className="form-select" aria-label="Default select example" name="department"  onChange={(e)=>staffChangeHandler(e)}>
                            <option value="default">Choose any department</option>
                            <option value="CIVIL">CIVIL</option>
                            <option value="CSE">CSE</option>
                            <option value="ECE">ECE</option>
                            <option value="EEE">EEE</option>
                            <option value="MECH">MECH</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputphone" className="form-label">Date of Joining : </label>
                    <input type="date" className="form-control" id="inputphone12" name="dateofJoining"  onChange={(e)=>staffChangeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputDepartment" className="form-label">Subjects Handling (separated by comma's) : </label>
                    <textarea className="form-control"  onChange={(e)=>setSubjects(e.target.value)}></textarea>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Gender : </label>
                    <select className="form-select" aria-label="Default select example" name="gender" defaultValue="" onChange={(e)=>staffChangeHandler(e)}>
                            <option value="default">Select One </option>
                            <option value="Male">Male</option>
                            <option value="Female">Female</option>
                            <option value="Third Gender">Third Gender</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Religion : </label>
                    <input type="text" className="form-control"  name="religion"  onChange={(e)=>staffChangeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Community : </label>
                    <select className="form-select" aria-label="Default select example" name="community"   onChange={(e)=>staffChangeHandler(e)}>
                            <option value="default">Choose one</option>
                            <option value="OC">OC</option>
                            <option value="BC">BC</option>
                            <option value="MBC">MBC</option>
                            <option value="SC/ST">SC/ST</option>
                            <option value="Others">Others</option>
                            
                    </select>
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Caste : </label>
                    <input type="text" className="form-control"  name="caste"  onChange={(e)=>staffChangeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Mother Tongue : </label>
                    <input type="text" className="form-control"  name="mother_Tongue"  onChange={(e)=>staffChangeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label  className="form-label">Blood Group : </label>
                    <select defaultValue="default" className="form-select" aria-label="Default select exampl1e" name="blood_Group"   onChange={(e)=>staffChangeHandler(e)}>
                            <option value="default">Select One</option>
                            <option value="A -">A -ve</option>
                            <option value="A +">A +ve</option>
                            <option value="B -">B -ve</option>
                            <option value="B +">B +ve</option>
                            <option value="AB -">AB -ve</option>
                            <option value="AB +">AB +ve</option>
                    </select>
                </div>
                <div className="col-8">
                    <label htmlFor="inputAddress" className="form-label">Address : </label>
                    <textarea className="form-control" id="inputAddress1" name="address" onChange={(e)=>staffChangeHandler(e)}></textarea>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputCity1" className="form-label">City : </label>
                    <input type="text" className="form-control" id="inputCity1" name="city"  onChange={(e)=>staffChangeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputState" className="form-label">State : </label>
                    <input type="text" className="form-control" id="inputState1" name="state"  onChange={(e)=>staffChangeHandler(e)}/>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputZip" className="form-label">Postal Code : </label>
                    <input type="text" className="form-control" id="inputZip1"name="postalCode"  onChange={(e)=>staffChangeHandler(e)}/>
                </div>
               
                <div className="col-md-4">
                    <label htmlFor="inputphone" className="form-label">Phone Number : </label>
                    <input type="tel" className="form-control" id="inputphone1" name="phoneNumber"  onChange={(e)=>staffChangeHandler(e)} />
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputTransport" className="form-label" >Transport Mode : </label>
                    <select defaultValue="default" className="form-select" aria-label="Default select exampl1e" name="modeofTransport"  onChange={(e)=>staffChangeHandler(e)}>
                    <option value="default">Types of Mode</option>
                            <option value="By Walk">By Walk</option>
                            <option value="Own Transport">Own Transport</option>
                            <option value="College Transport">College Transport</option>
                            <option value="Public Transport">Public Transport</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputtutorname" className="form-label">Tutor : </label>
                    <select defaultValue="default" className="form-select" aria-label="Default select exampl1e" name="tutor"  onChange={(e)=>staffChangeHandler(e)}>
                            <option value="default">Choose One</option>
                            <option value="Yes">YES</option>
                            <option value="No">NO</option>
                    </select>
                </div>
                <div className="col-md-4">
                    <label htmlFor="inputPhoto" className="form-label">Profile Photo : </label>
                    <input type="file" className="form-control" id="inputProfile1" name="profile_Url"  onChange={(e)=>staffChangeHandler(e)} />
                </div>
                <br />  <br />
                </form>   
                  {/*End for the Professor values  */}
            <br /> 
            <div className="col-12">
                    <button type="submit" className="btn btn-outline-success ms-3" onClick={()=>SignUp()}>Create New User</button>
                </div>
                <br />  
            </div>
            </div>
            <br /><br />
            </div>
            <br />  <br />
                </div>
                <div className="tab-pane fade" id="pills-profile" role="tabpanel">
                    <h2 className="text-center">Add Role</h2>
                    <br/>
                    <div className="card container-fluid" style={{maxWidth:"90%",marginLeft:"5%",marginRight:"5%",borderColor:"black"}}>
                    <br/>
                    <div className="col-md-4">
                    <label htmlFor="role" className="form-label">Role Name : </label>
                    <input type="text" className="form-control" id="role" value={newrole}  onChange={(event)=>setNewRole(event.target.value)}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-outline-success ms-3" onClick={()=>newRole()}>Create Role</button>
                </div>
                <br/>
                    </div>
                </div>
                <div className="tab-pane fade" id="pills-department" role="tabpanel">
                    <h2 className="text-center">Add Department</h2>
                    <br/>
                    <div className="card container-fluid" style={{maxWidth:"90%",marginLeft:"5%",marginRight:"5%",borderColor:"black"}}>
                    <br/>
                    <div className="col-md-4">
                    <label htmlFor="role" className="form-label">Department Name : </label>
                    <input type="text" className="form-control" id="role" value={newdep}  onChange={(event)=>setNewDep(event.target.value)}/>
                </div>
                <div className="col-12">
                    <button type="submit" className="btn btn-outline-success ms-3" onClick={()=>newDep()}>Create Department</button>
                </div>
                <br/>
                    </div>
                </div>
            </div>
        </div>
    )
}
export default NewUser;