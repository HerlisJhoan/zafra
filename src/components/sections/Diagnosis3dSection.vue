<script setup lang="ts">
import { ref, computed } from 'vue'
import { diagnosisSteps } from '@/data/content'
import { useIsMobile } from '@/composables/useIsMobile'

const activeDiagPage = ref(0)
const { isMobile } = useIsMobile()

const isFirstPage = computed(() => activeDiagPage.value === 0)
const isLastPage = computed(() => activeDiagPage.value === diagnosisSteps.length - 1)

const prevDiagPage = () => {
  if (activeDiagPage.value > 0) activeDiagPage.value--
}

const nextDiagPage = () => {
  if (activeDiagPage.value < diagnosisSteps.length - 1) activeDiagPage.value++
}
</script>

<template>
  <section class="section-padding position-relative overflow-hidden bg-slate-soft">
    <div class="tech-grid-bg"></div>
    <v-container class="position-relative" style="z-index: 2;">
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary px-3 py-1 bg-primary-light rounded-pill">Guía Médica</span>
        <h2 class="section-title font-weight-bold text-slate mt-4">¿Cómo se Diagnostica tu Rodilla?</h2>
        <div class="title-bar mx-auto mt-3"></div>
        <p class="section-subtitle text-slate-muted mx-auto mt-4">
          Desliza o haz clic en las tarjetas tridimensionales para ver los pasos de diagnóstico.
        </p>
      </div>

      <div class="diag-3d-scene mx-auto reveal" style="max-width: 900px;">
        <v-btn icon color="primary" class="deck-nav-btn prev-btn elevation-4" :disabled="isFirstPage" @click="prevDiagPage" aria-label="Tarjeta Anterior">
          <v-icon size="28">mdi-chevron-left</v-icon>
        </v-btn>

        <div class="diag-3d-viewport">
          <div class="diag-3d-carousel" :style="{ transform: 'rotateY(' + (activeDiagPage * -90) + 'deg)' }">
            <div v-for="(item, idx) in diagnosisSteps" :key="idx"
              :class="['diag-3d-carousel-card rounded-2xl overflow-hidden elevation-8 border border-primary-light', activeDiagPage === idx ? 'active-card' : 'inactive-card']"
              :style="{ transform: 'rotateY(' + (idx * 90) + 'deg) translateZ(' + (isMobile ? '160px' : '260px') + ')' }"
              @click="activeDiagPage = idx">
              <v-img :src="item.img" height="100%" width="100%" contain class="bg-white"></v-img>
            </div>
          </div>
        </div>

        <v-btn icon color="primary" class="deck-nav-btn next-btn elevation-4" :disabled="isLastPage" @click="nextDiagPage" aria-label="Siguiente Tarjeta">
          <v-icon size="28">mdi-chevron-right</v-icon>
        </v-btn>
      </div>

      <div class="d-flex justify-center gap-3 mt-10 reveal">
        <button v-for="(_, idx) in diagnosisSteps" :key="idx"
          :class="['diag-dot', activeDiagPage === idx ? 'diag-dot-active' : '']"
          @click="activeDiagPage = idx"
          :aria-label="`Ir al paso ${idx + 1}`">
        </button>
      </div>
    </v-container>
  </section>
</template>

<style scoped>
.diag-3d-scene {
  height: 480px;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
}

.diag-3d-viewport {
  width: 280px;
  height: 380px;
  perspective: 1200px;
  overflow: visible;
}

@media (min-width: 600px) {
  .diag-3d-viewport {
    width: 320px;
    height: 420px;
  }
}

.diag-3d-carousel {
  width: 100%;
  height: 100%;
  position: relative;
  transform-style: preserve-3d;
  transition: transform 0.8s cubic-bezier(0.25, 1, 0.5, 1);
}

.diag-3d-carousel-card {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 16px;
  background-color: white !important;
  box-shadow: 0 15px 35px rgba(11, 26, 54, 0.15) !important;
  backface-visibility: hidden;
  transition: opacity 0.8s ease, box-shadow 0.3s ease;
  cursor: pointer;
}

.active-card {
  opacity: 1;
  box-shadow: 0 25px 50px rgba(9, 79, 42, 0.25) !important;
}

.inactive-card {
  opacity: 0.45;
}

.deck-nav-btn {
  position: absolute !important;
  top: 50% !important;
  transform: translateY(-50%) !important;
  z-index: 100 !important;
  width: 48px !important;
  height: 48px !important;
  transition: all 0.3s ease !important;
}

.prev-btn {
  left: -20px !important;
}

.next-btn {
  right: -20px !important;
}

@media (min-width: 960px) {
  .prev-btn {
    left: 80px !important;
  }
  .next-btn {
    right: 80px !important;
  }
}

.deck-nav-btn:hover:not(:disabled) {
  transform: translateY(-50%) scale(1.1) !important;
}

.diag-dot {
  width: 12px;
  height: 12px;
  border-radius: 50%;
  background-color: rgba(9, 79, 42, 0.15);
  border: none;
  cursor: pointer;
  transition: all 0.3s ease;
}

.diag-dot-active {
  width: 32px;
  border-radius: 6px;
  background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%);
  box-shadow: 0 0 10px rgba(122, 46, 67, 0.5);
}
</style>
