import logo from '../assets/LOGO_footer.png';

function Footer() {  
    return (
    <footer className='footer'>
        <img src={logo} alt="logo" className='footer-logo' />
        <p>© 2020 Kasa. All rights reserved</p>
    </footer>
  );
}

export default Footer;