import express from "express";
import path from "path";
import { fileURLToPath } from "url";
import { create, router as createRouter } from "json-server";

const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();
const jsonServer = create();
const router = createRouter("db.json");
const middlewares = create.defaults();

app.use("/api", middlewares, router);

// Serve React build files
const buildPath = path.join(__dirname, "frontend", "build");
app.use(express.static(buildPath));

app.get("*", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`✅ Server running on port ${PORT}`);
});
