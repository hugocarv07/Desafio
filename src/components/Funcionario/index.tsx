import styles from '../../../styles/funcionarios.module.scss'
import Image from 'next/image'
import perfil from '../../../public/img/perfil.png'

interface CartaoFuncionarioProps{
    nome:string;
    email:string;
    aniversario:string;
    cargo:string;
    salario:number;
}

export function CartaoFuncionario({ nome,email,aniversario,cargo,salario}:CartaoFuncionarioProps) {

    return (
        <>
            <div className={styles.quadrado1}>
                <div className={styles.quadrado12}>
                    <div className={styles.circulo}>
                        <Image className={styles.perfilL} src={perfil} alt="Logo" />
                    </div>
                </div>
                <div className={styles.info}>
                    <p>Nome:{nome}.</p>
                    <p>E-mail:{email}.</p>
                    <p>Aniversário:{aniversario}. </p>
                    <p>Cargo:{cargo}.</p>
                    <p>Salario:{salario}.</p>
                </div>
            </div>
        </>
    )
}