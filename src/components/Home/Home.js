import React,{useEffect,useState} from 'react'
import axiosInstance from '../../helpers'
import {Link} from 'react-router-dom'
import './Home.css'

export default function Home() {
    const [allJobs,setAllJobs]=useState([])
   
    useEffect(()=>{
        getAllJobs()
        
    },[])
    
    const getAllJobs=()=>{
        axiosInstance.get('/application/job/show/all').then(data=>{
            console.log(data.data.data)
            return setAllJobs([data.data.data])
        }).catch(err=>{
            console.log(err)
        })
    }

    const renderAllJobs=(el)=>{
     if(el===undefined){
         return <h1>Loading...</h1>
     }
     if(el.length<1){
         return <h1>no records</h1>
     }
        return el.map((item,index)=>{
            
            return (
                <div key={index}>
                    {item.profile}
                    {item.role}
                    {item.description}
                    <Link className="btn btn-info" to={`/user_dashboard/job_application/${item._id}`}>view details</Link>
                </div>
            )
        })
    }
   
    return (
        <div>
             <div>
               <section className=" slider_section ">
      <div className="container">
        <div className="row">
          <div className="col-md-6 ">
            <div className="detail_box">
              <h1>
                Welcome to <br />
                Our Job Portol
              </h1>
              <p>
                There are many variations of passages of Lorem Ipsum available, but the majority have suffered
                alteration in some form, by injected humour, </p>
              <a href="/register" className="">
                Register Now
                </a>
            </div>
          </div>
          <div className="col-lg-5 col-md-6 offset-lg-1">
          <h2>
               Latest Jobs
              
              </h2>
            <div className="img_container">
              <div id="carouselExampleIndicators" className="carousel slide" data-ride="carousel">

                <div className="carousel-inner">
                  <div className="carousel-item active">
                    <div className="img-box">
                    <div class="box">
              <div class="detail-box">
                <h5>
                  MERN Stack Developer
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum available, butdon't look even slightly
                  believable.
                </p>
              </div>
            </div>
                    </div>
                  </div>
                  
                  <div className="carousel-item">
                    <div className="img-box">
                    <div class="box">
              <div class="detail-box">
                <h5>
                  Full Stack Developer
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum available, butdon't look even slightly
                  believable.
                </p>
              </div>
            </div>
                    </div>
                  </div>
                  <div className="carousel-item">
                    <div className="img-box">
                    <div class="box">
              <div class="detail-box">
                <h5>
                  MEAN Stack Developer
                </h5>
                <p>
                  There are many variations of passages of Lorem Ipsum available, butdon't look even slightly
                  believable.
                </p>
              </div>
            </div>
                    </div>
                  </div>
                </div>
                <div className="carousel_btn-box">
                  <a className="carousel-control-prev" href="#carouselExampleIndicators" role="button" data-slide="prev">
                    <span>
                      <i className="fa fa-long-arrow-left" aria-hidden="true"></i>
                    </span>
                    <span className="sr-only">Previous</span>
                  </a>
                  <a className="carousel-control-next" href="#carouselExampleIndicators" role="button" data-slide="next">
                    <span>
                      <i className="fa fa-long-arrow-right" aria-hidden="true"></i>
                    </span>
                    <span className="sr-only">Next</span>
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
    
  


        </div>
            {renderAllJobs(allJobs[0])}
        </div>
    )
}
