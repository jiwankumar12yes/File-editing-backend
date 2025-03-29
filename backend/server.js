import cors from "cors";
import dotnet from "dotenv";
import express from "express";
import mongoose from "mongoose";
import fileRoutes from "./routes/fileRoutes.js";

dotnet.config();
const app = express();
app.use(cors());
app.use(express.json());

mongoose
  .connect(process.env.MONGO_URL)
  .then(() => console.log("MongoDB Connected"))
  .catch((err) => console.log("MongoDB Connection Error:", err));

app.use("/api", fileRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server is running on port ${PORT}`));
