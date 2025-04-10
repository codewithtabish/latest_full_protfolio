/*
  Warnings:

  - Added the required column `blogTopImage` to the `Blog` table without a default value. This is not possible if the table is not empty.
  - Added the required column `demoUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `githubUrl` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `projectTopImage` to the `Project` table without a default value. This is not possible if the table is not empty.
  - Added the required column `videoUrl` to the `Project` table without a default value. This is not possible if the table is not empty.

*/
-- AlterTable
ALTER TABLE "Blog" ADD COLUMN     "blogTopImage" TEXT NOT NULL;

-- AlterTable
ALTER TABLE "Project" ADD COLUMN     "demoUrl" TEXT NOT NULL,
ADD COLUMN     "githubUrl" TEXT NOT NULL,
ADD COLUMN     "liveWebUrl" TEXT,
ADD COLUMN     "projectTopImage" TEXT NOT NULL,
ADD COLUMN     "videoUrl" TEXT NOT NULL;
