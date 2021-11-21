/* eslint-disable react-hooks/exhaustive-deps */
/* eslint-disable no-unused-vars */
import React,{useState} from "react"
import {toast,ToastContainer} from 'react-toastify'
export default function ThirdStep({edu,setEdu,exp,setExp,Education,Experience,prevButton,nextButton,nextPrev})
{
    const [eduins,setEduins]=useState('')
    const [edudeg,setEduDeg]=useState('')
    const [eduyear,setEduYear]=useState('')
    const [expins,setExpins]=useState('')
    const [expdeg,setExpDeg]=useState('')
    const [expyear,setExpYear]=useState('')
    function AddEdu()
    {
        let value={
            institution:eduins,
            degree:edudeg,
            year:eduyear
        }
        let flg=[...edu,value]
        setEdu(flg)
        Education([...edu,value])
        EduReset()
    }
    function AddExp()
    {
        let value={
            institution:expins,
            role:expdeg,
            year:expyear
        }
        let flg=[...exp,value]
        setExp(flg)
        Experience([...exp,value])
        ExpReset()
    }
    function EduReset()
    {
        setEduDeg('');
        setEduYear('')
        setEduins('')
    }
    function ExpReset()
    {
        setExpDeg('');
        setExpYear('')
        setExpins('')
    }
    function AddE()
    {
        return (
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col-3">S.No</th>
                    <th scope="col-3">Institution</th>
                    <th scope="col-3">Degree</th>
                    <th scope="col-3">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        edu.length !== 0
                        ?
                        edu.map((edu,index)=>{
                            return (
                                <tr key={index+1}>
                                    <td>{index+1}</td>
                                    <td>{edu.institution}</td>
                                    <td>{edu.degree}</td>
                                    <td>{edu.year}</td>
                                </tr>
                            )
                        })
                        :
                        <tr><td colSpan={4}>No Education Added</td></tr>
                    }
                    
                </tbody>
            </table>
        )
    }
    function Submit()
    {
        if (Education.length !==0 && Experience.length !==0)
        nextPrev(1);
        else
        toast.error('Add Education and Experience');
    }
    return (
        <div>
            <ToastContainer />
            <br />
            <div className="float-end">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop">
                {" "}&nbsp;&nbsp;&nbsp;Add{" "}&nbsp;&nbsp;
                </button>
            </div>
            <h6>Education</h6>
            {AddE()}
            <br />
            <div className="float-end">
                <button type="button" className="btn btn-primary" data-bs-toggle="modal" data-bs-target="#staticBackdrop12">
                {" "}&nbsp;&nbsp;&nbsp;Add{" "}&nbsp;&nbsp;
                </button>
            </div>
            <h6>Experience</h6>
            <table className="table table-hover">
                <thead>
                    <tr>
                    <th scope="col-3">S.No</th>
                    <th scope="col-3">Institution</th>
                    <th scope="col-3">Role</th>
                    <th scope="col-3">Experience</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        exp.length !== 0
                        ?
                        exp.map((edu,index)=>{
                            return (
                                <tr key={index+1}>
                                    <td>{index+1}</td>
                                    <td>{edu.institution}</td>
                                    <td>{edu.role}</td>
                                    <td>{edu.year}</td>
                                </tr>
                            )
                        })
                        :
                        <tr><td colSpan={4}>No Experience Added</td></tr>
                    }
                    
                </tbody>
            </table>
          {/* Model for Education */}
            <div className="modal fade" id="staticBackdrop" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Education</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>EduReset()}></button>
                    </div>
                    <div className="modal-body row">
                        <div className="col-4">
                            <label htmlFor="inputName4" className="form-label">Institution  </label>
                            <input type="text" className="form-control" id="inputName4" value={eduins} onChange={(event)=>setEduins(event.target.value)}/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputName41" className="form-label">Degree  </label>
                            <input type="text" className="form-control" id="inputName41" value={edudeg} onChange={(event)=>setEduDeg(event.target.value)}/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputName42" className="form-label">Year  </label>
                            <input type="text" className="form-control" id="inputName42" value={eduyear} onChange={(event)=>setEduYear(event.target.value)}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>EduReset()}>Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>AddEdu()}>Save</button>
                    </div>
                    </div>
                </div>
            </div>
             {/* Model for Experience */}
             <div className="modal fade" id="staticBackdrop12" data-bs-backdrop="static" data-bs-keyboard="false" tabIndex="-1" aria-labelledby="staticBackdropLabel12" aria-hidden="true">
                <div className="modal-dialog modal-xl">
                    <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="staticBackdropLabel">Experience</h5>
                        <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close" onClick={()=>ExpReset()}></button>
                    </div>
                    <div className="modal-body row">
                        <div className="col-4">
                            <label htmlFor="inputName43" className="form-label">Institution  </label>
                            <input type="text" className="form-control" id="inputName43" value={expins} onChange={(event)=>setExpins(event.target.value)}/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputName44" className="form-label">Role  </label>
                            <input type="yea" className="form-control" id="inputName44" value={expdeg} onChange={(event)=>setExpDeg(event.target.value)}/>
                        </div>
                        <div className="col-4">
                            <label htmlFor="inputName45" className="form-label">Experience  </label>
                            <input type="text" className="form-control" id="inputName45" value={expyear} onChange={(event)=>setExpYear(event.target.value)}/>
                        </div>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-secondary" data-bs-dismiss="modal" onClick={()=>ExpReset()}>Close</button>
                        <button type="button" className="btn btn-primary" data-bs-dismiss="modal" onClick={()=>AddExp()}>Save</button>
                    </div>
                    </div>
                </div>
            </div>
            <div className="text-center">
                <br />
                <button className="btn btn-outline-secondary" disabled={!prevButton} onClick={()=>nextPrev(-1)}>Previous</button>
                {"  "}&nbsp;&nbsp;
                <button className="btn btn-outline-primary" onClick={()=>Submit()}>{" "}&nbsp;&nbsp;&nbsp;Next{" "}&nbsp;&nbsp;</button>
            </div>
        </div>
    )
}