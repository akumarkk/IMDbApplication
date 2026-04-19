import WatchList from "./WatchList"
import {Link} from 'react-router-dom';

const Footer = () => {
    return (
        <ul className="footer">
            <li>
                <Link to="/contactus">Contact Info</Link>
            </li>
            <li>
                <Link to="/Privacy">Privacy</Link>
            </li>
        </ul>
    )
}

export default Footer;