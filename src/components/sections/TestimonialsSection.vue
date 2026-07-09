<script setup lang="ts">
import { ref } from 'vue'

interface MediaCard {
  title: string
  desc: string
  img: string
  videoSrc?: string
  isCurrentlyPlaying?: boolean
}

const mediaItems = ref<MediaCard[]>([
  {
    title: '¿Por qué elegir al Dr. Zafra?',
    desc: 'Conoce nuestra propuesta de valor, experiencia y estándares de bioseguridad en el consultorio de Tarapoto.',
    img: '/gallery/que-es-el-prp.jpeg',
    videoSrc: '/gallery/porque-elejirnos.mp4',
    isCurrentlyPlaying: false
  },
  {
    title: 'Testimonios de Pacientes',
    desc: 'Escucha las opiniones de pacientes reales y sus casos de éxito en la recuperación de su movilidad sin cirugía.',
    img: '/gallery/como-se-obtiene.jpeg',
    videoSrc: '/gallery/opinion.mp4',
    isCurrentlyPlaying: false
  },
  {
    title: 'Evaluación y Diagnóstico Clínico',
    desc: 'El Dr. Zafra realiza una evaluación médica minuciosa para determinar el nivel de desgaste articular en consulta.',
    img: '/gallery/slider/atendiendo.jpeg'
  },
  {
    title: 'Aplicación de Terapias Especializadas',
    desc: 'Procedimientos biológicos ambulatorios con altos estándares de calidad y confort para nuestros pacientes.',
    img: '/gallery/slider/ejemplo-7.jpeg'
  }
])

const playVideo = (idx: number) => {
  mediaItems.value.forEach((item, i) => {
    if (i === idx) {
      item.isCurrentlyPlaying = true
    } else {
      item.isCurrentlyPlaying = false
    }
  })
}
</script>

<template>
  <section class="section-padding bg-slate-soft position-relative">
    <div class="tech-grid-bg"></div>
    <v-container class="position-relative" style="z-index: 2;">
      <!-- Cabecera de la Sección -->
      <div class="text-center mb-10">
        <span class="section-badge text-uppercase font-weight-bold text-primary px-3 py-1 bg-primary-light rounded-pill">Galería y Videos</span>
        <h2 class="section-title-opinions font-weight-black mt-2">Nuestra Experiencia y Testimonios</h2>
        <div class="title-bar mx-auto mt-3"></div>
      </div>

      <!-- Grid de 4 cuadritos/tarjetas -->
      <v-row>
        <v-col v-for="(item, idx) in mediaItems" :key="idx" cols="12" sm="6" md="3" class="reveal">
          <v-card class="media-card-item rounded-xl overflow-hidden elevation-3 border-light h-100 d-flex flex-column bg-white">
            <!-- Contenedor multimedia (Video o Imagen) -->
            <div class="media-container position-relative overflow-hidden" style="height: 280px; background-color: #ffffff;">
              <!-- Video directo con fondo blanco -->
              <div v-if="item.videoSrc" class="video-wrapper bg-white h-100">
                <video controls class="w-100 h-100 d-block" preload="metadata" style="object-fit: contain; background-color: #ffffff; height: 280px;">
                  <source :src="item.videoSrc" type="video/mp4">
                  Tu navegador no soporta reproducción de videos.
                </video>
              </div>

              <!-- Imagen normal -->
              <div v-else class="image-wrapper position-relative">
                <v-img :src="item.img" height="280" cover></v-img>
              </div>
            </div>

            <!-- Información del Item -->
            <v-card-text class="pa-5 flex-grow-1 d-flex flex-column text-left">
              <h3 class="card-title font-weight-bold text-slate mb-2">
                {{ item.title }}
              </h3>
              <p class="card-desc text-slate-muted mb-4">
                {{ item.desc }}
              </p>

              <!-- Botones de Acción al pie -->
              <div class="mt-auto">
                <v-btn
                  variant="text"
                  color="primary"
                  class="px-0 font-weight-black text-uppercase action-play-btn"
                  href="#citas"
                >
                  Más información
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.section-title-opinions {
  font-size: 2.2rem;
  color: #1a548a;
}

.media-card-item {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff !important;
}

.media-card-item:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(10, 124, 196, 0.12) !important;
}

.media-container {
  width: 100%;
}

.video-wrapper {
  width: 100%;
  height: 100%;
}

.play-overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0, 0, 0, 0.2);
  cursor: pointer;
  transition: background-color 0.3s ease;
}

.play-overlay:hover {
  background-color: rgba(0, 0, 0, 0.4);
}

.play-btn-circle {
  color: #0a7cc4 !important;
  transform: scale(1);
  transition: transform 0.3s ease;
}

.play-overlay:hover .play-btn-circle {
  transform: scale(1.1);
}

.video-tag-badge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: #ff0000;
  color: #ffffff;
  font-size: 0.65rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 0.5px;
}

.card-title {
  font-size: 1.15rem;
  line-height: 1.3;
  color: #1c2e24;
  height: 2.6em;
  display: -webkit-box;
  -webkit-line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-desc {
  font-size: 0.95rem;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.action-play-btn {
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}
</style>
