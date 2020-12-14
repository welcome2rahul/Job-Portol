import React,{useState} from 'react'
import axiosInstance from '../../../helpers'
import FlashMessage from 'react-flash-message'

export default function Jobsadmin() {
    
    const [role,setRole]=useState('')
    const [profile,setProfile]=useState('')
    const [description,setDescription]=useState('')
    const [error,setError]=useState('')
    const [showMessage,setShowMessage]=useState(false)

    const submitHandler=(e)=>{
        e.preventDefault();
        if(role===''||profile===''||description===''){
            return setError('Empty field not allowed')
        }
        const formdata={role,profile,description}
        const token=localStorage.getItem('token');
        const config={
            'headers':{'jwt_react':token}
        }
        axiosInstance.post('/application/admin/job/create',formdata,config).then(data=>{
            if(data.status===200){
                setShowMessage(true)
                setTimeout(() => setShowMessage(false),5000);
            }
        }).catch(err=>{
            console.log(err)
        })
    }
    return (
        <div>
        
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
                    <form onSubmit={submitHandler}>
                                 <div className="flashdiv" style={showMessage===false?{display:'block'}:{display:'block'}}>
                                    <FlashMessage duration={5000}>
                                    <strong>Hello Therichpost!</strong>
                                    </FlashMessage>
                                </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Job Title</label>
                <input type="text" className="form-control"  placeholder="Enter Job Title" onChange={(e)=>setRole(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlInput1">Job Designation</label>
                <input type="text" className="form-control"  placeholder="Enter Job Designation" onChange={(e)=>setProfile(e.target.value)}/>
            </div>
            <div className="form-group">
                <label for="exampleFormControlTextarea1">Job Details</label>
                <textarea className="form-control"  rows="3" onChange={(e)=>setDescription(e.target.value)} />
            </div>
            
            <button className="col-md-2 col-lg-2 btn btn-primary">Add Job</button>

            
        </form>
                </div>
            </div>
        </div>
    </div>
    </div>

            )
        }
