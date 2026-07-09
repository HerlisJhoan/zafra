<script setup lang="ts">
const emit = defineEmits<{
  (e: 'reserve-click'): void
}>()
</script>

<template>
  <!-- HERO SECTION - Con imagen de fondo completa de la clínica y overlay legible -->
  <section id="inicio" class="hero-section position-relative overflow-hidden">
    <!-- Capa de overlay para legibilidad del texto en cualquier dispositivo -->
    <div class="hero-overlay"></div>
    
    <v-container class="position-relative h-100 d-flex align-start align-md-center pt-0 pt-md-0" style="z-index: 2;">
      <v-row class="w-100">
        <!-- Columna de Contenido (Alineado a la izquierda, igual que el mockup) -->
        <v-col cols="12" md="8" lg="6" class="text-left pt-2 pb-10 pt-md-16 pb-md-16">
          
          <!-- Badge Especialidad -->
          <div class="d-inline-flex align-center px-4 py-1.5 rounded-pill bg-primary-light text-primary text-caption font-weight-bold mb-6 border border-primary-light">
            <v-icon size="16" class="mr-2" color="primary">mdi-shield-check</v-icon>
            Centro especializado en Terapia Regenerativa
          </div>

          <!-- Título Principal -->
          <h1 class="hero-main-title font-weight-black text-slate mb-4">
            Dr. Zafra: recupera la movilidad<br>
            <span class="text-primary">sin cirugía.</span>
          </h1>

          <!-- Descripción -->
          <p class="hero-lead text-grey-darken-2 mb-8 text-body-1" style="max-width: 550px; line-height: 1.6;">
            Especialistas en Plasma Rico en Plaquetas (PRP), Ácido Hialurónico y Terapia Regenerativa para el tratamiento del dolor articular.
          </p>

          <!-- Fila de Estadísticas -->
          <v-row class="mb-10 text-slate-dark">
            <!-- 4.9/5 -->
            <v-col cols="6" sm="3" class="d-flex align-start gap-2 pr-1">
              <v-avatar color="white" size="38" class="flex-shrink-0 border border-primary-light elevation-1">
                <v-icon color="primary" size="18">mdi-star</v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-black text-primary stats-number">4.9/5</div>
                <div class="text-caption text-grey-darken-1 leading-tight stats-label">Valoración promedio</div>
                <div class="d-flex mt-0.5">
                  <v-icon v-for="i in 5" :key="i" size="9" color="secondary">mdi-star</v-icon>
                </div>
              </div>
            </v-col>

            <!-- Experiencia -->
            <v-col cols="6" sm="3" class="d-flex align-start gap-2 px-1">
              <v-avatar color="white" size="38" class="flex-shrink-0 border border-primary-light elevation-1">
                <v-icon color="primary" size="18">mdi-shield-check-outline</v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-black text-primary stats-number">+10 años</div>
                <div class="text-caption text-grey-darken-1 leading-tight stats-label">de experiencia</div>
              </div>
            </v-col>

            <!-- Pacientes -->
            <v-col cols="6" sm="3" class="d-flex align-start gap-2 px-1">
              <v-avatar color="white" size="38" class="flex-shrink-0 border border-primary-light elevation-1">
                <v-icon color="primary" size="18">mdi-account-group-outline</v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-black text-primary stats-number">+500</div>
                <div class="text-caption text-grey-darken-1 leading-tight stats-label">pacientes atendidos</div>
              </div>
            </v-col>

            <!-- Tratamientos -->
            <v-col cols="6" sm="3" class="d-flex align-start gap-2 pl-1">
              <v-avatar color="white" size="38" class="flex-shrink-0 border border-primary-light elevation-1">
                <v-icon color="primary" size="18">mdi-heart-pulse</v-icon>
              </v-avatar>
              <div>
                <div class="font-weight-black text-primary stats-number">100%</div>
                <div class="text-caption text-grey-darken-1 leading-tight stats-label">tratamientos personalizados</div>
              </div>
            </v-col>
          </v-row>

          <!-- Botones de Acción -->
          <div class="d-flex flex-wrap gap-4">
            <v-btn
              color="primary"
              variant="flat"
              size="large"
              class="action-btn px-8 rounded-lg font-weight-bold text-white elevation-2"
              href="#citas"
              prepend-icon="mdi-calendar-month-outline"
              @click.prevent="emit('reserve-click')"
            >
              Reservar cita
            </v-btn>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.hero-section {
  min-height: calc(100vh - 92px);
  margin-top: 92px;
  background: url('/modern_clinic.png') no-repeat right center;
  background-size: cover;
  position: relative;
}

/* El centrado vertical ya lo maneja el v-container (d-flex align-md-center);
   forzar flex aquí también hacía que el contenido se dimensionara por su
   ancho "sin envolver" en vez del ancho real del viewport, cortando el texto
   en pantallas angostas. */
.hero-section > .v-container,
.hero-section .v-container > .v-row {
  min-width: 0;
}

@media (min-width: 600px) {
  .hero-section {
    min-height: calc(100vh - 92px);
    margin-top: 92px;
  }
}

/* Overlay degradado premium para alta legibilidad del texto */
.hero-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: linear-gradient(90deg, rgba(251, 249, 245, 0.96) 0%, rgba(251, 249, 245, 0.75) 45%, rgba(251, 249, 245, 0) 100%);
  pointer-events: none;
  z-index: 1;
}

@media (max-width: 959px) {
  .hero-section {
    background-position: 72% center !important; /* Centra la recepción en móviles */
  }
  .hero-overlay {
    background: linear-gradient(180deg, rgba(251, 249, 245, 0.95) 0%, rgba(251, 249, 245, 0.8) 50%, rgba(251, 249, 245, 0.45) 100%) !important;
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
