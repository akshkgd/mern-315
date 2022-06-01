import {Link} from 'react-router-dom';
function Navigation() {
    return (
        <nav className='navbar'>
            <a href='/' className='navbar-brand'>Codekaro</a>
            <div className='navbar-right'>
                <Link to='/' className='navbar-item'>Home</Link>
                <Link to='/about' className='navbar-item'>About</Link>
                <Link to='/login' className='navbar-item'>Login</Link>
            </div>
        </nav>
    );
}

export default Navigation;