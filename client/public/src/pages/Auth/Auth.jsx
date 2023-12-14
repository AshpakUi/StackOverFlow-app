import React, { useState } from "react";
import Icon from "../../assets/Icon.png";
import AboutAuth from "./AboutAuth";
import {signup,login} from "../../actions/auth";
import {useDispatch} from "react-redux";
import {useNavigate} from "react-router-dom"
import "./Auth.css";
const Auth = () => {
  const [isSignup, setIsSignup] = useState(true);
  const [name,setName]=useState("");
  const [email,setEmail]=useState("");
  const [password,setPassword]=useState("");

  const dispatch=useDispatch()
  const navigate=useNavigate()

  const handleSwithch = () => {
    setIsSignup(!isSignup);
  };
const handleSubmit=(e)=>{
e.preventDefault()
if(!name && !password){
  alert("Entert Email and Password")
}
if(isSignup){
  if(!name){
    alert("Enter a name to continue")
  }
  dispatch(signup({name,email,password},navigate))
}else{
  dispatch(login({email,password},navigate))
}
}
  return (
    <section className="auth-section">
      {isSignup && <AboutAuth />}
      <div className="auth-container-2">
        {!isSignup && (
          <img
            width="100"
            src={Icon}
            alt="Stack overflow"
            className="login-logo"
          />
        )}
        <form onSubmit={handleSubmit}>
          {isSignup && (
            <label htmlFor="name">
              <h4>Display Name</h4>
              <input type="text" name="name" id="name" onChange={(e)=>setName(e.target.value)} />
            </label>
          )}
          <label htmlFor="email">
            <h4>Email</h4>
            <input type="email" id="email" name="email"  onChange={(e)=>setEmail(e.target.value)} />
          </label>
          <label htmlFor="password">
            <div style={{ display: "flex", justifyContent: "space-between" }}>
              <h4>Password</h4>
              {!isSignup && (
                <p style={{ color: "#007ac6", fontSize: "13px" }}>
                  forgot password
                </p>
              )}
            </div>
            <input type="password" id="password" name="password"  onChange={(e)=>setPassword(e.target.value)} />
            {isSignup && (
              <p style={{ color: "#666767", fontSize: "13px" }}>
                Password must contain at least eight
                <br /> charectors, including at 1 letter
                <br /> 1 number
              </p>
            )}
          </label>
          {isSignup && (
            <label htmlFor="check">
              <input type="checkbox" id="check" />
              <p style={{ fontSize: "13px" }}>
                Opt-in to receive occasional <br />
                product updates, user research invitation
                <br /> , company announcements, and digests.
              </p>
            </label>
          )}
          <button type="submit" className="auth-btn">
            {isSignup ? "Sign Up" : "Log In"}
          </button>
          {isSignup && (
            <p style={{ color: "#666767", fontSize: "13px" }}>
              By clicking "Sign Up", you agree to our
              <spam style={{ color: "#007ac6" }}>
                terms of <br />
                service,
              </spam>
              <spam style={{ color: "#007ac6" }}> privacy policy</spam> and
              <spam style={{ color: "#007ac6" }}>cookie policy</spam>
            </p>
          )}
        </form>
        <p>
          {isSignup ? "Alredy have an account?" : "Don't have account? "}
          <button
            className="handle-switch-btn"
            onClick={handleSwithch}
            type="button"
          >
            {isSignup ? "Log In" : "Sig Up"}
          </button>
        </p>
      </div>
    </section>
  );
};

export default Auth;
