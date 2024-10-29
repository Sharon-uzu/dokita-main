import logo from '../Assets/logo2.png';
import log from '../Assets/log.png';
import { HiOutlineMail } from "react-icons/hi";
import { IoMdLock } from "react-icons/io";
import { FaEye } from "react-icons/fa";
import { Link, useNavigate } from 'react-router-dom';
import React, { useState } from 'react';
import { Supabase } from "../config/supabase-config";

const Login = () => {
  const navigate = useNavigate();

  const initialValues = {
    email: "",
    password: "",
  };

  const [formData, setFormData] = useState(initialValues);
  const [formErrors, setFormErrors] = useState({});

  const validate = (values) => {
    const errors = {};
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]{2,}$/i;

    if (!values.email) {
      errors.email = "Email is required";
    } else if (!regex.test(values.email)) {
      errors.email = "This is not a valid email";
    }

    if (!values.password) {
      errors.password = "Password is required";
    }

    return errors;
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const errors = validate(formData);
    setFormErrors(errors);

    if (Object.keys(errors).length > 0) {
      return; // Stop submission if there are validation errors
    }

    try {
      const { data, error } = await Supabase
        .from("dokita_signup")
        .select("*")
        .eq("email", formData.email)
        .single();

      if (error) {
        console.error("Error fetching user:", error);
        alert("Error fetching user or incorrect login details");
        return;
      }

      if (!data) {
        console.error("User not found");
        alert("User not found");
        return;
      }

      // Save user ID to local storage
      localStorage.setItem("userId", data.id);


      const role = data.role;
      if (role === "user") {
        navigate("/userdashboard");
      } else if (role === "medical personnel" || role === "medical institution") {
        navigate("/doctordashboard");
      } else {
        console.error("Unknown role");
        alert("Unknown role");
      }
    } catch (error) {
      console.error("Error during login:", error);
      alert("Error during login");
    }
  };

  return (
    <div>
      <section className='login-c'>
        <div className='log-l'>
          <header>
            <Link to='/'><img src={logo} alt="Logo" /></Link>
          </header>

          <h1>Welcome back!</h1>
          <h2>Login</h2>

          <form className='login-form' onSubmit={handleSubmit}>
            <div className='inp'>
              <HiOutlineMail className='log-icon log' />
              <input
                type="email"
                placeholder='Email'
                value={formData.email}
                onChange={(e) => setFormData({ ...formData, email: e.target.value })}
              />
            </div>
            {formErrors.email && <p className='error-text' style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.email}</p>}

            <div className='inp'>
              <IoMdLock className='log-icon log' />
              <input
                type="password"
                placeholder='Password'
                value={formData.password}
                onChange={(e) => setFormData({ ...formData, password: e.target.value })}
              />
              <FaEye className='log-icon' />
            </div>
            {formErrors.password && <p className='error-text' style={{ color: "red", fontSize: "14px", margin:0, padding:0, textAlign:'start', marginTop:'2px' }}>{formErrors.password}</p>}

            <div className='fg'>
              <span>Forgot password?</span>
            </div>

            <button type="submit" className='login-button' style={{cursor:'pointer'}}>Login</button>

            <p>Don't have an account? <Link to='/create'>Create Account</Link></p>
          </form>

          <span className='or'>
            <span className='span1'></span>
            <span>or</span>
            <span className='span1'></span>
          </span>

          <div className="create">
            <b>Create account using Google</b>
          </div>

          <div className="create">
            <b>Create account using Facebook</b>
          </div>
        </div>

        <div className='log-r'>
          <img src={log} alt="Log" />
        </div>
      </section>
    </div>
  );
};

export default Login;
