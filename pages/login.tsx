import Image from 'next/image'
import styles from '../styles/login.module.scss'
import Logo from '../public/img/NextGen_TI-logo.png';


export default function LoginF() {
    return (
        <>
           
            <main>
            <section className={styles.img}>
            <Image className={styles.logoI} src={Logo} alt="Logo" />
               </section>
                <section className={styles.login}>
                    <div className={styles.Tudo}>
                        <div id="loginn">
                            <form method="post" action="">
                                <h1>Login</h1>
                                <div className={styles.Pr1}>
                                    <label ></label>
                                    <input id="nome_login" name="nome_login"  type="text" placeholder="Email" />
                                    <label></label>
                                    <input id="email_login" name="email_login" type="password" placeholder="Senha" />
                                </div>
                                <div className={styles.Pr2}>
                                    <input type="submit" value="Entrar" />
                                </div>
                                <div className={styles.Pr3}>
                                    <input type="submit" value="Criar" />
                                </div>
                            </form>
                        </div>
                    </div>
                </section>
                <section className={styles.qd}>
           
               </section>
            </main>

        </>
    )
}