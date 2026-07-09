<script setup lang="ts">
import { treatmentAreas } from '@/data/content'
</script>

<template>
  <section class="py-1 bg-white">
    <v-container>
      <div class="text-center mb-8">
        <h2 class="text-h5 font-weight-black text-primary text-center mb-6">Tratamientos para cada articulación</h2>
      </div>
      <v-row class="justify-center">
        <v-col v-for="(item, idx) in treatmentAreas" :key="idx" cols="12" sm="6" md="3">
          <v-card class="treatment-card-mockup rounded-xl pa-5 h-100 border border-primary-light elevation-1 d-flex flex-column" href="#servicios" style="text-decoration: none;">
            <v-avatar color="primary-lighten-5" class="mb-4" size="48">
              <v-icon color="primary" size="24">{{ item.icon }}</v-icon>
            </v-avatar>
            <h3 class="text-body-1 font-weight-bold text-primary mb-2">{{ item.title }}</h3>
            <p class="text-caption text-grey-darken-2 mb-4 flex-grow-1">{{ item.desc }}</p>
            <span class="text-caption text-primary font-weight-bold d-flex align-center">
              Ver más
              <v-icon size="14" class="ml-1">mdi-arrow-right</v-icon>
            </span>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.treatment-card-mockup {
  position: relative;
  background: white !important;
  transition: all 0.4s cubic-bezier(0.165, 0.84, 0.44, 1) !important;
  z-index: 1;
  overflow: hidden;
}

.treatment-card-mockup::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(135deg, rgba(9, 79, 42, 0.05) 0%, rgba(122, 46, 67, 0.05) 100%);
  z-index: -1;
  opacity: 0;
  transition: opacity 0.4s ease;
}

.treatment-card-mockup:hover {
  transform: translateY(-8px) scale(1.02);
  border-color: rgba(122, 46, 67, 0.3) !important;
  box-shadow: 0 20px 40px rgba(9, 79, 42, 0.12),
              0 8px 24px rgba(122, 46, 67, 0.18) !important;
}

.treatment-card-mockup:hover::before {
  opacity: 1;
}

.treatment-card-mockup:hover .v-avatar {
  background-color: var(--primary-color) !important;
  transform: rotate(15deg) scale(1.1);
  box-shadow: 0 4px 12px rgba(9, 79, 42, 0.25);
  animation: medicalPulseRadar 1.4s infinite alternate ease-in-out;
}

@keyframes medicalPulseRadar {
  0% {
    box-shadow: 0 0 0 0 rgba(9, 79, 42, 0.5), 0 0 0 0 rgba(122, 46, 67, 0.3);
  }
  100% {
    box-shadow: 0 0 0 12px rgba(9, 79, 42, 0), 0 0 0 20px rgba(122, 46, 67, 0);
  }
}

@media (prefers-reduced-motion: reduce) {
  .treatment-card-mockup:hover .v-avatar {
    animation: none;
  }
}

.treatment-card-mockup:hover .v-avatar .v-icon {
  color: white !important;
}

.treatment-card-mockup:hover .text-primary {
  color: var(--secondary-color) !important;
}

.treatment-card-mockup:hover .text-primary .v-icon {
  transform: translateX(5px);
  transition: transform 0.3s ease;
}
</style>
