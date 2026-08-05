<script setup lang="ts">
import type { JobExperience, Education, ContactInfo } from "../types";

import linkedinIcon from "../assets/images/linkedin.svg";
import githubIcon from "../assets/images/github.svg";
import itchioIcon from "../assets/images/itchio.svg";
import cvIcon from "../assets/images/cv.svg";

defineProps<{
    contact: ContactInfo;
    experiences: JobExperience[];
    education: Education[];
}>();
</script>

<template>
    <section class="section-box exp-edu-grid">
        <!-- Experiencia -->
        <div>
            <h3 class="column-title">
                <span class="col-icon">💼</span>
                Experiencia
            </h3>
            <div class="col-content">
                <div v-for="(exp, i) in experiences" :key="i" class="exp-item">
                    <div class="exp-item-header">
                        <span class="exp-role">{{ exp.role }}</span>
                        <span class="exp-period">{{ exp.period }}</span>
                    </div>
                    <div class="exp-company">
                        {{ exp.company }} · {{ exp.location }}
                    </div>
                    <ul class="exp-achievements">
                        <li v-for="(ach, j) in exp.achievements" :key="j">
                            {{ ach }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>

        <!-- Educación -->
        <div>
            <h3 class="column-title">
                <span class="col-icon">🎓</span>
                Educación
            </h3>
            <div class="col-content">
                <div v-for="(edu, i) in education" :key="i" class="edu-item">
                    <span class="edu-degree">{{ edu.degree }}</span>
                    <span class="edu-institution">{{ edu.institution }}</span>
                    <span class="edu-meta"
                        >{{ edu.location }} · {{ edu.period }}</span
                    >
                </div>
            </div>
        </div>
    </section>
    <!-- Footer social / copy -->
    <div class="footer-meta">
        <div class="footer-socials">
            <a
                v-if="contact.linkedin"
                :href="contact.linkedin"
                target="_blank"
                rel="noopener"
                aria-label="LinkedIn"
                class="social-link"
            >
                <img :src="linkedinIcon" alt="" class="social-icon-img" />
            </a>
            <a
                v-if="contact.github"
                :href="contact.github"
                target="_blank"
                rel="noopener"
                aria-label="GitHub"
                class="social-link"
            >
                <img :src="githubIcon" alt="" class="social-icon-img" />
            </a>
            <a
                v-if="contact.itch"
                :href="contact.itch"
                target="_blank"
                rel="noopener"
                aria-label="Itch.io"
                class="social-link"
            >
                <img :src="itchioIcon" alt="" class="social-icon-img" />
            </a>
            <a
                v-if="contact.cv"
                :href="contact.cv"
                target="_blank"
                rel="noopener"
                aria-label="CV"
                class="social-link"
            >
                <img :src="cvIcon" alt="" class="social-icon-img" />
            </a>
            <a
                v-if="contact.email"
                :href="`mailto:${contact.email}`"
                aria-label="Email"
                class="social-link"
            >
                <span class="social-icon">✉️</span>
            </a>
        </div>
        <div class="footer-copy">
            © {{ new Date().getFullYear() }} · Sofia Vanegas Cordoba
        </div>
    </div>
</template>

<style scoped>
.exp-edu-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: start;
}

.column-title {
    border-bottom: 4px solid var(--color-primary);
    padding-bottom: 0.4rem;
    margin-bottom: 1.4rem;
    font-family: var(--font-display);
    font-size: 1.3rem;
    font-weight: 700;
    color: var(--color-text-bright);
    display: flex;
    align-items: center;
    gap: 0.5rem;
}

.col-icon {
    font-size: 1.3rem;
}

.col-content {
    display: flex;
    flex-direction: column;
    gap: 1rem;
}

/* Experience */
.exp-item {
    border-bottom: 1px solid var(--color-border);
    padding: 0 0.2rem 0.8rem 0.2rem;
}

.exp-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.exp-item-header {
    display: flex;
    justify-content: space-between;
    align-items: baseline;
    flex-wrap: wrap;
    gap: 0.4rem;
}

.exp-role {
    font-weight: 600;
    font-size: 1.05rem;
    color: var(--color-text-bright);
}

.exp-period {
    font-family: var(--font-mono);
    font-size: 0.8rem;
    color: var(--color-primary);
}

.exp-company {
    font-size: 0.85rem;
    color: var(--color-text-dim);
    margin: 0.2rem 0 0.4rem;
}

.exp-achievements {
    list-style: none;
}

.exp-achievements li {
    font-size: 0.9rem;
    color: var(--color-text-dim);
    line-height: 1.5;
    margin-bottom: 0.25rem;
    padding-left: 1rem;
    position: relative;
}

.exp-achievements li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: var(--color-primary);
    font-size: 0.6rem;
    top: 0.2rem;
}

/* Education */
.edu-item {
    display: flex;
    flex-direction: column;
    gap: 0.15rem;
    border-bottom: 1px solid var(--color-border);
    padding: 0 0.2rem 0.7rem 0.2rem;
}

.edu-item:last-child {
    border-bottom: none;
    padding-bottom: 0;
}

.edu-degree {
    font-weight: 600;
    font-size: 1.02rem;
    color: var(--color-text-bright);
}

.edu-institution {
    font-size: 0.9rem;
    color: var(--color-primary);
}

.edu-meta {
    font-size: 0.8rem;
    color: var(--color-text-dim);
}

/* Footer meta */
.footer-meta {
    margin-top: 2rem;
    padding-top: 1.5rem;
    border-top: 2px dashed var(--color-border);
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: center;
}

.footer-socials {
    display: flex;
    gap: 0.8rem;
}

.social-link {
    width: 48px;
    height: 48px;
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 1.4rem;
    text-decoration: none;
    border-radius: 14px;
    border: 2px solid var(--color-border);
    background: var(--color-bg);
    transition: all 0.2s ease;
    box-shadow: 0 3px 0 rgba(124, 58, 237, 0.3);
}

.social-link:hover {
    border-color: var(--color-primary);
    background: rgba(168, 85, 247, 0.12);
    transform: translateY(-2px);
    box-shadow: 0 6px 12px rgba(124, 58, 237, 0.35);
}

.social-link:active {
    transform: translateY(0);
    box-shadow: 0 2px 0 rgba(124, 58, 237, 0.3);
}

.social-icon-img {
    width: 24px;
    height: 24px;
    filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.3));
}

.social-icon {
    filter: drop-shadow(0 0 4px rgba(168, 85, 247, 0.3));
    line-height: 1;
}

.footer-copy {
    font-size: 0.85rem;
    color: var(--color-text-dim);
    opacity: 0.7;
}

@media (max-width: 720px) {
    .exp-edu-grid {
        grid-template-columns: 1fr;
        gap: 2rem;
    }

    .footer-meta {
        flex-direction: column;
        gap: 0.8rem;
        align-items: center;
        text-align: center;
    }
}
</style>
