# **Portfolio Website**

This repository contains the fullstack code for my personal portfolio website, which showcases my skills, projects, and experience.

## **Project Overview**

The frontend is built with **Next.js**, while the backend is built with **Express.js** and uses **PostgreSQL** for database management.

**Note:** This code is not set up to run locally as-is. The backend relies on a live database and environment-specific configurations, and the frontend is tied to the deployed version of the application.

## **Key Features**

- **Dynamic Portfolio:** The portfolio dynamically loads data (like projects, blogs, and skills) from the backend.
- **Responsive Design:** The website is fully responsive and optimised for mobile, tablet, and desktop views.
- **Backend Integration:** The website connects to a live backend powered by Express and PostgreSQL for real-time data fetching.

## **How It Works**

- **Frontend:** Built with **Next.js** for server-side rendering, which improves SEO and load times. It communicates with the backend via API calls.
- **Backend:** The Express server handles API requests from the frontend and communicates with a PostgreSQL database to store and retrieve information such as projects, blogs, and skills.
- **Database:** PostgreSQL is used as the relational database for storing project data and other dynamic content. The database is hosted remotely.

## **Important Notes**

- **Not Set Up for Local Development:**
  - This repository cannot be run locally without appropriate environment variables and a working remote database connection.
  - The code is designed to be deployed to a live environment with proper configurations.

## **Deployed Version**

The portfolio is live and deployed. You can view it at the following link:

[View Portfolio](https://jamesmdavies.dev)

## **Technologies Used**

- **Frontend:** Next.js, React, Tailwind CSS
- **Backend:** Express.js, Node.js, PostgreSQL
- **Deployment:** Deployed using [Vercel](https://vercel.com) for the frontend and [Heroku](https://heroku.com) for the backend.
