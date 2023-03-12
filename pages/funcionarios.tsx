import Image from 'next/image'
import styles from '../styles/funcionarios.module.scss'
import Logo1 from '../public/img/NextGen_TI-so-logo.png';
import perfil from '../public/img/perfil.png';
import { CartaoFuncionario } from '../src/components/Funcionario'

export default function funcionarioF() {
    return (
        <>
            <main>
                <section className={styles.Un}>
                    <Image className={styles.logoL} src={Logo1} alt="Logo" />
                    <h1>Funcionários</h1>
                </section>

                <section className={styles.principal}>
                    <CartaoFuncionario nome={'joao'} email={'ss'} aniversario={'ss'} cargo={'ss'}/>
                    <CartaoFuncionario nome={'dd'} email={'dd'} aniversario={'dd'} cargo={'dd'}/>
                    <CartaoFuncionario nome={'asa'} email={'asd'} aniversario={'asda'} cargo={'asdad'}/>

                    <CartaoFuncionario nome={'xx'} email={'xx'} aniversario={'xx'} cargo={'xx'}/>
                    <CartaoFuncionario nome={'rr'} email={'rr'} aniversario={'rr'} cargo={'rr'}/>
                    <CartaoFuncionario nome={'cx'} email={'cx'} aniversario={'cx'} cargo={'xc'}/>
                </section>


            </main>

        </>
    )
}