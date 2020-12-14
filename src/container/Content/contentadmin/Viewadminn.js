import React from 'react'
import {Link} from 'react-router-dom'
import axiosInstance from '../../../helpers'

export default function Viewadminn({hrList,userList}) {
  
  const deleteHandler=(id)=>{
    const token=localStorage.getItem('token')
    const config={
        'headers':{'jwt_react':token}
    }
    axiosInstance.delete('/api/delete/registered/user/'+id,config).then(data=>{
      if(data.status===200){
        window.location.reload();
      }
    }).catch(err=>{
      console.log(err)
    })
  }

  const showHrList=(el)=>{
    if(el[0]===undefined){
      return<h4>loading...</h4>
    }
    
    return el[0].data.map((item,index)=>{
      if(el[0].data===undefined){
        return <h3>loading...</h3>
      }
      
      const {fullname,email,mobile,createdAt,_id}=item
      index++
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{fullname}</td>
          <td>{email}</td>
          <td>{mobile}</td>
          <td>{createdAt.substring(0,10)}</td>
          <td><Link to={`/contentadmin/editadmin/${_id}`} className="btn btn-success">edit</Link>
              <button className="btn btn-danger" onClick={()=>deleteHandler(_id)}>delete</button>
          </td>
        </tr>
      )
    })
  }

  const showUserList=(el)=>{
    if(el[0]===undefined){
      return<h4>loading...</h4>
    }
    
    return el[0].data.map((item,index)=>{
      if(el[0].data===undefined){
        return <h3>loading...</h3>
      }
      
      const {fullname,email,mobile,createdAt,_id}=item
      index++
      return (
        <tr key={index}>
          <td>{index}</td>
          <td>{fullname}</td>
          <td>{email}</td>
          <td>{mobile}</td>
          <td>{createdAt.substring(0,10)}</td>
          <td><Link to={`/admin/edituser/${_id}`} className="btn btn-success">edit</Link>
              <button className="btn btn-danger" onClick={()=>deleteHandler(_id)}>delete</button>
          </td>
        </tr>
      )
    })
  }

    return (
      <div className="card" style={{marginTop:150+"px"}}>
     <div className="accordion" id="accordionExample">
  <div className="card">
    <div className="card-header" id="headingOne">
      <h2 className="mb-0">
        <button className="btn btn-primary btn-link" type="button" data-toggle="collapse" data-target="#collapseOne" aria-expanded="true" aria-controls="collapseOne">
          HR LIST
        </button>
      </h2>
    </div>

    <div id="collapseOne" className="collapse show" aria-labelledby="headingOne" data-parent="#accordionExample">
      <div className="card-body">
      <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>EMAIL</th>
                        <th>MOBILE</th>
                        <th>JOINED ON</th>
                        <th>ACTIONS</th>
                      </thead>
                      <tbody class=" text-primary">
                        {showHrList(hrList)}
                      </tbody>
                      </table>
                      </div>      
                      </div>
    </div>
  </div>
  <div className="card">
    <div className="card-header" id="headingTwo">
      <h2 className="mb-0">
        <button className="btn btn-link btn-primary collapsed" type="button" data-toggle="collapse" data-target="#collapseTwo" aria-expanded="false" aria-controls="collapseTwo">
          USER LIST
        </button>
      </h2>
    </div>
    <div id="collapseTwo" className="collapse" aria-labelledby="headingTwo" data-parent="#accordionExample">
      <div className="card-body">
      <div class="table-responsive">
                    <table class="table">
                      <thead class=" text-primary">
                        <th>S.NO</th>
                        <th>Name</th>
                        <th>EMAIL</th>
                        <th>MOBILE</th>
                        <th>JOINED ON</th>
                        <th>ACTIONS</th>
                      </thead>
                      <tbody class=" text-primary">
                        {showUserList(userList)}
                      </tbody>
                      </table>
                      </div>
                    </div>
    </div>
  </div>
  
</div>
</div>
    )
}
