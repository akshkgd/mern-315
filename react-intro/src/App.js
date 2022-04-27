import logo from './logo.svg';
import './App.css';
import FirstComponent from './components/Demo';
import Todo from './components/Todo';
import FoodCard from './components/FoodCard';

let foodItems = [
  {name: 'Veg Extravaganza Pizza', price: 399, img: 'https://source.unsplash.com/1600x800/?pizza', desc: 'Black olives, capsicum, onion, grilled mushroom, corn, tomato, jalapeno & extra cheese', ratings: 4.6, votes: 317},
  {name: 'Red Sauce Pasta', price: 299, img: 'https://source.unsplash.com/1600x800/?pasta', desc: 'Tomato sauce, mozzarella cheese, parmesan cheese, basil, oregano, garlic, olive oil, salt & pepper', ratings: 4.3, votes: 567},
  {name: 'Samosa', price: 10, img: 'https://source.unsplash.com/1600x800/?samosa', desc: 'Potato, onion, coriander, salt & pepper', ratings: 4.1, votes: 1789},
]

function App() {
  return (
    <div>
      <div className='text-center'>
        <h1 className='title'>Codekaro Food Ordering App</h1>
        <p className='m-0'>This is a simple react JS food ordering app</p>
      </div>


      <div className='container'>
        <FoodCard name={foodItems[0].name} price={foodItems[0].price} img={foodItems[0].img} desc={foodItems[0].desc} ratings={foodItems[0].ratings} votes={foodItems[0].votes} />
        <FoodCard name={foodItems[1].name} price={foodItems[1].price} img={foodItems[1].img} desc={foodItems[1].desc} ratings={foodItems[1].ratings} votes={foodItems[1].votes} />
        <FoodCard name={foodItems[2].name} price={foodItems[2].price} img={foodItems[2].img} desc={foodItems[2].desc} ratings={foodItems[2].ratings} votes={foodItems[2].votes} />
      </div>
    </div>
  );
}

export default App;
