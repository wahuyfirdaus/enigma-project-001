import { useState } from "react";
import { useNavigate } from "react-router-dom"; // Import useNavigate
import LaundryLogo from "../assets/laundry.jpeg";

const Navbar = () => {
  const [showLogout, setShowLogout] = useState(false);
  const navigate = useNavigate(); // Gunakan useNavigate untuk navigasi

  const toggleLogout = () => {
    setShowLogout(!showLogout);
  };

  const handleLogout = () => {
    alert("Logout berhasil! Kembali ke halaman login.");
    navigate("/"); // Kembali ke halaman login
  };

  const handleAddTransaction = () => {
    navigate("/transaction-form"); // Navigasi ke TransactionForm
  };

  return (
    <div className="navbar fixed w-full transition-all">
      <header className="bg-white shadow-md">
        <div className="mx-auto max-w-screen-xl px-4 sm:px-6 lg:px-8">
          <div className="flex h-16 items-center justify-between">
            <div className="flex items-center gap-4">
              <a href="#">
                <img src={LaundryLogo} alt="Laundry" className="p-2 h-20 w-auto" />
              </a>
              <a className="block text-xl font-bold" href="#">
                Transaksi
              </a>
            </div>

            <div className="md:flex md:items-center md:gap-12">
              <nav aria-label="Global" className="hidden md:block">
                <ul className="flex items-center gap-6 text-sm">
                  <li>
                    <button
                      className="rounded-md bg-indigo-600 px-5 py-2.5 text-sm font-medium text-white shadow-sm"
                      onClick={handleAddTransaction} // Tambah onClick
                    >
                      Tambah Transaksi
                    </button>
                  </li>
                </ul>
              </nav>

              <div className="relative">
                <button
                  type="button"
                  className="overflow-hidden rounded-full border border-gray-300 shadow-inner"
                  onClick={toggleLogout}
                >
                  <span className="sr-only">Toggle dashboard menu</span>
                  <img
                    src="https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=1770&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fHx8fA%3D%3D"
                    alt="Profile"
                    className="size-10 object-cover"
                  />
                </button>

                {showLogout && (
                  <div className="absolute right-0 z-10 mt-2 w-56 divide-y divide-gray-100 rounded-md border border-gray-100 bg-white shadow-lg">
                    <div className="p-2">
                      <button
                        type="button"
                        className="flex w-full items-center gap-2 rounded-lg px-4 py-2 text-sm text-red-700 hover:bg-red-50"
                        onClick={handleLogout}
                      >
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          fill="none"
                          viewBox="0 0 24 24"
                          strokeWidth="1.5"
                          stroke="currentColor"
                          className="size-4"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 15 3 9m0 0 6-6M3 9h12a6 6 0 0 1 0 12h-3" />
                        </svg>
                        Logout
                      </button>
                    </div>
                  </div>
                )}
              </div>
            </div>

            <div className="block md:hidden">
              <button className="rounded-sm bg-gray-100 p-2 text-gray-600 transition hover:text-gray-600/75">
                <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                  <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16m-7 6h7" />
                </svg>
              </button>
            </div>
          </div>
        </div>
      </header>
    </div>
  );
};

export default Navbar;
