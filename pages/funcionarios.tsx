import Image from 'next/image'
import styles from '../styles/funcionarios.module.scss'
import Logo1 from '../public/img/NextGen_TI-so-logo.png';
import perfil from '../public/img/perfil.png';

export default function funcionarioF() {
    return (
        <>
            <main>
                <section className={styles.Un}>
                    <Image className={styles.logoL} src={Logo1} alt="Logo" />
                    <h1>Funcionários</h1>
                </section>

                <section className={styles.principal}>
                    <div className={styles.quadrado1}>
                        <div className={styles.quadrado12}>
                            <div className={styles.circulo}>
                            <Image className={styles.perfilL} src={perfil} alt="Logo" />
                            </div>
                        </div>
                        <div className={styles.info}>
                            <p>Nome:Manuela pereira.</p>
                            <p>E-mail:Manuelap..gmail.com.</p>
                            <p>Aniversário:25/03/2002. </p>
                            <p>Cargo:Gerente do VPGG.</p>
                        </div>
                    </div>
                    <div className={styles.quadrado2}>
                        <div className={styles.quadrado22}>
                            <div className={styles.circulo2}>
                            <Image className={styles.perfilL} src={perfil} alt="Logo" />
                            </div>
                        </div>
                        <div className={styles.info2}>
                            <p>Nome:Manuela pereira.</p>
                            <p>E-mail:Manuelap..gmail.com.</p>
                            <p>Aniversário:25/03/2002. </p>
                            <p>Cargo:Gerente do VPGG.</p>
                        </div>
                    </div>
                    <div className={styles.quadrado3}>
                    <div className={styles.quadrado32}>
                            <div className={styles.circulo3}>
                            <Image className={styles.perfilL} src={perfil} alt="Logo" />
                            </div>
                        </div>
                        <div className={styles.info3}>
                            <p>Nome:Manuela pereira.</p>
                            <p>E-mail:Manuelap..gmail.com.</p>
                            <p>Aniversário:25/03/2002. </p>
                            <p>Cargo:Gerente do VPGG.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.principal2}>
                    <div className={styles.quadrado1}>
                        <div className={styles.quadrado12}>
                            <div className={styles.circulo}>
                            <Image className={styles.perfilL} src={perfil} alt="Logo" />
                            </div>
                        </div>
                        <div className={styles.info}>
                            <p>Nome:Manuela pereira.</p>
                            <p>E-mail:Manuelap..gmail.com.</p>
                            <p>Aniversário:25/03/2002. </p>
                            <p>Cargo:Gerente do VPGG.</p>
                        </div>
                    </div>
                    <div className={styles.quadrado2}>
                        <div className={styles.quadrado22}>
                            <div className={styles.circulo2}>
                            <Image className={styles.perfilL} src={perfil} alt="Logo" />
                            </div>
                        </div>
                        <div className={styles.info2}>
                            <p>Nome:Manuela pereira.</p>
                            <p>E-mail:Manuelap..gmail.com.</p>
                            <p>Aniversário:25/03/2002. </p>
                            <p>Cargo:Gerente do VPGG.</p>
                        </div>
                    </div>
                    <div className={styles.quadrado3}>
                    <div className={styles.quadrado32}>
                            <div className={styles.circulo3}>
                            <Image className={styles.perfilL} src={perfil} alt="Logo" />
                            </div>
                        </div>
                        <div className={styles.info3}>
                            <p>Nome:Manuela pereira.</p>
                            <p>E-mail:Manuelap..gmail.com.</p>
                            <p>Aniversário:25/03/2002. </p>
                            <p>Cargo:Gerente do VPGG.</p>
                        </div>
                    </div>
                </section>
                <section className={styles.principal3}>
                    <div className={styles.quadrado1}>
                        <div className={styles.quadrado12}>
                            <div className={styles.circulo}>
                            <Image className={styles.perfilL} src={perfil} alt="Logo" />
                            </div>
                        </div>
                        <div className={styles.info}>
                            <p>Nome:Manuela pereira.</p>
                            <p>E-mail:Manuelap..gmail.com.</p>
                            <p>Aniversário:25/03/2002. </p>
                            <p>Cargo:Gerente do VPGG.</p>
                        </div>
                    </div>
                    <div className={styles.quadrado2}>
                        <div className={styles.quadrado22}>
                            <div className={styles.circulo2}>
                            <Image className={styles.perfilL} src={perfil} alt="Logo" />
                            </div>
                        </div>
                        <div className={styles.info2}>
                            <p>Nome:Manuela pereira.</p>
                            <p>E-mail:Manuelap..gmail.com.</p>
                            <p>Aniversário:25/03/2002. </p>
                            <p>Cargo:Gerente do VPGG.</p>
                        </div>
                    </div>
                    <div className={styles.quadrado3}>
                    <div className={styles.quadrado32}>
                            <div className={styles.circulo3}>
                            <Image className={styles.perfilL} src={perfil} alt="Logo" />
                            </div>
                        </div>
                        <div className={styles.info3}>
                            <p>Nome:Manuela pereira.</p>
                            <p>E-mail:Manuelap..gmail.com.</p>
                            <p>Aniversário:25/03/2002. </p>
                            <p>Cargo:Gerente do VPGG.</p>
                        </div>
                    </div>
                </section>


            </main>

        </>
    )
}