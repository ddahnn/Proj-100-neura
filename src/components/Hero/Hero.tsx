import styles from "./Hero.module.css";

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.imgMidHero}>
                <img src="/resource/img/fundo100neura.png" alt="" />
            </div>

            <div className={styles.heroText}>
                <h1>
                    Conectando você ao <span className={styles.greenText}>seu terapeuta ideal,</span> sem neura nenhuma.
                </h1>

                <h2>
                    Saúde mental <span className={styles.orangeText}>descomplicada</span>, usando a{" "}
                    <span className={styles.orangeText}>tecnologia</span> para{" "}
                    <span className={styles.orangeText}>diminuir</span> a{" "}
                    <span className={styles.orangeText}>burocracia</span>
                </h2>

                <p>
                    No <span className={styles.bold}>100 neura</span>, a{" "}
                    <span className={styles.bold}>tecnologia trabalha a favor da escuta</span>. Usamos soluções simples e
                    atuais para{" "}
                    <span className={styles.bold}>
                        conectar pessoas a terapeutas que realmente façam sentido para sua história
                    </span>
                    , suas necessidades e seu momento de vida – sem complicar o que deveria ser cuidado.
                </p>

                <a href="#busco-terapia" className={styles.busco}>
                    Busco terapia
                    <img src="/resource/img/seta.png" alt="" className={styles.hiddenIcon} />
                </a>

                <a href="#sou-terapeuta" className={styles.sou}>
                    Sou terapeuta
                    <img src="/resource/img/seta.png" alt="" className={styles.hiddenIcon} />
                </a>
            </div>
        </section>
    );
}
