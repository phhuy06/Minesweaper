import styles from './Body.module.scss';
import Leftbar from '../Leftbar';
import Rightbar from '../Rightbar';
import Table from '../Table';
function Body() {
    return (
        <div className={styles.container}>
            <Leftbar />
            <Table />
            <Rightbar />    
        </div>
    );
}

export default Body;
