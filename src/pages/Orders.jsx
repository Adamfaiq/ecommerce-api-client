import { useState, useEffect } from "react";
import { useAuth } from "../context/AuthContext";
import { useNavigate } from "react-router-dom";
import api from "../api/axios";

export default function Orders() {
  const [orders, setOrders] = useState([]);
  const [itemName, setItemName] = useState("");
  const [quantity, setQuantity] = useState("");
  const [price, setPrice] = useState("");
  const { token, logout } = useAuth();
  const navigate = useNavigate();

  const fetchOrders = async () => {
    try {
      const res = await api.get("/orders", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setOrders(res.data.orders);
    } catch (err) {
      console.error(err);
    }
  };

  useEffect(() => {
    fetchOrders();
  }, []);

  const handleAdd = async (e) => {
    e.preventDefault();
    try {
      await api.post(
        "/orders",
        { itemName, quantity, price },
        {
          headers: { Authorization: `Bearer ${token}` },
        },
      );
      setItemName("");
      setQuantity("");
      setPrice("");
      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  const handleDelete = async (id) => {
    try {
      await api.delete(`/orders/${id}`, {
        headers: { Authorization: `Bearer ${token}` },
      });
      fetchOrders();
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <div className="max-w-2xl mx-auto">
        <div className="flex justify-between items-center mb-6">
          <h1 className="text-2xl font-bold">Orders</h1>
          <div className="flex gap-2">
            <button
              onClick={() => navigate("/dashboard")}
              className="bg-blue-500 text-white px-4 py-2 rounded"
            >
              Dashboard
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

        <form onSubmit={handleAdd} className="bg-white p-4 rounded shadow mb-6">
          <h2 className="font-bold mb-4">Add Order</h2>
          <input
            className="w-full border p-2 rounded mb-2"
            placeholder="Item Name"
            value={itemName}
            onChange={(e) => setItemName(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded mb-2"
            type="number"
            placeholder="Quantity"
            value={quantity}
            onChange={(e) => setQuantity(e.target.value)}
          />
          <input
            className="w-full border p-2 rounded mb-4"
            type="number"
            placeholder="Price"
            value={price}
            onChange={(e) => setPrice(e.target.value)}
          />
          <button className="w-full bg-green-500 text-white p-2 rounded">
            Add Order
          </button>
        </form>

        <div className="space-y-2">
          {orders.map((order) => (
            <div
              key={order._id}
              className="bg-white p-4 rounded shadow flex justify-between items-center"
            >
              <div>
                <p className="font-bold">{order.itemName}</p>
                <p className="text-sm text-gray-500">
                  Qty: {order.quantity} × RM{order.price} = RM{order.total}
                </p>
              </div>
              <button
                onClick={() => handleDelete(order._id)}
                className="bg-red-500 text-white px-3 py-1 rounded"
              >
                Delete
              </button>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
