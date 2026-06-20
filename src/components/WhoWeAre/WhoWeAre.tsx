import styles from "./WhoWeAre.module.css";

export function WhoWeAre() {
    return (

        
        <section id="quem-somos" className={ styles.whoWeAre}>
            <figure className={styles.figure}>
                <img
                    src="assets\criadores.jpg"
                    alt="Dahn e Nands, fundadores do 100 neura terapia para quem sente o mundo diferente" className={styles.CreatorsMobile}
                />
            </figure>

            <div className={styles.textContent}>
                <h1>Oi, prazer!</h1>

                <h3>
                    <span className={styles.greenText}>somos</span>{" "}
                    <span className={styles.orangeText}>nands</span> E{" "}
                    <span className={styles.orangeText}>dahn</span>
                    <span className={styles.greenText}>, criadores do</span> 100 neura.
                </h3>

                <p>
                    Somos ambos <span className={styles.bold}>terapeutas neurodivergentes</span> (Dahn é TDAH e Nands
                    autista), então sabemos especialmente a importância de{" "}
                    <span className={styles.bold}>um bom acompanhamento de saúde na área da mental.</span>
                </p>

                <p>
                    Nossa experiência anterior na área da <span className={styles.bold}>comunicação</span> e da{" "}
                    <span className={styles.bold}>tecnologia</span> nos permitiram criar essa plataforma pensando em{" "}
                    <span className={styles.bold}>conectar terapeutas e pessoas em busca de terapia.</span>
                </p>

                <a href="#saiba-mais" className={styles.button}>
                    Saiba mais
                    <img src="/resource/img/seta.png" alt="" className={styles.hiddenIcon} />
                </a>
            </div>
        </section>
    );
}
