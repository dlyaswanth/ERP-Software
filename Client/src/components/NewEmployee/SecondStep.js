import React from "react"
import Select from 'react-select'
import {toast,ToastContainer} from 'react-toastify'
export default function SecondStep({staffChangeHandler,staffDeatils,prevButton,nextButton, nextPrev,})
{
    const cOptions=[
        {value:"OC",label:"OC",temp:"community"},
        {value:"BC",label:"BC",temp:"community"},
        {value:"MBC",label:"MBC",temp:"community"},
        {value:"SC/ST",label:"SC/ST",temp:"community"},
        {value:"Others",label:"Others",temp:"community"},
    ]
    function Submit () {
        if (staffDeatils.address.trim() && staffDeatils.city.trim() &&staffDeatils.state.trim() && staffDeatils.postalCode.trim() &&staffDeatils.religion.trim() && staffDeatils.caste.trim() && staffDeatils.community && staffDeatils.mother_Tongue.trim())
        nextPrev(1)
        else
        toast.error("Enter all the required fields !");
    }
    return (
        <div>
            <ToastContainer />
            <form id="staff-form2" className="row g-3 staff-form">
                <div className="col-4">
                    <label htmlFor="inputAddress" className="form-label">Address * : </label>
                    <textarea className="form-control" id="inputAddress1" name="address"  value={staffDeatils.address} onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)} autoFocus></textarea>
                </div>
                <div className="col-4">
                    <label htmlFor="inputCity1" className="form-label">City * : </label>
                    <input type="text" className="form-control" id="inputCity1" name="city" value={staffDeatils.city} onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)} />
                </div>
                <div className="col-4">
                    <label htmlFor="inputState" className="form-label">State * : </label>
                    <input type="text" className="form-control" id="inputState1" name="state" value={staffDeatils.state}  onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)}/>
                </div>
                <div className="col-4">
                    <label htmlFor="inputZip" className="form-label">Postal Code * : </label>
                    <input type="text" className="form-control" id="inputZip1"name="postalCode" value={staffDeatils.postalCode} onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)}/>
                </div>
                <div className="col-4">
                    <label  className="form-label">Religion * : </label>
                    <input type="text" className="form-control"  name="religion" value={staffDeatils.religion} onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)} />
                </div>
                <div className="col-4">
                    <label  className="form-label">Community * : </label>
                    <Select
                    placeholder="Select One"
                    options={cOptions}
                    value={
                    cOptions.filter((option)=>{
                                    return option.value === staffDeatils.community
                            }
                    )}
                    onChange={(e)=>staffChangeHandler(e.value,e.temp)} 
                    />
                </div>
                <div className="col-4">
                        <label  className="form-label">Caste * : </label>
                        <input type="text" className="form-control"  name="caste" value={staffDeatils.caste} onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)} />
                </div>
                <div className="col-4">
                        <label  className="form-label">Mother Tongue * : </label>
                        <input type="text" className="form-control"  name="mother_Tongue" value={staffDeatils.mother_Tongue} onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)} />
                </div>  
            </form>
            <div className="text-center">
                <br />
                <button className="btn btn-outline-secondary" disabled={!prevButton} onClick={()=>nextPrev(-1)}>Previous</button>
                {"  "}&nbsp;&nbsp;
                <button className="btn btn-outline-primary" onClick={()=>Submit()}>{" "}&nbsp;&nbsp;&nbsp;Next{" "}&nbsp;&nbsp;</button>
            </div>
        </div>
    )
}