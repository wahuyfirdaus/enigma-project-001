import { BrowserRouter as Router, Routes, Route, Navigate } from "react-router-dom";
import { useState, useEffect } from "react";
import HomePage from "./pages/HomePage";
import Dashboard from "./pages/Dashboard";
import Navbar from "./components/Navbar";
import { TransactionProvider } from "./components/TransactionProvider";
import TransactionForm from "./components/TransactionForm";
import TransactionList from "./components/TransactionList";
import TransactionHistory from "./components/TransactionHistory";

function App() {
  const [isAuthenticated, setIsAuthenticated] = useState(false);

  // Cek status login saat aplikasi pertama kali dijalankan
  useEffect(() => {
    const authStatus = localStorage.getItem("isAuthenticated");
    setIsAuthenticated(authStatus === "true");
  }, []);

  const handleLogin = () => {
    setIsAuthenticated(true);
    localStorage.setItem("isAuthenticated", "true"); // Simpan status login
  };

  const handleLogout = () => {
    setIsAuthenticated(false);
    localStorage.removeItem("isAuthenticated"); // Hapus status login
  };

  return (
    <TransactionProvider>
    <Router>
      <Routes>
        {/* Halaman Login, tanpa Navbar */}
        <Route path="/" element={<HomePage onLogin={handleLogin} />} />

        {/* Halaman Dashboard, dengan Navbar */}
        <Route
          path="/dashboard"
          element={
            isAuthenticated ? (
              <>
                <Navbar onLogout={handleLogout} />
                <Dashboard />
              </>
            ) : (
              <Navigate to="/" />
            )
          }
        />
        <Route
  path="/transaction-form"
  element={
    isAuthenticated ? (
      <>
        <Navbar onLogout={handleLogout} />
        <TransactionForm />
      </>
    ) : (
      <Navigate to="/" />
    )
  }
/>
<Route path="/" element={<TransactionList />} />
<Route path="/history/:customerId" element={<TransactionHistory />} />
      </Routes>
    </Router>
    </TransactionProvider>
  );
}

export default App;
