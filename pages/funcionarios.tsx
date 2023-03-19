import Image from 'next/image'
import styles from '../styles/funcionarios.module.scss'
import Logo1 from '../public/img/NextGen_TI-so-logo.png';
import perfil from '../public/img/perfil.png';
import { CartaoFuncionario } from '../src/components/Funcionario'
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function funcionarioF() {
    const [listaFuncionarios, setFuncionarios] = useState([]);
    useEffect(() => {
        axios.get('http://localhost:8000/funcionarios')
            .then(resposta => {
                setFuncionarios(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])
    return (
        <>
            <main>
                <section className={styles.Un}>
                    <Image className={styles.logoL} src={Logo1} alt="Logo" />
                    <h1>Funcionários</h1>
                </section>

                <section className={styles.principal}>
                {listaFuncionarios.map((funcionario) => (
                        <CartaoFuncionario
                            key={funcionario.id}
                            nome={funcionario.name}
                            email={funcionario.email}
                            aniversario={funcionario.aniversario}
                            salario={funcionario.salario}
                            cargo={funcionario.cargo}
                        />
                    ))}
                </section>
            </main>

        </>
    )
}