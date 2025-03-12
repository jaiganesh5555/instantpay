import React from "react";
import { useLocation, useNavigate } from "react-router-dom";
import axios from "axios";
import { useSearchParams } from "react-router-dom";

export const Sendmoney = () => {
  const [searchParams] = useSearchParams();
  const id = searchParams.get("userId");
  const name = searchParams.get("name");
  const navigate = useNavigate();
  const location = useLocation();
  const user = location.state?.user || { firstName: "Unknown", lastName: "User" };
  const [amount, setAmount] = React.useState(0);
  const [totalamount,settotalamount]=React.useState(100);

  const handlesendmoney = async () => {
    if (amount <= 0) {
      alert("Please enter a valid amount greater than 0.");
      return;
    }
    const token = localStorage.getItem("token");
    try {
      const res = await axios.post(
        "http://localhost:3000/api/v1/account/transfer",
        { to: id, amount },
        { headers: { Authorization: `Bearer ${token}` } }
      );
      let newtotal=totalamount+amount;
      settotalamount(newtotal);
      navigate("/dashboard", { state: { totalamount:newtotal } });
    } catch (error) {
      console.error("Error sending money:", error);
      alert("Failed to send money. Please try again.");
    }
  };

  return (
    <div className="flex flex-col items-center justify-center h-screen bg-gradient-to-b from-indigo-200 to-indigo-0">
      <div className="bg-white shadow-xl p-6 rounded-lg">
        <div className="font-bold text-3xl text-black pt-6 flex flex-col items-center">
          Send Money
        </div>
        <div>
          <div className="flex flex-col mt-4">
            <div className="flex items-center">
              <div className="rounded-full h-12 w-12 bg-green-200 flex justify-center items-center mr-2">
                <div className="text-xl">
                  {user?.firstName?.[0]}
                </div>
              </div>
              <div className="flex flex-col justify-center">
                <div className="text-lg">
                  {user?.firstName} {user?.lastName}
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="font-semibold mt-4">
          <label htmlFor="amount">Amount in Rs.</label>
        </div>
        <input
          id="amount"
          onChange={(e) => setAmount(Number(e.target.value))}
          type="number"
          placeholder="Enter amount"
          className="w-full px-2 py-1 border rounded border-slate-200 focus:placeholder-transparent mb-5"
        />
        <button
          type="button"
          onClick={handlesendmoney}
          className="w-full text-white bg-green-500 focus:outline-none hover:bg-green-400 font-medium rounded-lg text-sm px-5 py-2.5 me-2 mb-2"
        >
          Initiate Transfer
        </button>
      </div>
    </div>
  );
};