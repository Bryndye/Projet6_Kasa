import '../styles/App.css';
import '../styles/Error.css';

function Error() {  
    return (
    <section className='Error'>
      <div>
        <h2>404</h2>
        <p>Oups! La page que vous demandez n'existe pas.</p>
      </div>
      <a href='/home'>Retour à la page d'accueil</a>
    </section>
  );
}

export default Error;