<script setup lang="ts">
import { faqs } from '@/data/content'
</script>

<template>
  <section id="faq" class="section-padding bg-slate-soft">
    <v-container>
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary">Resolvemos tus Dudas</span>
        <h2 class="section-title font-weight-bold text-slate mt-2">Preguntas Frecuentes</h2>
        <p class="section-subtitle text-slate-muted mx-auto mt-3">
          Respuestas claras sobre nuestros tratamientos de terapia regenerativa.
        </p>
      </div>

      <v-row class="justify-center">
        <v-col cols="12" lg="9" class="reveal">
          <v-expansion-panels variant="accordion" class="faq-panels rounded-xl overflow-hidden border-light">
            <v-expansion-panel v-for="(item, idx) in faqs" :key="idx" class="bg-white">
              <v-expansion-panel-title class="font-weight-bold text-slate">
                {{ item.q }}
              </v-expansion-panel-title>
              <v-expansion-panel-text class="text-slate-muted leading-relaxed">
                {{ item.a }}
              </v-expansion-panel-text>
            </v-expansion-panel>
          </v-expansion-panels>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.faq-panels :deep(.v-expansion-panel-title) {
  font-size: 1rem;
}
</style>
