import styles from '../../../styles/footer.module.scss'
import Image from 'next/image';
import logoDD from '../../../public/img/NextGen_TI-logo.png'
import logo1 from '../../../public/img/instagram.png'
import logo2 from '../../../public/img/facebook.png'
import logo3 from '../../../public/img/linkedin.png'
import logo4 from '../../../public/img/code.png'

export function Footer({ }) {
    return (
        <>
            <footer className={styles.footer}>

                <div className={styles.redes}>
                    <Image src={logo1} alt="Logo" width={60} height={60} />
                    <Image src={logo2} alt="Logo" width={60} height={60} />
                    <Image src={logo3} alt="Logo" width={60} height={60} />
                </div>
                <Image src={logoDD} alt="Logo" width={250} height={250} />
                <Image src={logo4} alt="Logo" width={250} height={250} />
            </footer>
        </>
    );
};