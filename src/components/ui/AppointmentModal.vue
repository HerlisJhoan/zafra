<script setup lang="ts">
import { ref, computed } from 'vue'
import { painAreas, days } from '@/data/content'
import { buildAppointmentMessage } from '@/composables/useWhatsApp'

const props = defineProps<{
  modelValue: boolean
}>()

const emit = defineEmits<{
  (e: 'update:modelValue', value: boolean): void
}>()

const internalShow = computed({
  get: () => props.modelValue,
  set: (val) => emit('update:modelValue', val),
})

const patientName = ref('')
const selectedPainArea = ref<string[]>([])
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
  <v-dialog v-model="internalShow" max-width="500px" transition="dialog-bottom-transition" class="appointment-dialog" :z-index="2500">
    <v-card class="rounded-xl overflow-hidden appointment-modal-card pa-4 pa-sm-8 bg-slate-soft position-relative">
      <!-- Botón de Cerrar (X) -->
      <v-btn icon="mdi-close" variant="flat" color="white" class="close-btn elevation-2" @click="internalShow = false" aria-label="Cerrar"></v-btn>

      <div class="text-center mb-6 pt-4 pt-sm-0">
        <span class="section-badge text-uppercase font-weight-bold text-primary">Agenda tu Cita</span>
        <h3 class="section-title font-weight-bold text-slate mt-2" style="font-size: 1.6rem; line-height: 1.25;">Formulario de Cita Interactiva</h3>
        <p class="text-body-2 text-slate-muted mt-2 mb-0" style="font-size: 0.95rem !important;">
          Selecciona tus opciones a continuación para enviar los detalles de tu consulta directamente al WhatsApp del Dr. Zafra.
        </p>
      </div>

      <div class="appointment-form-content">
        <v-text-field v-model="patientName" label="Tu Nombre" placeholder="Ej. Juan Pérez" variant="outlined"
          color="primary" prepend-inner-icon="mdi-account" class="mb-4 bg-white rounded-lg" hide-details></v-text-field>

        <div class="mb-5 mt-4 text-left">
          <label class="d-block text-subtitle-2 text-slate font-weight-bold mb-2">¿Selecciona el dolor a consultar?</label>
          <v-select
            v-model="selectedPainArea"
            :items="painAreas"
            item-title="text"
            item-value="value"
            multiple
            chips
            closable-chips
            variant="outlined"
            color="primary"
            class="bg-white rounded-lg"
            hide-details
            placeholder="Selecciona una o varias articulaciones"
          ></v-select>
        </div>

        <div class="mb-6 text-left">
          <label class="d-block text-subtitle-2 text-slate font-weight-bold mb-2">¿Cuándo te gustaría agendar?</label>
          <v-btn-toggle v-model="selectedDay" mandatory color="primary" variant="outlined"
            class="d-flex flex-wrap gap-2 w-100 bg-transparent border-0 toggle-group">
            <v-btn v-for="day in days" :key="day.value" :value="day.value"
              class="flex-grow-1 flex-shrink-0 text-caption rounded-lg py-2"
              style="border: 1px solid rgba(9, 79, 42, 0.25) !important;">
              {{ day.text }}
            </v-btn>
          </v-btn-toggle>
        </div>

        <v-btn color="success" block class="action-btn text-white font-weight-bold rounded-xl"
          prepend-icon="mdi-whatsapp" :href="whatsAppLink" target="_blank" rel="noopener" @click="internalShow = false">
          Enviar al WhatsApp del Dr. Zafra
        </v-btn>

        <div class="d-flex flex-wrap justify-center gap-6 mt-6 pt-4 border-top-divider text-caption text-slate-muted">
          <span class="d-flex align-center"><v-icon color="success" class="mr-1" size="16">mdi-lock-outline</v-icon>
            Cita Segura</span>
          <span class="d-flex align-center"><v-icon color="primary" class="mr-1" size="16">mdi-calendar-check</v-icon>
            Respuesta Rápida</span>
        </div>
      </div>
    </v-card>
  </v-dialog>
</template>

<style scoped>
.appointment-modal-card {
  border: 1px solid var(--border-light);
  box-shadow: 0 24px 48px rgba(0, 0, 0, 0.15) !important;
}

.close-btn {
  position: absolute;
  top: 12px;
  right: 12px;
  z-index: 10;
  width: 32px;
  height: 32px;
  min-width: 32px;
  border-radius: 50% !important;
  color: var(--slate-dark) !important;
}

.border-top-divider {
  border-top: 1px solid rgba(0, 0, 0, 0.08);
}

.action-btn {
  text-transform: none !important;
  white-space: normal !important;
  height: auto !important;
  min-height: 48px;
  padding: 10px 16px !important;
  font-size: 0.9rem !important;
  line-height: 1.3 !important;
}

@media (min-width: 400px) {
  .action-btn {
    font-size: 1rem !important;
  }
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
