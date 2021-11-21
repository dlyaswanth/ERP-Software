import React from 'react'
function Loader()
{
    return (
        <div className='loader' style={{minWidth:"100%",minHeight:"100%"}}>
            <div className="d-flex justify-content-center loader" style={{marginTop:"20%"}}>
                <div className="spinner-border" role="status">
                </div>
            </div>
        </div>
    )
}
export default Loader;