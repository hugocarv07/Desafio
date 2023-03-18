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
                    <CartaoFuncionario nome={'SOPHIE'} email={'sophieganeplay@gmail.com'} aniversario={'28/02'} cargo={'estudante'}/>
                    <CartaoFuncionario nome={'SOPHIE'} email={'sophieganeplay@gmail.com'} aniversario={'28/02'} cargo={'estudante'}/>
                    <CartaoFuncionario nome={'SOPHIE'} email={'sophieganeplay@gmail.com'} aniversario={'28/02'} cargo={'estudante'}/>

                    <CartaoFuncionario nome={'SOPHIE'} email={'sophieganeplay@gmail.com'} aniversario={'28/02'} cargo={'estudante'}/>
                    <CartaoFuncionario nome={'SOPHIE'} email={'sophieganeplay@gmail.com'} aniversario={'28/02'} cargo={'estudante'}/>
                    <CartaoFuncionario nome={'SOPHIE'} email={'sophieganeplay@gmail.com'} aniversario={'28/02'} cargo={'estudante'}/>
                </section>


            </main>

        </>
    )
}