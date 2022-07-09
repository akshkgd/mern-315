import {Link} from 'react-router-dom';
import './Navigation.css'
function Navigation() {
    return (
        <nav className="navbar">
            <h3 > <Link className='logo' to="/">Codekaro</Link> </h3>
        <ul className='nav'>
            <li> <Link className='nav-link' to="/">Home</Link> </li>
            <li> <Link className='nav-link' to="/old">Old Meetings</Link> </li>
            <li> <Link className='nav-link' to="/add">Add Meeting</Link> </li>

        </ul>
        </nav>

    )
}
export default Navigation;