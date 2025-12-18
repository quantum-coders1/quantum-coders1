import express from "express";
import { PrismaClient } from "@prisma/client";

const router = express.Router();
const prisma = new PrismaClient();

router.get("/appeals", async (req, res) => {
  const appeals = await prisma.appeal.findMany();
  res.json(appeals);
});

router.post("/appeals/:id/accept", async (req, res) => {
  await prisma.appeal.update({
    where: { id: Number(req.params.id) },
    data: { status: "accepted", staffNote: req.body.note }
  });

  res.json({ success: true });
});

router.post("/appeals/:id/deny", async (req, res) => {
  await prisma.appeal.update({
    where: { id: Number(req.params.id) },
    data: { status: "denied", staffNote: req.body.note }
  });

  res.json({ success: true });
});

export default router;
