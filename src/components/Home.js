import '../styles/Home.css';
import banner from  '../assets/banner.jpg';
import Card from  '../layout/card.js';
import data from '../assets/data.json';

function Home() {  
    return (
    <section>
      <div className='banner'>
        <img src={banner} alt="Banner"></img>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <div className='containerCards'>
        {data.map((element, index) => 
          <Card key={index} title={element.title} link={'/fiche/'+element.id} img={element.cover} id={element.id}/>
          )}
      </div>
    </section>
  );
}

export default Home;