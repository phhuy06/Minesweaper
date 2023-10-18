import styles from './App.module.scss';
import Header from './components/Header/index'
import Body from './components/Body/index';
import Footer from './components/Footer';
function App() {
    return (
        <div className={styles.container}>
            <div className={styles.table}>
                <div className={styles.header}>
                    <Header />
                </div>
                <div className={styles.body}>
                    <Body />
                </div>
                <div className={styles.footer}>
                    <Footer />
                </div>
            </div>
        </div>
    );
}

export default App;
