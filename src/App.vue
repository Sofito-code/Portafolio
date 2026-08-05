<script setup lang="ts">
import { computed } from 'vue'
import { heroData, profileData, projectsData } from './data/portfolio'
import SobreMiSection from './components/SobreMiSection.vue'
import ProjectsCarousel from './components/ProjectsCarousel.vue'
import ExperienceEducation from './components/ExperienceEducation.vue'
import FooterSection from './components/FooterSection.vue'

const skills = computed(() => profileData.skills)
const tools = computed(() => profileData.tools)
</script>

<template>
  <div class="portfolio-page">
    <main class="wireframe-container">
      <!-- 1. Sobre Mi -->
      <SobreMiSection :data="heroData" />

      <!-- 2. Carrusel de Proyectos -->
      <ProjectsCarousel :projects="projectsData" />

      <!-- 3. Experiencia & Educación -->
      <ExperienceEducation
        :experiences="profileData.experiences"
        :education="profileData.education"
      />

      <!-- 4. Footer + Habilidades -->
      <FooterSection
        :contact="heroData.contact"
        :skills="skills"
        :tools="tools"
      />
    </main>
  </div>
</template>

<style scoped>
.portfolio-page {
  min-height: 100%;
  background: var(--color-bg);
  display: flex;
  justify-content: center;
  padding: 2.5rem 1.5rem;
}

.wireframe-container {
  max-width: 1100px;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

@media (max-width: 720px) {
  .portfolio-page {
    padding: 1.2rem 0.8rem;
  }
}
</style>
