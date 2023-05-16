import trollFace from "../assets/troll-face.png";

export default function Header() {
  return (
    <header className="header">
      <img className="header--logo" src={trollFace} alt="logo-png" />
      <h1 className="header--title">Meme Generator</h1>
    </header>
  );
}
