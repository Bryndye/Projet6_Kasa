import Collapse from '../layout/collapse';
import '../styles/FicheLogement.css';

function Fiche(props) {  
    return (
    <section className='FicheLogement'>
      <div className='BannerLogement'>
        <img src={props.src} alt='photo du logement'></img>
      </div>
      <div>
        <div>
          <div>
            <div>
              <h2>{props.title}</h2>
              <p>{props.place}</p>
            </div>
            <div className='Category'>
              ...
            </div>
          </div>
          <div>
            <div className='Profil'>
              <p>{props.fullName}</p>
              <img src={props.imgProfil} alt="image de profile"></img>
            </div>
            <div className='stars'>

            </div>
          </div>
        </div>
        <div className='containerCollapses'>
          <Collapse title="Description" />
          <Collapse title="Equipements" />
        </div>
      </div>
    </section>
  );
}

export default Fiche;