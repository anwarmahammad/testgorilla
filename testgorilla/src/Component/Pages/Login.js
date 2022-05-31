// import React, { useState, useEffect }  from 'react'
// import './Home.css'


// const Login = () => {
 
//   const initialValues = { email: "", password: "" };
//   const [formValues, setFormValues] = useState(initialValues);
//   const [formErrors, setFormErrors] = useState({});
//   const [isSubmit, setIsSubmit] = useState(false);
//   const handleChange = (e) => {
//     const { name, value } = e.target;
//     setFormValues({ ...formValues, [name]: value });
//   };
//   const handleSubmit = (e) => {
//     e.preventDefault();
//     setFormErrors(validate(formValues));
//     setIsSubmit(true);
//   };
//   useEffect(() => {
//     console.log(formErrors);
//     if (Object.keys(formErrors).length === 0 && isSubmit) {
//       console.log(formValues);
     
//     }
//   }, [formErrors]);
//   const validate = (values) => {
//     const errors = {};
//     const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;
//     const password = /^[A-Za-z]\w{4,12}$/
//     if (!values.email) {
//       errors.email = "Email is required!";
//     } else if (!regex.test(values.email)) {
//       errors.email = "This is not a valid email format!";
//     }
    
//   if (!values.password) {
//     errors.password = "Password is required";
//   } else if (!password.test(values.password.length < 4)){
//     errors.password = "Password must be more than 4 characters";
//   } else if (!password.test(values.password.length > 12))  {
//     errors.password = "Password cannot exceed more than 10 characters";
//   }
// }
//   return (
//     <div className="container">
//       <div className="row border1">
//         <div className=" m-auto  text-center ">
//           <form onSubmit={(e)=>handleSubmit(e)}>
//             <img className="imag1 mt-5" src="\img\LOGO.svg" width="70%"></img>
//             <div className="ui divider"></div>
//             <div className="ui form">
//               <div className="field">
//                 <input
//                   type="text"
//                   name="email"
//                   className="form-control mt-5"
//                   placeholder="Enter Email"
//                   value={formValues.email}
//                   onChange={(e)=>handleChange(e)}
//                 />
//               </div>
//               <p className="err">{formErrors.email}</p>
//               <div className="field mt-3">
//                 <input
//                   type="password"
//                   name="password"
//                   className="form-control"
//                   placeholder="Password"
//                   value={formValues.password}
//                   onChange={(e)=>handleChange(e)}
//                 />
//               </div>
//               <p className="err">{formErrors.password}</p>
//               <div class="form-check mt-4">
//                 <input
//                   type="checkbox"
//                   class="form-check-input"
//                   id="exampleCheck1"
//                 />
//                 <label class="form-check-label" for="exampleCheck1">
//                   Keep me logged in
//                 </label>
//                 <a href="" className="Reset">
//                   set or reset password
//                 </a>
//               </div>
//               <button className="btn btn-info form-control mt-4">Log in</button>
//               <div className="mt-4">
//                 <p>
//                   Don't have an account?{" "}
//                   <span>
//                     <a className="Span1" href="">
//                       Create one here.
//                     </a>
//                   </span>
//                 </p>
//                 <p>
//                   Are you a candidate?{" "}
//                   <span>
//                     <a className="Span1" href="">
//                       Click here for support.
//                     </a>
//                   </span>
//                 </p>
//               </div>
//             </div>
//           </form>
//         </div>
//       </div>
//     </div>
    
//   )
// }

// export default Login
import React from 'react'
import './Home.css'
import LoginP from './LoginP'

const Login = () => {
  return (
    <div>
      <LoginP />
    </div>
  )
}

export default Login

