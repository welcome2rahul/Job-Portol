import React,{useState,useEffect} from 'react'
import {Container,Row,Col} from 'react-bootstrap'
import Input from '../../../../container/Input';
import axiosInstance from '../../../../helpers';



export default function Approveuser(props) {
    const [interview_date,setDate]=useState('');
    const [conference_link,setCL]=useState('');
    const [data,setData]=useState([]);
    const [error,setError]=useState('');

    useEffect(()=>{
        const commingData=props.location.userData
        setData([commingData])
    },[])
    

    const submitHandler=(e)=>{
        e.preventDefault();
        if(interview_date===''){
            return setError('Interview Date required')
        }
        if(conference_link===''){
            return setError('Interview Date required')
        }

        const userId=(data[0].item.userId._id)
        const jobId=props.match.params.id
        const token=localStorage.getItem('token')
        const config={
            'headers':{'jwt_react':token}
        }
        const formData={interview_date,conference_link,userId,jobId}
        axiosInstance.post('/application/hr/job/approved',formData,config).then(data=>{
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })
        
       }
    
    return (
        <div>
        <Container>
            <Row>
              <div className="card card1">
                <div className="row justify-content-center my-5">
                    <div className="col-md-12 col-10 my-8">
                        <div className="row justify-content-center px-3 mb-3"> </div>
                        <h3 className="mb-5 text-center heading">Appoint For Interview</h3>
                        <div class="alert alert-danger" role="alert" style={error===''?{display:'none'}:{display:'block'}}>
                        {error}
                        </div>
                        <h6 className="msg-info">Schedule the Interview</h6>
                            
                    <form onSubmit={submitHandler}>
                    <Row>
                        <Col md={12}> <Input type="date" placeholder="Interview Date" label="Interview Date" onChange={(e)=>setDate(e.target.value)} /></Col>
                        <Col md={12}> <Input type="text" placeholder="Conference Link" label="Conference Link" onChange={(e)=>setCL(e.target.value)} /></Col>

                    </Row>

                    
                    
                    <Row>    
                            <Col md={6}>   <button className="btn-block btn-color">Send</button></Col>
                            <Col md={6}>  <button className="btn-block btn-color">Cancel</button></Col> 
                     </Row>  

                              

              
                    
                    </form>
                    </div>
                    </div>
                    </div>
      
            
  </Row>
 
</Container>
           
        </div>
    )
}
