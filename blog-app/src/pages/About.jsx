import "../styles/PageStyles.css";

export default function About() {
  return (
    <div className="page-center">
      <h1 className="section-title">About This Project</h1>
      <p className="subtext" style={{maxWidth:760, margin:"0 auto 18px"}}>
        This Blog App was built using the MERN stack — MongoDB, Express, React and Node.js.
        It demonstrates authentication, protected routes, CRUD operations and a modern UI.
      </p>

      <div className="about-card">
        <p style={{margin:0, color:"#444", lineHeight:1.7}}>
          Features include user registration/login, creating and editing blogs, user profile pages,
          and a minimal responsive design. The backend is untouched — all visual changes are frontend-only.
        </p>
      </div>
    </div>
  );
}

