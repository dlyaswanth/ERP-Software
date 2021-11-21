import React from "react";
import {Table} from 'react-bootstrap'
export default function EmpExperience(props)
{
    return (
        <div>
            <Table className="table-hover table-responsive table" responsive>
                <thead>
                    <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">College Name</th>
                    <th scope="col">Profession</th>
                    <th scope="col">Years</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.experience?.map((exp,index)=>{
                            return (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{exp.institution}</td>
                                    <td>{exp.role}</td>
                                    <td>{exp.year}</td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
            <br />
        </div>
    )
}