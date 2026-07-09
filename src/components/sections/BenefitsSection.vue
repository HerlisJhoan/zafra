<script setup lang="ts">
import { ref } from 'vue'
import { benefits } from '@/data/content'
import PhotoCtaCard from '@/components/ui/PhotoCtaCard.vue'

const activeBenefit = ref(0)
</script>

<template>
  <section id="beneficios" class="section-padding bg-section-light">
    <v-container>
      <div class="text-center mb-12 reveal">
        <span class="section-badge text-uppercase font-weight-bold text-primary">Terapia Destacada</span>
        <h2 class="section-title font-weight-bold mt-2">¿Cómo ayuda el PRP en la Rodilla?</h2>
        <p class="section-subtitle text-slate-muted mx-auto mt-3">
          El Plasma Rico en Plaquetas (PRP) es un preparado autólogo concentrado que estimula de manera natural la
          recuperación de tejidos.
        </p>
      </div>

      <v-row class="justify-center mt-6">
        <v-col cols="12" lg="10" class="reveal">
          <v-card class="rounded-xl elevation-3 overflow-hidden border-light">
            <v-row no-gutters>
              <v-col cols="12" md="4" class="bg-slate-light px-2 py-4">
                <v-list bg-color="transparent" class="d-flex flex-column gap-2">
                  <v-list-item v-for="(item, idx) in benefits" :key="idx" :value="idx"
                    :class="['benefit-tab-item rounded-lg py-3', activeBenefit === idx ? 'active-tab' : '']"
                    @click="activeBenefit = idx">
                    <template v-slot:prepend>
                      <v-avatar :color="activeBenefit === idx ? 'white' : 'primary-light'" size="38" class="mr-3">
                        <v-icon :color="activeBenefit === idx ? item.color : 'primary'">{{ item.icon }}</v-icon>
                      </v-avatar>
                    </template>
                    <v-list-item-title class="font-weight-bold text-slate text-body-1">
                      {{ item.title }}
                    </v-list-item-title>
                  </v-list-item>
                </v-list>
              </v-col>

              <v-col cols="12" md="8" class="pa-8 d-flex flex-column justify-center bg-white">
                <v-window v-model="activeBenefit" transition="fade-transition">
                  <v-window-item v-for="(item, idx) in benefits" :key="idx" :value="idx">
                    <div class="d-flex align-center mb-4">
                      <v-icon size="36" :color="item.color" class="mr-3">{{ item.icon }}</v-icon>
                      <h3 class="text-h5 font-weight-bold text-slate">{{ item.subtitle }}</h3>
                    </div>
                    <v-divider class="mb-4"></v-divider>
                    <p class="text-body-1 text-slate-muted leading-relaxed mb-6">
                      {{ item.desc }}
                    </p>
                    <div class="benefit-quote border-left-colored py-3 px-4 bg-slate-light rounded-r-lg"
                      :style="{ borderColor: item.color }">
                      <span class="font-weight-bold text-caption text-uppercase" :style="{ color: item.color }">
                        Efecto del Tratamiento
                      </span>
                      <p class="text-body-2 font-italic text-slate mb-0 mt-1">
                        La aplicación dirigida disminuye el dolor y estimula la regeneración del cartílago sin los
                        efectos secundarios adversos de los corticoides.
                      </p>
                    </div>
                  </v-window-item>
                </v-window>
              </v-col>
            </v-row>
          </v-card>
        </v-col>
      </v-row>

      <v-row class="justify-center mt-10 reveal">
        <v-col cols="12" lg="9">
          <PhotoCtaCard
            img="/gallery/prp.jpeg"
            title="Beneficios comprobados del PRP"
            desc="Un tratamiento seguro, mínimamente invasivo y elaborado con tu propia sangre, sin riesgo de rechazo."
          />
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.bg-slate-light {
  background-color: var(--slate-light) !important;
  border-right: 1px solid var(--border-light);
}

.benefit-tab-item {
  cursor: pointer;
  transition: all 0.3s ease;
}

.benefit-tab-item:hover {
  background: rgba(13, 71, 161, 0.05);
}

.active-tab {
  background: white !important;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.05);
  border-left: 4px solid var(--primary-color) !important;
}

.border-left-colored {
  border-left: 4px solid;
}
</style>
