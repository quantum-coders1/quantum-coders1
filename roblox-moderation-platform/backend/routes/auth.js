import express from "express";
const router = express.Router();

router.get("/roblox", (req, res) => {
  res.redirect("https://apis.roblox.com/oauth/v1/authorize");
});

export default router;
