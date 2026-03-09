import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Dashboard() {
  const [todayTotal, setTodayTotal] = useState(0);
  const [monthTotal, setMonthTotal] = useState(0);
  const [mostSold, setMostSold] = useState(null);
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  useEffect(() => {
    const fetchStats = async () => {
      try {
        const headers = { Authorization: `Bearer ${token}` };
        const [today, month, most] = await Promise.all([
          api.get("/orders/stats/today", { headers }),
          api.get("/orders/stats/month", { headers }),
          api.get("/orders/stats/most-sold", { headers }),
        ]);
        setTodayTotal(today.data.totalToday);
        setMonthTotal(month.data.totalMonth);
        setMostSold(most.data);
      } catch (err) {
        console.error(err);
      }
    };
    fetchStats();
  }, []);

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Dashboard</h1>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/orders")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Orders
            </button>
            <button
              onClick={() => {
                logout();
                navigate("/login");
              }}
              className="bg-red-500 text-white px-4 py-2 rounded"
            >
              Logout
            </button>
          </div>
        </div>

        <div className="grid grid-cols-1 gap-4">
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500">Today's Sales</p>
            <p className="text-3xl font-bold text-green-500">RM{todayTotal}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500">This Month</p>
            <p className="text-3xl font-bold text-blue-500">RM{monthTotal}</p>
          </div>
          <div className="bg-white p-6 rounded shadow">
            <p className="text-gray-500">Most Sold Item</p>
            <p className="text-3xl font-bold text-purple-500">
              {mostSold?.itemName || "No data"}
            </p>
            {mostSold?.totalSold && (
              <p className="text-gray-400">Qty: {mostSold.totalSold}</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
