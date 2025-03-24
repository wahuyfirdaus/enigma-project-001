import express from "express";
import jwt from "jsonwebtoken";

const app = express();
const PORT = process.env.PORT || 5000;
const SECRET_KEY = process.env.SECRET_KEY || "mysecretkey";

app.use(express.json());

const verifyToken = (req, res, next) => {
    // ... (kode middleware verifyToken Anda)
};

app.post("/api/v1/auth/login", (req, res) => {
    // ... (kode endpoint login Anda)
});

const customers = [
    // ... (data dummy customers Anda)
];

app.get("/api/v1/customers/:id", verifyToken, (req, res) => {
    // ... (kode endpoint customers/:id Anda)
});

// **Tambahkan endpoint untuk mendapatkan daftar produk**
const products = [
    { id: "1", name: "Sabun Cuci", price: 10000 },
    { id: "2", name: "Pewangi Pakaian", price: 12000 },
    { id: "3", name: "Deterjen", price: 15000 }
];

app.get("/api/v1/products", verifyToken, (req, res) => {
    res.json(products);
});

app.get("/", (req, res) => {
    // ... (kode endpoint root Anda)
});

app.listen(PORT, () => {
    // ... (kode menjalankan server Anda)
});