import styles from './Bottombar.module.scss';
function Bottombar() {
    return (
        <div className={styles.container}>
            <div className={styles.leftCorner}></div>
            <div className={styles.bottomBar}></div>
            <div className={styles.rightCorner}></div>
        </div>
    );
}

export default Bottombar;
