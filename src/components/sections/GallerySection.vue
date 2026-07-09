<script setup lang="ts">
import { galleryPhotos } from '@/data/content'
</script>

<template>
  <section id="galeria" class="section-padding bg-white">
    <v-container>
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary">Conócenos</span>
        <h2 class="section-title font-weight-bold text-slate mt-2">Galería de Procedimientos</h2>
        <p class="section-subtitle text-slate-muted mx-auto mt-3">
          Fotografías reales de nuestro consultorio y del equipo del Dr. Zafra en acción.
        </p>
      </div>

      <v-row>
        <v-col v-for="(photo, idx) in galleryPhotos" :key="idx" cols="6" sm="4" md="3" class="reveal"
          :style="{ transitionDelay: `${idx * 60}ms` }">
          <v-img :src="photo" aspect-ratio="1" contain class="rounded-xl gallery-photo elevation-2"
            alt="Procedimiento en el consultorio Dr. Zafra" loading="lazy"></v-img>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.gallery-photo {
  transition: transform 0.35s ease;
  cursor: pointer;
}

.gallery-photo:hover {
  transform: scale(1.04);
}
</style>
