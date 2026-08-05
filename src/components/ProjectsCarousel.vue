<script setup lang="ts">
import { ref, computed } from "vue";
import type { ProjectData } from "../types";

const props = defineProps<{
    projects: ProjectData[];
}>();

const currentIndex = ref(0);

const currentProject = computed(() => props.projects[currentIndex.value]);
const totalProjects = computed(() => props.projects.length);
const isFirst = computed(() => currentIndex.value === 0);
const isLast = computed(() => currentIndex.value >= totalProjects.value - 1);

function goTo(index: number) {
    currentIndex.value = index;
}

function next() {
    if (!isLast.value) currentIndex.value++;
}

function prev() {
    if (!isFirst.value) currentIndex.value--;
}

/* Arrastrar con click izquierdo para navegar el carrusel */
const dragStartX = ref<number | null>(null);
const dragging = ref(false);
const suppressClick = ref(false);
const pointerCaptured = ref(false);
const DRAG_THRESHOLD = 60;
const CLICK_SLOP = 10;

function onDragStart(event: PointerEvent) {
    if (event.button !== 0) return; // solo botón izquierdo
    dragging.value = true;
    suppressClick.value = false;
    dragStartX.value = event.clientX;
    // La captura del puntero se hace al primer movimiento real (ver onDragMove),
    // para no robar el click de las flechas y botones del carrusel.
}

function onDragMove(event: PointerEvent) {
    if (!dragging.value || dragStartX.value === null) return;
    const delta = event.clientX - dragStartX.value;
    if (Math.abs(delta) > CLICK_SLOP) {
        suppressClick.value = true;
        if (!pointerCaptured.value) {
            try {
                (event.currentTarget as HTMLElement).setPointerCapture(
                    event.pointerId,
                );
                pointerCaptured.value = true;
            } catch {
                // el puntero ya no está activo; se ignora
            }
        }
    }
    // Cada DRAG_THRESHOLD px de arrastre avanza un slide (proporcional)
    const steps = Math.trunc(delta / DRAG_THRESHOLD);
    if (steps !== 0) {
        const target = Math.min(
            totalProjects.value - 1,
            Math.max(0, currentIndex.value - steps),
        );
        goTo(target);
        dragStartX.value = event.clientX; // permite arrastres continuos
    }
}

function onDragEnd() {
    dragging.value = false;
    dragStartX.value = null;
    pointerCaptured.value = false;
    setTimeout(() => {
        suppressClick.value = false;
    }, 0);
}

function onClickCapture(event: MouseEvent) {
    if (suppressClick.value) {
        event.preventDefault();
        event.stopPropagation();
    }
}
</script>

<template>
    <section class="section-box">
        <!-- Carousel Display -->
        <div
            class="carrusel-display"
            :class="{ dragging }"
            @pointerdown="onDragStart"
            @pointermove="onDragMove"
            @pointerup="onDragEnd"
            @pointercancel="onDragEnd"
            @click.capture="onClickCapture"
            @dragstart.prevent
        >
            <button
                class="carousel-arrow left"
                :class="{ hidden: isFirst }"
                :disabled="isFirst"
                aria-label="Proyecto anterior"
                @click="prev"
            >
                ◄
            </button>

            <div class="project-card">
                <div class="project-media">
                    <img
                        :src="currentProject.gifPath"
                        :alt="currentProject.name"
                        class="project-gif"
                    />
                </div>
                <div class="project-info">
                    <h3 class="project-name">{{ currentProject.name }}</h3>
                    <div class="project-badges">
                        <span class="badge year">{{
                            currentProject.year
                        }}</span>
                        <span class="badge genre">{{
                            currentProject.genre
                        }}</span>
                        <span class="badge platform">{{
                            currentProject.platform
                        }}</span>
                    </div>
                    <p class="project-desc">{{ currentProject.description }}</p>

                    <div class="responsibilities-box">
                        <span class="resp-label">Responsabilidades</span>
                        <ul class="resp-list">
                            <li
                                v-for="(
                                    resp, i
                                ) in currentProject.responsibilities"
                                :key="i"
                            >
                                {{ resp }}
                            </li>
                        </ul>
                    </div>
                    <div class="categories-row">
                        <span
                            v-for="cat in currentProject.categories"
                            :key="cat"
                            class="cat-tag"
                        >
                            {{ cat }}
                        </span>
                    </div>

                    <div class="project-links">
                        <a
                            v-if="
                                currentProject.playLink &&
                                currentProject.playLink !== '#'
                            "
                            :href="currentProject.playLink"
                            target="_blank"
                            rel="noopener"
                            class="project-link play"
                        >
                            🎮 Jugar
                        </a>
                        <a
                            v-if="
                                currentProject.repoLink &&
                                currentProject.repoLink !== '#'
                            "
                            :href="currentProject.repoLink"
                            target="_blank"
                            rel="noopener"
                            class="project-link repo"
                        >
                            &lt;/&gt; Repo
                        </a>
                    </div>
                </div>
            </div>

            <button
                class="carousel-arrow right"
                :class="{ hidden: isLast }"
                :disabled="isLast"
                aria-label="Siguiente proyecto"
                @click="next"
            >
                ►
            </button>
        </div>

        <!-- Minimap icon buttons -->
        <div class="iconos-cuadrados">
            <button
                v-for="(project, i) in projects"
                :key="project.id"
                class="icono-btn"
                :class="{ active: i === currentIndex }"
                @click="goTo(i)"
                :title="project.name"
                :aria-label="project.name"
            >
                <img
                    :src="project.iconPath"
                    :alt="project.name"
                    class="thumb-icon-img"
                />
            </button>
        </div>
    </section>
</template>

<style scoped>
.carrusel-title {
    text-align: center;
    font-family: var(--font-display);
    font-size: 1.5rem;
    font-weight: 700;
    color: var(--color-text-bright);
    margin-bottom: 1.8rem;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 0.6rem;
    text-shadow: 0 0 14px rgba(168, 85, 247, 0.3);
}

.title-icon {
    font-size: 1.6rem;
}

.project-counter {
    font-family: var(--font-mono);
    font-size: 0.7rem;
    color: var(--color-primary);
    margin-left: 0.2rem;
    background: var(--color-bg);
    padding: 0.2rem 0.5rem;
    border-radius: 8px;
    border: 1px solid var(--color-border);
}

/* Carousel Display */
.carrusel-display {
    display: flex;
    align-items: center;
    gap: 1.25rem;
    margin-bottom: 1.5rem;
    cursor: grab;
    touch-action: pan-y;
}

.carrusel-display.dragging {
    cursor: grabbing;
    user-select: none;
}

.carousel-arrow {
    flex-shrink: 0;
    width: 44px;
    height: 44px;
    border-radius: 50%;
    border: 2px solid var(--color-border);
    background: var(--color-bg);
    color: var(--color-primary);
    font-size: 1.1rem;
    cursor: pointer;
    display: flex;
    align-items: center;
    justify-content: center;
    transition: all 200ms ease;
}

.carousel-arrow:hover:not(:disabled) {
    border-color: var(--color-primary-glow);
    box-shadow: 0 0 12px rgba(124, 58, 237, 0.4);
    color: var(--color-primary-glow);
}

.carousel-arrow.hidden {
    opacity: 0.2;
    pointer-events: none;
}

.project-card {
    flex: 1;
    display: flex;
    gap: 2rem;
    align-items: stretch;
    min-width: 0;
    /* Altura fija definida por el proyecto con más contenido (Math/yx) */
    height: 560px;
}

.project-media {
    flex-shrink: 0;
    width: 780px;
    border-radius: 16px;
    overflow: hidden;
    border: 4px solid var(--color-border);
    box-shadow: 0 0 16px rgba(124, 58, 237, 0.15);
}

.project-gif {
    width: 100%;
    height: 100%;
    aspect-ratio: 16 / 10;
    object-fit: cover;
    display: block;
    background: var(--color-bg-elevated);
}

.project-info {
    flex: 1;
    min-width: 0;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
}

.project-badges {
    display: flex;
    gap: 0.4rem;
    flex-wrap: wrap;
    margin-bottom: 0.4rem;
}

.badge {
    font-family: var(--font-mono);
    font-size: 0.9rem;
    padding: 0.15rem 0.5rem;
    border-radius: 4px;
    text-transform: uppercase;
    letter-spacing: 0.5px;
}

.badge.year {
    background: rgba(168, 85, 247, 0.15);
    color: var(--color-primary-glow);
    border: 1px solid rgba(168, 85, 247, 0.25);
}

.badge.genre,
.badge.platform {
    background: var(--color-bg);
    color: var(--color-text-dim);
    border: 1px solid var(--color-border);
}

.project-name {
    font-family: var(--font-display);
    font-size: 1.9rem;
    color: var(--color-text-bright);
    margin-bottom: 0.4rem;
    text-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
}

.project-desc {
    font-size: 1rem;
    color: var(--color-text-dim);
    line-height: 1.5;
    margin-bottom: 0.6rem;
}

.categories-row {
    display: flex;
    flex-wrap: wrap;
    gap: 0.3rem;
    margin-bottom: 0.6rem;
}

.cat-tag {
    font-size: 0.85rem;
    color: var(--color-accent);
    background: rgba(168, 85, 247, 0.06);
    border: 1px solid rgba(168, 85, 247, 0.15);
    padding: 0.15rem 0.45rem;
    border-radius: var(--radius-sm);
}

.responsibilities-box {
    background: var(--color-bg);
    border: 1px solid var(--color-border);
    border-radius: 12px;
    padding: 0.6rem 0.9rem;
    margin-bottom: 0.7rem;
}

.resp-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.75rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--color-primary);
    margin-bottom: 0.3rem;
}

.resp-list {
    list-style: none;
    display: flex;
    flex-direction: column;
    gap: 0.4rem;
    margin: 0;
    padding: 0;
}

.resp-list li {
    font-size: 0.9rem;
    color: var(--color-text-dim);
    line-height: 1.45;
    padding-left: 1rem;
    position: relative;
}

.resp-list li::before {
    content: "▸";
    position: absolute;
    left: 0;
    color: var(--color-primary);
}

.project-links {
    display: flex;
    gap: 0.8rem;
    margin-top: 0.4rem;
}

.project-link {
    font-family: var(--font-mono);
    font-size: 0.85rem;
    font-weight: 700;
    letter-spacing: 0.5px;
    text-decoration: none;
    padding: 0.6rem 1.4rem;
    border-radius: 60px;
    display: inline-flex;
    align-items: center;
    gap: 0.4rem;
    transition: all 200ms ease;
    box-shadow: 0 4px 12px rgba(124, 58, 237, 0.25);
}

.project-link:hover {
    transform: translateY(-2px);
}

.project-link:active {
    transform: translateY(0);
}

.project-link.play {
    color: #ffffff;
    background: linear-gradient(
        135deg,
        var(--color-primary) 0%,
        var(--color-border-glow) 100%
    );
    border: 1px solid var(--color-primary-glow);
    box-shadow: 0 0 18px rgba(168, 85, 247, 0.45);
}

.project-link.play:hover {
    background: linear-gradient(
        135deg,
        var(--color-primary-glow) 0%,
        var(--color-primary) 100%
    );
    box-shadow: 0 0 28px rgba(168, 85, 247, 0.7);
}

.project-link.repo {
    color: var(--color-primary-glow);
    border: 2px solid var(--color-primary);
    background: rgba(168, 85, 247, 0.08);
}

.project-link.repo:hover {
    color: var(--color-text-bright);
    background: rgba(168, 85, 247, 0.22);
    box-shadow: 0 0 18px rgba(124, 58, 237, 0.5);
}

/* Minimap icon buttons */
.iconos-cuadrados {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 1rem;
}

.icono-btn {
    width: 80px;
    height: 80px;
    padding: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    border: 2px solid var(--color-border);
    border-radius: 12px;
    background: var(--color-bg);
    cursor: pointer;
    transition: all 0.15s ease;
    box-shadow: 0 2px 0 rgba(124, 58, 237, 0.3);
    overflow: hidden;
}

.icono-btn:hover {
    border-color: var(--color-primary);
    transform: translateY(-2px);
    box-shadow: 0 6px 0 rgba(124, 58, 237, 0.3);
    background: rgba(168, 85, 247, 0.06);
}

.icono-btn.active {
    border-color: var(--color-primary-glow);
    background: rgba(168, 85, 247, 0.12);
    box-shadow: 0 0 10px rgba(124, 58, 237, 0.3);
}

.thumb-icon-img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    background: var(--color-bg-elevated);
}

@media (max-width: 720px) {
    .carrusel-display {
        flex-direction: column;
        gap: 0.8rem;
    }

    .carousel-arrow {
        display: none;
    }

    .project-card {
        flex-direction: column;
        height: auto;
    }

    .project-media {
        width: 100%;
    }
}
</style>
