<script setup lang="ts">
import { conditions } from '@/data/content'
</script>

<template>
  <section class="section-padding bg-slate-soft">
    <v-container>
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary">Educación Médica</span>
        <h2 class="section-title font-weight-bold text-slate mt-2">Condiciones que Tratamos</h2>
        <p class="section-subtitle text-slate-muted mx-auto mt-3">
          Conoce más sobre algunas de las causas más comunes del dolor articular.
        </p>
      </div>

      <v-row class="justify-center">
        <v-col v-for="(item, idx) in conditions" :key="idx" cols="12" sm="8" md="5" class="reveal"
          :style="{ transitionDelay: `${idx * 100}ms` }">
          <v-card class="lift-card rounded-xl border-light overflow-hidden bg-white pa-3" elevation="2" style="min-height: 450px; height: 100%; display: flex; align-items: center; justify-content: center;">
            <v-img :src="item.img" height="100%" width="100%" contain :alt="item.title" loading="lazy"></v-img>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>
