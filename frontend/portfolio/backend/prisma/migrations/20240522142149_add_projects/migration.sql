-- CreateTable
CREATE TABLE "Project" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slideshowDirs" TEXT[],
    "description" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "stack" TEXT[],

    CONSTRAINT "Project_pkey" PRIMARY KEY ("id")
);

-- CreateTable
CREATE TABLE "Collaboration" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "slideshowDirs" TEXT[],
    "description" TEXT NOT NULL,
    "githubLink" TEXT NOT NULL,
    "stack" TEXT[],

    CONSTRAINT "Collaboration_pkey" PRIMARY KEY ("id")
);

-- CreateIndex
CREATE UNIQUE INDEX "Project_title_key" ON "Project"("title");

-- CreateIndex
CREATE UNIQUE INDEX "Collaboration_title_key" ON "Collaboration"("title");
