import WatchList from "./WatchList"
import {Link} from 'react-router-dom';

const Header = () => {
    return (
        <ul className="header">
            <li>
                <Link to="/watchlist">WatchList</Link>
            </li>
            <li>
                <Link to="/movielist">Movies</Link>
            </li>
        </ul>
    )
}

export default Header;