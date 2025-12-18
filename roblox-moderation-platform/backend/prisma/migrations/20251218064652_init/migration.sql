-- CreateTable
CREATE TABLE "Appeal" (
    "id" SERIAL NOT NULL,
    "banId" TEXT NOT NULL,
    "userId" BIGINT NOT NULL,
    "username" TEXT NOT NULL,
    "content" TEXT NOT NULL,
    "evidence" TEXT,
    "status" TEXT NOT NULL DEFAULT 'pending',
    "staffNote" TEXT,
    "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP,

    CONSTRAINT "Appeal_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Appeal_banId_key" ON "Appeal"("banId");
