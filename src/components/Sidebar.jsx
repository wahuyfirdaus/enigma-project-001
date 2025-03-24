import React from "react";
import { FaHome, FaList, FaUser, FaSignOutAlt } from "react-icons/fa";

const Sidebar = () => {
  return (
    <div className="w-64 h-screen bg-blue-700 text-white flex flex-col p-4">
      <h2 className="text-2xl font-bold mb-6">Simply Fresh</h2>
      <ul className="space-y-4">
        <li className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-blue-800">
          <FaHome />
          <span>Dashboard</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-blue-800">
          <FaList />
          <span>Transaksi</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-blue-800">
          <FaUser />
          <span>Akun</span>
        </li>
        <li className="flex items-center space-x-3 cursor-pointer p-2 rounded hover:bg-red-600 mt-auto">
          <FaSignOutAlt />
          <span>Keluar</span>
        </li>
      </ul>
    </div>
  );
};

export default Sidebar;
