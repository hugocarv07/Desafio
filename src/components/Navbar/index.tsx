import styles from '../../../styles/navbar.module.scss'
import logoFF from '../../../public/img/NextGen_TI-so-logo.png'
import Image from 'next/image';

export function Navbar({ }) {

  return (
    <header>
      <nav className={styles.navConteiner}>

        <div className={styles.imm}> 
          <Image src={logoFF} alt="Logo" width={80} height={80} />
          <p>NextGen TI.</p>
          </div>
          <ul>
            <li>
              <a href="/">Home</a>
            </li>
            <li>
              <a href="/contato">
                <a>Contatos</a>
              </a>
            </li>
            <li>
              <a href="/funcionarios">
                <a>Funcionarios</a>
              </a>
            </li>
            <li>
              <a href="/login">
                <a>Login</a>
              </a>
            </li>
          </ul>
      </nav>
    </header>
  );
};
