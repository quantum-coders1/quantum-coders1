import express from "express";
import session from "express-session";

import authRoutes from "./routes/auth.js";
import appealRoutes from "./routes/appeals.js";
import adminRoutes from "./routes/admin.js";
import webhookRoutes from "./routes/robloxWebhook.js";

const app = express();

app.use(express.json());
app.use(session({
  secret: "CHANGE_THIS_SECRET",
  resave: false,
  saveUninitialized: false
}));

app.use("/auth", authRoutes);
app.use("/appeals", appealRoutes);
app.use("/admin", adminRoutes);
app.use("/webhook", webhookRoutes);

app.listen(3000, () => {
  console.log("Server running on port 3000");
});
