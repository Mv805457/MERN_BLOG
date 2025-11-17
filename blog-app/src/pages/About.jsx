import React from "react";
import "../styles/PageStyles.css";

export default function About() {
  return (
    <div className="container page">
      <h1 className="section-title">About This Project</h1>

      <div className="about-card">
        <p>
          This Blog App was built using the MERN stack — MongoDB, Express, React, and Node.js.
          It allows users to create, edit, view, and manage blogs with a clean modern UI.
        </p>
      </div>
    </div>
  );
}

