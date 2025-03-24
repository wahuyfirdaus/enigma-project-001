import { useParams, useNavigate } from "react-router-dom";
import { useTransactions } from "./TransactionProvider";

const TransactionHistory = () => {
  const { customerId } = useParams();
  const { transactions } = useTransactions();
  const navigate = useNavigate();

  // Cari transaksi berdasarkan ID pelanggan
  const customer = transactions.find((trx) => trx.id === customerId);

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-lg font-semibold mb-4">Riwayat Transaksi a.n. {customer?.name}</h2>

      <table className="w-full border-collapse">
        <thead>
          <tr className="border-b">
            <th className="p-2 text-left">Kode Transaksi</th>
            <th className="p-2 text-left">Tanggal</th>
            <th className="p-2 text-left">Paket</th>
            <th className="p-2 text-left">Qty</th>
            <th className="p-2 text-left">Total</th>
          </tr>
        </thead>
        <tbody>
          {customer?.history.map((trx, index) => (
            <tr key={index} className="border-b">
              <td className={`p-2 ${trx.color} text-white rounded-md`}>{trx.code}</td>
              <td className="p-2">{trx.date}</td>
              <td className="p-2">{trx.package}</td>
              <td className="p-2">{trx.qty} Kg</td>
              <td className="p-2">Rp {trx.total.toLocaleString()},-</td>
            </tr>
          ))}
        </tbody>
      </table>

      <button 
        className="mt-4 px-4 py-2 bg-gray-300 text-gray-700 rounded-md hover:bg-gray-400"
        onClick={() => navigate(-1)}
      >
        ⬅ Kembali
      </button>
    </div>
  );
};

export default TransactionHistory;
