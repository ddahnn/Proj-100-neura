import React from "react";
import styles from "./CardQuemSomos.module.css";


type CardQuemSomosProps = {
    image: string;
    name: string;
    role: string;
    paragraphs: React.ReactNode[];
    slug: string;
}


export default function CardQuemSomos({ image, name, role, paragraphs, slug}: CardQuemSomosProps) { 

    return (
        
        <article className={styles.cardQuemSomos}>
            <img src={image} alt={`Foto de ${name} membro fundador do 100 neura`} className={styles.image} />

            <h2 className={styles.name}>{name}</h2>
            
            <h3 className={styles.role}>{role}</h3>
            
            
            <div className={styles.textContent}>
                {paragraphs.map((paragraph, index) => (
            <p key={index}>{paragraph}</p>
            ))}
            </div>

            <a href={`/profissionais/${slug}`} className={styles.button}>
                Conheça meu trabalho como terapeuta
                <img src="/assets/seta.png" alt="" className={styles.hid} />
            </a>
        </article>
    )
}