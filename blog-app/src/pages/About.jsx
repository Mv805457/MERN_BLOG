import React from "react";
import "../PageStyles.css";

export default function About() {
  return (
    <div className="page-container">
      <div className="hero-section">
        <h1 className="hero-title">About This Project</h1>
        <p className="hero-subtitle">Learn more about the purpose and the team.</p>
      </div>

      <div className="content-section">
        <div className="card">
          <p className="full-text">
            This Blog App was built using the MERN stack — MongoDB, Express, React, and Node.js.
            It allows users to create, edit, view, and manage blogs with a clean modern UI.
          </p>
        </div>
      </div>
    </div>
  );
}

