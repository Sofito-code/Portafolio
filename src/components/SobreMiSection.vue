<script setup lang="ts">
import type { HeroData } from '../types'

defineProps<{
  data: HeroData
}>()
</script>

<template>
  <section class="section-box sobre-mi-grid">
    <div class="foto-box">
      <img :src="data.photoPath" :alt="data.name" class="foto-img" />
    </div>

    <div class="sobre-mi-right">
      <div class="info-header">
        <div class="iconos-box">
          <span class="icono-item">🎮</span>
          <span class="icono-item">💜</span>
          <span class="icono-item">🎨</span>
        </div>
        <div class="nombre-box">
          {{ data.name }}
          <small>· {{ data.role }}</small>
        </div>
      </div>

      <div class="bio-box">
        <span class="bio-quote">"</span>
        <p class="bio-text">{{ data.about }}</p>
      </div>

      <div class="skills-row">
        <div class="skill-mini">
          <span class="skill-mini-label">Soft skills</span>
          <span class="skill-mini-text">{{ data.softSkills }}</span>
        </div>
        <div class="skill-mini">
          <span class="skill-mini-label">Hard skills</span>
          <span class="skill-mini-text">{{ data.hardSkills }}</span>
        </div>
      </div>
    </div>
  </section>
</template>

<style scoped>
.sobre-mi-grid {
  display: grid;
  grid-template-columns: 160px 1fr;
  gap: 2rem;
  align-items: start;
}

.foto-box {
  border: 3px solid var(--color-primary);
  border-radius: 40px 40px 40px 8px;
  min-height: 190px;
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
  min-height: 190px;
}

.sobre-mi-right {
  display: flex;
  flex-direction: column;
  gap: 1rem;
}

.info-header {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  justify-content: space-between;
  gap: 0.8rem 1.5rem;
}

.iconos-box {
  border: 2px solid var(--color-border);
  border-radius: 60px;
  padding: 0.4rem 1.4rem;
  background: var(--color-bg);
  display: flex;
  align-items: center;
  gap: 0.6rem;
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.08);
}

.icono-item {
  font-size: 1.2rem;
}

.nombre-box {
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
  font-size: 0.9rem;
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

.skills-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 0.7rem;
}

.skill-mini {
  background: var(--color-bg);
  border: 1px solid var(--color-border);
  border-radius: 16px;
  padding: 0.6rem 1rem;
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
