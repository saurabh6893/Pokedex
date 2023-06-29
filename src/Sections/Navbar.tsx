import Pokeball from '../assets/assets/pokeball-icon.png';
import { GiHamburgerMenu } from 'react-icons/gi';

const Navbar = () => {
    return (
        <nav>
            <div className="block">
                <img src={Pokeball} alt="pokemon" />
            </div>

            <div className="data"></div>
            <div className="block">
                <GiHamburgerMenu />
            </div>
        </nav>
    );
}

export default Navbar;
