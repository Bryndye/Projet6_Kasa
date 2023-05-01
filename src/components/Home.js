import '../styles/Home.css';
import banner from  '../assets/banner.jpg';
import Card from  '../layout/card.js';

function Home() {  
    return (
    <section>
      <div className='banner'>
        <img src={banner} alt="Banner"></img>
        <h2>Chez vous, partout et ailleurs</h2>
      </div>
      <div className='containerCards'>
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
        <Card />
      </div>
    </section>
  );
}

export default Home;