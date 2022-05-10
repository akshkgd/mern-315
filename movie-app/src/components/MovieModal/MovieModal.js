import '../MovieModal/movieModal.css';



function MovieModal(props){
    return(
        <div className="modal">
            <img className="movie-img" src={props.img}></img>
            <h3>{props.title} </h3>
            <p>{props.year} <span className='small'>({props.genre})</span></p>
            <p>{props.description}</p>
        <button className='btn-dark'>Play Trailer </button>
        </div>
    );
}

export default MovieModal;