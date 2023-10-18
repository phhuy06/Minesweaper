import styles from './Content.module.scss';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faSmile } from '@fortawesome/free-solid-svg-icons';
import { useDispatch } from 'react-redux'
import { handleReset } from '../../redux/controlSlice';

function Content() {
    const dispatch = useDispatch();
    return (
        <div className={styles.container}>
            <div className={styles.leftBar}></div>
            <div className={styles.content}>
                <div onClick={() => dispatch(handleReset())} className={styles.reset}>
                    <FontAwesomeIcon icon={faSmile} />
                </div>
            </div>
            <div className={styles.rightBar}></div>
        </div>
    );
}

export default Content;
