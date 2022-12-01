import styles from '../styles/Footer.module.css';

export default function Footer() {
    return (
        <footer className={styles.footer}>
            <div className={styles.upperFooter}>
                <div className={`${styles.innerContainer} ${styles.leftContainer}`}>Contact Info</div>
                <div className={`${styles.innerContainer} ${styles.centerContainer}`}>Nav Menu</div>
                <div className={`${styles.innerContainer} ${styles.rightContainer}`}>Logo</div>
            </div>
            <div className={styles.lowerFooter}>
                <div className={`${styles.innerContainer} ${styles.leftContainer}`}>Copyright</div>
                <div className={`${styles.innerContainer} ${styles.centerContainer}`}>Privacy Policy</div>
                <div className={`${styles.innerContainer} ${styles.rightContainer}`}>Developer/Designer</div>
            </div>
        </footer>
    );
}
