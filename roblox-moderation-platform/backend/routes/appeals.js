import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.post("/", async (req, res) => {
  const { banId, userId, username, content, evidence } = req.body;

  const appeal = await prisma.appeal.create({
    data: {
      banId,
      userId,
      username,
      content,
      evidence
    }
  });

  res.json({ success: true, appeal });
});

router.get("/:banId", async (req, res) => {
  const appeal = await prisma.appeal.findUnique({
    where: { banId: req.params.banId }
  });

  res.json(appeal);
});

export default router;
