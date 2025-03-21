import React, { useState, useEffect } from "react";
import axios from "axios";
import { Button } from "./Button";
import { useNavigate } from "react-router-dom";

export const Users = () => {
    const [users, setUsers] = useState([]);
    const [filter, setFilter] = useState("");

    useEffect(() => {
        axios.get(`https://instantpay-bco0pm9ov-jai-ganesh-gantas-projects.vercel.app/api/v1/user/bulk?filter=${filter}`)
            .then(response => {
                setUsers(response.data.user);
            })
            .catch(error => {
                console.error("Error fetching users:", error);
            });
    }, [filter]);

    return (
        <div className="pl-10 p-5 pt-0">
            <div className="font-bold mt-6 text-lg">Users</div>
            <div className="my-2">
                <input
                    type="text"
                    placeholder="Search users..."
                    className="w-full px-2 py-1 border rounded border-slate-200"
                    onChange={(e) => setFilter(e.target.value)}
                />
            </div>
            <div className="mb-4">
                {users.map(user => (
                    <User key={user._id} user={user} />
                ))}
            </div>
        </div>
    );
};

function User({ user }) {
    const navigate = useNavigate();

    const handleSendMoneyClick = () => {
        const queryParams = `?userId=${user._id}`; 
        navigate(`/sendmoney${queryParams}`, { state: { user } });
    };

    return (
        <div className="flex justify-between">
            <div className="flex">
                <div className="rounded-full h-12 w-12 bg-slate-200 flex justify-center mt-1 mr-2">
                    <div className="flex flex-col justify-center h-full text-xl">
                        {user.firstName?.[0] || "U"}
                    </div>
                </div>
                <div className="flex flex-col justify-center h-full">
                    <div>
                        {user.firstName} {user.lastName}
                    </div>
                </div>
            </div>

            <div className="flex flex-col justify-center h-full">
                <Button label={"Send Money"} onClick={handleSendMoneyClick} />
            </div>
        </div>
    );
}
