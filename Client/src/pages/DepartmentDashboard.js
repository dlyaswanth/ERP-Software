/* eslint-disable no-unused-vars */
import React, { useState,useEffect } from "react"
import Loader from '../components/Loader/loader';
import { ToastContainer,toast } from 'react-toastify'
import AdminNavbar from "../components/Navbar/AdminNavbar";
export default function DepDashboard()
{
    const [loading,setLoading]=useState(false)
    const [newdep,setNewDep]=useState('');
    const [departments,setDepartments]=useState([]);
    //get request for getting the departments details in clg
    function getDepartmentDetails()
    {
        setLoading(true)
        fetch('/getDepartmentDetails',{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+sessionStorage.getItem("JWT"),
                'Content-Type':'Application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            console.log(res);
            setLoading(false)
            setDepartments(res)
        })
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
    useEffect(()=>{
        getDepartmentDetails();
    },[])
    return (
        <div id='main' style={{marginLeft:"70px"}}>
            <ToastContainer />
            <AdminNavbar />
            <div className="my-4 mx-2">
                <h4>Department Dashboard</h4>
                <div className="d-flex justify-content-end mx-3">
                    <button type="button" className="btn btn-primary top" data-bs-toggle="modal" data-bs-target="#exampleModal">
                    Add Department
                    </button>
                </div>
            </div>
            {/* <!-- Modal --> */}
            <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                <div className="modal-dialog modal-lg">
                    <div className="modal-content">
                        <div className="modal-header">
                            <h5 className="modal-title" id="exampleModalLabel">Modal title</h5>
                            <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                        </div>
                        <div className="modal-body">
                            ...
                        </div>
                        <div className="modal-footer">
                            <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                            <button type="button" className="btn btn-primary" onClick={()=>newDep()}>Save changes</button>
                        </div>
                    </div>
                </div>
            </div>
            <div className="row row-cols-sm-1 row-cols-md-2 row-cols-lg-3 g-4">
                {
                    departments?
                    departments.map((dep,index)=>{
                        return(
                            <div key={index} className="col">
                                <div className="card container homecard">
                                    <div className="card-body">
                                        <h5 className="card-title">Name : <b><i className="bi bi-mortarboard"></i>{' '+dep.Department}</b></h5>
                                        <p className="card-text">HOD : <b><i className="bi bi-person-square"></i>{' '+dep.DepartmentHead}</b></p>
                                        <p className="card-text">Professor Count : <b>{' '+dep.StaffCount}</b></p>
                                        <p className="card-text">Student Count : <b>{' '+dep.StudentCount}</b></p>
                                        <p className="card-text"><small className="text-muted">Added By: {dep.AddedBy}</small></p>
                                    </div>
                                </div>
                            </div>
                        )
                    })
                    :"No Record Found"
                }
            </div>
            {loading && <Loader/>}
        </div>
    )
}