import React from "react";
import ProjectCard from "../sub/ProjectCard";

const Projects = () => {
  return (
    <div
      className="flex flex-col items-center justify-center py-20"
      id="projects"
    >
      <h1 className="text-[40px] font-semibold text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-cyan-500 py-20">
        My Projects
      </h1>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 px-10">
        <ProjectCard
          src="/auth-app.png"
          title="Full-Stack User Authentication App"
          description="Fully-working user authentication app with email verification, password reset, private and admin routes, and more. Built with MERN stack (MongoDB, Express, React, Node.js). Users can be edited though the admin panel. The app uses JWT for a secure authentication."
          techImages={[
            "/js.png",
            "/mongodb.png",
            "/react.png",
            "/express.png",
            "/node-js.png",
            "/jwt.svg",
            "/bootstrap.svg",
          ]}
          url="https://user-authentication.alexcusenza.net/"
        />
        <ProjectCard
          src="/crypto-app.png"
          title="Real-time Crypto App"
          description="Tons of data about cryptocurrencies, including real-time prices, market caps, and latest news coming from API calls! Built with React, Redux and Ant Design. The app is fully responsive."
          techImages={[
            "/js.png",
            "/react.png",
            "/express.png",
            "/node-js.png",
            "/redux.png",
            "/antd.png",
          ]}
          url="https://cryptoverse.alexcusenza.net/"
        />
        <ProjectCard
          src="/realestate-app.png"
          title="Full-Stack Real Estate App"
          description="Modern and fully responsive real estate app designed with Figma and built with Next js, Tailwind CSS and Supabase as database. The app is fully responsive. Please consider that the app is for display only and not all features are implemented"
          techImages={[
            "/js.png",
            "/next.png",
            "/tailwind.png",
            "/figma.png",
            "/supabase.png",
          ]}
          url="https://reis.alexcusenza.net/"
        />
        <ProjectCard
          src="/weather-app.png"
          title="Real-time Weather App"
          description="Real-time weather app built the old fashioned way with vanilla JavaScript and CSS! The app fetches data from an API and displays the forecast by city. The app is fully responsive."
          techImages={["/html.png", "/css.png", "/js.png"]}
          url="https://weather-alexcusenza.w3spaces.com/"
        />
        <ProjectCard
          src="/travel-list-app.png"
          title="Travel List App"
          description="Are you ready to travel? So pack your bags and let's go! You can add things to the list, order, remove or mark them as packed. Built with React and styled with vanilla CSS. The app is fully responsive"
          techImages={["/js.png", "/react.png", "/css.png"]}
          url="https://faraway.alexcusenza.net/"
        />
        <ProjectCard
          src="/pizza-app.png"
          title="React Pizza App"
          description="Let's order some pizza! This basic React app styled with vanilla CSS fetches data from a an array or objects and display them nicely. The app is fully responsive."
          techImages={["/js.png", "/react.png", "/css.png"]}
          url="https://fast-react-pizza.alexcusenza.net/"
        />
        <ProjectCard
          src="/steps-app.png"
          title="Step-by-step Component"
          description="This is a step-by-step component built with React and styled with vanilla CSS. Guide the users through any process with this good-looking component!"
          techImages={["/js.png", "/react.png", "/css.png"]}
          url="https://step-by-step-component.alexcusenza.net/"
        />
        <ProjectCard
          src="/programmazione-eventi-app.png"
          title="Full Stack Event Calendar App"
          description="Full-stack app for a client built with React, Node js, Express and MySQL as relational database. This fully responsive app displays the events fetched from the database and allows admin users to add new events from the admin panel. ...Still in development!"
          techImages={[
            "/js.png",
            "/react.png",
            "/css.png",
            "/node-js.png",
            "/express.png",
            "/mysql.png",
          ]}
          url="https://programmazione-eventi.alexcusenza.net/"
        />
        <ProjectCard
          src="/omega-advisor-site.png"
          title="Omega Advisor WebSite"
          description="This is a website for an existing financial advisor built with WordPress. The website is still being developed and will be released soon!"
          techImages={["/wordpress.png"]}
          url="https://omega-advisor.com/"
        />
        <ProjectCard
          src="/studiolegale-site.png"
          title="Full Stack Event Calendar App"
          description="This is a website for an existing italian law firm built with WordPress."
          techImages={["/wordpress.png"]}
          url="https://www.studiolegalemanno.it/"
        />
        <ProjectCard
          src="/fitlifemalta-site.png"
          title="Full Stack Event Calendar App"
          description="This is a website for an existing business built with WordPress."
          techImages={["/wordpress.png"]}
          url="https://fitlifemalta.com/"
        />
        <ProjectCard
          src="/portfolio-app.png"
          title="This Portfolio Website"
          description="This is the website you are currently visiting! Built with Next js, Tailwind CSS, Framer Motion for animations and Email js for the form. The app is fully responsive."
          techImages={["/ts.png", "/next.png", "/tailwind.png", "/framer.png"]}
          url="https://alexcusenza.net/"
        />
      </div>
    </div>
  );
};

export default Projects;
