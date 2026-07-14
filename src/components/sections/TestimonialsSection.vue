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
    title: 'Artrosis y Desgaste Articular',
    desc: '¿El dolor en rodillas o caderas limita tu vida? Descubre qué es la artrosis, sus síntomas principales y las alternativas para aliviar el dolor.',
    img: '',
    videoSrc: '/testimonios-3.mp4',
    isCurrentlyPlaying: false
  },
  {
    title: 'Importancia del Diagnóstico',
    desc: 'Cada dolor es una señal. El Dr. Zafra te explica por qué una evaluación profesional y un diagnóstico oportuno marcan la diferencia.',
    img: '',
    videoSrc: '/testimonio-4.mp4',
    isCurrentlyPlaying: false
  },
  {
    title: 'Recupera tu Bienestar',
    desc: 'Nuestros tratamientos especializados te ayudan a recuperar tu movilidad. Conoce las recomendaciones del Dr. Zafra para tu salud articular.',
    img: '',
    videoSrc: '/testimonio-5.mp4',
    isCurrentlyPlaying: false
  }
])

const onVideoPlay = (event: Event) => {
  // Pause all other videos when one starts playing
  const allVideos = document.querySelectorAll('.video-player');
  allVideos.forEach((vid) => {
    if (vid !== event.target) {
      (vid as HTMLVideoElement).pause();
    }
  });
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

      <!-- Carrusel (Slide Group) de Videos -->
      <v-slide-group show-arrows class="pa-4 reveal custom-slide-group">
        <v-slide-group-item v-for="(item, idx) in mediaItems" :key="idx">
          <div class="px-3 py-4" style="width: 360px; max-width: 92vw; height: 100%;">
            <v-card class="media-card-item rounded-2xl overflow-hidden elevation-4 border-light h-100 d-flex flex-column bg-white mx-auto">
            <!-- Contenedor multimedia (Video o Imagen) -->
            <div class="media-container position-relative overflow-hidden" style="height: 420px; background-color: #000000;">
              <!-- Video directo -->
              <div v-if="item.videoSrc" class="video-wrapper h-100 w-100">
                <video 
                  controls 
                  playsinline
                  class="w-100 h-100 d-block video-player" 
                  preload="none" 
                  :poster="item.img || undefined"
                  style="object-fit: contain; background-color: #000000;" 
                  @play="onVideoPlay"
                >
                  <source :src="item.videoSrc" type="video/mp4">
                  Tu navegador no soporta reproducción de videos.
                </video>
              </div>

              <!-- Imagen normal -->
              <div v-else class="image-wrapper h-100 w-100 position-relative bg-white">
                <v-img :src="item.img" class="h-100 w-100" cover></v-img>
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
              <div class="mt-auto pt-4">
                <v-btn
                  variant="tonal"
                  color="primary"
                  class="w-100 font-weight-bold text-none rounded-pill action-info-btn"
                  href="#citas"
                  append-icon="mdi-arrow-right"
                  height="44"
                >
                  Agendar una consulta
                </v-btn>
              </div>
            </v-card-text>
          </v-card>
          </div>
        </v-slide-group-item>
      </v-slide-group>
    </v-container>
  </section>
</template>

<style scoped>
/* Estilos Profesionales para las Flechas del Carrusel */
:deep(.v-slide-group__prev),
:deep(.v-slide-group__next) {
  background-color: #ffffff !important;
  border-radius: 50% !important;
  width: 52px !important;
  height: 52px !important;
  min-width: 52px !important;
  box-shadow: 0 4px 15px rgba(10, 124, 196, 0.25) !important;
  align-self: center !important;
  margin: 0 12px !important;
  transition: all 0.4s cubic-bezier(0.175, 0.885, 0.32, 1.275) !important;
  border: 1px solid rgba(10, 124, 196, 0.1);
  color: #0a7cc4 !important;
  z-index: 10;
}

:deep(.v-slide-group__prev.v-slide-group__prev--disabled),
:deep(.v-slide-group__next.v-slide-group__next--disabled) {
  opacity: 0.3 !important;
  box-shadow: none !important;
  transform: scale(0.9) !important;
}

:deep(.v-slide-group__prev:not(.v-slide-group__prev--disabled):hover),
:deep(.v-slide-group__next:not(.v-slide-group__next--disabled):hover) {
  background-color: #0a7cc4 !important;
  color: #ffffff !important;
  transform: scale(1.15) !important;
  box-shadow: 0 8px 25px rgba(10, 124, 196, 0.4) !important;
}

:deep(.v-slide-group__prev i),
:deep(.v-slide-group__next i) {
  font-size: 32px !important;
}

@media (max-width: 768px) {
  :deep(.v-slide-group__prev),
  :deep(.v-slide-group__next) {
    display: none !important;
  }
}

.video-player {
  border-radius: 16px 16px 0 0;
}

.action-info-btn {
  transition: all 0.3s ease;
}
.action-info-btn:hover {
  transform: translateY(-2px);
  background-color: #0a7cc4 !important;
  color: #ffffff !important;
}

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
  line-clamp: 2;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.card-desc {
  font-size: 0.95rem;
  line-height: 1.45;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
}

.action-play-btn {
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}
</style>
