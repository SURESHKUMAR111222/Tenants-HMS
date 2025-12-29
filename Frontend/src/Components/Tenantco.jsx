import React ,{useEffect, useState} from 'react'

import { useNavigate,useParams} from 'react-router-dom';
import { createTenant,updateTenant,getTenantById } from '../Service/TenantService';

function Tenantco() { 
    const[name,setName]=useState("");
    const[email,setEmail]=useState("");
     const[phoneNumber,setphoneNumber]=useState("");
    const[roomType,setroomType]=useState("");
    const[roomNo,setroomno]=useState("");
    const[floor,setFloor]=useState("");
   
    const { id }=useParams();  
    const navigator = useNavigate();
   
    const [errors,setErrors]=useState({
      name:"",
      email:"",
      phoneNumber:"",
      roomType:"",
      roomNo:"",
       floor:""

    });

    

    useEffect(() =>{
      if(id){
        getTenantById(id).then((response) =>{
          setName(response.data.name);
          setEmail(response.data.email);
          setphoneNumber(response.data.phoneNumber);
           setroomType(response.data.roomType);
          setroomno(response.data.roomNo);
          setFloor(response.data.floor);
        }).catch(error => console.error(error))
      }
    },[id])

    function saveOrUpdateTenant(e){
      e.preventDefault(); 

      if(validateForm()){
      
       const tenant = {
      name,
      email,
      phoneNumber,
      roomType,
      roomNo: Number(roomNo),
      floor: Number(floor)
     };

      console.log(tenant);

      if(id){
         updateTenant(id,tenant).then((response)  =>{
           console.log(response.data)
           navigator('/tenants');
         }).catch(error =>{
          console.error(error);
         })
      }

      else{
        createTenant(tenant).then((response) =>{
          console.log(response.data)
         navigator('/tenants')
        }).catch(error => console.error(error))
       } 
      }
    }
   
   function validateForm(){

      let valid=true;
      const errorsCopy={...errors};

      if(name.trim()){ 
        errorsCopy.name="";
      }
      else{
        errorsCopy.name="Name is required";
        valid=false;
      }
      if(email.trim()){
        errorsCopy.email="";
      }
      else{
        errorsCopy.email="Email is required";
        valid=false;
      }
       
      if(phoneNumber.trim()){
        errorsCopy.phoneNumber="";
      }
      else{
        errorsCopy.phoneNumber="phoneNumber is required";
        valid=false;
      }
      if(roomType.trim()){
        errorsCopy.roomType="";
      }
      else{
        errorsCopy.roomType="roomtype is required";
        valid=false;
      }
      if(String(roomNo).trim()){
        errorsCopy.roomNo="";
      }
      else{
        errorsCopy.roomNo="room number is required";
        valid=false;
      }
      if(String(floor).trim()){
        errorsCopy.floor="";
      }
      else{
        errorsCopy.floor="floor is required";
        valid=false;
      }
      setErrors(errorsCopy);
      return valid;
    } 

    function pageTitle(){
      
      if(id){   
        return  <h2 className='text-center'>Update Tenant</h2>
      }
      else{
          return  <h2 className='text-center'>Add Tenant</h2>
      }
    }

  return (
    <div>
        <div className='container'>
            <br /> <br />
             <div className='row'>

               <div className='card col-md-6 offset-md-3 offset-md-3'>
                 {
                 pageTitle()
                 }
                 <div className='card-body '>
                    
                    <form action="">
             <div className='form-group mb-2'>

                            <label className='form-label'>Name:</label>
                            <input type="text" placeholder='Enter the  Name' 
                            name='name' value={name}

                            className={`form-control ${errors.name ? 'is-invalid':''}`}
                         
                            onChange={(e) =>  setName(e.target.value)}/> 

                            {errors.name && <div className='invalid-feeback'> 
                            {errors.name} </div>}
                  
                    </div>

                         <div className='form-group mb-2'>

                            <label className='form-label'>Email:</label>
                            
                            <input type="text" placeholder='Enter the Email' 
                            name='email' value={email} 
                            className={`form-control ${errors.email ? 'is-invalid':''}`}
                            onChange={(e) =>setEmail(e.target.value)}/> 

                               {errors.email && <div className='invalid-feeback'> 
                              {errors.email} </div>}
                               
                        </div>
                        <div className='form-group mb-2'>

                            <label className='form-label'>phoneNumber:</label>
                     <input type="tel" placeholder='65-4849-4564' 
                           name='phonenumber' value={phoneNumber}
                             className={`form-control ${errors.phoneNumber ? 'is-invalid':''}`}
                           onChange={(e) =>   setphoneNumber(e.target.value)}/> 

                               {errors.phoneNumber && <div className='invalid-feeback'> 
                              {errors.phoneNumber} </div>}
                               
                        </div>

                        <div className='form-group mb-2'>

                            <label className='form-label'>roomType</label>
                            <select
                               value={roomType}
                               className={`form-control ${errors.roomType ? "is-invalid" : ""}`}
                               onChange={(e) => setroomType(e.target.value)}
                               >
                               <option value="">-- Select Room Type</option>
                               <option value="AC">AC</option>
                               <option value="NON AC">NON AC</option>
                            </select>

                               {errors.roomType && <div className='invalid-feeback'> 
                              {errors.roomType} </div>}
                               
                        </div>

                        <div className='form-group mb-2'>

                            <label className='form-label'>room_no:</label>
                           <select
                              value={roomNo}
                              className={`form-control ${errors.roomNo ? "is-invalid" : ""}`}
                              onChange={(e) => setroomno(e.target.value)}
                            >
                              <option value="">-- Select Room No</option>
                              <option value="1">1</option>
                              <option value="2">2</option>
                              <option value="3">3</option>
                              <option value="4">4</option>
                              <option value="5">5</option>
                            </select>
                               {errors.roomNo && <div className='invalid-feeback'> 
                              {errors.roomNo} </div>}
                               
                        </div>

                        <div className='form-group mb-2'>

                            <label className='form-label'>floor:</label>
                            <select
                                value={floor}
                                className={`form-control ${errors.floor ? "is-invalid" : ""}`}
                                onChange={(e) => setFloor(e.target.value)}
                              >
                                <option value="">-- Select Floor</option>
                                <option value="1">1</option>
                                <option value="2">2</option>
                                <option value="3">3</option>
                              </select> 

                               {errors.floor && <div className='invalid-feeback'> 
                              {errors.floor} </div>}
                               
                        </div>

                        <button className='btn btn-success w-100 mt-3' onClick={saveOrUpdateTenant}> Submit </button>

                    </form>

                 </div>

               </div>

             </div>
        </div>
    </div>
  )
}

export default Tenantco;