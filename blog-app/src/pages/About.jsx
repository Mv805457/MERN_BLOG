import "../styles/PageStyles.css";

export default function About() {
  return (
    <div className="page-center">
      <h1 className="section-title">About This Project</h1>

      <p
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          marginTop: "20px",
          fontSize: "18px",
          lineHeight: "1.7",
          color: "#444",
        }}
      >
        This Blog App was built using the MERN stack — MongoDB, Express, React, and
        Node.js. It allows users to create, edit, view, and manage blogs with a
        clean modern UI.
      </p>

      <div
        style={{
          marginTop: "35px",
          background: "#fafbff",
          padding: "25px",
          borderRadius: "14px",
          border: "1px solid #eee",
          maxWidth: "700px",
          marginLeft: "auto",
          marginRight: "auto",
        }}
      >
        <p style={{ fontSize: "16px", color: "#555" }}>
          This project demonstrates full-stack development skills including API
          routing, authentication, protected routes, database integration, and
          modern responsive UI design.
        </p>
      </div>
    </div>
  );
}

