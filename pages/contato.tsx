import Image from 'next/image'
import styles from '../styles/Contato.module.scss'
import Logo from '../public/img/NextGen_TI-so-logo.png';
import LogoInstagram from '../public/img/instagram.png';
import LogoFacebook from '../public/img/facebook.png';
import LogoLinkedin from '../public/img/linkedin.png';
import LogoGmail from '../public/img/gmail.png';
import LogoCelular from '../public/img/celular.png';
import LogoTelefone from '../public/img/telefone.png';
import LogoLocal from '../public/img/local.png';

export default function ContatoF() {
    return (
        <>
        
            <main>
                <section className={styles.imgP}>
                    <Image className={styles.logoI} src={Logo} alt="Logo" />
                </section>

                <section className={styles.textoPrincipal}>
                    <h1>Entre em contato conosco</h1>
                </section>
                <section className={styles.principal1}>
                    <div className={styles.quadrado1}>
                        <h1>Nossas redes Sociais</h1>
                        <div className={styles.q1T}>
                            <div className={styles.imgg}>
                                <Image className={styles.logoF} src={LogoInstagram} alt="Logo" />
                                <p>NextGen TI</p>
                            </div>
                            <div className={styles.imgg}>
                                <Image className={styles.logoF} src={LogoFacebook} alt="Logo" />
                                <p>NextGen TI</p>
                            </div>
                            <div className={styles.imgg}>
                                <Image className={styles.logoF} src={LogoLinkedin} alt="Logo" />
                                <p>NextGen TI</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.principal2}>
                    <div className={styles.quadrado2}>
                        <h1>Outras formas de contato</h1>
                        <div className={styles.q2T}>
                            <div className={styles.imgg2}>
                                <Image className={styles.logoF} src={LogoGmail} alt="Logo" />
                                <p>NextGenTI..gmail.com</p>
                            </div>
                            <div className={styles.imgg2}>
                                <Image className={styles.logoF} src={LogoTelefone} alt="Logo" />
                                <p>(24)2263-4989</p>
                            </div>
                            <div className={styles.imgg2}>
                                <Image className={styles.logoF} src={LogoCelular} alt="Logo" />
                                <p>(24)992266100</p>
                            </div>
                        </div>
                    </div>
                </section>

                <section className={styles.principal3}>
                    <div className={styles.quadrado3}>
                        <h1>Onde pode nós encontrar?</h1>
                        <div className={styles.q3T}>
                            <div className={styles.imgg3}>
                                <Image className={styles.logoF} src={LogoLocal} alt="Logo" />
                                <p>Instituto de Ciências Exatas - Rua José Lourenço Kelmer, Campus Universitário Bairro São Pedro CEP: 36036-900 Juiz de Fora – MG</p>
                            </div>
                        </div>

                    </div>
                </section>

            </main>

        </>
    )
}