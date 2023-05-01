function Card(props) {  
    return (
        <div className='card'>
            <a href={props.link}>
                <img src={props.img} alt='cover'></img>
                <p>{props.title}</p>
            </a>
        </div>
  );
}

export default Card;