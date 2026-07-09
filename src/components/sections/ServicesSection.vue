<script setup lang="ts">
import { regenerativeServices, generalServices } from '@/data/content'
import PhotoCtaCard from '@/components/ui/PhotoCtaCard.vue'
</script>

<template>
  <section id="servicios" class="section-padding bg-white">
    <v-container>
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary">Nuestros Servicios</span>
        <h2 class="section-title font-weight-bold mt-2">Terapia Regenerativa y Medicina General</h2>
        <p class="section-subtitle text-slate-muted mx-auto mt-3">
          Un centro médico integral para el cuidado y la recuperación de tu salud, en un solo lugar.
        </p>
      </div>

      <h3 class="text-h6 font-weight-bold text-primary mb-5 reveal">Terapia Regenerativa</h3>
      <v-row class="mb-10">
        <v-col v-for="(item, idx) in regenerativeServices" :key="idx" cols="12" sm="6" md="4" class="reveal"
          :style="{ transitionDelay: `${idx * 60}ms` }">
          <v-card class="service-card lift-card rounded-xl pa-6 h-100 border-light" elevation="0">
            <v-avatar color="primary-light" size="52" class="mb-4">
              <v-icon color="primary" size="26">{{ item.icon }}</v-icon>
            </v-avatar>
            <h4 class="text-body-1 font-weight-bold text-slate mb-2">{{ item.title }}</h4>
            <p class="text-body-2 text-slate-muted mb-0">{{ item.desc }}</p>
          </v-card>
        </v-col>
      </v-row>

      <h3 class="text-h6 font-weight-bold text-primary mb-5 reveal">Medicina General y Laboratorio Clínico</h3>
      <v-row>
        <v-col v-for="(item, idx) in generalServices" :key="idx" cols="12" sm="6" md="3" class="reveal"
          :style="{ transitionDelay: `${idx * 60}ms` }">
          <v-card class="service-card lift-card rounded-xl pa-6 h-100 border-light" elevation="0">
            <v-avatar color="secondary-light" size="52" class="mb-4">
              <v-icon color="secondary" size="26">{{ item.icon }}</v-icon>
            </v-avatar>
            <h4 class="text-body-1 font-weight-bold text-slate mb-2">{{ item.title }}</h4>
            <p class="text-body-2 text-slate-muted mb-0">{{ item.desc }}</p>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="justify-center mt-10 reveal">
        <v-col cols="12" lg="9">
          <PhotoCtaCard
            img="/gallery/ideal-para-deportista.jpeg"
            title="¿Para quién es ideal?"
            desc="Si practicas deporte, tienes artrosis o sientes desgaste articular, esta terapia puede ayudarte."
            cta-text="Consultar mi Caso"
            cta-href="#citas"
            image-side="right"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
