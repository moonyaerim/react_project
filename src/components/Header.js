import { Link } from 'react-router-dom';
import { ReactComponent as Reservation } from "../assets/logo.svg";
import styles from "../css/Header.module.css"

<Reservation />;

function Header() {
    return (
        <div className={styles.headerwrap}>
            <Link to="/react_project">
                <header>
                    <Reservation />
                </header>
            </Link>
        </div>
    )
}

export default Header;