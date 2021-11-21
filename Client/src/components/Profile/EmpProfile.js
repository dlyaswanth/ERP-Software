import React from 'react'
export default function EmpProfile(props)
{
    return (
        <div>
            <div>
                <h6>Basic Info</h6>
                <div className='row g-0 px-0 py-0'>
                    <div className='col g-0 px-0 py-0'>
                        <div className='row g-1 px-0 py-0'>
                            <div className='col-lg-2 col-md-4 col-sm-10 brown'>Name</div>
                            <div className='col-lg-3 col-md-4 col-sm-10 brown'>Mail</div>
                            <div className='col-lg-2 col-md-4 col-sm-10 brown'>Phone Number</div>
                            <div className='col-lg-2 col-md-4 col-sm-10 brown'>Blood Group</div>
                            <div className='col-lg-2 col-md-4 col-sm-10 brown'>Gender</div>
                            <div className='col-lg-1 col-md-4 col-sm-10 brown'>Dob</div>
                        </div>
                        <div className='row g-1 px-0 py-0'>
                            <div className='col-lg-2 col-md-4 col-sm-10'>{props.name}</div>
                            <div className='col-lg-3 col-md-4 col-sm-10'>{props.email}</div>
                            <div className='col-lg-2 col-md-4 col-sm-10'>{props.phoneNumber}</div>
                            <div className='col-lg-2 col-md-4 col-sm-10'>{props.blood_Group}</div>
                            <div className='col-lg-2 col-md-4 col-sm-10'>{props.gender}</div>
                            <div className='col-lg-1 col-md-4 col-sm-10'>{props.dob}</div>
                        </div>
                        <div className='row g-1 px-0 py-0'>
                            <div className='col-lg-2 brown col-md-4 col-sm-10'>Address</div>
                            <div className='col-lg-3 brown col-md-4 col-sm-10'>City</div>
                            <div className='col-lg-2 brown col-md-4 col-sm-10'>State</div>
                            <div className='col-lg-2 brown col-md-4 col-sm-10'>Postal Code</div>
                            <div className='col-lg-2 brown col-md-4 col-sm-10'>Mother Tongue</div>
                            <div className='col-lg-1 brown col-md-4 col-sm-10'>Religion</div>
                        </div>
                        <div className='row g-1 px-0 py-0'>
                            <div className='col-lg-2 col-md-4 col-sm-10'>{props.details?props.details.address:""}</div>
                            <div className='col-lg-3 col-md-4 col-sm-10'>{props.details?props.details.city:""}</div>
                            <div className='col-lg-2 col-md-4 col-sm-10'>{props.details?props.details.state:""}</div>
                            <div className='col-lg-2 col-md-4 col-sm-10'>{props.details?props.details.postalCode:""}</div>
                            <div className='col-lg-2 col-md-4 col-sm-10'>{props.details?props.details.mother_Tongue:""}</div>
                            <div className='col-lg-1 col-md-4 col-sm-10'>{props.details?props.details.religion:""}</div>
                        </div>
                        <div className='row g-1 px-0 py-0'>
                            <div className='col-lg-2 col-md-4 col-sm-10 brown'>Caste</div>
                            <div className='col-lg-3 col-md-4 col-sm-10 brown'>Community</div>
                        </div>
                        <div className='row g-1 px-0 py-0'>
                            <div className='col-lg-2 col-md-4 col-sm-10'>{props.details?props.details.caste:""}</div>
                            <div className='col-lg-3 col-md-4 col-sm-10'>{props.details?props.details.community:""}</div>
                        </div>
                    </div>
                </div>
                <br />
                <h6>Professional Info</h6>
                <div className='row g-0 px-0 py-0'>
                    <div className='col g-0 px-0 py-0'>
                        <div className='row g-1 px-0 py-0'>
                            <div className='col-lg-2 brown'>Role</div>
                            <div className='col-lg-3 brown'>Department</div>
                            <div className='col-lg-2 brown'>Date Of Joining</div>
                            <div className='col-lg-2 brown'>Tutor</div>
                            <div className='col-lg-2 brown'>Mode Of Transport</div>
                        </div>
                        <div className='row g-1 px-0 py-0'>
                            <div className='col-lg-2'>{props.role}</div>
                            <div className='col-lg-3'>{props.details?props.details.department:""}</div>
                            <div className='col-lg-2'>{props.details?props.details.dateofJoining:""}</div>
                            <div className='col-lg-2'>{props.details?props.details.tutor:""}</div>
                            <div className='col-lg-2'>{props.details?props.details.modeofTransport:""}</div>
                        </div>
                        <div className='row g-1 px-0 py-0'>
                            <div className='col-lg-5 col-md-10 col-sm-12 brown'>Subjects Handling</div>
                            {
                                props.details
                                ?props.details.subjects.map((sub,index)=>{
                                    return(
                                    <span key={index}>{index+1} - {sub}</span>
                                    )
                                })
                                :""
                            }
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}