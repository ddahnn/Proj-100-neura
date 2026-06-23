import styles from "./Hero.module.css";

export function Hero() {
    return (
        <section className={styles.hero}>
            <div className={styles.imgMidHero}>
                <img src="assets\fundo100neura.png" alt=""  />
            </div>

            <div className={styles.heroText}>
                <h1 className={styles.title}>
                saúde mental do seu jeito, <span className={styles.greenText}>sem neura,</span> nenhuma.
                </h1>

                <h2 className={styles.subtitle}>
                    Nosso <span className={styles.greenText}>match mental</span>, conecta você ao seu <span className={styles.greenText}>terapeuta ideal!</span>
                </h2>

                <p className={styles.description}>
                    No <span className={styles.bold}>100 neura</span>, a{" "}
                    <span className={styles.bold}>tecnologia trabalha a favor da escuta</span>. Usamos soluções simples e
                    atuais para{" "}
                    <span className={styles.bold}>
                        conectar pessoas a terapeutas que realmente façam sentido para sua história
                    </span>
                    , suas necessidades e seu momento de vida – sem complicar o que deveria ser cuidado.
                </p>
                <div className={styles.buttonsHero}>
                    <a href="#busco-terapia" className={styles.busco}>
                        Busco terapia
                        <img src="../assets/seta.png" alt="" className={styles.hiddenIcon} />
                    </a>

                    <a href="#sou-terapeuta" className={styles.sou}>
                        Sou terapeuta
                        <img src="../assets/seta.png" alt="" className={styles.hiddenIcon} />
                    </a>
                </div>
            </div>
        </section>
    );
}
