<script setup lang="ts">
import { ADDRESS, PHONE_DISPLAY } from '@/config/contact'
</script>

<template>
  <section id="sedes" class="section-padding bg-slate-soft" style="padding-top: 32px !important;">
    <div class="tech-grid-bg"></div>
    <v-container class="position-relative" style="z-index: 2;">
      <!-- Fila superior de información de contacto -->
      <v-row class="align-center mb-8">
        <!-- Título al lado izquierdo -->
        <v-col cols="12" md="4" class="reveal">
          <h2 class="title-contacto">
            Estamos en<br />
            <span class="highlight">CONTACTO</span><br />
            siempre.
          </h2>
        </v-col>

        <!-- Bloques de contacto al lado derecho (2 columnas) -->
        <v-col cols="12" md="8" class="reveal">
          <v-row>
            <!-- Columna de Nuestra Dirección -->
            <v-col cols="12" sm="6">
              <h3 class="info-title">Nuestra Dirección</h3>
              
              <div class="info-item">
                <div class="info-icon-wrapper">
                  <v-icon size="24" color="#0a7cc4">mdi-map-marker-outline</v-icon>
                </div>
                <div class="info-text">
                  {{ ADDRESS.street }}, {{ ADDRESS.city }}, {{ ADDRESS.region }} - {{ ADDRESS.country }}
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon-wrapper">
                  <v-icon size="24" color="#0a7cc4">mdi-calendar-clock-outline</v-icon>
                </div>
                <div class="info-text">
                  Lunes a Sábado: Previa cita programada.
                </div>
              </div>
            </v-col>

            <!-- Columna de Datos de Contacto -->
            <v-col cols="12" sm="6">
              <h3 class="info-title">Datos de Contacto</h3>

              <div class="info-item">
                <div class="info-icon-wrapper">
                  <v-icon size="24" color="#0a7cc4">mdi-phone-outline</v-icon>
                </div>
                <div class="info-text">
                  +51 {{ PHONE_DISPLAY }}
                </div>
              </div>

              <div class="info-item">
                <div class="info-icon-wrapper">
                  <v-icon size="24" color="#0a7cc4">mdi-email-outline</v-icon>
                </div>
                <div class="info-text">
                  zafracarrera1985@gmail.com
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>

      <!-- Fila inferior: Mapa de ancho completo -->
      <v-row>
        <v-col cols="12" class="reveal">
          <v-card class="rounded-xl overflow-hidden elevation-3 border-light position-relative" style="min-height: 400px; width: 100%;">
            <iframe
              src="https://maps.google.com/maps?q=Jr.%20Libertad%20330,%20Barrio%20Huayco,%20Tarapoto&t=&z=17&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="450"
              style="border:0; width: 100%; display: block;"
              allowfullscreen="true"
              loading="lazy"
              referrerpolicy="no-referrer-when-downgrade"
              title="Ubicación Dr. Zafra Tarapoto"
            ></iframe>
            
            <!-- Capa overlay de enlace para abrir mapa y ruta en pestaña nueva -->
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=-6.4896791,-76.3734005"
              target="_blank"
              rel="noopener"
              class="map-overlay-link d-flex align-center justify-center text-decoration-none"
            >
              <v-btn color="#0a7cc4" class="action-btn text-white rounded-pill px-6 font-weight-bold" prepend-icon="mdi-navigation-outline">
                Ver Mapa y Cómo Llegar
              </v-btn>
            </a>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.title-contacto {
  font-size: 2.8rem;
  line-height: 1.15;
  font-weight: 700;
  color: #1a548a;
}

.title-contacto .highlight {
  color: #0a7cc4;
  font-weight: 900;
  letter-spacing: 1px;
}

.info-title {
  font-size: 0.95rem;
  letter-spacing: 1.5px;
  font-weight: 800;
  color: #0a7cc4;
  text-transform: uppercase;
  margin-bottom: 16px;
}

.info-item {
  display: flex;
  align-items: flex-start;
  gap: 12px;
  margin-bottom: 16px;
}

.info-icon-wrapper {
  margin-top: 2px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.info-text {
  font-size: 1.15rem;
  line-height: 1.4;
  color: var(--slate-dark, #1c2e24);
  font-weight: 500;
}

.map-overlay-link {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(10, 124, 196, 0.04);
  z-index: 5;
  transition: all 0.3s ease;
}

.map-overlay-link:hover {
  background-color: rgba(10, 124, 196, 0.12);
}

.map-overlay-link :deep(.v-btn) {
  opacity: 0.95;
  transform: scale(1);
  transition: all 0.3s ease;
}

.map-overlay-link:hover :deep(.v-btn) {
  opacity: 1;
  transform: scale(1.06);
  box-shadow: 0 8px 24px rgba(10, 124, 196, 0.3);
}
</style>
