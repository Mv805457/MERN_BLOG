import "../styles/PageStyles.css";

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        © {new Date().getFullYear()} BlogApp — Built with ❤️
      </div>
    </footer>
  );
}

