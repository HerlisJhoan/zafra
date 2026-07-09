<script setup lang="ts">
import { heroSlides } from '@/data/content'

const emit = defineEmits<{
  (e: 'reserve-click'): void
}>()
</script>

<template>
  <!-- HERO SECTION - Responsivo y Adaptable para todo Dispositivo -->
  <section id="inicio" class="hero-section position-relative overflow-hidden">
    <v-row no-gutters class="w-100 align-stretch">
      
      <!-- Columna del Slider (Primero en Móvil, Segundo en Desktop) -->
      <v-col cols="12" md="5" lg="5" class="position-relative slider-column order-1 order-md-2" style="z-index: 1;">
        <!-- Slider de Fotos -->
        <v-carousel cycle interval="3000" hide-delimiters :show-arrows="false" class="right-carousel">
          <v-carousel-item v-for="(slide, idx) in heroSlides" :key="idx" :src="slide.img" cover class="right-slider-image"></v-carousel-item>
        </v-carousel>

        <!-- Capa de sombra sutil para armonizar el slider con el fondo -->
        <div class="position-absolute top-0 left-0 w-100 h-100" style="background: rgba(15, 32, 67, 0.05); pointer-events: none; z-index: 2;"></div>
      </v-col>

      <!-- Columna Izquierda: Información y Estadísticas (Segundo en Móvil, Primero en Desktop) -->
      <v-col cols="12" md="7" lg="7" class="d-flex align-center py-10 py-md-16 px-4 px-sm-8 px-md-12 px-lg-16 order-2 order-md-1" style="z-index: 2;">
        <div class="w-100 text-center text-md-left text-slate-dark max-width-container mx-auto">
          
          <!-- Badge Especialidad -->
          <div class="d-inline-flex align-center px-4 py-1.5 rounded-pill bg-blue-lighten-5 text-primary text-caption font-weight-bold mb-6 border border-blue-lighten-4 mx-auto mx-md-0">
            <v-icon size="16" class="mr-2" color="primary">mdi-shield-check</v-icon>
            Centro especializado en Terapia Regenerativa
          </div>

          <!-- Título Principal -->
          <h1 class="hero-main-title font-weight-black text-blue-darken-4 mb-4">
            Recupera la movilidad<br>
            <span class="text-primary">sin cirugía.</span>
          </h1>

          <!-- Descripción -->
          <p class="hero-lead text-grey-darken-2 mb-8 text-body-1 mx-auto mx-md-0" style="max-width: 600px; line-height: 1.6;">
            Especialistas en Plasma Rico en Plaquetas (PRP), Ácido Hialurónico y Terapia Regenerativa para el tratamiento del dolor articular.
          </p>

          <!-- Fila de Estadísticas -->
          <v-row class="mb-10 text-slate-dark justify-center justify-md-start">
            <v-col cols="6" sm="3" class="d-flex align-start text-left gap-2">
              <v-avatar color="white" size="38" class="flex-shrink-0 border border-blue-lighten-4 elevation-1">
                <v-icon color="primary" size="18">mdi-star</v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-black text-blue-darken-4 stats-number">4.9/5</div>
                <div class="text-caption text-grey-darken-1 leading-tight stats-label">Valoración promedio</div>
                <div class="d-flex mt-0.5">
                  <v-icon v-for="i in 5" :key="i" size="9" color="amber-darken-2">mdi-star</v-icon>
                </div>
              </div>
            </v-col>

            <v-col cols="6" sm="3" class="d-flex align-start text-left gap-2">
              <v-avatar color="white" size="38" class="flex-shrink-0 border border-blue-lighten-4 elevation-1">
                <v-icon color="primary" size="18">mdi-shield-check-outline</v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-black text-blue-darken-4 stats-number">+10 años</div>
                <div class="text-caption text-grey-darken-1 leading-tight stats-label">de experiencia</div>
              </div>
            </v-col>

            <v-col cols="6" sm="3" class="d-flex align-start text-left gap-2">
              <v-avatar color="white" size="38" class="flex-shrink-0 border border-blue-lighten-4 elevation-1">
                <v-icon color="primary" size="18">mdi-account-group-outline</v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-black text-blue-darken-4 stats-number">+500</div>
                <div class="text-caption text-grey-darken-1 leading-tight stats-label">pacientes atendidos</div>
              </div>
            </v-col>

            <v-col cols="6" sm="3" class="d-flex align-start text-left gap-2">
              <v-avatar color="white" size="38" class="flex-shrink-0 border border-blue-lighten-4 elevation-1">
                <v-icon color="primary" size="18">mdi-heart-pulse</v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-black text-blue-darken-4 stats-number">100%</div>
                <div class="text-caption text-grey-darken-1 leading-tight stats-label">tratamientos personalizados</div>
              </div>
            </v-col>
          </v-row>

          <!-- Botones de Acción -->
          <div class="d-flex flex-wrap gap-4 justify-center justify-md-start">
            <v-btn
              color="primary"
              variant="flat"
              size="large"
              class="action-btn px-6 px-sm-8 rounded-lg font-weight-bold text-white elevation-2"
              href="#citas"
              prepend-icon="mdi-calendar-month-outline"
              @click.prevent="emit('reserve-click')"
            >
              Reservar cita
            </v-btn>
            <v-btn
              color="primary"
              variant="outlined"
              size="large"
              class="action-btn px-6 px-sm-8 rounded-lg font-weight-bold"
              href="#servicios"
              prepend-icon="mdi-play"
              style="border-width: 2px; background: white;"
            >
              Ver tratamientos
            </v-btn>
          </div>
        </div>
      </v-col>

    </v-row>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: calc(100vh - 76px);
  margin-top: 76px;
  background: #f4f7fa;
  display: flex;
  align-items: center;
}

@media (min-width: 600px) {
  .hero-section {
    min-height: calc(100vh - 114px);
    margin-top: 114px;
  }
}

/* Manejo del carrusel en móvil vs desktop */
.slider-column {
  height: 280px;
}

.right-carousel {
  height: 280px !important;
  width: 100%;
}

@media (min-width: 960px) {
  .slider-column {
    height: auto;
  }
  .right-carousel {
    height: 100% !important;
    position: absolute;
    top: 0;
    left: 0;
  }
}

.hero-main-title {
  line-height: 1.15;
  font-size: 2.1rem;
  letter-spacing: -0.5px;
}

@media (min-width: 600px) {
  .hero-main-title {
    font-size: 2.8rem;
  }
}

@media (min-width: 960px) {
  .hero-main-title {
    font-size: 3.5rem;
  }
}

.stats-number {
  font-size: 0.95rem;
  line-height: 1.1;
}

.stats-label {
  font-size: 0.68rem;
}

@media (min-width: 600px) {
  .stats-number {
    font-size: 1.05rem;
  }
  .stats-label {
    font-size: 0.72rem;
  }
}

.max-width-container {
  max-width: 650px;
}

/* Forzar que las fotos se enfoquen correctamente en móvil y desktop */
.right-slider-image :deep(.v-img__img) {
  object-position: center 25% !important; /* Centrado y subido en móvil para ver las caras */
}

@media (min-width: 960px) {
  .right-slider-image :deep(.v-img__img) {
    object-position: 70% center !important; /* Posición para el split horizontal en pantallas grandes */
  }
}

.action-btn {
  text-transform: none !important;
  letter-spacing: 0.5px !important;
  transition: all 0.3s ease !important;
}

.action-btn:hover {
  transform: translateY(-2px);
}

.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }
.gap-4 { gap: 16px; }
</style>
