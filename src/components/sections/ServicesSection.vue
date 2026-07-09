<script setup lang="ts">
import { regenerativeServices, generalServices } from '@/data/content'
</script>

<template>
  <section id="servicios" class="section-padding bg-white position-relative overflow-hidden">
    <!-- Imagen de fondo decorativa absoluta (Mockup de silueta y círculos) -->
    <div class="services-bg-decor d-none d-md-block">
      <img src="/gallery/services_bg_graphic.webp" alt="Fondo decorativo de servicios" class="body-float-anim" loading="lazy" />
    </div>

    <v-container class="position-relative" style="z-index: 2;">
      <!-- Encabezado de dos columnas (Igual al mockup) -->
      <v-row class="mb-14">
        <v-col cols="12" md="7" lg="6" class="text-left reveal">
          <div class="d-flex align-center gap-3 mb-2">
            <span class="section-badge text-uppercase font-weight-bold text-primary">Nuestros Servicios</span>
            <div class="header-line"></div>
          </div>
          <h2 class="section-title font-weight-bold text-slate mt-2" style="font-size: 2.5rem; line-height: 1.15;">
            Terapia Regenerativa y Medicina General
          </h2>
          <p class="section-subtitle text-slate-muted mt-4" style="font-size: 1.1rem; line-height: 1.6;">
            Un centro médico integral para el cuidado y la recuperación de tu salud, en un solo lugar.
          </p>
        </v-col>
      </v-row>

      <!-- Grupo 1: Terapia Regenerativa -->
      <div class="service-group-container mb-16 reveal">
        <!-- Badge de Grupo Centrado en el Borde -->
        <div class="service-group-badge">
          <v-icon size="18" class="mr-2">mdi-sprout</v-icon>
          TERAPIA REGENERATIVA
        </div>
        
        <v-row>
          <v-col v-for="(item, idx) in regenerativeServices" :key="idx" cols="12" sm="6" md="4" class="reveal"
            :style="{ transitionDelay: `${idx * 50}ms` }">
            <v-card class="service-card lift-card rounded-xl pa-6 h-100 border-light" elevation="2" style="background-color: #ffffff !important;">
              <v-avatar color="rgba(9, 79, 42, 0.08)" size="52" class="mb-4">
                <v-icon color="primary" size="26">{{ item.icon }}</v-icon>
              </v-avatar>
              <h4 class="text-body-1 font-weight-bold text-slate mb-2">{{ item.title }}</h4>
              <p class="text-body-2 text-slate-muted mb-0" style="line-height: 1.5;">{{ item.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Grupo 2: Medicina General y Laboratorio Clínico -->
      <div class="service-group-container mb-16 reveal">
        <!-- Badge de Grupo Centrado en el Borde -->
        <div class="service-group-badge">
          <v-icon size="18" class="mr-2">mdi-stethoscope</v-icon>
          MEDICINA GENERAL Y LABORATORIO CLÍNICO
        </div>

        <v-row>
          <v-col v-for="(item, idx) in generalServices" :key="idx" cols="12" sm="6" md="3" class="reveal"
            :style="{ transitionDelay: `${idx * 50}ms` }">
            <v-card class="service-card lift-card rounded-xl pa-6 h-100 border-light" elevation="2" style="background-color: #ffffff !important;">
              <v-avatar color="rgba(9, 79, 42, 0.08)" size="52" class="mb-4">
                <v-icon color="primary" size="26">{{ item.icon }}</v-icon>
              </v-avatar>
              <h4 class="text-body-1 font-weight-bold text-slate mb-2">{{ item.title }}</h4>
              <p class="text-body-2 text-slate-muted mb-0" style="line-height: 1.5;">{{ item.desc }}</p>
            </v-card>
          </v-col>
        </v-row>
      </div>

      <!-- Banner de Evaluación (Personalizado según mockup) -->
      <v-row class="justify-center mt-12 reveal">
        <v-col cols="12" lg="10">
          <v-card class="symptom-cta-card rounded-xl overflow-hidden d-flex flex-column flex-sm-row align-center pa-6 pa-md-8 elevation-4 border-light">
            <div class="d-flex flex-column flex-grow-1 text-left mr-sm-6 mb-6 mb-sm-0">
              <div class="d-flex align-start mb-4">
                <v-avatar color="rgba(9, 79, 42, 0.08)" size="44" class="mr-3 text-primary flex-shrink-0 d-none d-sm-flex">
                  <v-icon size="22">mdi-account-search-outline</v-icon>
                </v-avatar>
                <div>
                  <h3 class="text-h6 font-weight-black text-slate leading-tight">¿Para quién es ideal?</h3>
                  <p class="text-body-2 text-slate-muted mt-2 mb-4" style="max-width: 500px;">
                    Si practicas deporte, tienes artrosis o sientes desgaste articular, esta terapia puede ayudarte.
                  </p>
                </div>
              </div>
              
              <div>
                <v-btn size="large" color="primary" variant="flat"
                  class="action-btn px-6 font-weight-bold rounded-pill text-white" href="#citas" prepend-icon="mdi-calendar-check">
                  Consultar mi Caso
                </v-btn>
              </div>
            </div>

            <v-img src="/gallery/ideal-para-deportista.jpeg" contain height="200" class="symptom-cta-img rounded-lg" alt="Ideal para deportistas"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.services-bg-decor {
  position: absolute;
  top: 0px;
  right: -20px;
  width: 44%;
  max-width: 540px;
  z-index: 1;
  pointer-events: none;
}

.services-bg-decor img {
  width: 100%;
  height: auto;
  opacity: 0.95;
}

.body-float-anim {
  animation: float-slow 5s ease-in-out infinite;
}

.service-group-container {
  position: relative;
  border: 1px solid rgba(9, 79, 42, 0.12);
  background-color: rgba(9, 79, 42, 0.015);
  border-radius: 20px;
  padding: 44px 24px 24px 24px;
}

.service-group-badge {
  position: absolute;
  top: -20px;
  left: 50%;
  transform: translateX(-50%);
  background: linear-gradient(135deg, #094F2A 0%, #06361D 100%);
  color: white;
  font-weight: 700;
  font-size: 0.85rem;
  letter-spacing: 0.5px;
  padding: 8px 24px;
  border-radius: 50px;
  box-shadow: 0 4px 12px rgba(9, 79, 42, 0.2);
  display: flex;
  align-items: center;
  white-space: nowrap;
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
