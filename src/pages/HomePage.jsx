import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function HomePage({ onLogin }) {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = (e) => {
    e.preventDefault();

    const isValidEmail = email.includes("@");
    const isValidPassword = password.length >= 5;

    if (isValidEmail && isValidPassword) {
      alert("Login berhasil! Selamat datang di Fresh Laundry.");
      onLogin(); // Panggil fungsi onLogin untuk mengupdate state di App.jsx
      navigate("/dashboard"); // Pindah ke halaman dashboard
    } else {
      alert("Email harus mengandung '@' dan password minimal 5 karakter!");
    }
  };

  return (
    <div>
      <div className="bg-indigo-600 px-4 py-3 text-white">
        <p className="text-center text-sm font-medium">
          Laundry Wangi & Bersih dengan GARANSI
        </p>
      </div>

      {/* LOGIN FORM */}
      <div className="mx-auto max-w-screen-xl px-4 py-16 sm:px-6 lg:px-8">
        <div className="mx-auto max-w-lg">
          <h1 className="text-center text-2xl font-bold text-indigo-600 sm:text-3xl">
            Halo! Selamat Datang di Fresh Laundry
          </h1>

          <form
            onSubmit={handleLogin}
            className="mt-6 mb-0 space-y-4 rounded-lg p-4 shadow-lg sm:p-6 lg:p-8"
          >
            <p className="text-center text-lg font-medium">
              Sign in to your account
            </p>

            <div>
              <label htmlFor="email" className="sr-only">
                Email
              </label>
              <input
                type="email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Enter email"
                required
              />
            </div>

            <div>
              <label htmlFor="password" className="sr-only">
                Password
              </label>
              <input
                type="password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full rounded-lg border-gray-200 p-4 text-sm shadow-xs"
                placeholder="Enter password"
                required
              />
            </div>

            <button
              type="submit"
              className="block w-full rounded-lg bg-indigo-600 px-5 py-3 text-sm font-medium text-white"
            >
              Sign in
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default HomePage;
