import React from 'react';
import {useFormik } from 'formik'; 
import  * as yup from 'yup';

//npm intsall formik yup --save


const App = () => {
  const formik = useFormik({
    initialValues: {
      vname: "",
      email:"",
      password:"",
      list:"",
      confirmpassword:""
    },
    validationSchema:yup.object({
      vname:yup.string().min(2," minimum  2 characters required")
      .max(15,"maxmum 15 only").required("name is required").trim().strict().uppercase("use uppercase"),
      //trim().strict(), these are used to validate white space,,stric is must be call to work trim ,uppercase
    email:yup.string().email().required("E-mail is required"),
    password:yup.string().required("password is a required field"),
   confirmpassword:yup.string().required(" confirm password is a required field").oneOf([yup.ref('password'),null] ,"confirm pasword must be same with  passwords"),

    list:yup.string().required("should be select")


    }),
   
    onSubmit: (userInputData) => {
      console.log(userInputData);//input  value is 
      
    }
  });
  return (
    <div className="container mt-3">
      <div className="jumbotron">
        <form  autoComplete="off" onSubmit={formik.handleSubmit}>
          <div className='form-group'>
          <label>Name</label>
          <input 
           type="text" 
           className='form-control' 
           name="vname" 
           onChange={formik.handleChange}
           value={formik.values.vname}/>
           {
             formik.errors.vname ?
             <div  className="text-danger">{formik.errors.vname}</div>:
             null
           }
           <div>
          <label>Email</label>

           <input 
           type="text" 
           className='form-control' 
           name="email" 
           onChange={formik.handleChange}
           value={formik.values.email}/>
           {
            formik.errors.email?
            <div className="text-danger">{formik.errors.email}</div>
            :null
           }
           </div>
          
         

           <div>
  <label>Select class:</label>
  <select className="form-control"
  name="list"
  onChange={formik.handleChange}
  value={formik.values.list}>
    <option value=" ">--Select one--</option>

    <option>1</option>
    <option>2</option>
    <option>3</option>
    <option>4</option>
  </select>

{
  formik.errors.list? 
  <div className="text-danger">{formik.errors.list}</div>
  :null
}
</div>
<div>
          <label>Password</label>

           <input 
           type="password" 
           className='form-control' 
           name="password" 
           onChange={formik.handleChange}
           value={formik.values.password}/>
           {
            formik.errors.password?
            <div className="text-danger">{formik.errors.password}</div>
            :null
           }
           </div>
           <div>
          <label>Conform Password</label>

           <input 
           type="password" 
           className='form-control' 
           name="confirmpassword" 
           onChange={formik.handleChange}
           value={formik.values.confirmpassword}/>
           {
            formik.errors.confirmpassword?
            <div className="text-danger">{formik.errors.confirmpassword}</div>
            :null
           }
           </div>
         
   </div>

           <button type="submit" className="btn btn-primary">submit</button>
           
        </form>
        </div>
        
    </div>
    
  );

}




export default App;
