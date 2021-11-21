import React from "react";
import { Link } from "react-router-dom";
import {Table} from 'react-bootstrap'
export default function EmpDocs(props)
{
    return (
        <div>
            <Table className="table-hover table-responsive table" responsive>
                <thead>
                    <tr>
                    <th scope="col">S.No</th>
                    <th scope="col">Document Name</th>
                    <th scope="col">Preview</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        props.docs?.map((education,index)=>{
                            return (
                                <tr key={index}>
                                    <th scope="row">{index+1}</th>
                                    <td>{education.value}</td>
                                    <td><Link to={education.link+""}>View</Link></td>
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