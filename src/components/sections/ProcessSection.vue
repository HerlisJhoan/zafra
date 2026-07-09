<script setup lang="ts">
import { ref, computed } from 'vue'
import { processSteps } from '@/data/content'

const activeStep = ref(0)
const currentStep = computed(() => processSteps[activeStep.value] ?? processSteps[0]!)
</script>

<template>
  <section id="proceso" class="section-padding bg-slate-soft position-relative overflow-hidden">
    <div class="bio-particle bio-particle-1"></div>
    <div class="bio-particle bio-particle-2"></div>
    <div class="bio-particle bio-particle-3"></div>

    <v-container class="position-relative" style="z-index: 2;">
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary">Procedimiento</span>
        <h2 class="section-title font-weight-bold text-slate mt-2">¿Cómo se Obtiene el PRP?</h2>
        <p class="section-subtitle text-slate-muted mx-auto mt-3">
          Un protocolo médico riguroso y seguro para extraer y activar las plaquetas regeneradoras de tu propia
          sangre.
        </p>
      </div>

      <v-row class="justify-center">
        <v-col cols="12" lg="10" class="reveal">
          <v-row class="align-stretch">
            <v-col cols="12" md="5" class="d-flex flex-column gap-3 justify-center">
              <div v-for="(step, idx) in processSteps" :key="idx"
                :class="['step-card rounded-xl pa-5 cursor-pointer d-flex align-start', activeStep === idx ? 'step-card-active' : '']"
                @click="activeStep = idx">
                <v-avatar :color="activeStep === idx ? 'primary' : 'white'" size="44"
                  class="mr-4 shadow-sm text-white">
                  <v-icon :color="activeStep === idx ? 'white' : 'primary'">{{ step.icon }}</v-icon>
                </v-avatar>
                <div>
                  <h4 class="step-card-title font-weight-bold mb-1">{{ step.title }}</h4>
                  <p class="step-card-subtitle text-caption mb-0">{{ step.subtitle }}</p>
                </div>
              </div>
            </v-col>

            <v-col cols="12" md="7">
              <v-card class="step-detail-card rounded-xl overflow-hidden h-100 bg-white elevation-4 border-light d-flex flex-column">
                <div class="step-animation-container d-flex align-center justify-center position-relative py-8 overflow-hidden" style="min-height: 240px; background: linear-gradient(135deg, #0A2E1D 0%, #145C38 100%);">
                  <div class="tech-grid-bg" style="opacity: 0.15;"></div>

                  <v-fade-transition v-if="activeStep === 0">
                    <div class="d-flex flex-column align-center relative text-white" style="z-index: 5;">
                      <div class="pulse-ring"></div>
                      <v-icon size="64" color="pink-lighten-3" class="pulse-icon">mdi-needle</v-icon>
                      <span class="text-caption mt-4 font-weight-bold text-pink-lighten-3" style="letter-spacing: 1px;">MUESTRA DE SANGRE AUTÓLOGA</span>
                    </div>
                  </v-fade-transition>

                  <v-fade-transition v-if="activeStep === 1">
                    <div class="d-flex flex-column align-center relative text-white" style="z-index: 5;">
                      <div class="centrifuge-spin">
                        <v-icon size="28" color="pink-lighten-3" class="tube-1">mdi-test-tube</v-icon>
                        <v-icon size="28" color="pink-lighten-3" class="tube-2">mdi-test-tube</v-icon>
                      </div>
                      <v-icon size="64" color="pink-lighten-3" class="spin-icon">mdi-sync</v-icon>
                      <span class="text-caption mt-4 font-weight-bold text-pink-lighten-3" style="letter-spacing: 1px;">SEPARACIÓN EN CENTRÍFUGA (3200 RPM)</span>
                    </div>
                  </v-fade-transition>

                  <v-fade-transition v-if="activeStep === 2">
                    <div class="d-flex flex-column align-center relative text-white" style="z-index: 5;">
                      <div class="test-tube-separation d-flex flex-column align-center rounded-lg">
                        <div class="prp-layer d-flex align-center justify-center font-weight-black">PRP (Plaquetas)</div>
                        <div class="rbc-layer d-flex align-center justify-center font-weight-bold">Glóbulos Rojos</div>
                      </div>
                      <span class="text-caption mt-4 font-weight-bold text-pink-lighten-2" style="letter-spacing: 1px;">CONCENTRADO DE FACTORES DE CRECIMIENTO</span>
                    </div>
                  </v-fade-transition>

                  <v-fade-transition v-if="activeStep === 3">
                    <div class="d-flex flex-column align-center relative text-white" style="z-index: 5;">
                      <div class="joint-regeneration"></div>
                      <v-icon size="64" color="green-accent-3" class="pulse-icon">mdi-pulse</v-icon>
                      <span class="text-caption mt-4 font-weight-bold text-green-accent-2" style="letter-spacing: 1px;">ACTIVACIÓN BIOLÓGICA CELULAR</span>
                    </div>
                  </v-fade-transition>
                </div>

                <div class="pa-6 d-flex flex-column justify-center flex-grow-1">
                  <div class="d-flex align-center mb-3">
                    <v-icon color="primary" size="28" class="mr-2">{{ currentStep.icon }}</v-icon>
                    <h3 class="text-h6 font-weight-bold text-primary">{{ currentStep.title }}</h3>
                  </div>
                  <p class="text-body-1 text-slate-muted leading-relaxed mb-4">
                    {{ currentStep.desc }}
                  </p>
                  <v-chip color="primary" variant="tonal" size="small" class="align-self-start font-weight-bold">
                    🛡️ Proceso Bioseguro y Certificado
                  </v-chip>
                </div>
              </v-card>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.step-card {
  background: white;
  border: 1px solid var(--border-light);
}

.step-card-active {
  background: white !important;
  border-color: var(--primary-color) !important;
  box-shadow: 0 8px 25px rgba(9, 79, 42, 0.1);
}

.step-card-title {
  color: var(--slate-dark);
  font-size: 1rem;
}

.step-card-subtitle {
  color: var(--slate-muted);
}

.step-detail-card {
  transition: all 0.3s ease;
}

.centrifuge-spin {
  position: absolute;
  width: 120px;
  height: 120px;
  border: 2px dashed rgba(255, 255, 255, 0.25);
  border-radius: 50%;
  animation: centrifugeRotation 5s linear infinite;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 10px;
}

.tube-1 {
  transform: rotate(45deg);
}
.tube-2 {
  transform: rotate(-135deg);
}

@keyframes centrifugeRotation {
  100% {
    transform: rotate(360deg);
  }
}

.spin-icon {
  animation: centrifugeRotation 2s linear infinite;
}

.pulse-ring {
  position: absolute;
  width: 80px;
  height: 80px;
  border: 2px solid #00e5ff;
  border-radius: 50%;
  animation: ringPulseEffect 2s cubic-bezier(0.215, 0.61, 0.355, 1) infinite;
}

@keyframes ringPulseEffect {
  0% {
    transform: scale(0.6);
    opacity: 0.8;
  }
  100% {
    transform: scale(1.3);
    opacity: 0;
  }
}

.pulse-icon {
  animation: iconPulseEffect 1.5s ease-in-out infinite alternate;
}

@keyframes iconPulseEffect {
  0% {
    transform: scale(0.9);
  }
  100% {
    transform: scale(1.08);
  }
}

.test-tube-separation {
  width: 65px;
  height: 120px;
  border: 3px solid rgba(255, 255, 255, 0.8);
  border-radius: 0 0 32px 32px;
  overflow: hidden;
  background-color: rgba(255, 255, 255, 0.1);
  box-shadow: 0 0 20px rgba(255, 215, 0, 0.25);
}

.prp-layer {
  width: 100%;
  height: 48px;
  background: linear-gradient(180deg, #ffd700 0%, #ffb300 100%);
  color: #3e2723;
  font-size: 0.65rem;
  font-family: sans-serif;
  animation: goldPulseGlow 2s ease-in-out infinite alternate;
}

.rbc-layer {
  width: 100%;
  height: 72px;
  background: linear-gradient(180deg, #b71c1c 0%, #7f0000 100%);
  color: white;
  font-size: 0.65rem;
  font-family: sans-serif;
}

@keyframes goldPulseGlow {
  0% {
    box-shadow: inset 0 0 5px rgba(255,255,255,0.4);
    background: #ffd700;
  }
  100% {
    box-shadow: inset 0 0 15px rgba(255,255,255,0.8);
    background: #ffea00;
  }
}

.joint-regeneration {
  position: absolute;
  width: 90px;
  height: 90px;
  border-radius: 50%;
  background: rgba(0, 230, 118, 0.2);
  animation: biologicalWave 1.8s ease-out infinite;
}

@keyframes biologicalWave {
  0% {
    transform: scale(0.75);
    opacity: 0.9;
  }
  100% {
    transform: scale(1.45);
    opacity: 0;
  }
}

.bio-particle {
  position: absolute;
  border-radius: 50%;
  background: radial-gradient(circle, rgba(122, 46, 67, 0.08) 0%, rgba(9, 79, 42, 0) 70%);
  pointer-events: none;
  z-index: 1;
  animation: floatBioCell 12s ease-in-out infinite;
}

.bio-particle-1 {
  width: 150px;
  height: 150px;
  top: 8%;
  left: 3%;
  animation-delay: 0s;
}

.bio-particle-2 {
  width: 220px;
  height: 220px;
  bottom: 12%;
  right: 5%;
  animation-delay: -4s;
  animation-duration: 18s;
}

.bio-particle-3 {
  width: 100px;
  height: 100px;
  top: 45%;
  right: 15%;
  animation-delay: -7s;
  animation-duration: 15s;
}

@keyframes floatBioCell {
  0%, 100% {
    transform: translateY(0) scale(1) rotate(0deg);
  }
  50% {
    transform: translateY(-24px) scale(1.08) rotate(45deg);
  }
}

@media (prefers-reduced-motion: reduce) {
  .bio-particle {
    animation: none;
  }
}
</style>
