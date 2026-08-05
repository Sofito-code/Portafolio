<script setup lang="ts">
import type { SkillCategory, ToolCategory } from "../types";

defineProps<{
    skills: SkillCategory[];
    tools: ToolCategory[];
}>();
</script>

<template>
    <footer class="section-box">
        <div class="habilidades-grid">
            <!-- Habilidades -->
            <div class="habilidad-block">
                <h4 class="column-title">
                    <span class="col-icon">⚡</span>
                    Habilidades
                </h4>
                <div
                    v-for="cat in skills"
                    :key="cat.category"
                    class="skill-group"
                >
                    <span class="skill-group-label">{{ cat.category }}</span>
                    <div class="skill-tags">
                        <span
                            v-for="item in cat.items"
                            :key="item"
                            class="skill-tag"
                        >
                            {{ item }}
                        </span>
                    </div>
                </div>
            </div>

            <!-- Herramientas -->
            <div class="habilidad-block">
                <h4 class="column-title">
                    <span class="col-icon">🛠️</span>
                    Herramientas
                </h4>
                <div
                    v-for="cat in tools"
                    :key="cat.category"
                    class="skill-group"
                >
                    <span class="skill-group-label">{{ cat.category }}</span>
                    <div class="skill-tags">
                        <span
                            v-for="item in cat.items"
                            :key="item"
                            class="skill-tag tool"
                        >
                            {{ item }}
                        </span>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped>
.habilidades-grid {
    display: grid;
    grid-template-columns: 1fr 1fr;
    gap: 2.5rem;
    align-items: start;
}

.habilidad-block {
    background: var(--color-bg);
    border-radius: 28px;
    padding: 1.4rem 1.6rem 1.6rem;
    border: 1px solid var(--color-border);
}

.column-title {
    border-bottom: 3px solid var(--color-primary);
    padding-bottom: 0.4rem;
    margin-bottom: 1rem;
    font-family: var(--font-display);
    font-size: 1.2rem;
    font-weight: 700;
    color: var(--color-text-bright);
    display: flex;
    align-items: center;
    gap: 0.4rem;
}

.col-icon {
    font-size: 1.2rem;
}

.skill-group {
    margin-bottom: 0.8rem;
}

.skill-group:last-child {
    margin-bottom: 0;
}

.skill-group-label {
    display: block;
    font-family: var(--font-mono);
    font-size: 0.72rem;
    text-transform: uppercase;
    letter-spacing: 1.2px;
    color: var(--color-primary);
    margin-bottom: 0.35rem;
}

.skill-tags {
    display: flex;
    flex-wrap: wrap;
    gap: 0.35rem;
}

.skill-tag {
    display: inline-block;
    background: var(--color-surface);
    border: 2px solid var(--color-border);
    border-radius: 60px;
    padding: 0.35rem 0.9rem;
    font-weight: 500;
    font-size: 0.85rem;
    color: var(--color-text);
    box-shadow: 0 2px 0 rgba(124, 58, 237, 0.25);
    transition: all 0.15s ease;
}

.skill-tag:hover {
    background: rgba(168, 85, 247, 0.06);
    transform: translateY(-2px);
    box-shadow: 0 4px 0 rgba(124, 58, 237, 0.3);
}

.skill-tag.tool {
    color: var(--color-accent);
    border-color: rgba(168, 85, 247, 0.3);
}

@media (max-width: 720px) {
    .habilidades-grid {
        grid-template-columns: 1fr;
        gap: 1.8rem;
    }
}
</style>
