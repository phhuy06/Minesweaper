import styles from './Header.module.scss';
import Topbar from '../Topbar';
import Bottombar from '../Bottombar';
import Content from '../Content';
function Header() {
    return (
        <div className={styles.container}>
            <Topbar />
            <Content />
            <Bottombar />
        </div>
    );
}

export default Header;
