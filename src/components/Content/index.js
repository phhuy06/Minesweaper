import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
function Content() {
    return (
        <div className={styles.container}>
            <div className={styles.leftBar}></div>
            <div className={styles.content}>
                <div className={styles.reset}>
                    <FontAwesomeIcon icon={faSmile} />
                </div>
            </div>
            <div className={styles.rightBar}></div>
        </div>
    );
}

export default Content;
