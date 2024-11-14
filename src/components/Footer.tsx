import { FOOTER_TEXT } from '@/constants';
import styles from '@/styles/Footer.module.scss';

const Footer = () => (
    <footer className={styles.footer}>
        <p className={styles.copyright}>{FOOTER_TEXT}</p>
    </footer>
);

export default Footer;
