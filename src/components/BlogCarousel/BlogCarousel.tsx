import { useEffect, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import styles from "./blogCarousel.module.css";

type FeaturedMedia = {
source_url?: string;
alt_text?: string;
};

type WordPressPost = {
id: number;
date: string;
link: string;
title: {
    rendered: string;
};
excerpt: {
    rendered: string;
};
_embedded?: {
    "wp:featuredmedia"?: FeaturedMedia[];
};
};

export default function BlogCarousel() {
    const [posts, setPosts] = useState<WordPressPost[]>([]);
    const [loading, setLoading] = useState<boolean>(true);

    const BLOG_URL = "https://100neura.com.br/";

    useEffect(() => {
        async function getPosts() {
        try {
            const response = await fetch(
            `${BLOG_URL}/wp-json/wp/v2/posts?per_page=7&_embed`
            );

            if (!response.ok) {
            throw new Error("Erro ao buscar posts do WordPress");
            }

            const data: WordPressPost[] = await response.json();
            setPosts(data);
        } catch (error) {
            console.error("Erro ao carregar posts:", error);
        } finally {
            setLoading(false);
        }
        }

    getPosts();
}, []);

function removeHtml(html: string): string {
    const div = document.createElement("div");
    div.innerHTML = html;
    return div.textContent || div.innerText || "";
}

function getFeaturedImage(post: WordPressPost): string {
    return (
    post._embedded?.["wp:featuredmedia"]?.[0]?.source_url ||
    "/images/blog-placeholder.jpg"
    );
}

function getImageAlt(post: WordPressPost): string {
    return (
    post._embedded?.["wp:featuredmedia"]?.[0]?.alt_text ||
    removeHtml(post.title.rendered)
    );
}

if (loading) {
    return (
    <section className={styles.blogCarousel}>
        <p className={styles.loading}>Carregando postagens...</p>
    </section>
    );
}

if (posts.length === 0) {
    return "Erro ao conectar ao blog.";
}

return (
    <section
    className={styles.blogCarousel}
    aria-labelledby="blog-carousel-title"
    >
    <div className={styles.header}>
            <div className={styles.eyebrow}> Blog <span className={styles.textGreen}> 100 {" "}</span><span className={`${styles.purpleText}, ${styles.uppercase}`}> Neura</span></div>

        <h2 id="blog-carousel-title" className={styles.title}>
        Últimas postagens
        </h2>

        <p className={styles.description}>
        Confira os conteúdos mais recentes do nosso blog.
        </p>
    </div>

    <Swiper
        className={styles.slider}
        modules={[Navigation, Pagination, Autoplay]}
        spaceBetween={16}
        slidesPerView={1.15}
        centeredSlides={false}
        navigation
        pagination={{ clickable: true }}
        autoplay={{
        delay: 5000,
        disableOnInteraction: false,
        }}
        breakpoints={{
        640: {
            slidesPerView:1,
            spaceBetween: 20,
        },
        1024: {
            slidesPerView: 3,
            spaceBetween: 24,
        },
        }}
    >
        {posts.map((post) => {
        const title = removeHtml(post.title.rendered);
        const excerpt = removeHtml(post.excerpt.rendered);

        return (
            <SwiperSlide key={post.id}>
            <article className={styles.card}>
                <a
                href={post.link}
                className={styles.cardLink}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`Ler postagem: ${title}`}
                >
                <img
                    src={getFeaturedImage(post)}
                    alt={getImageAlt(post)}
                    className={styles.cardImage}
                    loading="lazy"
                />

                <div className={styles.cardContent}>
                    <time className={styles.cardDate} dateTime={post.date}>
                    {new Date(post.date).toLocaleDateString("pt-BR", {
                        day: "2-digit",
                        month: "long",
                        year: "numeric",
                    })}
                    </time>

                    <h3 className={styles.cardTitle}>{title}</h3>

                    <p className={styles.cardExcerpt}>
                    {excerpt.length > 120
                        ? `${excerpt.slice(0, 120)}...`
                        : excerpt}
                    </p>

                    <span className={styles.cardButton}>Ler mais</span>
                </div>
                </a>
            </article>
            </SwiperSlide>
        );
        })}
    </Swiper>
    </section>
);
}