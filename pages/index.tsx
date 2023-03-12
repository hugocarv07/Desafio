import Image from 'next/image'
import styles from '../styles/Home.module.scss'
import perifericos from '../public/img/perifericos.png'
import monitores from '../public/img/monitor-produtos.png'
import processadores from '../public/img/processador.png'
import placavideo from '../public/img/placa de video-produtos.png'
import memoria from '../public/img/memoria ram.png'
import placamae from '../public/img/placa mae.png'

import Allone from '../public/img/computador all.png'
import headset from '../public/img/headset.png'
import teclado from '../public/img/teclado.png'
import placavideo2 from '../public/img/placadevideo.png'
import notebook_1 from '../public/img/notebook-1.png'
import notebook_2 from '../public/img/notebook.png'
import placavide3 from '../public/img/placa de video-1.png'
import monitor from '../public/img/monitor.png'
import cadeira from '../public/img/cadeira gamer.png'
import pcgamer from '../public/img/pc.jpg'
import pecas from '../public/img/pcgamer.jpg'
import capa from '../public/img/capa.jpg'



export default function HomeF() {
  return (
    <>
      
      <main>
        <section className={styles.principal}>
          <div className={styles.quadradoM}>
          <Image className={styles.logoI} src={capa} alt="Logo" />
          </div>
        </section>
        <section className={styles.categoria}>
          <div className={styles.un1}>
            <h1>Linha gamer</h1>
            <div className={styles.quadradoMn1}>
            <Image className={styles.logoI} src={pcgamer} alt="Logo" />
            </div>
          </div>
          <div className={styles.un1}>
            <h1>Peças para seu compuitador</h1>
            <div className={styles.quadradoMn2}>
            <Image className={styles.logoI} src={pecas} alt="Logo" />
            </div>
          </div>
        </section>

        <section className={styles.produtos1}>
          <h1>Produtos</h1>
        </section>
        <section className={styles.produtos}>
          <div className={styles.unn}>
            <div className={styles.quadradoMm1}>
            <Image className={styles.logoI} src={perifericos} alt="Logo" />
            </div>
            <h1>Periféricos</h1>
          </div>
          <div className={styles.unn}>
            <div className={styles.quadradoMm2}>
            <Image className={styles.logoI} src={monitores} alt="Logo" />
            </div>
            <h1>Monitores</h1>
          </div>
          <div className={styles.unn}>
            <div className={styles.quadradoMm3}>
            <Image className={styles.logoI} src={processadores} alt="Logo" />
            </div>
            <h1>Processadores</h1>
          </div>
          <div className={styles.unn}>
            <div className={styles.quadradoMm4}>
            <Image className={styles.logoI} src={placavideo} alt="Logo" />
            </div>
            <h1>Placa de Video</h1>
          </div>
          <div className={styles.unn}>
            <div className={styles.quadradoMm5}>
            <Image className={styles.logoI} src={memoria} alt="Logo" />
            </div>
            <h1>Memória RAM</h1>
          </div>
          <div className={styles.unn}>
            <div className={styles.quadradoMm6}>
            <Image className={styles.logoI} src={placamae} alt="Logo" />
            </div>
            <h1>Placa Mãe</h1>
          </div>
        </section>

        <section className={styles.ofertas}>
          <div className={styles.arruma}>
            <div className={styles.quadradoMM1}>
            <Image className={styles.logoI} src={placavideo2} alt="Logo" />
            </div>
            <p> Placa de Vídeo RTX 3060 Asus Dual O12G V2 NVIDIA GeForce, 12GB GDDR6, LHR, DLSS, Ray Tracing - DUAL-RTX3060-O12G-V2</p>
          </div>
          <div className={styles.arruma}>
          <div className={styles.quadradoMM2}>
          <Image className={styles.logoI} src={monitor} alt="Logo" />
          </div>
          <p>Monitor Gamer LG 26 IPS, Ultra Wide, 75Hz, Full HD, 1ms, FreeSync Premium, HDR 10, 99% sRGB, HDMI, VESA - 26WQ500</p>
          </div>
          <div className={styles.arruma}>
          <div className={styles.quadradoMM3}>
          <Image className={styles.logoI} src={cadeira} alt="Logo" />
          </div>
          <p>Cadeira Gamer XT Racer Viking Series, Até 120kg, Com Almofadas e Apoio de Pés, Reclinável, Descanso de Braço 3D, Preto - XTR-018</p>
          </div>
        </section>

        <section className={styles.ofertas2}>
        <div className={styles.arruma}>
          <div className={styles.quadradoMM1}>
          <Image className={styles.logoI} src={Allone} alt="Logo" />
          </div>
          <p>All In One LG Intel Core i5-10210U, 8GB DDR4, HDD 1TB, 23.8, Windows 10 Home, Branco - 24V50N-CBJ32P2</p>
          </div>
          <div className={styles.arruma}>
          <div className={styles.quadradoMM2}>
          <Image className={styles.logoI} src={headset} alt="Logo" />
          </div>
          <p> Headset Gamer Havit, Drivers 53mm, Microfone Plugável, P2, PC, PS4, XBOX ONE, Preto - HV-H2002D</p>
          </div>
          <div className={styles.arruma}>
          <div className={styles.quadradoMM3}>
          <Image className={styles.logoI} src={teclado} alt="Logo" />
          </div>
          <p>Teclado Mecânico Gamer HyperX Alloy MKW100, RGB, Switch Red, Full Size, Layout US - 4P5E1AA#ABA</p>
          </div>
        </section>

        <section className={styles.ofertas3}>
        <div className={styles.arruma}>
          <div className={styles.quadradoMM1}>
          <Image className={styles.logoI} src={placavide3} alt="Logo" />
          </div>
          <p>Placa de Vídeo GTX 1630 EX Galax Nvidia GeForce, 4GB GDDR6 - 63NQL4HP66EX</p>
          </div>
          <div className={styles.arruma}>
          <div className={styles.quadradoMM2}>
          <Image className={styles.logoI} src={notebook_1} alt="Logo" />
          </div>
          <p>Notebook Asus AMD Ryzen 5-3500U, 8GB RAM, SSD 256GB, 15,6', Radeon Vega 8, Windows 11 Home, Cinza - M515DA-BR1213W</p>
          </div>
          <div className={styles.arruma}>
          <div className={styles.quadradoMM3}>
          <Image className={styles.logoI} src={notebook_2} alt="Logo" />
          </div>
          <p>Notebook Gamer Lenovo Gaming 3i Intel Core i5-11300H, GeForce GTX 1650, 8GB RAM, SSD 512GB, 15.6 Full HD, Windows 11, Preto - 82MG0009BR</p>
          </div>
        </section>

        <section className={styles.descricao}>
          <div className={styles.quadradoMM1}>
            <h1>Descrição da loja</h1>
            <p>NextGen TI é o destino perfeito para quem procura equipamentos de alta qualidade e performance para montar ou atualizar seu computador. Com uma ampla variedade de produtos, incluindo processadores, placas-mãe, placas de vídeo, memórias RAM, drives de armazenamento, fontes de energia, gabinetes e periféricos, nós oferecemos soluções personalizadas para atender às necessidades de cada cliente. Nossa equipe altamente qualificada está sempre disponível para fornecer informações e dicas sobre os melhores produtos para cada caso, garantindo a satisfação de nossos clientes. Compre em nossa loja e experimente a diferença de comprar componentes de computador com qualidade e confiança.</p>
          </div>
        </section>



      </main>

    </>
  )
}
