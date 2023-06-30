import { Link } from 'react-router-dom';
import Pokeball from '../assets/assets/pokeball-icon.png';
import { GiHamburgerMenu } from 'react-icons/gi';


const navRoutes = [
    {
        name: "Search",
        route: "/search"
    },
    {
        name: "Compare",
        route: "/compare"
    },
    {
        name: "Pokemon",
        route: "/pokemon"
    },
    {
        name: "My List",
        route: "/my-list"
    },
    {
        name: "About",
        route: "/about"
    }
];


const Navbar = () => {
    return (
        <nav>
            <div className="block">
                <img src={Pokeball} alt="pokemon" />
            </div>

            <div className="data">
                <ul>
                    <div className="underline"></div>
                    <div className="underline"></div>
                    <div className="underline"></div>
                    {
                        navRoutes.map(({ name, route }, i) => {
                            return <Link to={route} key={i}>
                                <li>{name}</li>
                            </Link>
                        })
                    }
                </ul>
            </div>
            <div className="block">
                <GiHamburgerMenu />
            </div>
        </nav>
    );
}

export default Navbar;
