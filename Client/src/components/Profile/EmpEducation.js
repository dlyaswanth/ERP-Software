import React from "react";
import {Table} from 'react-bootstrap'
export default function EmpEducation(props)
{
    return (
        <div>
            <Table className="table-hover table-responsive table" responsive>
                <thead>
                    <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Program</th>
                    <th scope="col">Institution</th>
                    <th scope="col">Year</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.education?.map((education,index)=>{
                            return (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{education.institution}</td>
                                    <td>{education.degree}</td>
                                    <td>{education.year}</td>
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