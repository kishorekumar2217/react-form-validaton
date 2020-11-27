import React from 'react';
import {useFormik } from 'formik';

//npm intsall formik yup --save

const  validate = (values)=>{ //take name values from intialvalue
  var errors={}
  if(!values.vname){ // name doest not contain value
errors.vname="Name is requied"
  }
  else if(values.vname.length > 15) {
    errors.vname =" maximum length 15 only "

  }
  else if(values.vname.length<4){
    errors.vname="minmum 3 required "
  }
  return errors; // error is retuns to input
}
const App = () => {
  const formik = useFormik({
    initialValues: {
      vname: ""
    },
    validate,
   
    onSubmit: (userInputData) => {
      console.log(userInputData);//input  value is 
      
    }
  });
  return (
    <div className="container">
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
         
           </div>
           <button type="submit" className="btn btn-primary">submit</button>
           
        </form>
    </div>
  );

}




export default App;
