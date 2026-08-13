-- DropIndex
DROP INDEX "Task_projectId_key";

-- CreateIndex
CREATE INDEX "Task_projectId_idx" ON "Task"("projectId");
