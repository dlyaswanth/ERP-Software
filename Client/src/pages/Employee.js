/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/role-supports-aria-props */
import React,{useEffect, useState} from 'react'
import { Link,useHistory } from 'react-router-dom';
import Loader from '../components/Loader/loader';
import { ToastContainer,toast } from 'react-toastify'
import AdminNavbar from "../components/Navbar/AdminNavbar";
function Employees()
{
    let history=useHistory();
    const [employees,setEmployees]=useState([]);
    const [loading,setLoading]=useState(true)
    const [newrole,setNewRole]=useState('');
    const [newdep,setNewDep]=useState('');
    //api for getting employee details using id 
    function getDetails()
    {
        fetch(`/getAllEmployees`,{
            method:'GET',
            headers:{
                'Authorization':'Bearer '+sessionStorage.getItem("JWT"),
                'Content-Type':'Application/json'
            }
        })
        .then(res=>res.json())
        .then(res=>{
            setEmployees(res);
            setLoading(false)
        })
    }
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
    useEffect(()=>{
        getDetails();
    // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return (
        <div id="main" style={{marginLeft:"70px"}}>
            <ToastContainer />
            <AdminNavbar />
            {
                loading
                ?
                <Loader />
                :
                <div>
                    <div className='row'>
                    <h4 className="col-9"style={{marginTop:"1%"}}>Employees - {employees.length} </h4>
                    <div className="col my-3 mx-1 float-end">
                        <button className='btn btn-primary' type="button"  aria-selected="true" onClick={()=>history.push('/new')}>New User</button><span>{" "}&nbsp;</span>
                        <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#exampleModal">
                        New Roles
                        </button><span>{" "}&nbsp;</span>
                        <div className="modal fade" id="exampleModal" tabIndex="-1" aria-labelledby="exampleModalLabel" aria-hidden="true">
                            <div className="modal-dialog">
                                <div className="modal-content">
                                <div className="modal-header">
                                    <h5 className="modal-title" id="exampleModalLabel">New </h5>
                                    <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
                                </div>
                                <div className="modal-body">
                                    <div className="container-fluid" style={{maxWidth:"90%",marginLeft:"5%",marginRight:"5%"}}>
                                        <br/>
                                        <div className="col-md-12">
                                        <label htmlFor="role" className="form-label">Role Name : </label>
                                        <input type="text" className="form-control" id="role" value={newrole}  onChange={(event)=>setNewRole(event.target.value)}/>
                                        </div>
                                    </div>
                                </div>
                                <div className="modal-footer">
                                    <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">Close</button>
                                    <button type="button" className="btn btn-primary" onClick={()=>newRole()}>Save changes</button>
                                </div>
                                </div>
                            </div>
                        </div>
                        <button className='btn btn-primary' type="button" aria-selected="false">New Department</button>
                        <span>{" "}&nbsp;</span>
                    </div>
                    </div>
                    
                    <div style={{maxWidth:"100%",marginLeft:"0",marginRight:"0",marginTop:"2%"}}>
                    <div className='container' style={{minWidth:"100%"}}>
                    <div className='row row-cols-sm-1 row-cols-md-2 row-cols-lg-4 g-4'>
                        {
                            employees.length !==0
                            ?
                            employees.map((employee,index)=>{
                                return (
                                    <div className='card col-sm-12 col-md-8 col-lg-5  my-1 mx-1 border bg-light' key={index}>
                                        <div className='row'>
                                            <div className='col-4'>
                                                <img className='employeeimage' alt="student-profile" src="https://external-content.duckduckgo.com/iu/?u=https%3A%2F%2Ftse1.mm.bing.net%2Fth%3Fid%3DOIP.5lFvRnh_1czp2hBtUWd66QHaEK%26pid%3DApi&f=1"  onClick={()=>history.push('/employee/'+employee._id)} style={{cursor:"pointer"}}/>
                                                
                                            </div>
                                            <div className='col-1'><div className='vl'></div></div>
                                            <div className='col-7 my-3'>
                                                <h5>{employee.name}</h5>
                                                <h6>{employee.department}</h6>
                                                <h6>{employee.email}</h6>
                                                <Link to={"employee/edit/"+employee._id} style={{textDecoration:"none"}}>Edit</Link>
                                                {" | "}
                                                <Link to={"employee/resign/"+employee._id} style={{textDecoration:"none"}}>Resign</Link>
                                            </div>
                                        </div>
                                    </div>
                                    
                                )
                            })
                            :
                            <h3>No Records found</h3>
                        }
                    </div>
                </div>
                </div>
            </div>
            }
        </div>
    )
}
export default Employees