const express = require("express");
const cors = require("cors");
const jwt = require("jsonwebtoken");
const mainRouter = require("./routes/index");

const app = express();
app.use(cors());

app.use(express.json());
const PORT = 3000;

app.use("/api/v1", mainRouter);

app.listen(PORT, () => {
    console.log(`Server running on http://localhost:${PORT}`);

});
