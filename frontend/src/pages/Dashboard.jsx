import { useEffect, useState } from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios"; 
 
import { Balance } from "../components/Balance";
import { Users } from '../components/Users';
import { Appbar } from "../components/Appbar";

export function Dashboard() {
  const [users, setUsers] = useState([]);
  const [filter, setFilter] = useState(""); 
  const location = useLocation();
  const navigate = useNavigate();

  const loggedInUserId = localStorage.getItem("userId"); 
  
  useEffect(() => {
    axios.get(`https://instantpay-984sxyrc7-jai-ganesh-gantas-projects.vercel.app/api/v1/user/bulky?filter=${filter}`)
      .then(response => {
        console.log("Fetched users:", response.data);
        setUsers(response.data.users || []); 
      })
      .catch(error => {
        console.error("Error fetching users:", error);
      });
  }, [filter]);

  const loggedInUser = users?.find(user => user._id === loggedInUserId);
  
  const deductedAmount = location.state?.amount || 0;
  const totalamount = (10000) - deductedAmount;

  const username = loggedInUser ? `${loggedInUser.firstName} ${loggedInUser.lastName}` : "Guest";

  const logout = () => {
    localStorage.clear();
    navigate('/signin');
  };

  return (
    <div className="bg-gradient-to-b from-indigo-200 to-indigo-0">
      <Appbar value={username} />
      <Balance value={totalamount} />
      <Users users={users} />
      <div className="flex flex-col justify-end">
        <button onClick={logout}>Logout</button>
      </div>
    </div>
  );
}
