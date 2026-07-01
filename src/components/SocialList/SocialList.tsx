import { FaInstagram, FaWhatsapp, FaLinkedinIn} from "react-icons/fa";
import styles from "./SocialList.module.css";

export function SocialList() {
return (
    <div className={styles.socialIcons}>
    <a
        href="https://www.instagram.com/100neura.com.br"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.instaLink}
        aria-label="Instagram"
    >
        <FaInstagram />
    </a>

    <a
        href="https://wa.me/5551981953984?text=Olá!%20Gostaria%20de%20saber%20mais%20sobre%20os%20serviços%20da%20100%20Neura."
        target="_blank"
        rel="noopener noreferrer"
        className={styles.whatslLink}
        aria-label="WhatsApp"
    >
        <FaWhatsapp />
    </a>

    <a
        href="https://www.linkedin.com/company/100-neura"
        target="_blank"
        rel="noopener noreferrer"
        className={styles.linkedInLink}
        aria-label="LinkedIn"
    >
        <FaLinkedinIn />
    </a>


    </div>
);
}