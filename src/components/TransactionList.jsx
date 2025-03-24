import { useNavigate } from "react-router-dom";
import { useTransactions } from "./TransactionProvider";

const TransactionList = () => {
  const { transactions } = useTransactions();
  const navigate = useNavigate();

  const handleViewTransactions = (customerId) => {
    navigate(`/history/${customerId}`);
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-white rounded-lg shadow-2xl">
      <h2 className="text-lg font-semibold mb-4">Daftar Transaksi</h2>
      <div className="grid grid-cols-3 gap-4 text-gray-700 font-medium">
        <div>Kode Pelanggan</div>
        <div>Nama Pelanggan</div>
        <div>Tabel Transaksi</div>
      </div>
      <hr className="my-3" />

      {transactions.map((trx, index) => (
        <div key={index} className="grid grid-cols-3 gap-4 items-center py-2">
          <span className={`px-3 py-1 text-white rounded-full text-sm ${trx.color}`}>
            {trx.id}
          </span>
          <div>
            <p className="font-semibold">{trx.name}</p>
            <p className="text-sm text-gray-500">{trx.count} Transaksi</p>
          </div>
          <button 
            className="border border-blue-400 text-blue-500 px-4 py-1 rounded-lg text-sm hover:bg-blue-50"
            onClick={() => handleViewTransactions(trx.id)}
          >
            💳 Lihat Transaksi
          </button>
        </div>
      ))}

      <footer className="text-center text-gray-500 mt-6 text-sm">
        Copyright &copy;2024. Fresh Laundry.
      </footer>
    </div>
  );
};

export default TransactionList;
