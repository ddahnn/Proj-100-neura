import React from "react";
import styles from "./CardDescription.module.css";
import type { IconType } from "react-icons";


interface CardDescriptionProps {
    Icon?: IconType;
    title: string;
    description: string;
}

export const CardDescription: React.FC<CardDescriptionProps> = ({Icon, title, description}) => {
    return (
        <article className={styles.cardDescription}>
            <div className="titleArea">
                {Icon && <Icon className={styles.icon}/>}
                <h3>{title}</h3>
            </div>
            <div>
                {description}
            </div>
        </article>
    );
};

