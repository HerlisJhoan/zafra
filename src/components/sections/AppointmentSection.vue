<script setup lang="ts">
import { ref, computed } from 'vue'
import { painAreas, days } from '@/data/content'
import { buildAppointmentMessage } from '@/composables/useWhatsApp'

const patientName = ref('')
const selectedPainArea = ref(painAreas[0]!.value)
const selectedDay = ref(days[0]!.value)

const whatsAppLink = computed(() =>
  buildAppointmentMessage({
    name: patientName.value,
    painArea: selectedPainArea.value,
    day: selectedDay.value,
  }),
)
</script>

<template>
  <section id="citas" class="section-padding bg-white position-relative">
    <v-container>
      <v-row class="justify-center">
        <v-col cols="12" lg="8" class="text-center mb-8 reveal">
          <span class="section-badge text-uppercase font-weight-bold text-primary">Agenda tu Cita</span>
          <h2 class="section-title font-weight-bold text-slate mt-2">Formulario de Cita Interactiva</h2>
          <p class="section-subtitle text-slate-muted mx-auto mt-3">
            Selecciona tus opciones a continuación para enviar los detalles de tu consulta directamente al WhatsApp
            del Dr. Zafra.
          </p>
        </v-col>
      </v-row>

      <v-row class="justify-center">
        <v-col cols="12" md="8" lg="7" class="reveal">
          <v-card class="rounded-xl pa-8 bg-slate-soft elevation-6 border-light">
            <v-text-field v-model="patientName" label="Tu Nombre" placeholder="Ej. Juan Pérez" variant="outlined"
              color="primary" prepend-inner-icon="mdi-account" class="mb-4" hide-details></v-text-field>

            <div class="mb-5 mt-4">
              <label class="d-block text-subtitle-2 text-slate font-weight-bold mb-2">¿En qué zona sientes
                molestia?</label>
              <v-btn-toggle v-model="selectedPainArea" mandatory color="primary" variant="outlined"
                class="d-flex flex-wrap gap-2 w-100 bg-transparent border-0 toggle-group">
                <v-btn v-for="area in painAreas" :key="area.value" :value="area.value"
                  class="flex-grow-1 flex-shrink-0 text-caption rounded-lg py-2"
                  style="border: 1px solid rgba(9, 79, 42, 0.25) !important;">
                  {{ area.text }}
                </v-btn>
              </v-btn-toggle>
            </div>

            <div class="mb-6">
              <label class="d-block text-subtitle-2 text-slate font-weight-bold mb-2">¿Cuándo te gustaría
                agendar?</label>
              <v-btn-toggle v-model="selectedDay" mandatory color="primary" variant="outlined"
                class="d-flex flex-wrap gap-2 w-100 bg-transparent border-0 toggle-group">
                <v-btn v-for="day in days" :key="day.value" :value="day.value"
                  class="flex-grow-1 flex-shrink-0 text-caption rounded-lg py-2"
                  style="border: 1px solid rgba(9, 79, 42, 0.25) !important;">
                  {{ day.text }}
                </v-btn>
              </v-btn-toggle>
            </div>

            <v-btn color="success" size="x-large" block class="action-btn text-white font-weight-bold"
              prepend-icon="mdi-whatsapp" :href="whatsAppLink" target="_blank" rel="noopener">
              Enviar al WhatsApp del Dr. Zafra
            </v-btn>

            <div class="d-flex flex-wrap justify-center gap-6 mt-6 pt-4 border-top-divider text-caption text-slate-muted">
              <span class="d-flex align-center"><v-icon color="success" class="mr-1" size="16">mdi-lock-outline</v-icon>
                Cita Segura</span>
              <span class="d-flex align-center"><v-icon color="primary" class="mr-1" size="16">mdi-calendar-check</v-icon>
                Respuesta Rápida</span>
            </div>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.border-top-divider {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.toggle-group :deep(.v-btn) {
  background-color: #ffffff !important;
  color: var(--slate-dark) !important;
  border: 1px solid rgba(9, 79, 42, 0.2) !important;
  text-transform: none !important;
  font-weight: 600 !important;
  transition: all 0.25s ease !important;
}

.toggle-group :deep(.v-btn--active),
.toggle-group :deep(.v-btn--selected) {
  background: linear-gradient(135deg, #0D47A1 0%, #00B0FF 100%) !important;
  color: #ffffff !important;
  border-color: transparent !important;
  box-shadow: 0 6px 15px rgba(13, 71, 161, 0.3) !important;
  transform: translateY(-1px);
}
</style>
