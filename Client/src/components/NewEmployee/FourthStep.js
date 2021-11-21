/* eslint-disable no-unused-vars */
import React,{useState,useEffect} from "react"
import Select from 'react-select'
import { ToastContainer,toast } from 'react-toastify'
export default function FourthStep({
    staffChangeHandler,
    docsChangeHandler,
    staffDeatils,
    subjects,
    setSubjects,
    userName,
    password,
    type,
    studentDetails,
    email,
    temp,
    showTabOne,
    prevButton,
    nextButton,
    nextPrev,
    reset})
{
    const[depOptions,setDepOptions]=useState([])
    const tutorOptions=[
        {value:"Yes",label:"Yes",temp:"tutor"},
        {value:"No",label:"No",temp:"tutor"}
    ]
    const tOptions=[
       {value:"By Walk",label:"By Walk",temp:"modeofTransport"},
       {value:"Own Transport",label:"Own Transport",temp:"modeofTransport"},
       {value:"College Transport",label:"College Transport",temp:"modeofTransport"},
       {value:"Public Transport",label:"Public Transport",temp:"modeofTransport"},
   ]
   const docOptions=[
    {value:"UG Certificate",label:"UG Certificate"},
    {value:"PG Certificate",label:"PG Certificate"},
    {value:"Community Certificate",label:"Community Certificate"},
    {value:"Native Certificate",label:"Native Certificate"},
]
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
        .then(res=>{
            let flg=[]
            for(let i of res)
            {
                let temp={}
                temp['value']=i
                temp['label']=i;
                temp['temp']='department'
                flg.push(temp)
            }
            setDepOptions(flg)
        })
    }
    function SignUp()
    {
        if (staffDeatils.dateofJoining.trim() && staffDeatils.department && subjects.trim() && staffDeatils.modeofTransport.trim()&&staffDeatils.documents && staffDeatils.tutor)
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
            }
            else if (type === 'Professor' || type === 'Admin')
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
                {
                    toast.success(data.message,{autoClose:2500});
                    reset();
                }    
            })
            setTimeout(()=>{showTabOne()},4000)
        }
        else
        toast.error('Enter all the required fields');
    }
    
    useEffect(()=>{
        getDepartments();
    },[])
    return(
        <div>
            <ToastContainer />
            <form id="staff-form1" className="row g-3 staff-form">
                <div className="col-4">
                    <label htmlFor="inputphone" className="form-label">Date of Joining * : </label>
                    <input type="date" className="form-control" id="inputphone12" name="dateofJoining"  onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)} autoFocus/>
                </div>
                <div className="col-4">
                    <label htmlFor="inputDepartment" className="form-label">Department * : </label>
                    <Select
                        placeholder="Select Department"
                        name="department"
                        options={depOptions}
                        value={
                        depOptions.filter((option)=>{
                            return option.value === staffDeatils.department
                        })}
                        onChange={(e)=>staffChangeHandler(e.value,e.temp)} 
                     />
                </div>
                <div className="col-4">
                    <label htmlFor="inputDepartment" className="form-label">Subjects Handling (separated by comma's) * : </label>
                    <textarea className="form-control" value={subjects} onChange={(e)=>setSubjects(e.target.value)}></textarea>
                </div>
                <div className="col-4">
                    <label htmlFor="inputtutorname" className="form-label">Tutor : </label>
                    <Select
                        placeholder="Select One"
                        name="department"
                        options={tutorOptions}
                        value={
                        tutorOptions.filter((option)=>{
                                        return option.value === staffDeatils.tutor
                                }
                        )}
                        onChange={(e)=>staffChangeHandler(e.value,e.temp)} 
                    />
                </div>
                <div className="col-8">
                    <label htmlFor="inputDocument" className="form-label">Documents Given * : </label>
                    <Select
                        placeholder="Select Docs"
                        name="document"
                        options={docOptions}
                        value={staffDeatils.documents}
                        isMulti
                        onChange={(e)=>docsChangeHandler(e)} 
                     />
                </div>
                <div className="col-4">
                    <label htmlFor="inputTransport" className="form-label" >Mode Of Transport * : </label>
                    <Select
                        placeholder="Select One"
                        name="department"
                        options={tOptions}
                        value={
                        tOptions.filter((option)=>{
                                        return option.value === staffDeatils.modeofTransport
                                }
                        )}
                        onChange={(e)=>staffChangeHandler(e.value,e.temp)}
                    />
                </div>
                
            </form>
            <br />
            <div className="text-center">
                <br />
                <button className="btn btn-outline-secondary" disabled={!prevButton} onClick={()=>nextPrev(-1)}>Previous</button>
                {"  "}&nbsp;&nbsp;
                <button className="btn btn-outline-success text-center" onClick={()=>SignUp()}>{" "}&nbsp;&nbsp;&nbsp;Submit{" "}&nbsp;&nbsp;</button>
            </div>
        </div>
    )
}