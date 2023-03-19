import Image from 'next/image'
import styles from '../styles/gerenciamento.module.scss'
import LogoPr from '../public/img/NextGen_TI-logo.png';
import LogoPlus from '../public/img/adicionar.png';
import LogoPerfil from '../public/img/perfil.png';
import LogoLixo from '../public/img/lixeira.png';
import logoVi from '../public/img/olho-aberto.png';
import LogoEdit from '../public/img/editar.png';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function GerenciamentoF() {

    ///////////////////////////////////////////////////////////
    const handleCloseModal = () => {
        setShowModal(false);
    }
    const [showModal, setShowModal] = useState(false);
    const handleShowModal = () => {
        setShowModal(true);
    }

    const handleCloseVisuModal = () => {
        setVisuModal(false);
    }
    const [VisuModal, setVisuModal] = useState(false);
    const handleVisuModal = () => {
        setVisuModal(true);
    }

    const [showDeleteModal, setShowDeleteModal] = useState(false);
    const handleCloseDeleteModal = () => {
        setShowDeleteModal(false);
    };
    const handleShowDeleteModal = () => {
        setShowDeleteModal(true);
    };

    const handleCloseModalEdit = () => {
        setEditModal(false);
    }
    const [EditModal, setEditModal] = useState(false);
    const handleEditModal = () => {
        setEditModal(true);
    }
    ////////////////////////////////////////////////////////////////////////////////////////////////
    const [Select, setSelect] = useState(null);
    const [NewFunc, setNewFunc] = useState({
        name: "",
        email: "",
        salario: "",
        aniversario: "",
        cargo: "",
    });
    const [Listas, setFuncionarios] = useState([]);

    useEffect(() => {
        axios.get('http://localhost:8000/funcionarios')
            .then(resposta => {
                setFuncionarios(resposta.data)
            })
            .catch(erro => {
                console.log(erro)
            })
    }, [])

    async function deleteFuncionario() {
        axios.delete('http://localhost:8000/funcionarios/${Select.id}')
            .then(resposta => {
                setFuncionarios(Listas.filter(funcionario => funcionario.id !== Select.id));
                setShowDeleteModal(false);
            })
            .catch(erro => {
                console.log(erro);
            });
    }

    const editFun = (event) => {
        event.preventDefault();
        axios.put('http://localhost:8000/funcionarios/${Select.id}', Select)
            .then(() => {
                const funcionariosAtualizados = Listas.map((funcionario) => {
                    if (funcionario.id === Select.id) {
                        return Select;
                    } else {
                        return funcionario;
                    }
                });
                setFuncionarios(funcionariosAtualizados);
                setEditModal(false);
            })
            .catch((erro) => {
                console.log(erro);
            });
    }

    async function adicionarFuncionario() {
        try {
            const resposta = await axios.post('http://localhost:8000/funcionarios', NewFunc);
            setFuncionarios([...Listas, resposta.data]);
            setShowModal(false);
            setNewFunc({
                name: "",
                email: "",
                salario: "",
                aniversario: "",
                cargo: "",
            });
        } catch (erro) {
            console.log(erro);
        }
    }

    return (
        <>

            <main>
                <section className={styles.Parte1}>
                    <Image className={styles.logoPri} src={LogoPr} alt="Logo" />
                    <h1>Gerenciamento de Funcionários</h1>
                </section>
                <section className={styles.Parte2}>
                    <div className={styles.quadradoPlus}>
                        <Image className={styles.logoPlus} src={LogoPlus} alt="Logo" onClick={handleShowModal} />
                        <p>Adicionar novo Funcionário</p>
                    </div>
                    <div className={styles.quadradoFF}>
                        <div className={styles.quadradoteste}>

                            {Listas.map((funcionario) => (
                                <>
                                    <div className={styles.testeAll}>
                                        <div className={styles.teste1}>
                                            <p>{funcionario.name}</p>
                                            <Image className={styles.logoPerf} src={LogoPerfil} alt="Logo" />
                                        </div>
                                        <div className={styles.modalUn}>
                                            <Image className={styles.logoLixo} src={LogoLixo} alt="Logo" onClick={() => { setSelect(funcionario); setShowDeleteModal(true); }} />
                                            <Image className={styles.logoEdit} src={LogoEdit} alt="Logo" onClick={() => { setSelect(funcionario); setEditModal(true); }} />
                                            <Image className={styles.logoVi} src={logoVi} alt="Logo" onClick={() => { setSelect(funcionario); setVisuModal(true); }} />
                                        </div>
                                    </div>
                                </>
                            ))}
                        </div>
                    </div>
                </section>
                <section className={styles.Parte3}>
                </section>
            </main>

            {showModal && (
                <form onSubmit={adicionarFuncionario}>
                    <div className={styles.modalContainer}>
                        <div className={styles.modal}>
                            <h2>Adicionar novo funcionário</h2>
                            <form>
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" id="nome" />
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" />
                                <label htmlFor="salario">Salário:</label>
                                <input type="number" id="salario" />
                                <label htmlFor="aniversario">Aniversário:</label>
                                <input type="date" id="aniversario" />
                                <label htmlFor="cargo">Cargo:</label>
                                <input type="text" id="cargo" />
                                <button type="submit">Adicionar</button>
                            </form>
                            <button onClick={() => setShowModal(false)}>Fechar</button>
                        </div>
                    </div>
                </form>
            )}

            {showDeleteModal && (
                <form onSubmit={deleteFuncionario}>
                    <div className={styles.modalContainer}>
                        <div className={styles.modal}>
                            <h2>Deletar funcionário</h2>
                            <p>Deseja realmente deletar este funcionário?</p>
                            <button type="submit">Sim</button>
                            <button type="button" onClick={() => setShowDeleteModal(false)}>Não</button>
                        </div>
                    </div>
                </form>
            )}

            {VisuModal && (
                <div className={styles.modalContainer}>
                    <div className={styles.modal}>
                        <h2>Visualizar funcionário</h2>
                        <form>
                            <label htmlFor="nome">Nome:</label>
                            <p>{Select.name}</p>
                            <label htmlFor="email">E-mail:</label>
                            <p>{Select.email}</p>
                            <label htmlFor="salario">Salário:</label>
                            <p>{Select.salario}</p>
                            <label htmlFor="aniversario">Aniversário:</label>
                            <p>{Select.aniversario}</p>
                            <label htmlFor="cargo">Cargo:</label>
                            <p>{Select.cargo}</p>
                        </form>
                        <button onClick={() => setVisuModal(false)}>Fechar</button>
                    </div>
                </div>
            )}

            {EditModal && (
                <form onSubmit={editFun}>
                    <div className={styles.modalContainer}>
                        <div className={styles.modal}>
                            <h2>Editar funcionário</h2>
                            <form>
                                <label htmlFor="nome">Nome:</label>
                                <input type="text" id="nome" value={Select?.name || ''} onChange={(event) => setSelect({ ...Select, name: event.target.value })} />
                                <label htmlFor="email">E-mail:</label>
                                <input type="email" id="email" value={Select?.email || ''} onChange={(event) => setSelect({ ...Select, email: event.target.value })} />
                                <label htmlFor="salario">Salário:</label>
                                <input type="number" id="salario" value={Select?.salario || ''} onChange={(event) => setSelect({ ...Select, salario: event.target.value })} />
                                <label htmlFor="aniversario">Aniversário:</label>
                                <input type="text" id="aniversario" value={Select?.aniversario || ''} onChange={(event) => setSelect({ ...Select, aniversario: event.target.value })} />
                                <label htmlFor="cargo">Cargo:</label>
                                <input type="text" id="cargo" value={Select?.cargo || ''} onChange={(event) => setSelect({ ...Select, cargo: event.target.value })} />
                                <button type="submit">Editar</button>
                            </form>
                            <button onClick={() => setEditModal(false)}>Fechar</button>
                        </div>
                    </div>
                </form>
            )}
        </>
    )
}