import express from "express";
import cors from "cors";

const app = express()

app.use(cors());
app.use(express.json());

app.get("/", (req, res) => res.send("Spades Todo running"));


const PORT = process.env.PORT || 5001;
app.listen(PORT, () => console.log(`Server started on port ${PORT}`));