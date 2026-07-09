<script setup lang="ts">
import { ADDRESS, PHONE_DISPLAY } from '@/config/contact'
</script>

<template>
  <section id="sedes" class="section-padding bg-slate-soft">
    <div class="tech-grid-bg"></div>
    <v-container class="position-relative" style="z-index: 2;">
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary px-3 py-1 bg-primary-light rounded-pill">Ubicación</span>
        <h2 class="section-title font-weight-bold mt-2">Visítanos en Tarapoto</h2>
        <div class="title-bar mx-auto mt-3"></div>
        <p class="section-subtitle text-slate-muted mx-auto mt-3">
          Nuestro consultorio cuenta con altos estándares de bioseguridad para tu comodidad.
        </p>
      </div>

      <v-row class="justify-center mt-6">
        <v-col cols="12" md="5" class="reveal">
          <v-card class="sede-card lift-card rounded-xl overflow-hidden elevation-4 h-100 d-flex flex-column border-light bg-white">
            <div class="sede-header-bg py-5 px-6 text-white d-flex align-center">
              <v-icon size="28" color="white" class="mr-3">mdi-map-marker-radius</v-icon>
              <div>
                <h3 class="font-weight-bold mb-0" style="font-size: 1.15rem;">Consultorio Barrio Huayco</h3>
                <p class="text-caption text-primary-light mb-0">Sede Principal</p>
              </div>
            </div>
            <div class="pa-6 flex-grow-1 text-left">
              <h4 class="font-weight-bold text-slate mb-2">Dirección:</h4>
              <p class="text-body-2 text-slate-muted mb-4">
                {{ ADDRESS.street }}, {{ ADDRESS.city }}, {{ ADDRESS.region }}, {{ ADDRESS.country }}. (Código postal {{ ADDRESS.postalCode }})
              </p>
              <v-divider class="mb-4"></v-divider>
              <h4 class="font-weight-bold text-slate mb-2">Horario:</h4>
              <p class="text-body-2 text-slate-muted mb-4 d-flex align-center">
                <v-icon color="primary" class="mr-2" size="18">mdi-clock-outline</v-icon>
                Lunes a Sábado: Previa cita programada.
              </p>
              <v-divider class="mb-4"></v-divider>
              <h4 class="font-weight-bold text-slate mb-2">Contacto:</h4>
              <p class="text-body-2 text-slate-muted mb-0 d-flex align-center">
                <v-icon color="primary" class="mr-2" size="18">mdi-whatsapp</v-icon>
                {{ PHONE_DISPLAY }}
              </p>
            </div>
            <div class="px-6 pb-6 mt-auto">
              <v-btn color="primary" variant="outlined" block class="action-btn rounded-lg"
                href="https://maps.google.com/?q=Jr.+Libertad+330+Barrio+Huayco+Tarapoto" target="_blank"
                rel="noopener">
                Ver en Google Maps Móvil
              </v-btn>
            </div>
          </v-card>
        </v-col>

        <v-col cols="12" md="7" class="reveal">
          <v-card class="rounded-xl overflow-hidden elevation-4 border-light h-100" style="min-height: 380px;">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.8569341775797!2d-76.366479!3d-6.4883499!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x91b9c7d24263dbab%3A0xbd85f67b57fa2b63!2sLibertad%20330%2C%20Tarapoto%2022201!5e0!3m2!1ses-419!2spe!4v1713500000000!5m2!1ses-419!2spe"
              width="100%"
              height="100%"
              style="border:0; min-height: 380px; width: 100%; display: block;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación Dr. Zafra Tarapoto"
            ></iframe>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.sede-card {
  background-color: white !important;
}

.sede-header-bg {
  background: linear-gradient(135deg, var(--primary-color) 0%, rgba(9, 79, 42, 0.85) 100%);
}
</style>
