<script setup lang="ts">
import { symptoms } from '@/data/content'
</script>

<template>
  <section id="sintomas" class="section-padding bg-white position-relative overflow-hidden">
    <!-- Imagen de fondo decorativa absoluta (Mockup de rodilla y círculos) -->
    <div class="symptoms-bg-decor d-none d-md-block">
      <img src="/gallery/symptoms_bg_graphic.png?v=2" alt="Fondo decorativo de rodilla" class="knee-float-anim" />
    </div>

    <v-container class="position-relative" style="z-index: 2;">
      <!-- Encabezado (Ocupa el lado izquierdo para dejar espacio a la imagen de la derecha) -->
      <v-row class="mb-1">
        <v-col cols="12" md="7" lg="6" class="text-left reveal">
          <div class="d-flex align-center gap-3 mb-2">
            <span class="section-badge text-uppercase font-weight-bold text-primary">Señales de Alerta</span>
            <div class="header-line"></div>
          </div>
          <h2 class="section-title font-weight-bold text-slate mt-2" style="font-size: 2.5rem; line-height: 1.15;">
            ¿Tienes alguno de estos síntomas?
          </h2>
          <p class="section-subtitle text-slate-muted mt-4" style="font-size: 1.1rem; line-height: 1.6;">
            Si identificas alguna de estas señales, es importante evaluarte con un médico especialista a tiempo.
          </p>
        </v-col>
      </v-row>

      <!-- Grid de Síntomas (4 tarjetas) -->
      <v-row class="justify-center">
        <v-col v-for="(item, idx) in symptoms" :key="idx" cols="12" sm="6" lg="3" class="reveal"
          :style="{ transitionDelay: `${idx * 80}ms` }">
          <v-card class="symptom-card lift-card rounded-xl h-100 border-light pa-6 d-flex flex-column text-left" elevation="2" style="background-color: #ffffff !important;">
            <v-avatar color="rgba(9, 79, 42, 0.08)" size="56" class="mb-4">
              <v-icon color="primary" size="28">{{ item.icon }}</v-icon>
            </v-avatar>
            <div>
              <h3 class="text-body-1 font-weight-bold text-slate mb-2">{{ item.title }}</h3>
              <p class="text-body-2 text-slate-muted mb-0" style="line-height: 1.5;">{{ item.desc }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <!-- Banner de Evaluación (Personalizado según mockup) -->
      <v-row class="justify-center mt-12 reveal">
        <v-col cols="12" lg="10">
          <v-card class="symptom-cta-card rounded-xl overflow-hidden d-flex flex-column flex-sm-row align-center pa-6 pa-md-8 elevation-4 border-light">
            <v-img src="/gallery/sintomas.jpeg" contain height="200" class="symptom-cta-img rounded-lg mr-sm-6 mb-6 mb-sm-0" alt="Síntomas rodilla"></v-img>
            
            <div class="d-flex flex-column flex-grow-1 text-left">
              <div class="d-flex align-start mb-3">
                <v-avatar color="primary" size="44" class="mr-3 text-white flex-shrink-0 d-none d-sm-flex">
                  <v-icon size="22">mdi-stethoscope</v-icon>
                </v-avatar>
                <div>
                  <h3 class="text-h6 font-weight-black text-slate leading-tight">¿Reconoces alguna de estas señales?</h3>
                  <p class="text-body-2 text-slate-muted mt-2 mb-4" style="max-width: 500px;">
                    No esperes a que el dolor empeore. Una evaluación a tiempo marca la diferencia.
                  </p>
                </div>
              </div>
              
              <div>
                <v-btn size="large" color="primary" variant="flat"
                  class="action-btn px-6 font-weight-bold rounded-pill text-white" href="#citas" prepend-icon="mdi-calendar-check">
                  Quiero una Evaluación Médica
                </v-btn>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.symptoms-bg-decor {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 44%;
  max-width: 540px;
  z-index: 1;
  pointer-events: none;
}

.symptoms-bg-decor img {
  width: 100%;
  height: auto;
  opacity: 0.95;
}

.knee-float-anim {
  animation: float-slow 5s ease-in-out infinite;
}

.symptom-cta-card {
  background-color: var(--slate-light) !important;
}

.symptom-cta-img {
  width: 100%;
}

@media (min-width: 600px) {
  .symptom-cta-img {
    flex: 0 0 240px;
    width: 240px;
  }
}

@keyframes float-slow {
  0%, 100% {
    transform: translateY(0px);
  }
  50% {
    transform: translateY(-8px);
  }
}

.header-line {
  height: 1px;
  background-color: rgba(9, 79, 42, 0.2);
  width: 80px;
  display: inline-block;
}
</style>
