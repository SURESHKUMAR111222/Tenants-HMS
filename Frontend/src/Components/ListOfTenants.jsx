import React, { useEffect, useState } from 'react'

import { deleteTenant, getTenants } from '../Service/TenantService'

import {useNavigate} from 'react-router-dom'
function ListOfTenants() {

  const [tenants,setTenants] = useState([]);
  const navigate = useNavigate();
  useEffect(() =>{
    getAllTenants();
  },[]);


  function getAllTenants(){
    getTenants().then((response) => {
        setTenants(response.data)
    }).catch(err => {console.error(err)})
  }

  function addTenant(){
    navigate('/add-tenant')
  } 
  
   function updateTenant(id){
            navigate(`/update-tenant/${id}`);
        }

            function removeTenantco(id){
            console.log(id);
            if (window.confirm("Are you sure you want to delete this tenant?")) {
            deleteTenant(id).then((response) =>{
            
            getAllTenants();
            }).catch(error =>{
                console.error(error);
                alert("failed to delete tenant");
            });
        } else {
          alert("delete cancelled");
        }
      }
  return (
    <>  
      <div className='container'>
       <div></div>

       <button className='btn btn-primary m-3 mb-3' onClick={addTenant}>Add Tenant</button>
         
        <table className='table table-striped table-bordered'> 

         <thead>

          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Email</th>
            <th>Phone number</th>
            <th>Room type</th>
            <th>Room no</th>
            <th>Floor</th>
            <th>Action</th>
          </tr>

         </thead>

         <tbody>

            {
             tenants.map( tenant =>{

                return(
             <tr key={tenant.id}>
                <td>{tenant.id}</td>
                <td>{tenant.name}</td>
                <td>{tenant.email}</td>
                <td>{tenant.phoneNumber}</td>
                <td>{tenant.roomType}</td>
                <td>{tenant.roomNo}</td>
                <td>{tenant.floor}</td>
                <td style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
                            <button className='btn btn-info btn-sm mb-2'  onClick={() => updateTenant(tenant.id)} > <i class="bi bi-arrow-repeat"></i>   Update </button>
                            <button  className='btn btn-danger btn-sm' onClick={() => removeTenantco(tenant.id)} ><i class="bi bi-trash"></i>  Delete</button>
                            </td>
             </tr> ) })

            }
         </tbody>

        </table>

      </div>
    
    </>
  )
}

export default ListOfTenants