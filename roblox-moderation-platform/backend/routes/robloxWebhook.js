import express from "express";
const router = express.Router();

router.post("/unban", (req, res) => {
  // Verify secret here
  // Notify Roblox server to remove ban
  res.json({ success: true });
});

export default router;
