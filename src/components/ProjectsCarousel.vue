<script setup lang="ts">
import { ref, computed } from 'vue'
import type { ProjectData } from '../types'

const props = defineProps<{
  projects: ProjectData[]
}>()

const currentIndex = ref(0)

const currentProject = computed(() => props.projects[currentIndex.value])
const totalProjects = computed(() => props.projects.length)
const isFirst = computed(() => currentIndex.value === 0)
const isLast = computed(() => currentIndex.value >= totalProjects.value - 1)

function goTo(index: number) {
  currentIndex.value = index
}

function next() {
  if (!isLast.value) currentIndex.value++
}

function prev() {
  if (!isFirst.value) currentIndex.value--
}
</script>

<template>
  <section class="section-box">
    <h2 class="carrusel-title">
      <span class="title-icon">🎮</span>
      Proyectos
      <span class="project-counter">
        {{ String(currentIndex + 1).padStart(2, '0') }} /
        {{ String(totalProjects).padStart(2, '0') }}
      </span>
    </h2>

    <!-- Carousel Display -->
    <div class="carrusel-display">
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
          <div class="project-badges">
            <span class="badge year">{{ currentProject.year }}</span>
            <span class="badge genre">{{ currentProject.genre }}</span>
            <span class="badge platform">{{ currentProject.platform }}</span>
          </div>
          <h3 class="project-name">{{ currentProject.name }}</h3>
          <p class="project-desc">{{ currentProject.description }}</p>

          <div class="categories-row">
            <span
              v-for="cat in currentProject.categories"
              :key="cat"
              class="cat-tag"
            >
              {{ cat }}
            </span>
          </div>

          <div class="responsibilities-box">
            <span class="resp-label">Lo que hice</span>
            <p>{{ currentProject.responsibilities }}</p>
          </div>

          <div class="project-links">
            <a
              v-if="currentProject.playLink && currentProject.playLink !== '#'"
              :href="currentProject.playLink"
              target="_blank"
              rel="noopener"
              class="project-link play"
            >
              🎮 Jugar
            </a>
            <a
              v-if="currentProject.repoLink && currentProject.repoLink !== '#'"
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
      >
        <img :src="project.thumbnailPath" :alt="project.name" class="thumb-icon-img" />
        <span>{{ project.name }}</span>
      </button>
    </div>
  </section>
</template>

<style scoped>
.carrusel-title {
  text-align: center;
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
  gap: 1rem;
  margin-bottom: 1.5rem;
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
  gap: 1.5rem;
  align-items: flex-start;
  min-width: 0;
}

.project-media {
  flex-shrink: 0;
  width: 280px;
  border-radius: 16px;
  overflow: hidden;
  border: 2px solid var(--color-border);
  box-shadow: 0 0 16px rgba(124, 58, 237, 0.15);
}

.project-gif {
  width: 100%;
  aspect-ratio: 16 / 10;
  object-fit: cover;
  display: block;
  background: var(--color-bg-elevated);
}

.project-info {
  flex: 1;
  min-width: 0;
}

.project-badges {
  display: flex;
  gap: 0.4rem;
  flex-wrap: wrap;
  margin-bottom: 0.4rem;
}

.badge {
  font-family: var(--font-mono);
  font-size: 0.65rem;
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
  font-size: 1.4rem;
  color: var(--color-text-bright);
  margin-bottom: 0.4rem;
  text-shadow: 0 0 10px rgba(168, 85, 247, 0.2);
}

.project-desc {
  font-size: 0.82rem;
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
  font-size: 0.65rem;
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
  font-size: 0.6rem;
  text-transform: uppercase;
  letter-spacing: 1.2px;
  color: var(--color-primary);
  margin-bottom: 0.25rem;
}

.responsibilities-box p {
  font-size: 0.76rem;
  color: var(--color-text-dim);
  line-height: 1.45;
}

.project-links {
  display: flex;
  gap: 0.5rem;
}

.project-link {
  font-family: var(--font-mono);
  font-size: 0.75rem;
  text-decoration: none;
  padding: 0.35rem 0.8rem;
  border-radius: var(--radius-sm);
  transition: all 200ms ease;
}

.project-link.play {
  color: var(--color-text-bright);
  background: rgba(168, 85, 247, 0.15);
  border: 1px solid var(--color-primary);
}

.project-link.play:hover {
  background: rgba(168, 85, 247, 0.3);
  box-shadow: 0 0 10px rgba(124, 58, 237, 0.3);
}

.project-link.repo {
  color: var(--color-primary-glow);
  border: 1px solid var(--color-border);
}

.project-link.repo:hover {
  border-color: var(--color-primary);
  background: rgba(168, 85, 247, 0.08);
}

/* Minimap icon buttons */
.iconos-cuadrados {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 0.8rem;
}

.icono-btn {
  display: flex;
  align-items: center;
  gap: 0.45rem;
  padding: 0.5rem 1rem;
  border: 2px solid var(--color-border);
  border-radius: 60px;
  background: var(--color-bg);
  color: var(--color-text);
  font-family: var(--font-mono);
  font-size: 0.72rem;
  font-weight: 600;
  cursor: pointer;
  transition: all 0.15s ease;
  box-shadow: 0 2px 0 rgba(124, 58, 237, 0.3);
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
  color: var(--color-primary-glow);
}

.thumb-icon-img {
  width: 26px;
  height: 18px;
  border-radius: 4px;
  object-fit: cover;
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
  }

  .project-media {
    width: 100%;
  }

  .icono-btn {
    font-size: 0.65rem;
    padding: 0.4rem 0.7rem;
  }
}
</style>
