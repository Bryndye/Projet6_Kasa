import '../styles/FicheLogement.css';
import React, { useState } from 'react';
import Collapse from '../layout/collapse';
import FicheDetail from "../assets/data.json";
import Tag from '../layout/Tag.js';

function Fiche(props) {  
  const fiche = FicheDetail.find(fiche => fiche.id === props.id);
  const items = fiche.tags.map((element, index) => (
    <Tag key={index} title={element} />
  ));

  const stars = [];
  for (let i = 0; i < 5; i++) {
    const classNames = i <= fiche.rating ? "fa-solid fa-star starColored starColored" : "fa-solid fa-star starsUncolored";
    stars.push(<i key={i} className={classNames}></i>);  
  }
  
  const fullName = fiche.host.name;
  const nameParts = fullName.split(' ');
  const firstName = nameParts[0];
  const lastName = nameParts[1];

  const [index, setIndex] = useState(0);
  const NextClick = () => {
    if(index + 1 >= fiche.pictures.length){
      setIndex(0);
    }
    else{
      setIndex(index + 1);
    }
  };

  const PrevClick = () => {
    if(index - 1 < 0){
      setIndex(fiche.pictures.length -1);
    }
    else{
      setIndex(index - 1);
    }
  };
  
  return (
    <section className='FicheLogement'>
      <div className='BannerLogement'>
        <img src={fiche.pictures[index]} alt='Logement'></img>
        <button className='btn Left' onClick={PrevClick}><i className="fa-solid fa-chevron-left"></i></button>
        <button className='btn Right' onClick={NextClick}><i className="fa-solid fa-chevron-right"></i></button>
      </div>
      <div>
        <div className='groupInfo'>
          <div className='AppartementInfo'>
            <div>
              <h2>{fiche.title}</h2>
              <p>{fiche.location}</p>
            </div>
            <div className='Category'>
              {items}
            </div>
          </div>
          <div className='ProfilInfo'>
            <div className='Profil'>
              <div style={{display:"flex", flexDirection:"column", justifyContent:"center", marginRight:"10px"}}>           
                <p>{firstName}</p>
                <p>{lastName}</p>
              </div>
              <img src={fiche.host.picture} alt="Profile"></img>
            </div>
            <div className='Stars'>
              {stars}
            </div>
          </div>
        </div>
        <div className='containerCollapses'>
          <Collapse title="Description" text={fiche.description} />
          <Collapse title="Equipements" text={fiche.equipments} />
        </div>
      </div>
    </section>
  );
}

export default Fiche;