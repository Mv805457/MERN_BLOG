export default function Footer(){
  return (
    <footer className="site-footer">
      <div style={{maxWidth:1100, margin:"auto"}}>
        <div style={{fontWeight:700, marginBottom:6}}>BlogApp</div>
        <div style={{color:"var(--subtext)"}}>Built with React • Express • MongoDB</div>
        <div style={{marginTop:8, color:"var(--subtext)"}}>© {new Date().getFullYear()} BlogApp. All rights reserved.</div>
      </div>
    </footer>
  );
}

