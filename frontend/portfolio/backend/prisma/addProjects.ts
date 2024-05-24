import { prisma } from "../../src/lib/prisma";

// if not working convert to js then run with 'node addProjects.js'
async function main() {
  // const techlaxu = await prisma.project.upsert({
  //   where: { title: "Techlaxu - Tech news, Tutorials, and Creator Blog" },
  //   update: {},
  //   create: {
  //     title: "Techlaxu - Tech news, Tutorials, and Creator Blog",
  //     slideshowDirs: [
  //       "techlaxu/shopio1.png",
  //       "techlaxu/shopio2.png",
  //       "techlaxu/shopio3.png",
  //       "techlaxu/shopio4.png",
  //     ],
  //     description: `
  //       Hub website for tech news, coding tutorials, and my personal blog.
  //       Contains various articles, allows users to create accounts, post comments, etc.
  //       `,
  //     githubLink: "https://github.com/james-hulud/shopio-ecommerce",
  //     stack: ["html", "tailwind", "ts", "postgresql", "nextjs"],
  //   },
  // });
  // console.log({ techlaxu });

  // const jamesmdevPortfolio = await prisma.project.upsert({
  //   where: { title: "JAMESMDEV - Portfolio Website" },
  //   update: {},
  //   create: {
  //     title: "JAMESMDEV - Portfolio Website",
  //     slideshowDirs: [
  //       "jamesmdev/shopio1.png",
  //       "jamesmdev/shopio2.png",
  //       "jamesmdev/shopio3.png",
  //       "jamesmdev/shopio4.png",
  //     ],
  //     description: `
  //       The website you are on now, crazy \u{1F92F}.
  //       My personal website to showcase my projects, and allow users to get in touch with me.
  //       All displayed projects are pulled from a postgreSQL database.
  //       Any user queries sent in the 'Contact Me' page are processed and emailed directly to me.
  //       `,
  //     githubLink: "https://github.com/james-hulud/shopio-ecommerce",
  //     stack: ["html", "tailwind", "ts", "postgresql", "nextjs"],
  //   },
  // });
  // console.log({ jamesmdevPortfolio });

  const ecommerceWebsite = await prisma.project.upsert({
    where: { title: "Shopio - Ecommerce website" },
    update: {},
    create: {
      title: "Shopio - Ecommerce website",
      slideshowDirs: [
        "shopio/shopio1.png",
        "shopio/shopio2.png",
        "shopio/shopio3.png",
        "shopio/shopio4.png",
      ],
      description: `
        A simple ecommerce website created with Flask.
        Has a search bar, user registration, login and logout, checkout, items with their respective information.
        Backend is connected to an SQLite database.
        Website is dynamic and changes depending on the user's state, e.g. logged in or out, has data stored on their session cookie.
        `,
      githubLink: "https://github.com/james-hulud/shopio-ecommerce",
      stack: ["html", "bootstrap", "js", "flask"],
    },
  });
  console.log({ ecommerceWebsite });

  const collaboration = await prisma.collaboration.upsert({
    where: { title: "The Detextive - Terminal based game" },
    update: {},
    create: {
      title: "The Detextive - Terminal based game",
      slideshowDirs: [
        "detextive/det1.png",
        "detextive/det2.png",
        "detextive/det3.png",
        "detextive/det4.png",
      ],
      description: `
      A terminal detective game written in Python.
      The player plays as a detective who has been tasked with solving a whodunnit style murder in a large eery mansion.
      You can traverse several rooms, possible containing items and npcs with randomly generated traits.
      After gathering sufficient evidence, the player may accuse one of the npcs as the murderer.\n
  
      \nMade in collaboration at Cardiff University.
      `,
      githubLink: "https://git.cardiff.ac.uk/c23013397/cm1101_group_project",
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
