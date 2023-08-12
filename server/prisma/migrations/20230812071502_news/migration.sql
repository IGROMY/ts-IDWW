-- CreateTable
CREATE TABLE "News" (
    "id" SERIAL NOT NULL,
    "title" TEXT NOT NULL,
    "description" TEXT NOT NULL,
    "published_at" TIMESTAMP(3) NOT NULL,
    "category" TEXT NOT NULL,
    "image_url" TEXT,

    CONSTRAINT "News_pkey" PRIMARY KEY ("id")
);
