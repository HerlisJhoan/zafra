<script setup lang="ts">
import { symptoms } from '@/data/content'
import PhotoCtaCard from '@/components/ui/PhotoCtaCard.vue'
</script>

<template>
  <section id="sintomas" class="section-padding bg-white">
    <v-container>
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary">Señales de Alerta</span>
        <h2 class="section-title font-weight-bold text-slate mt-2">¿Tienes alguno de estos síntomas?</h2>
        <p class="section-subtitle text-slate-muted mx-auto mt-3">
          Si identificas alguna de estas señales, es importante evaluarte con un médico especialista a tiempo.
        </p>
      </div>

      <v-row class="justify-center">
        <v-col v-for="(item, idx) in symptoms" :key="idx" cols="12" sm="6" lg="3" class="reveal"
          :style="{ transitionDelay: `${idx * 80}ms` }">
          <v-card class="symptom-card lift-card rounded-xl h-100 border-light pa-6 d-flex flex-column text-left" elevation="2">
            <v-avatar color="primary-light" size="56" class="mb-4">
              <v-icon color="primary" size="28">{{ item.icon }}</v-icon>
            </v-avatar>
            <div>
              <h3 class="text-body-1 font-weight-bold text-slate mb-2">{{ item.title }}</h3>
              <p class="text-body-2 text-slate-muted mb-0">{{ item.desc }}</p>
            </div>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="justify-center mt-10 reveal">
        <v-col cols="12" lg="9">
          <PhotoCtaCard
            img="/gallery/sintomas.jpeg"
            title="¿Reconoces alguna de estas señales?"
            desc="No esperes a que el dolor empeore. Una evaluación a tiempo marca la diferencia."
            cta-text="Quiero una Evaluación Médica"
            cta-href="#citas"
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
