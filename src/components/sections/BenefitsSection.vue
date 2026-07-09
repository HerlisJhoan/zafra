<script setup lang="ts">
import { ref } from 'vue'
import { benefits } from '@/data/content'

const activeBenefit = ref(0)
</script>

<template>
  <section id="beneficios" class="section-padding bg-white position-relative overflow-hidden">
    <!-- Imagen de fondo decorativa absoluta (Mockup de rodilla y círculos) -->
    <div class="benefits-bg-decor d-none d-md-block">
      <img src="/gallery/benefits_bg_graphic.webp" alt="Fondo decorativo de regeneración de rodilla" class="knee-float-anim" loading="lazy" />
    </div>

    <v-container class="position-relative" style="z-index: 2;">
      <!-- Encabezado de dos columnas (Igual al mockup) -->
      <v-row class="mb-1">
        <v-col cols="12" md="7" lg="6" class="text-left reveal">
          <div class="d-flex align-center gap-3 mb-2">
            <span class="section-badge text-uppercase font-weight-bold text-primary">Terapia Destacada</span>
            <div class="header-line"></div>
          </div>
          <h2 class="section-title font-weight-bold text-slate mt-2" style="font-size: 2.5rem; line-height: 1.15;">
            ¿Cómo ayuda el PRP en la Rodilla?
          </h2>
          <p class="section-subtitle text-slate-muted mt-4" style="font-size: 1.1rem; line-height: 1.6;">
            El Plasma Rico en Plaquetas (PRP) es un preparado autólogo concentrado que estimula de manera natural la
            recuperación de tejidos.
          </p>
        </v-col>
      </v-row>

      <v-row class="justify-center mt-6">
        <v-col cols="12" lg="10" class="reveal">
          <v-card class="rounded-xl elevation-3 overflow-hidden border-light">
            <v-row no-gutters class="align-stretch">
              <!-- Columna de pestañas (Izquierda) -->
              <v-col cols="12" md="4" class="bg-tabs-list px-3 py-4 border-right">
                <v-list bg-color="transparent" class="d-flex flex-column gap-2">
                  <v-list-item v-for="(item, idx) in benefits" :key="idx" :value="idx"
                    :class="['benefit-tab-item rounded-lg py-3 px-4', activeBenefit === idx ? 'active-tab' : '']"
                    @click="activeBenefit = idx">
                    <template v-slot:prepend>
                      <v-avatar :color="activeBenefit === idx ? 'rgba(255, 255, 255, 0.15)' : 'rgba(9, 79, 42, 0.08)'" size="38" class="mr-3">
                        <v-icon :color="activeBenefit === idx ? 'white' : 'primary'">{{ item.icon }}</v-icon>
                      </v-avatar>
                    </template>
                    <v-list-item-title :class="['font-weight-bold text-body-1', activeBenefit === idx ? 'text-white' : 'text-slate']">
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>

              <!-- Columna de contenido (Derecha) -->
              <v-col cols="12" md="8" class="pa-6 pa-md-8 d-flex flex-column justify-center bg-white text-left">
                <v-window v-model="activeBenefit" transition="fade-transition">
                  <v-window-item v-for="(item, idx) in benefits" :key="idx" :value="idx">
                    <div class="d-flex align-center mb-4">
                      <v-icon size="32" :color="item.color" class="mr-3">{{ item.icon }}</v-icon>
                      <h3 class="text-h6 font-weight-black text-slate leading-tight">{{ item.subtitle }}</h3>
                    </div>
                    <v-divider class="mb-4"></v-divider>
                    <p class="text-body-2 text-slate-muted leading-relaxed mb-6" style="font-size: 0.95rem;">
                      {{ item.desc }}
                    </p>
                    
                    <!-- Callout de Efecto del tratamiento (Mockup) -->
                    <div class="benefit-quote border-left-colored py-4 px-5 bg-quote rounded-r-lg d-flex align-start"
                      :style="{ borderColor: item.color }">
                      <v-avatar :color="item.color" size="32" class="mr-3 text-white flex-shrink-0 mt-0.5">
                        <v-icon size="18">mdi-shield-check</v-icon>
                      </v-avatar>
                      <div>
                        <span class="font-weight-black text-caption text-uppercase" :style="{ color: item.color }" style="letter-spacing: 0.5px;">
                          Efecto del Tratamiento
                        </span>
                        <p class="text-body-2 font-italic text-slate mb-0 mt-1" style="line-height: 1.5;">
                          La aplicación dirigida disminuye el dolor y estimula la regeneración del cartílago sin los
                          efectos secundarios adversos de los corticoides.
                        </p>
                      </div>
                    </div>
                  </v-window-item>
                </v-window>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <!-- Banner de Beneficios Comprobados (Mockup) -->
      <v-row class="justify-center mt-12 reveal">
        <v-col cols="12" lg="10">
          <v-card class="symptom-cta-card rounded-xl overflow-hidden d-flex flex-column flex-sm-row align-center pa-6 pa-md-8 elevation-4 border-light">
            <v-img src="/gallery/prp.jpeg" contain height="200" class="symptom-cta-img rounded-lg mr-sm-6 mb-6 mb-sm-0" alt="Beneficios articulaciones"></v-img>
            
            <div class="d-flex flex-column flex-grow-1 text-left">
              <div class="d-flex align-start mb-3">
                <v-avatar color="rgba(9, 79, 42, 0.08)" size="44" class="mr-3 text-primary flex-shrink-0 d-none d-sm-flex">
                  <v-icon size="22">mdi-shield-check-outline</v-icon>
                </v-avatar>
                <div>
                  <h3 class="text-h6 font-weight-black text-slate leading-tight">Beneficios comprobados del PRP</h3>
                  <p class="text-body-2 text-slate-muted mt-2 mb-0" style="max-width: 500px;">
                    Un tratamiento seguro, mínimamente invasivo y elaborado con tu propia sangre, sin riesgo de rechazo.
                  </p>
                </div>
              </div>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.benefits-bg-decor {
  position: absolute;
  top: 0px;
  right: 0px;
  width: 44%;
  max-width: 540px;
  z-index: 1;
  pointer-events: none;
}

.benefits-bg-decor img {
  width: 100%;
  height: auto;
  opacity: 0.95;
}

.knee-float-anim {
  animation: float-slow 5s ease-in-out infinite;
}

.bg-tabs-list {
  background-color: var(--slate-light) !important;
}

.border-right {
  border-right: 1px solid var(--border-light) !important;
}

.benefit-tab-item {
  cursor: pointer;
  transition: all 0.25s ease;
  background-color: #ffffff !important;
  border: 1px solid var(--border-light) !important;
  margin-bottom: 8px;
}

.benefit-tab-item:last-child {
  margin-bottom: 0;
}

.benefit-tab-item:hover {
  background-color: rgba(9, 79, 42, 0.04) !important;
}

.active-tab {
  background-color: var(--primary-color) !important;
  border-color: transparent !important;
  box-shadow: 0 4px 15px rgba(9, 79, 42, 0.25) !important;
}

.border-left-colored {
  border-left: 4px solid;
}

.bg-quote {
  background-color: rgba(9, 79, 42, 0.04) !important;
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
