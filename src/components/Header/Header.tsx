import {  useEffect, useState,  FormEvent } from "react";
import styles from "./Header.module.css";

const menuItems = [
    { label: "Home", href: "/", title: "Ir para a página inicial" },
    { label: "Quem Somos", href: "#quem-somos", title: "Conheça o 100 Neura" },
    { label: "Busco Terapia", href: "#busco-terapia", title: "Encontre terapia online" },
    { label: "Sou Terapeuta", href: "#sou-terapeuta", title: "Área para terapeutas" },
    { label: "Blog", href: "#blog", title: "Leia conteúdos sobre saúde mental e terapia" },
];

export function Header() {
    const [isMenuOpen, setIsMenuOpen] = useState(false);
    const [isSearchOpen, setIsSearchOpen] = useState(false);
    const [searchTerm, setSearchTerm] = useState("");

    function closeMenu() {
        setIsMenuOpen(false);
    }

    function toggleMenu() {
        setIsMenuOpen((currentState) => !currentState);
    }

    /* Quando o menu abre no mobile/tablet, trava a rolagem do body.
       Quando fecha, remove essa trava. */
    useEffect(() => {
        document.body.classList.toggle("no-scroll", isMenuOpen);

        return () => {
            document.body.classList.remove("no-scroll");
        };
    }, [isMenuOpen]);

    /* Fecha o menu quando o usuário aperta Esc. */
    useEffect(() => {
        function handleKeyDown(event: KeyboardEvent) {
            if (event.key === "Escape") {
                closeMenu();
            }
        }

        document.addEventListener("keydown", handleKeyDown);

        return () => {
            document.removeEventListener("keydown", handleKeyDown);
        };
    }, []);

    function toggleSearch() {
        setIsSearchOpen((currentState) => !currentState);
    }
    
    function handleSearchSubmit(event: FormEvent<HTMLFormElement>){
        event.preventDefault();
    
        const cleanedSearch = searchTerm.trim();
    
        if (!cleanedSearch) {
            return;
        }
    
        window.location.href = `/search?q=${encodeURIComponent(cleanedSearch)}`;
    }

    return (
        <header className={styles.header}>
            <div className={styles.headerContent}>
                <figure className={styles.logoContainer}>
                    <a href="/" aria-label="Página inicial do 100 Neura">
                        <img
                            src="../assets/100-neura-logo-grande-escuro.png"
                            alt="Logo 100 Neura - terapia para quem sente o mundo diferente"
                        />
                    </a>
                </figure>

                <nav
                    id="main-menu"
                    className={`${styles.nav} ${isMenuOpen ? styles.open : ""}`}
                    aria-label="Menu principal"
                >
                    <ul className={styles.menuList}>
                        {menuItems.map((item) => (
                            <li key={item.label} className={styles.menuItem}>
                                <a href={item.href} title={item.title} onClick={closeMenu}>
                                    {item.label}
                                </a>
                            </li>
                        ))}

                        <li className={styles.register}>
                            <a href="#cadastro" title="Cadastre-se no 100 Neura" onClick={closeMenu}>
                                Cadastre-se
                                <img
                                    src="../../../assets/arrow-white.png"
                                    alt=""
                                    className={styles.hiddenIcon}
                                />
                            </a>
                        </li>

                        <li className={styles.login}>
                            <a href="#login" title="Entrar na plataforma 100 Neura" onClick={closeMenu}>
                                Entrar
                                <img
                                    src="../assets/seta.png"
                                    alt=""
                                    className={styles.hiddenIcon}
                                />
                            </a>
                        </li>
                        <li className={styles.searchItem}>
                            <button
                                type="button"
                                className={styles.searchButton}
                                aria-label="Abrir pesquisa"
                                aria-expanded={isSearchOpen}
                                onClick={toggleSearch}
                            >
                                <img
                                    src="../assets/search.png"
                                    alt=""
                                    className={styles.searchIcon}
                                />
                            </button>

                            <form
                                className={`${styles.searchForm} ${isSearchOpen ? styles.open : ""}`}
                                onSubmit={handleSearchSubmit}
                            >
                                <input
                                    type="search"
                                    className={styles.searchInput}
                                    placeholder="Pesquisar..."
                                    value={searchTerm}
                                    onChange={(event) => setSearchTerm(event.target.value)}
                                />
                            </form>
                        </li>
                    </ul>
                </nav>

                <button
                    type="button"
                    className={styles.menuHamburguer}
                    aria-label="Abrir menu de navegação"
                    aria-expanded={isMenuOpen}
                    aria-controls="main-menu"
                    onClick={toggleMenu}
                >
                    <img
                        src="../assets/hamburger.png"
                        alt=""
                        className={styles.hamburguerIcon}
                    />
                </button>
            </div>

            {isMenuOpen && (
                <button
                    type="button"
                    className={styles.overlay}
                    aria-label="Fechar menu"
                    onClick={closeMenu}
                />
            )}
        </header>
    );
}



