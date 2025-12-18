import express from "express";
import session from "express-session";
import path from "path";
import { fileURLToPath } from "url";

// Import routes
import authRoutes from "./routes/auth.js";
import appealRoutes from "./routes/appeals.js";
import adminRoutes from "./routes/admin.js";
import webhookRoutes from "./routes/robloxWebhook.js";

// Required for ES modules (__dirname replacement)
const __filename = fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename);

const app = express();

/* -------------------- MIDDLEWARE -------------------- */

// Parse JSON bodies
app.use(express.json());

// Serve frontend static files
// This fixes: "Cannot GET /"
app.use(express.static(path.join(__dirname, "public")));

// Sessions (used later for auth)
app.use(
  session({
    secret: process.env.SESSION_SECRET || "dev_secret",
    resave: false,
    saveUninitialized: false
  })
);

/* -------------------- ROUTES -------------------- */

// API routes
app.use("/auth", authRoutes);
app.use("/appeals", appealRoutes);
app.use("/admin", adminRoutes);
app.use("/webhook", webhookRoutes);

// Fallback: serve index.html for "/"
app.get("/", (req, res) => {
  res.sendFile(path.join(__dirname, "public", "index.html"));
});

/* -------------------- START SERVER -------------------- */

const PORT = process.env.PORT || 3000;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});
