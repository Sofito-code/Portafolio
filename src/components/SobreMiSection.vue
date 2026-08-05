<script setup lang="ts">
import { computed } from "vue";
import type { HeroData } from "../types";

import linkedinIcon from "../assets/images/linkedin.svg";
import githubIcon from "../assets/images/github.svg";
import itchioIcon from "../assets/images/itchio.svg";
import cvIcon from "../assets/images/cv.svg";
import emailIcon from "../assets/images/email.svg";

// Palabras clave a resaltar en negrita dentro de data.about
const aboutKeywords = [
    "mecánicas",
    "iniciativa",
    "equipos",
    "aprendizaje constante",
    "compartir",
];

const props = defineProps<{
    data: HeroData;
}>();

const aboutHtml = computed(() => {
    // Escapar HTML del texto original antes de insertar <strong>
    const text = props.data.about
        .replace(/&/g, "&amp;")
        .replace(/</g, "&lt;")
        .replace(/>/g, "&gt;");
    // Ordenar de más larga a más corta para que frases como "aprendizaje constante" ganen a palabras sueltas
    const pattern = aboutKeywords
        .slice()
        .sort((a, b) => b.length - a.length)
        .map((keyword) => keyword.replace(/[.*+?^${}()|[\]\\]/g, "\\$&"))
        .join("|");
    if (!pattern) return text;
    const regex = new RegExp(`\\b(${pattern})\\b`, "gi");
    return text.replace(regex, "<strong>$1</strong>");
});
</script>

<template>
    <section class="section-box sobre-mi-grid">
        <div class="foto-box">
            <img :src="data.photoPath" :alt="data.name" class="foto-img" />
        </div>

        <div class="sobre-mi-right">
            <div class="info-header">
                <div class="nombre-box">
                    {{ data.name }}
                    <small>{{ data.role }}</small>
                </div>
            </div>

            <div class="bio-box">
                <p class="bio-text" v-html="aboutHtml"></p>
            </div>
            <div class="info-header">
                <div class="iconos-box">
                    <a
                        v-if="data.contact.linkedin"
                        :href="data.contact.linkedin"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="icono-link"
                        aria-label="LinkedIn"
                    >
                        <img :src="linkedinIcon" alt="" class="icono-img" />
                    </a>
                    <a
                        v-if="data.contact.github"
                        :href="data.contact.github"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="icono-link"
                        aria-label="GitHub"
                    >
                        <img :src="githubIcon" alt="" class="icono-img" />
                    </a>
                    <a
                        v-if="data.contact.itch"
                        :href="data.contact.itch"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="icono-link"
                        aria-label="itch.io"
                    >
                        <img :src="itchioIcon" alt="" class="icono-img" />
                    </a>
                    <a
                        v-if="data.contact.cv"
                        :href="data.contact.cv"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="icono-link"
                        aria-label="Descargar CV"
                    >
                        <img :src="cvIcon" alt="" class="icono-img" />
                    </a>
                    <a
                        v-if="data.contact.email"
                        :href="data.contact.email"
                        target="_blank"
                        rel="noopener noreferrer"
                        class="icono-link"
                        aria-label="Email"
                    >
                        <img :src="emailIcon" alt="" class="icono-img" />
                    </a>
                </div>
            </div>
        </div>
    </section>
</template>

<style scoped>
.sobre-mi-grid {
    display: grid;
    /* Columnas proporcionales: foto y contenido escalan juntos.
       Cambia el ratio (1fr 6fr) para ajustar la proporción. */
    grid-template-columns: minmax(80px, 1fr) minmax(0, 6fr);
    gap: clamp(1.25rem, 3vw, 2.5rem);
    align-items: stretch;
}

.foto-box {
    border: 3px solid var(--color-primary);
    border-radius: 40px 40px 40px 8px;
    min-height: 80px;
    min-width: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    overflow: hidden;
    background: var(--color-bg-elevated);
    box-shadow: 0 0 20px rgba(124, 58, 237, 0.15);
}

.foto-img {
    width: 100%;
    height: 100%;
    object-fit: cover;
}

.sobre-mi-right {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    /* Permite que el contenido se encoja/envuelva cuando la foto ocupa más espacio */
    min-width: 0;
}

.info-header {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    justify-content: center;
    gap: 0.8rem 1.5rem;
}

.iconos-box {
    border: 2px solid var(--color-border);
    border-radius: 60px;
    display: flex;
    align-items: center;
    justify-content: center;
    padding: 0.65rem 2.1rem;
    background: var(--color-bg);
    display: flex;
    align-items: center;
    gap: 1rem;
    box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.icono-link {
    display: inline-flex;
    align-items: center;
    justify-content: center;
    transition: transform 0.2s ease;
}

.icono-link:hover {
    transform: translateY(-2px);
}

.icono-img {
    width: 28px;
    height: 28px;
    display: block;
}

.icono-link:hover .icono-img {
    filter: drop-shadow(0 0 6px rgba(168, 85, 247, 0.55));
}

.nombre-box {
    font-family: var(--font-display);
    font-size: 1.8rem;
    font-weight: 700;
    border-bottom: 4px solid var(--color-primary);
    padding-bottom: 0.2rem;
    color: var(--color-text-bright);
    display: flex;
    align-items: center;
    gap: 0.5rem;
    text-shadow: 0 0 14px rgba(168, 85, 247, 0.25);
}

.nombre-box small {
    font-weight: 400;
    font-size: 1.8rem;
    color: var(--color-primary-glow);
    border-left: 2px solid var(--color-border);
    padding-left: 0.8rem;
    margin-left: 0.2rem;
}

.bio-box {
    border: 2px solid var(--color-border);
    border-radius: 24px 24px 24px 8px;
    padding: 1.2rem 1.8rem;
    background: var(--color-bg);
    display: flex;
    align-items: flex-start;
    gap: 0.8rem;
    color: var(--color-text);
    line-height: 1.6;
}

.bio-quote {
    font-family: var(--font-display);
    font-size: 2.5rem;
    color: var(--color-primary);
    line-height: 0.7;
    margin-top: 0.15rem;
    opacity: 0.6;
}

.bio-text {
    font-size: 0.92rem;
    color: var(--color-text-dim);
}

.bio-text strong {
    font-weight: 700;
    color: var(--color-primary-glow);
}

.skills-row {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 0.7rem;
}

.skill-mini {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 16px;
    padding: 1rem 1rem;
}

.skill-mini-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.65rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--color-primary);
    margin-bottom: 0.25rem;
}

.skill-mini-text {
    font-size: 0.76rem;
    color: var(--color-text-dim);
    line-height: 1.35;
}

@media (max-width: 720px) {
    .sobre-mi-grid {
        grid-template-columns: 1fr;
    }

    .foto-box {
        min-height: 140px;
        max-width: 160px;
        margin: 0 auto;
    }

    .nombre-box {
        font-size: 1.4rem;
    }

    .skills-row {
        grid-template-columns: 1fr;
    }
}
</style>
