import styles from "./quemSomos.module.css";
import CardQuemSomos from "../../components/cardQuemSomos/CardQuemSomos";
import { CardDescription } from "../../components/CardDescription/CardDescription";
import { IoMdHappy , IoMdHeart, IoMdClock } from "react-icons/io";
import { GiConversation, GiBrokenHeart } from "react-icons/gi";
import { BiSolidWinkSmile } from "react-icons/bi";

export default function quemSomos() {
  return (
    <main className={styles.sobre}>
      <div className={styles.heroSection}>
        <span className={styles.title}>Quem Somos</span>
        <h3> e por que criamos o <span className={styles.greenText}>100neura</span></h3>

        <a href="#nossaHistoria">veja mais sobre a nossa história 
          <img src="public/assets/seta.png" alt="" className={styles.hid} />
        </a>

      </div>

      <div className={styles.mainContent}>
        <div className={styles.text100neura}>
          <p>O <span className={styles.bold}>100 Neura</span> é uma plataforma criada para <span className={styles.bold}>conectar pessoas que buscam terapia a terapeutas que façam sentido com suas histórias,</span> necessidades e formas de existir no mundo.</p>

          <p>Aqui, a ideia não é “encaixar pessoas em caixas”, nem transformar saúde mental em produto genérico. É <span className={styles.bold}>usar a tecnologia</span> de forma <span className={styles.bold}>humana, acessível e consciente,</span> respeitando ritmos, limites e singularidades.</p>

          <p>Como <span className={styles.bold}>pessoas neurodivergentes,</span> sabemos o quanto:</p>
          <ul>
            <li>formulários longos cansam</li>
            <li>linguagem técnica afasta</li>
            <li>processos confusos desestimulam</li>
            <li>e atendimentos desalinhados podem machucar</li>
          </ul>

          <p>O 100 Neura nasce para ser o oposto disso: <span className={styles.bold}>mais nitido, mais acolhedor, mais humano</span> — tanto para quem procura ajuda quanto para quem oferece cuidado.</p>
        </div>
      </div>
      <section className={styles.history} id="nossaHistoria">
        <h3>Nossa História</h3>
        <div className="card">
          <CardQuemSomos
            image="/assets/dahn.png"
            name="Sou o Dahn"
            role="Head de Tecnologia"
            slug="dahn"
            paragraphs={[
              <>
                Sou <strong>TDAH</strong>, terapeuta e analista e desenvolvedor de
                sistemas por formação.
              </>,
              <>
                Minha trajetória sempre esteve entre{" "}
                <strong>tecnologia e cuidado</strong>.
              </>,
              <>
                Por isso, meu papel aqui é criar soluções tecnológicas que facilitem
                o encontro entre pessoas e terapeutas.
              </>,
            ]}
        />

        <CardQuemSomos
          image="/assets/nands.png"
          name="Sou a Nands"
          role="Head de Comunicação"
          slug="nands"
          paragraphs={[
            <>
              Sou <strong>autista</strong>, terapeuta, designer e social media por
              formação.
            </>,
            <>
              Minha relação com a comunicação sempre passou por traduzir o
              complexo.
            </>,
            <>
              No 100 Neura, trabalho para que a comunicação seja clara, humana e
              respeitosa.
            </>,
          ]}
        />
        </div>
      </section>

      <section className={styles.solutions}>
        <span className={styles.solutionsTitle}>Nossas Soluções</span>
        <span className={styles.solutionsDescription}>
          <CardDescription
            Icon={IoMdHappy}
            title="Busca mais humana"
            description="Nada de listas frias ou filtros genéricos. A busca considera quem a pessoa é, o que procura — e ajuda terapeutas a serem encontrados por quem realmente se identifica com seu trabalho."
          />

          <CardDescription
            Icon={GiConversation}
            title="Busca mais humana"
            description="Nada de listas frias ou filtros genéricos. A busca considera quem a pessoa é, o que procura — e ajuda terapeutas a serem encontrados por quem realmente se identifica com seu trabalho."
          />

          <CardDescription
            Icon={IoMdHeart }
            title="Busca mais humana"
            description="Nada de listas frias ou filtros genéricos. A busca considera quem a pessoa é, o que procura — e ajuda terapeutas a serem encontrados por quem realmente se identifica com seu trabalho."
          />

          <CardDescription
            Icon={BiSolidWinkSmile}
            title="Busca mais humana"
            description="Nada de listas frias ou filtros genéricos. A busca considera quem a pessoa é, o que procura — e ajuda terapeutas a serem encontrados por quem realmente se identifica com seu trabalho."
          />

          <CardDescription
            Icon={GiBrokenHeart}
            title="Busca mais humana"
            description="Nada de listas frias ou filtros genéricos. A busca considera quem a pessoa é, o que procura — e ajuda terapeutas a serem encontrados por quem realmente se identifica com seu trabalho."
          />

          <CardDescription
            Icon={IoMdClock}
            title="Busca mais humana"
            description="Nada de listas frias ou filtros genéricos. A busca considera quem a pessoa é, o que procura — e ajuda terapeutas a serem encontrados por quem realmente se identifica com seu trabalho."
          />

        </span>

        
      </section>
    </main>
  
  );
}