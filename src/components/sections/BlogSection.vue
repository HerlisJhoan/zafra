<script setup lang="ts">
import { ref } from 'vue'

interface BlogItem {
  category: string
  title: string
  excerpt: string
  img: string
  author: string
  videoSrc?: string
  isCurrentlyPlaying?: boolean
}

const items = ref<BlogItem[]>([
  {
    category: 'VIDEO INFORMATIVO',
    title: '¿Por qué elegir al Dr. Zafra? Propuesta de Valor y Bioseguridad',
    excerpt: 'Conoce nuestra propuesta de valor, experiencia y los altos estándares de bioseguridad en el consultorio de Tarapoto.',
    img: '/gallery/que-es-el-prp.jpeg',
    author: 'Dr. Zafra',
    videoSrc: '/gallery/porque-elejirnos.mp4',
    isCurrentlyPlaying: false
  },
  {
    category: 'TESTIMONIOS',
    title: 'Testimonios de Pacientes: Casos de Éxito en Recuperación Articular',
    excerpt: 'Escucha a nuestros pacientes recuperados de artrosis y lesiones de rodilla contar su experiencia y cómo recuperaron su movilidad.',
    img: '/gallery/como-se-obtiene.jpeg',
    author: 'Dr. Zafra',
    videoSrc: '/gallery/opinion.mp4',
    isCurrentlyPlaying: false
  },
  {
    category: 'ATENCIÓN MÉDICA',
    title: 'Evaluación y Diagnóstico Clínico Personalizado en Consulta',
    excerpt: 'El Dr. Zafra realiza una evaluación médica minuciosa para determinar el nivel de desgaste articular y diseñar el mejor plan.',
    img: '/gallery/slider/atendiendo.jpeg',
    author: 'Dr. Zafra'
  },
  {
    category: 'PROCEDIMIENTOS',
    title: 'Aplicación de Terapias Regenerativas con Altas Normas Clínicas',
    excerpt: 'Procedimientos biológicos ambulatorios mínimamente invasivos con altos estándares de calidad y confort para nuestros pacientes.',
    img: '/gallery/slider/ejemplo-7.jpeg',
    author: 'Dr. Zafra'
  }
])

const playVideo = (idx: number) => {
  items.value.forEach((item, i) => {
    if (i === idx) {
      item.isCurrentlyPlaying = true
    } else {
      item.isCurrentlyPlaying = false
    }
  })
}
</script>

<template>
  <section id="novedades" class="section-padding bg-white">
    <v-container>
      <!-- Cabecera de la sección -->
      <div class="d-flex flex-column flex-sm-row justify-space-between align-start align-sm-end mb-8">
        <div>
          <h2 class="section-title-blog font-weight-black text-left">Noticias y artículos médicos</h2>
          <p class="text-subtitle-1 text-slate-muted mt-2 text-left">
            Encuentra información de artículos, videos explicativos y testimonios de pacientes atendidos.
          </p>
        </div>
        <a href="#citas" class="blog-link-btn font-weight-bold text-uppercase mt-4 mt-sm-0">
          Visita nuestro blog
        </a>
      </div>

      <!-- Grid de items -->
      <v-row>
        <v-col v-for="(item, idx) in items" :key="idx" cols="12" sm="6" md="3">
          <v-card class="blog-card elevation-2 rounded-xl overflow-hidden h-100 d-flex flex-column border-light">
            <!-- Contenedor del video o la imagen -->
            <div class="position-relative overflow-hidden aspect-ratio-box" style="height: 280px; background-color: #ffffff;">
              <!-- Video directo con fondo blanco -->
              <div v-if="item.videoSrc" class="video-player-wrapper bg-white h-100">
                <video controls class="w-100 h-100 d-block" preload="metadata" style="object-fit: contain; background-color: #ffffff; height: 280px;">
                  <source :src="item.videoSrc" type="video/mp4">
                  Tu navegador no soporta videos.
                </video>
              </div>

              <!-- Imagen normal -->
              <div v-else class="position-relative">
                <v-img :src="item.img" height="280" cover></v-img>
              </div>


            </div>

            <!-- Contenido de la Tarjeta -->
            <v-card-text class="pa-5 flex-grow-1 d-flex flex-column text-left">
              <span class="category-tag text-uppercase font-weight-bold text-primary mb-2">
                {{ item.category }}
              </span>
              <h3 class="article-title font-weight-bold text-slate mb-3">
                {{ item.title }}
              </h3>
              
              <!-- Autor -->
              <div class="author-row d-flex align-center mb-3 text-slate-muted text-caption">
                <v-icon size="14" class="mr-1">mdi-account-outline</v-icon>
                <span>{{ item.author }}</span>
                <v-icon size="14" class="ml-auto share-icon">mdi-share-variant-outline</v-icon>
              </div>

              <p class="article-excerpt text-slate-muted mb-6">
                {{ item.excerpt }}
              </p>

              <!-- Botón interactivo al pie -->
              <div class="mt-auto">
                <v-btn 
                  variant="text" 
                  color="primary" 
                  class="px-0 font-weight-black text-uppercase action-more-btn" 
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
.section-title-blog {
  font-size: 2.2rem;
  color: #1a548a;
  line-height: 1.2;
}

.blog-link-btn {
  color: #0a7cc4;
  text-decoration: underline;
  letter-spacing: 0.5px;
  font-size: 0.95rem;
  transition: color 0.3s ease;
}

.blog-link-btn:hover {
  color: #1a548a;
}

.blog-card {
  transition: transform 0.3s ease, box-shadow 0.3s ease;
  background-color: #ffffff !important;
}

.blog-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 24px rgba(10, 124, 196, 0.12) !important;
}

.aspect-ratio-box {
  position: relative;
  width: 100%;
}

.video-player-wrapper {
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



.video-badge {
  position: absolute;
  bottom: 12px;
  left: 12px;
  background-color: #ff0000;
  color: #ffffff;
  font-size: 0.7rem;
  font-weight: 800;
  text-transform: uppercase;
  padding: 2px 8px;
  border-radius: 4px;
  letter-spacing: 0.5px;
  z-index: 5;
}

.category-tag {
  font-size: 0.75rem;
  letter-spacing: 1px;
}

.article-title {
  font-size: 1.15rem;
  line-height: 1.35;
  color: #1c2e24;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  height: 4.05em;
}

.article-excerpt {
  font-size: 0.95rem;
  line-height: 1.5;
  display: -webkit-box;
  -webkit-line-clamp: 3;
  -webkit-box-orient: vertical;
  overflow: hidden;
  margin-bottom: 0 !important;
}

.share-icon:hover {
  color: #0a7cc4;
  cursor: pointer;
}

.action-more-btn {
  font-size: 0.85rem;
  letter-spacing: 0.5px;
}
</style>
