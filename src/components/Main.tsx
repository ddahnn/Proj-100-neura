import React, { useEffect, useRef, useState } from "react";
import fotoCriadores from "../assets/dahn-nands-home.png";

// Importações do Swiper
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper/modules";

// Estilos obrigatórios do Swiper
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

interface Post {
    id: number;
    title: { rendered: string };
    link: string;
    excerpt: { rendered: string }; // Mapeado para trazer o resumo/meta descrição nativa
    _embedded?: {
        "wp:featuredmedia"?: Array<{
            source_url: string;
        }>;
    };
}

export const Main: React.FC = () => {
    const containerRef = useRef<HTMLDivElement>(null);
    const imageRef = useRef<HTMLImageElement>(null);

    const [posts, setPosts] = useState<Post[]>([]);
    const [loadingBlog, setLoadingBlog] = useState(true);

    useEffect(() => {
        // Efeito Parallax
        const handleScroll = () => {
            if (!containerRef.current || !imageRef.current) return;

            const containerRect = containerRef.current.getBoundingClientRect();
            const windowHeight = window.innerHeight;

            if (containerRect.top < windowHeight && containerRect.bottom > 0) {
                const velocidade = 0.35;
                const yPos = containerRect.top * velocidade;
                imageRef.current.style.transform = `translate3d(0, ${yPos}px, 0)`;
            }
        };

        window.addEventListener("scroll", handleScroll);
        handleScroll();

        // Fetch da API do 100neura
        const urlBlogDela = "https://100neura.com.br/wp-json/wp/v2/posts?per_page=4&_embed";

        fetch(urlBlogDela, {
            method: "GET",
            headers: {
                "Content-Type": "application/json"
            }
        })
            .then((response) => {
                if (!response.ok) throw new Error("Erro na requisição");
                return response.json();
            })
            .then((data) => {
                if (Array.isArray(data)) setPosts(data);
                setLoadingBlog(false);
            })
            .catch((error) => {
                console.error("Erro ao conectar com a API:", error);
                setLoadingBlog(false);
            });

        return () => {
            window.removeEventListener("scroll", handleScroll);
        };
    }, []);

    return (
        <div className="main" ref={containerRef}>
            <div className="container-main">
                
                {/* SEÇÃO PRINCIPAL (QUEM SOMOS) */}
                <div className="quem-somos">
                    <div className="container-parallax" ref={imageRef}>
                        <img
                            src={fotoCriadores}
                            alt="Nands e Dahn"
                            className="foto-criadores"
                        />
                    </div>

                    <div className="text-presentation">
                        <div className="container-interno">
                            <h2>Oi, prazer!</h2>
                            <h4>
                                <span className="green-text captalize">somos </span>
                                <span className="orange-text">Nands </span>
                                e
                                <span className="orange-text"> Dahn </span>
                                <span className="green-text">criadores do </span>
                                100neura
                            </h4>
                            <p>
                                Somos ambos <span className="bold-text">terapeutas neurodivergentes</span>, (Dahn é TDAH e fibromialgico e Nands autista), então sabemos especialmente a importância
                                de <span className="bold-text">um bom acompanhamento de saúde mental.</span>
                            </p>
                            <p>
                                Nossa experiência anterior na área da <span className="bold-text">comunicação</span> e da
                                <span className="bold-text"> tecnologia</span> nos permitiu criar essa plataforma thinking em
                                <span className="bold-text">conectar terapeutas e pessoas em busca de terapia.</span>
                            </p>
                            <div className="btn btn-saiba-mais">
                                <a href="#">saiba mais <img src="/src/assets/seta.png" alt="seta " className="hidden" /></a>
                            </div>
                        </div>
                    </div>
                </div>

                {/* SEÇÃO DO CARROSSEL DO BLOG */}
                <div className="secao-blog-carrossel">
                    <h2 className="titulo-secao-blog">Últimas postagens do <span className="green-text"> 100 neura</span> blog</h2>

                    {loadingBlog ? (
                        <p className="loading-blog-text">Carregando postagens...</p>
                    ) : (
                        <div className="carrossel-wrapper">
                            <Swiper
                                modules={[Navigation, Pagination]}
                                spaceBetween={25}
                                slidesPerView={1}
                                navigation={{
                                    nextEl: ".swiper-button-next-custom",
                                    prevEl: ".swiper-button-prev-custom",
                                }}
                                loop={true}
                                pagination={{ clickable: true }}
                                breakpoints={{
                                    640: { slidesPerView: 1.5 },
                                    768: { slidesPerView: 2 },
                                    1100: { slidesPerView: 3 } /* Fixa exatamente 3 na tela */
                                }}
                            >
                                {posts.map((post) => {
                                    const imagemUrl = post._embedded?.["wp:featuredmedia"]?.[0]?.source_url 
                                        || "https://via.placeholder.com/600x400";

                                    return (
                                        <SwiperSlide key={post.id}>
                                            <div className="card-post-blog">
                                                <img 
                                                    src={imagemUrl} 
                                                    alt={post.title.rendered} 
                                                    className="imagem-card-blog"
                                                />
                                                <div className="conteudo-card-blog">
                                                    <h3 
                                                        className="titulo-card-blog"
                                                        dangerouslySetInnerHTML={{ __html: post.title.rendered }}
                                                    />
                                                    
                                                    {/* Inserção da Meta Descrição / Resumo */}
                                                    <div 
                                                        className="resumo-card-blog"
                                                        dangerouslySetInnerHTML={{ __html: post.excerpt.rendered }}
                                                    />

                                                    <a 
                                                        href={post.link} 
                                                        target="_blank" 
                                                        rel="noopener noreferrer"
                                                        className="link-card-blog"
                                                    >
                                                        Ler post completo →
                                                    </a>
                                                </div>
                                            </div>
                                        </SwiperSlide>
                                    );
                                })}
                            </Swiper>

                            {/* Botões customizados colocados fora da tag do Swiper */}
                            <div className="swiper-button-prev swiper-button-prev-custom"></div>
                            <div className="swiper-button-next swiper-button-next-custom"></div>
                        </div>
                    )}
                </div>

            </div>
        </div>
    );
};