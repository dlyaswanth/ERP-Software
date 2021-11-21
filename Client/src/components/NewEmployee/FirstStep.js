import React from "react"
import Select from 'react-select'
import { toast, ToastContainer } from "react-toastify"
export default function FirstStep({
    staffChangeHandler,
    type,
    setType,
    userName,
    setUserName,
    setEmail,
    email,
    password,
    setPassword,
    prevButton,
    nextPrev,
    staffDeatils})
    {
        const options=[
            {value:"Admin",label:"Admin"},
            {value:"Professor",label:"Professor"},
            {value:"Student",label:"Student"},
        ]
        const gOptions=[
            {value:"Male",label:"Male",temp:"gender"},
            {value:"Female",label:"Female",temp:"gender"},
        ]
        const bOptions=[
            {value:"A+",label:"A+",temp:"blood_Group"},
            {value:"A-",label:"A-",temp:"blood_Group"},
            {value:"B+",label:"B+",temp:"blood_Group"},
            {value:"B-",label:"B-",temp:"blood_Group"},
            {value:"AB+",label:"AB+",temp:"blood_Group"},
            {value:"AB-",label:"AB-",temp:"blood_Group"},
        ]
        function Submit () {
            if (type && userName.trim() && email.trim() && password.trim() && staffDeatils.dob.trim() && staffDeatils.blood_Group &&staffDeatils.phoneNumber.trim() && staffDeatils.gender)
            nextPrev(1)
            else
            toast.error("Enter all the required fields !");
        }
        return (
            <div >
                <ToastContainer/>
                <form id="staff-form" className="row g-3 staff-form">
                    <div className="col-4">
                            <label htmlFor="inputType" className="form-label">Type * : </label>
                            <Select
                                autoFocus
                                placeholder="Select One"
                                name="type"
                                options={options}
                                value={
                                options.filter((option)=>{
                                    return option.value === type
                                })}
                                onChange={(e)=>e!==null?setType(e.value):setType("")} 
                                isClearable
                                isSearchable
                                required
                            />
                    </div>
                    <div className="col-4">
                        <label htmlFor="inputName46" className="form-label">Name * :  </label>
                        <input type="text" className="form-control" id="inputName46" value={userName}  onChange={(e)=>{
                            setUserName(e.target.value?e.target.value:"")}
                        }
                        required/>
                        {/* {errors.userName && <p>This field is required</p>} */}
                    </div>
                    <div className="col-4">
                        <label htmlFor="inputEmail4" className="form-label">Email * : </label>
                        <input type="email" className="form-control" id="inputEmail4" value={email} onChange={(e)=>setEmail(e.target.value?e.target.value:"")}/>
                    </div>
                    <div className="col-4">
                        <label htmlFor="inputPassword4" className="form-label">Password * : </label>
                        <input type="password" className="form-control" id="inputPassword4" value={password}  onChange={(e)=>setPassword(e.target.value?e.target.value:"")}/>
                    </div> 
                    <div className="col-4">
                        <label htmlFor="inputphone" className="form-label">DOB * : </label>
                        <input type="date" className="form-control" id="inputphone11" name="dob"  value={staffDeatils.dob} onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)} />
                    </div>
                    <div className="col-4">
                        <label  className="form-label">Gender * : </label>
                        <Select
                        placeholder="Select One"
                        options={gOptions}
                        value={
                        gOptions.filter((option)=>{
                            return option.value === staffDeatils.gender
                        })}
                        onChange={(e)=>staffChangeHandler(e.value,e.temp)} 
                        />
                    </div>
                    <div className="col-4">
                        <label  className="form-label">Blood Group * : </label>
                        <Select
                        placeholder="Select One"
                        options={bOptions}
                        value={
                        bOptions.filter((option)=>{
                            return option.value === staffDeatils.blood_Group
                        })}
                        onChange={(e)=>staffChangeHandler(e.value,e.temp)} 
                        />
                    </div>
                    <div className="col-4">
                        <label htmlFor="inputphone" className="form-label">Phone Number * : </label>
                        <input type="tel" className="form-control" id="inputphone1" name="phoneNumber" value={staffDeatils.phoneNumber} onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)} />
                    </div>				
                    <div className="col-4">
                        <label htmlFor="inputPhoto" className="form-label">Profile Photo : </label>
                        <input type="file" className="form-control" id="inputProfile1" name="profile_Url" onChange={(e)=>staffChangeHandler(e.target.value,e.target.name)} />
                    </div>
                    <br />  <br />
                </form>
                <div className="text-center">
                    <br />
                    <button className="btn btn-outline-primary" onClick={()=>Submit()}>{" "}&nbsp;&nbsp;&nbsp;Next{" "}&nbsp;&nbsp;</button>
                </div>
            </div>
        )
    } 