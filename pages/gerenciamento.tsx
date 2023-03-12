import Image from 'next/image'
import styles from '../styles/gerenciamento.module.scss'
import LogoPr from '../public/img/NextGen_TI-logo.png';
import LogoPlus from '../public/img/adicionar.png';
import LogoPerfil from '../public/img/perfil.png';
import LogoLixo from '../public/img/lixeira.png';
import logoVi from '../public/img/olho-aberto.png';
import LogoEdit from '../public/img/editar.png';

export default function GerenciamentoF() {
    return (
        <>
         
            <main>
                <section className={styles.Parte1}>
                    <Image className={styles.logoPri} src={LogoPr} alt="Logo" />
                    <h1>Gerenciamento de Funcionários</h1>
                </section>
                <section className={styles.Parte2}>
                    <div className={styles.quadradoPlus}>
                        <Image className={styles.logoPlus} src={LogoPlus} alt="Logo" />
                        <p>Adicionar novo Funcionário</p>
                    </div>
                    <div className={styles.quadradoedit}>
                        <div className={styles.quadradoCont}>
                            <div className={styles.quadradoun}>
                                <p>Manoela pereira</p>
                                <Image className={styles.logoPerf} src={LogoPerfil} alt="Logo" />
                            </div>
                            <div className={styles.modal}>
                                <Image className={styles.logoLixo} src={LogoLixo} alt="Logo" />
                                <Image className={styles.logoEdit} src={LogoEdit} alt="Logo" />
                                <Image className={styles.logoVi} src={logoVi} alt="Logo" />
                            </div>
                        </div>
                   
                        <div className={styles.quadradoCont2}>
                            <div className={styles.quadradoun2}>
                                <p>Manoela pereira</p>
                                <Image className={styles.logoPerf} src={LogoPerfil} alt="Logo" />
                            </div>
                            <div className={styles.modal2}>
                                <Image className={styles.logoLixo} src={LogoLixo} alt="Logo" />
                                <Image className={styles.logoEdit} src={LogoEdit} alt="Logo" />
                                <Image className={styles.logoVi} src={logoVi} alt="Logo" />
                            </div>
                        </div>
                
                   
                    </div>

                </section>
                <section className={styles.Parte3}>
                </section>
            </main>

        </>
    )
}