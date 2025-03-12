const { JWT_SECRET } = require("./config");
const jwt = require("jsonwebtoken");

const authMiddleware = async(req, res, next) => {
    const authHeader = req.headers.authorization;
    console.log("Authorization header:", authHeader);


    if (!authHeader || !authHeader.startsWith("Bearer ")) {
        return res.status(401).json({ message: "Not authorized to access this route" });
    }

    const token = authHeader.split(" ")[1];

    try {
        const decoded = jwt.verify(token, JWT_SECRET);

        if (decoded.userId) {
            req.userId = decoded.userId; // Attach the userId to the request object
            console.log("User ID:", req.userId);

            next(); // Proceed to the next middleware or route handler
        } else {
            return res.status(401).json({ message: "Not authorized to access this route" });
        }
    } catch (ersr) {
        console.error("Token verification failed:", err);
        return res.status(401).json({ message: "Not authorized to access this route" });
    }
};

module.exports = { authMiddleware };