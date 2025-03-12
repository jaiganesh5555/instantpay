import React, { useState } from "react";
import axios from "axios";
import { Heading } from '../components/Heading.jsx';
import { Subheading } from '../components/Subheading.jsx';
import { InputBox } from '../components/InputBox.jsx';
import { Link, useNavigate } from "react-router-dom";

const Signup = () => {
    const navigate = useNavigate();
    const [firstName, setFirstName] = useState('');
    const [lastName, setLastName] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState("");

    const handleSignup = async () => {
        setError(""); // Clear previous errors
        if (!firstName || !lastName || !email || !password) {
            setError("All fields are required.");
            return;
        }
        const userData = {
            username: email,
            firstName,
            lastName,
            password,
        };
        try {
            const response = await axios.post("http://localhost:3000/api/v1/user/signup", userData, {
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log("Signup successful:", response.data);
            localStorage.setItem("token", response.data.token);
            navigate("/signin");
        } catch (error) {
            console.error("Signup failed:", error);
            if (error.response) {
                setError(error.response.data.message || "Signup failed. Please try again.");
            } else if (error.request) {
                setError("No response from the server. Please try again.");
            } else {
                setError("An error occurred. Please try again.");
            }
        }
    };

    return (
        <div className="h-screen flex justify-center items-center bg-gradient-to-b from-indigo-200 to-white">
            <div className="rounded-lg w-80 text-center p-4 bg-gradient-to-b from-indigo-200 to-gray-100">
                <Heading label="Signup" />
                <Subheading className="text-slate-500 text-md pt-1 px-4 pb-4 text-black-500" label="Enter your information below to create an account." />
                <form onSubmit={(e) => { e.preventDefault(); handleSignup(); }}>
                    <InputBox onChange={e => setFirstName(e.target.value)} placeholder="John" label="First Name" />
                    <InputBox onChange={e => setLastName(e.target.value)} placeholder="Doe" label="Last Name" />
                    <InputBox onChange={e => setEmail(e.target.value)} placeholder="john.doe@example.com" label="Email" />
                    <InputBox onChange={e => setPassword(e.target.value)} placeholder="123456" label="Password" type="password" />
                    {error && <p className="text-red-500 text-sm mt-2">{error}</p>}
                    <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded w-full mt-4 transition-all hover:bg-blue-700 duration-300 ease-in-out">
                        Sign Up
                    </button>
                </form>
                <p className="text-center mt-4">
                    Already have an account?{" "}
                    <Link to="/signin" className="text-blue-500 hover:underline">
                        Sign in
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Signup;