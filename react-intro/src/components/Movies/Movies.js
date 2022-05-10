import '../Movies/movies.css';
function Movies(props){
    function MovieDetailsHandler(){
        console.log(props.title);
        console.log(props.description);
    }
    return(
        <div className="movie-card">
            <img className='movie-card-img' src={props.img} alt="" onClick={MovieDetailsHandler}/>
            <h4>{props.title}</h4>
            <p>{props.year}</p>
        </div>
    );
}

  export default Movies;
