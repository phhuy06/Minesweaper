import styles from './Footer.module.scss';
function Footer() {
    return (
        <div className={styles.container}>
            <div className={styles.leftCorner}></div>
            <div className={styles.footer}></div>
            <div className={styles.rightCorner}></div>
        </div>
    );
}

export default Footer;
