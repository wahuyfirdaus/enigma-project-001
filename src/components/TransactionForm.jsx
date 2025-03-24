import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { useTransactions } from "./TransactionProvider";

const TransactionForm = () => {
  const navigate = useNavigate();
  const { addTransaction } = useTransactions();
  const [customer, setCustomer] = useState("");
  const [packageType, setPackageType] = useState("");
  const [qty, setQty] = useState("");
  const [total, setTotal] = useState(0);

  const packagePrices = {
    "Cuci Kering": 5000,
    "Cuci Setrika": 7000,
  };

  const handleQtyChange = (e) => {
    const newQty = e.target.value;
    setQty(newQty);
    setTotal(newQty * (packagePrices[packageType] || 0));
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!customer || !packageType || !qty) {
      alert("Mohon isi semua kolom!");
      return;
    }

    const newTransaction = {
      id: `TR${Date.now()}`,
      name: customer,
      package: packageType,
      count: parseInt(qty),
      total: total,
    };

    addTransaction(newTransaction);
    alert("Transaksi berhasil ditambahkan!");

    navigate("/dashboard");
  };

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-gray-900 bg-opacity-50">
      <div className="bg-white p-6 rounded-lg shadow-md w-96">
        <h2 className="text-xl font-bold mb-4">Transaksi Baru</h2>
        <form onSubmit={handleSubmit}>
          <div className="mb-4">
            <label className="block text-gray-700">Nama Konsumen</label>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => setCustomer(e.target.value)}
            >
              <option value="">Pilih Konsumen</option>
              <option value="Citra">Citra</option>
              <option value="Adrian">Adrian</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Pilih Paket Laundry</label>
            <select
              className="w-full p-2 border rounded"
              onChange={(e) => {
                setPackageType(e.target.value);
                setTotal(qty * (packagePrices[e.target.value] || 0));
              }}
            >
              <option value="">Pilih Paket</option>
              <option value="Cuci Kering">Cuci Kering</option>
              <option value="Cuci Setrika">Cuci Setrika</option>
            </select>
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Qty (Kg)</label>
            <input
              type="number"
              className="w-full p-2 border rounded"
              value={qty}
              onChange={handleQtyChange}
              placeholder="Masukkan berat (kg)"
            />
          </div>

          <div className="mb-4">
            <label className="block text-gray-700">Total Bayar</label>
            <input
              type="text"
              className="w-full p-2 border rounded bg-gray-100"
              value={total}
              readOnly
            />
          </div>

          <div className="flex justify-end space-x-2">
            <button
              type="button"
              className="bg-gray-300 px-4 py-2 rounded"
              onClick={() => navigate("/dashboard")}
            >
              Tutup
            </button>
            <button type="submit" className="bg-blue-500 text-white px-4 py-2 rounded">
              Submit
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default TransactionForm;