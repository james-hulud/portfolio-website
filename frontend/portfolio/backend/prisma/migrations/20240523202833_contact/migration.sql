-- CreateTable
CREATE TABLE "UserQueries" (
    "id" SERIAL NOT NULL,
    "postedDate" TEXT NOT NULL,
    "subject" TEXT NOT NULL,
    "message" TEXT NOT NULL,

    CONSTRAINT "UserQueries_pkey" PRIMARY KEY ("id")
);
