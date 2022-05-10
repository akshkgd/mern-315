import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/Demo';
import Todo from './components/Todo';
import FoodCard from './components/FoodCard';
import Movies from './components/Movies/Movies';


let foodItems = [
  {name: 'Veg Extravaganza Pizza', price: 399, img: 'https://source.unsplash.com/1600x800/?pizza', desc: 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese', ratings: 4.6, votes: 317},
  {name: 'Red Sauce Pasta', price: 299, img: 'https://source.unsplash.com/1600x800/?pasta', desc: 'Tomato sauce, mozzarella cheese, parmesan cheese, basil, oregano, garlic, olive oil, salt & pepper', ratings: 4.3, votes: 567},
  {name: 'Samosa', price: 10, img: 'https://source.unsplash.com/1600x800/?samosa', desc: 'Potato, onion, coriander, salt & pepper', ratings: 4.1, votes: 1789},
]
const movies = [
  {title: "Avengers", genre: "Action", year: "2012", img: "https://m.media-amazon.com/images/M/MV5BMTg2MzI1MTg3OF5BMl5BanBnXkFtZTgwNTU3NDA2MTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers is a 2012 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Infinity War", genre: "Action", year: "2018", img: "https://m.media-amazon.com/images/M/MV5BMjMxNjY2MDU1OV5BMl5BanBnXkFtZTgwNzY1MTUwNTM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Infinity War is a 2018 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Endgame", genre: "Action", year: "2019", img: "https://m.media-amazon.com/images/M/MV5BMTc5MDE2ODcwNV5BMl5BanBnXkFtZTgwMzI2NzQ2NzM@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Endgame is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Avengers: Age of Ultron", genre: "Action", year: "2015", img: "https://m.media-amazon.com/images/M/MV5BMTM4OGJmNWMtOTM4Ni00NTE3LTg3MDItZmQxYjc4N2JhNmUxXkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Avengers: Age of Ultron is a 2015 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Captain Marvel", genre: "Action", year: "2019", img: "https://m.media-amazon.com/images/M/MV5BMTE0YWFmOTMtYTU2ZS00ZTIxLWE3OTEtYTNiYzBkZjViZThiXkEyXkFqcGdeQXVyODMzMzQ4OTI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Captain Marvel is a 2019 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},  
  {title: "Thor", genre: "Action", year: "2011", img: "https://m.media-amazon.com/images/M/MV5BOGE4NzU1YTAtNzA3Mi00ZTA2LTg2YmYtMDJmMThiMjlkYjg2XkEyXkFqcGdeQXVyNTgzMDMzMTg@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Thor is a 2011 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Thor: Ragnarok", genre: "Action", year: "2017", img: "https://m.media-amazon.com/images/M/MV5BMjMyNDkzMzI1OF5BMl5BanBnXkFtZTgwODcxODg5MjI@._V1_SY1000_CR0,0,674,1000_AL_.jpg", description: "Thor: Ragnarok is a 2017 American superhero film based on the Marvel Comics superhero team of the same name, produced by Marvel Studios and distributed by Walt Disney Studios Motion Pictures."},
  {title: "Ant Man", img: "https://resizing.flixster.com/f6A4-2Dk3nff7zNGJYi17g3CXTI=/fit-in/180x240/v2/https://resizing.flixster.com/ORJjIqDWZCl2V4KT1jfLNUPD0oo=/ems.ZW1zLXByZC1hc3NldHMvbW92aWVzLzkyOTFlZTI0LWVlYjAtNGU5Ni1iZWY1LWQ3YjI5NWNmN2UzMS53ZWJw"}
]

function App() {
  return (
    <div>
      <div className='text-center'>
        <h1 className='title'>Codekaro Movie App</h1>
        <p className='m-0'>This is a simple react JS food ordering app</p>
      </div>


      <div className='container'>
      <Movies title={movies[0].title} year={movies[0].year} img={movies[0].img} genre={movies[0].genre} description={movies[0].description} />
      <Movies title={movies[1].title} year={movies[1].year} img={movies[1].img} genre={movies[1].genre} description={movies[1].description} />
      <Movies title={movies[2].title} year={movies[2].year} img={movies[2].img} genre={movies[2].genre} description={movies[2].description} />
      <Movies title={movies[3].title} year={movies[3].year} img={movies[3].img} genre={movies[3].genre} description={movies[3].description} />
      

      
      
      </div>

      



      

    </div>
  );
}

export default App;
