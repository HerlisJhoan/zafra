<script setup lang="ts">
import { PHONE_E164, PHONE_DISPLAY } from '@/config/contact'

defineProps<{
  visible: boolean
}>()
</script>

<template>
  <div v-if="visible" class="phone-float-wrapper d-flex flex-column align-center">
    <!-- Botón de llamada circular verde -->
    <a :href="`tel:${PHONE_E164}`" class="phone-float" aria-label="Llamar por teléfono al Dr. Zafra">
      <v-icon color="white" size="28">mdi-phone</v-icon>
    </a>
    
    <!-- Etiqueta negra inferior con el número -->
    <div class="phone-label">
      tel: {{ PHONE_DISPLAY }}
    </div>
  </div>
</template>

<style scoped>
.phone-float-wrapper {
  position: fixed;
  bottom: 24px;
  left: 24px;
  z-index: 1500;
  display: none !important; /* Oculto en móvil */
}

@media (min-width: 960px) {
  .phone-float-wrapper {
    display: flex !important; /* Mostrar en escritorio */
  }
}

.phone-float {
  width: 56px;
  height: 56px;
  background-color: #22c55e; /* Verde brillante de llamada */
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(34, 197, 94, 0.4);
  transition: transform 0.25s ease;
  text-decoration: none !important;
  outline: none !important;
  border: none !important;
}

.phone-float:hover {
  transform: scale(1.08);
}

.phone-label {
  margin-top: 6px;
  background-color: rgba(0, 0, 0, 0.85);
  color: #ffffff;
  font-size: 0.72rem;
  font-weight: 700;
  padding: 3px 8px;
  border-radius: 4px;
  white-space: nowrap;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.3);
  pointer-events: none;
  
  /* Oculto por defecto con transición suave */
  opacity: 0;
  visibility: hidden;
  transform: translateY(5px);
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
}

.phone-float-wrapper:hover .phone-label {
  opacity: 1;
  visibility: visible;
  transform: translateY(0);
}
</style>
