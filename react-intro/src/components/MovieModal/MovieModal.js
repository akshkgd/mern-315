import '../MovieModal/movieModal.css';


function MovieModal(){
    return(
        <div className="modal">
            <img className="movie-img" src="https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg"></img>
            <h3>The Shawshank Redemption </h3>
            <p>1994 <span className='small'>(Action)</span></p>
            <p>Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures.</p>
        <button className='btn-dark'>Play Trailer </button>
        </div>
    );
}

export default MovieModal;