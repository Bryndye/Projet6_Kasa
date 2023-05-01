import logo from '../assets/LOGO_header.png';
import '../styles/App.css';
function Header() {
  return (
    <section className='header'>
      <img src={logo} alt='Icône de Kasa'></img>
      <nav>
        <a href="/home">Accueil</a>
        <a href="/about">A Propos</a>
      </nav>
    </section>
  );
}

export default Header;