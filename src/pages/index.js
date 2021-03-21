import React, {useState, useEffect} from "react"
import { useFormik, Formik, Form, ErrorMessage, Field } from 'formik';
// import TextField from '@material-ui/core/TextField';

export default () =>{
  const [mydata, setData] = useState("");
  const formik = useFormik({
    initialValues:{ 
      name: '',
      age: ''
    },
    onSubmit: (values)=>{
      console.log(values);
      fetch(`/.netlify/functions/hello`, {
        method: 'post',
        body: JSON.stringify(values)
      })
     .then(response => response.json())
    .then(data => {
      setData(data);
      console.log("Data: " + JSON.stringify(data));
    
    });
  }} 
  
  );

  return (
     <form onSubmit={formik.handleSubmit}>
       {/* <div>tayyab+{mydata}</div> */}
       <label htmlFor="Name">Name</label>
       <input
         id="name"
         name="name"
         type="text"
         onChange={formik.handleChange}
         value={formik.values.name}
       />
    <br></br>
       <label htmlFor="lastName">age</label>
       <input
         id="age"
         name="age"
         type="number"
         onChange={formik.handleChange}
         value={formik.values.age}
       />
        <button type="submit">Submit</button>
            </form>

            )
        }
