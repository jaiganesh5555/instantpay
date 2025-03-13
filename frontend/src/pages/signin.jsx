import React, { useState } from "react";
import axios from "axios";
import { Heading } from '../components/Heading.jsx';
import { Subheading } from '../components/Subheading.jsx';
import { InputBox } from '../components/InputBox.jsx'; 
import { Link } from "react-router-dom"; 
import { useNavigate } from "react-router-dom";

const Signin = () => { 
  const navigate = useNavigate();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const handlesignin = () => {
    setError('');
    setLoading(true);

    const userdata = {
      username: email, 
      password
    };

    axios.post("https://instantpay-984sxyrc7-jai-ganesh-gantas-projects.vercel.app/api/v1/user/signin", userdata, {
      headers: {
        "Content-Type": "application/json",
      },
    })
    .then(response => {
      console.log("Signin successful:", response.data);
      localStorage.setItem("token", response.data.token);
      navigate('/dashboard');
    })
    .catch(error => {
      console.error("Signin failed:", error);
      setError(error.response?.data?.message || "An error occurred. Please try again.");
    })
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <div className="h-screen flex justify-center items-center bg-gradient-to-b from-indigo-200 to-white">
      <div className="rounded-lg w-80 text-center p-4 bg-gradient-to-b from-indigo-200 to-gray-100">
        <Heading label="Signin" />
        <Subheading className="text-slate-500 text-md pt-1 px-4 pb-4 text-black-500" label="Enter your credentials below to login into account." />
        <InputBox onChange={e => setEmail(e.target.value)} placeholder="jaiganesh@gmail.com" label="Email" />
        <InputBox onChange={e => setPassword(e.target.value)} placeholder="123456" label="Password" type="password" />
        {error && <p className="text-red-500">{error}</p>}
        <button onClick={handlesignin} disabled={loading} className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4 transition-all hover:bg-blue-700 duration-300 ease-in-out">
          {loading ? "Loading..." : "Log In"}
        </button>
        <p className="text-center mt-4">
          Don't have an account?{" "}
          <Link to="/signup" className="text-blue-500 hover:underline">
            Sign up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
