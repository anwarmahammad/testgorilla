import React,{useState} from "react";
import axios from "axios";
const Award = () => {
  

  const [email, setEmail] = useState('');
  const [checkbox, setCheckbox] = useState('');
  const [checkbox1, setCheckbox1] = useState('');
  const [flag, setFlag] = useState(false);
  

const data = {
  CHECKBOX: checkbox,
  EMAIL: email,
  CHECKBOX1: checkbox1,
  
};


//  onSUBMIT

const submit = async (e) => {
  e.preventDefault();
  if (
    email === "" ||
    checkbox ===""||
    checkbox1 ===""
    
    
  ) {
    setFlag(true);
    
  }

else  {
  
    setFlag(false)
    localStorage.setItem("email", JSON.stringify(email));
    console.log("saved in local storage");
    posting();
    
  }
  
};

// json API
const posting = async () => {
  await axios
    .post("http://localhost:7000/user", data)
  
    
};

   
  return (
    <div className=" Awardshead">
    <div className="mt-5 body-colors">
      <div className="row">
      <div className="card cards-head m-auto col-md-5 col-12   ">
      <form onSubmit={submit} >
          <img className="imag1" src="https://app.testgorilla.com/assets/testgorilla.svg" width="50%"></img>
          <div  >

           <h2 className="Get-started-head">Get started with your Free plan.</h2>
             

           
            <input 
              type="email"
              placeholder="Email*"
              onChange={(e) => setEmail(e.target.value)}
              className="form-control  mt-5 Trylength  fa-solid fa-envelope"
              name="email"
              
            />
              
          
          </div>
          <br />
          <div className="form-check">
            <input
             onChange={(e) => setCheckbox(e.target.value)}
              type="checkbox"
              class="form-check-input"
              id="exampleCheck12"
            />
            <label class="form-check-label" for="exampleCheck1">
            I have read and I accept theterms of use
            </label>
            <br/>
            <input
              type="checkbox"
              onChange={(e) => setCheckbox1(e.target.value)}
              class="form-check-input mt-4"
              id="exampleCheck1"
            />
            <label class="form-check-label mt-4" for="exampleCheck1">
            Send me occasional emails about TestGorilla's services
           
             </label>
          </div>
          {flag && <p className="text-danger">Please fill the all inputs   </p>}
          
          <button className="btn  Try-buttons btn-block mt-5 text-light">Log in</button>
          

          <div className="mt-4">
            
            <p className=" text-center">
            Already have a TestGorilla account?Log in
            </p>
            
          </div>
        </form>
      </div>
      </div>
    </div>
    </div>
  );
};
export default Award;