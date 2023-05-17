import logo from '../assets/LOGO_header.png';
import '../styles/App.css';
function Header() {
  const currentRoute = window.location.pathname;
  const classNameH = currentRoute === '/home' ? 'active-link' : '';
  const classNameA = currentRoute === '/about' ? 'active-link' : '';
  return (
    <section className='header'>
      <img src={logo} alt='Icône de Kasa'></img>
      <nav>
        <a href="/home" className={classNameH} >Accueil</a>
        <a href="/about" className={classNameA}>A Propos</a>
      </nav>
    </section>
  );
}

export default Header;