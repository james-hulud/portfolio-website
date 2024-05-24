import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  const project = await prisma.project.upsert({
    where: { title: "Example Project" },
    update: {},
    create: {
      title: "Example Project",
      slideshowDirs: [
        "/project/ex1.jpg",
        "/project/ex2.jpg",
        "/project/ex3jpg",
        "/project/ex4.jpg",
      ],
      description: "Example description.",
      githubLink: "https://github.com/example/project",
      stack: ["html", "css", "js"],
    },
  });
  console.log({ project });

  const collaboration = await prisma.collaboration.upsert({
    where: { title: "Example collaboration" },
    update: {},
    create: {
      title: "Example collaboration",
      slideshowDirs: [
        "collaboration/ex1.jpg",
        "collaboration/ex2.jpg",
        "collaboration/ex3.jpg",
        "collaboration/ex4.jpg",
      ],
      description: "Example collaboration",
      githubLink: "https://github.com/example/collaboration",
      stack: ["python"],
    },
  });
  console.log({ collaboration });
}
main()
  .then(() => prisma.$disconnect())
  .catch(async (e) => {
    console.error(e);
    await prisma.$disconnect();
    process.exit(1);
  });
