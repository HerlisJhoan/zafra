<script setup lang="ts">
interface VideoItem {
  src: string
  title: string
  desc: string
}

const videos: VideoItem[] = [
  { src: '/gallery/porque-elejirnos.mp4', title: '¿Por qué elegir al Dr. Zafra?', desc: 'Nuestra propuesta de valor, experiencia y estándares de bioseguridad en Tarapoto.' },
  { src: '/gallery/opinion.mp4', title: 'Testimonios de Pacientes', desc: 'Opiniones y casos de éxito reales de recuperación de rodilla y articulaciones.' },
]
</script>

<template>
  <section id="videos" class="section-padding bg-slate-soft">
    <div class="tech-grid-bg"></div>
    <v-container class="position-relative" style="z-index: 2;">
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary px-3 py-1 bg-primary-light rounded-pill">Multimedia</span>
        <h2 class="section-title font-weight-bold text-slate mt-2">Videos y Testimonios Clínicos</h2>
        <div class="title-bar mx-auto mt-3"></div>
        <p class="section-subtitle text-slate-muted mx-auto mt-4">
          Conoce de primera mano cómo llevamos a cabo nuestros tratamientos y la opinión de nuestros pacientes recuperados.
        </p>
      </div>

      <v-row class="justify-center">
        <v-col v-for="(video, idx) in videos" :key="idx" cols="12" md="6" class="reveal">
          <v-card class="video-card lift-card rounded-2xl overflow-hidden elevation-4 border border-primary-light h-100 d-flex flex-column">
            <div class="video-container position-relative bg-black overflow-hidden" style="aspect-ratio: 16 / 9; width: 100%;">
              <video controls class="w-100 h-100 d-block" preload="metadata" style="object-fit: contain;">
                <source :src="video.src" type="video/mp4">
                Tu navegador no soporta reproducción de videos.
              </video>
            </div>
            <v-card-text class="pa-5 bg-white text-left flex-grow-1">
              <h3 class="text-body-1 font-weight-bold text-primary mb-1">{{ video.title }}</h3>
              <p class="text-caption text-grey-darken-2 mb-0">{{ video.desc }}</p>
            </v-card-text>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
