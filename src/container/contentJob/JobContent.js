import React,{useState,useEffect } from 'react'
import axiosInstance from '../../helpers'


export default function JobContent({singleJob}) {
  const [isAlertActive,setAlertActive]=useState('')

  
  useEffect(()=>{
   
  },[])

  const {role,profile,description}=singleJob

  const submitHandler=()=>{
    const userId=localStorage.getItem('id');
    const token=localStorage.getItem('token');
      const dataToSubmit={...singleJob,userId}
      const config={
        'headers':{'jwt_react':token}
      }
      axiosInstance.post('/application/user/job/apply',dataToSubmit,config).then(data=>{
        if(data.status===200){
          setAlertActive('active')
          setTimeout(() => {
            setAlertActive('')
          }, 5000);
        }
      }).catch(err=>{
        console.log(err)
      })
      
  }
    return (
      
        <div className="content">
        <div className="container-fluid">
          
          
          <div className="row">
            <div className="col-lg-12 col-md-12">
              <div style={{marginTop:100+'px',}}>
                <div className="alert alert-success mt-4" role="alert" style={isAlertActive==='active'?{display:'block'}:{display:'none'}}>
                <h4 className="alert-heading fade">Well done!</h4>
                <p>Aww yeah, you successfully submitted the job application. All the best .</p>
                <hr/>
                <p class="mb-0"><button className="btn btn-success">Browse More jobs</button></p>
                </div>
              </div>
              <div className="card" style={{marginTop:150+"px"}}>
                <div className="card-header card-header-tabs card-header-primary">
                  <div className="nav-tabs-navigation">
                    <div className="nav-tabs-wrapper">
                      <span className="nav-tabs-title"><h5>About the Job</h5></span>
                    </div>
                  </div>
                </div>
                <div className="card-body">
                  <div className="tab-content">
                    <div className="tab-pane active" id="profile">
                      <table className="table">
                        <tbody>
                          <tr>
                            <td><h4>Role </h4></td>
                            <td>{role}</td>
                          </tr>
                          <tr>
                            <td><h4>profile </h4></td>
                            <td>{profile}</td>
                          </tr>
                          <tr>
                            <td><h4>Description </h4></td>
                            <td>{description}</td>
                          </tr>
                        </tbody>
                      </table>
                      <button className="btn btn-primary" onClick={submitHandler}>apply</button>
                      </div>
                      </div>
                      </div>
                      </div>
                      </div>
           </div>
        </div>
      </div>
    )
}
