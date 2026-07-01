import { useEffect, useRef, useState } from "react";
import styles from "./WhoWeAre.module.css";

export function WhoWeAre() {
const imageRef = useRef<HTMLImageElement | null>(null);

const [scrollDirection, setScrollDirection] = useState<"up" | "down">("up");
const [canAnimate, setCanAnimate] = useState(false);
const [isMobile, setIsMobile] = useState(false);


useEffect(() => {
    function checkIfMobile() {
    setIsMobile(window.innerWidth <= 900);
    }

    checkIfMobile();

    window.addEventListener("resize", checkIfMobile);

    return () => {
    window.removeEventListener("resize", checkIfMobile);
    };
}, []);


useEffect(() => {
    if (isMobile) return;

    let lastScrollY = window.scrollY;

    function handleScroll() {
    const currentScrollY = window.scrollY;

    if (currentScrollY > lastScrollY) {
        setScrollDirection("down");
    } else {
        setScrollDirection("up");
    }

    lastScrollY = currentScrollY;
    }

    window.addEventListener("scroll", handleScroll);

    return () => {
    window.removeEventListener("scroll", handleScroll);
    };
}, [isMobile]);


useEffect(() => {
    if (isMobile) return;

    const image = imageRef.current;

    if (!image) return;

    const observer = new IntersectionObserver(
    ([entry]) => {
        setCanAnimate(entry.isIntersecting);
    },
    {
        threshold: 0.5,
    }
    );

    observer.observe(image);

    return () => {
    observer.unobserve(image);
    };
}, [isMobile]);

const imageAnimationClass =
    !isMobile && canAnimate && scrollDirection === "down"
    ? styles.imageUp
    : !isMobile
    ? styles.imageDown
    : "";

return (
    <section id="quem-somos" className={styles.whoWeAre}>
    <div className={styles.container}>
        <figure className={styles.figure}>
        <img
            ref={imageRef}
            src="/assets/criadores.jpg"
            alt="Dahn e Nands, fundadores do 100 neura"
            className={`${styles.creatorsImage} ${imageAnimationClass}`}
        />
        </figure>

        <div className={styles.card}>
        <span className={styles.titleCard}  >Oi, prazer!</span>

        <h3>
            <span className={styles.greenText}>somos</span>{" "}
            <span className={styles.orangeText}>nands</span> e{" "}
            <span className={styles.orangeText}>dahn</span>
            <span className={styles.greenText}>, criadores do</span> 100 neura.
        </h3>

        <p>
            Somos ambos <strong>terapeutas neurodivergentes</strong> — Dahn é
            TDAH e Nands autista — então sabemos especialmente a importância de
            um bom acompanhamento de saúde na área da mental.
        </p>

        <p>
            Nossa experiência anterior na área da <strong>comunicação</strong>{" "}
            e da <strong>tecnologia</strong> nos permitiram criar essa
            plataforma pensando em conectar terapeutas e pessoas em busca de
            terapia.
        </p>

        <a href="#saiba-mais" className={styles.button}>
            Saiba mais
            <img src="/assets/seta.png" alt="" className={styles.hid} />
        </a>
        </div>
    </div>
    </section>
);
}