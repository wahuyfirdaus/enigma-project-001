import jwt from "jsonwebtoken";

const verifyToken = (req, res, next) => {
    const token = req.headers["authorization"];
    if (!token) return res.status(403).json({ error: "Token diperlukan!" });

    const tokenValue = token.split(" ")[1]; // Menghilangkan "Bearer "
    jwt.verify(tokenValue, process.env.SECRET_KEY, (err, decoded) => {
        if (err) return res.status(401).json({ error: "Token tidak valid!" });

        req.user = decoded;
        next();
    });
};

export default verifyToken;
