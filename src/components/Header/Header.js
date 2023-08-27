import "./Header.css";

export default function Header() {
  return (
    <header className="header">
      <h1>Hey, I'm Ellie!</h1>
      <div className="header-list">
        <button className="header-list__elements">About Me</button>
        <button className="header-list__elements">Projects</button>
        <button className="header-list__elements">Experience</button>
        <button className="header-list__elements">Contact</button>
      </div>
      <hr className="divider"></hr>
    </header>
  );
}
