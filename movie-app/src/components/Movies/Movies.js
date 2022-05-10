import '../Movies/movies.css';
import MovieModal from '../MovieModal/MovieModal';
import Backdrop from '../MovieModal/Backdrop';
import React, {useState} from 'react';


function Movies(props){
    let [modal, setModal] = useState(false);
    function MovieDetailsHandler(){
        setModal(true);
        console.log(props.title);
        console.log(props.description);
    }

    function MovieCloseModalHandler(){
        setModal(false);
    }
    return(
        
        <div className="movie-card">
            <img className='movie-card-img' src={props.img} alt="" onClick={MovieDetailsHandler}/>
            <h4>{props.title}</h4>
            <p>{props.year}</p>
            {modal ? <MovieModal title={props.title} img={props.img} description={props.description} year={props.year} genre={props.genre} /> : null}
            {modal ? <Backdrop  onClick={MovieCloseModalHandler} /> : null}
        </div>

        
        
        

        
    );
}

  export default Movies;
