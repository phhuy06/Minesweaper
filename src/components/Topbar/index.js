import styles from './Topbar.module.scss';
function Topbar() {
    return (
        <div className={styles.container}>
            <div className={styles.leftCorner}></div>
            <div className={styles.topBar}></div>
            <div className={styles.rightCorner}></div>
        </div>
    );
}

export default Topbar;
