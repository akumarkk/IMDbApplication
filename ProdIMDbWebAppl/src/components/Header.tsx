import { Link } from 'react-router-dom';
import './Header.css';

const Header = () => {
    return (
        <nav className="header">
            <ul className="header">
                <li className="dropdown">
                    <Link to="/movielist">Movies</Link>
                    <ul className="dropdown-content">
                        <li><Link to="/movielist/popular">Popular</Link></li>
                        <li><Link to="/movielist/top-rated">Top Rated</Link></li>
                    </ul>
                </li>
                <li className="dropdown">
                    <Link to="/watchlist">WatchList</Link>
                    <ul className="dropdown-content">
                        <li><Link to="/watchlist/watched">Watched</Link></li>
                    </ul>
                </li>
            </ul>
        </nav>
    )
}

export default Header;