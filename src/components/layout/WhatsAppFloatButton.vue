<script setup lang="ts">
import { WHATSAPP_DIRECT_LINK } from '@/config/contact'

defineProps<{
  visible: boolean
}>()
</script>

<template>
  <a v-if="visible" :href="WHATSAPP_DIRECT_LINK" target="_blank" rel="noopener" class="whatsapp-float"
    aria-label="Chatear por WhatsApp con Dr. Zafra">
    <v-icon color="white" size="32">mdi-whatsapp</v-icon>
  </a>
</template>

<style scoped>
.whatsapp-float {
  position: fixed;
  bottom: 24px;
  right: 24px;
  width: 60px;
  height: 60px;
  background-color: #25D366;
  border-radius: 50%;
  display: flex;
  align-items: center;
  justify-content: center;
  box-shadow: 0 8px 24px rgba(37, 211, 102, 0.45);
  z-index: 1500;
  animation: whatsapp-pulse 2.4s infinite;
  text-decoration: none !important;
  outline: none !important;
  border: none !important;
  transition: transform 0.25s ease;
}

.whatsapp-float:hover {
  transform: scale(1.08);
}

@keyframes whatsapp-pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.55);
  }

  70% {
    box-shadow: 0 0 0 16px rgba(37, 211, 102, 0);
  }

  100% {
    box-shadow: 0 0 0 0 rgba(37, 211, 102, 0);
  }
}

@media (max-width: 959px) {
  .whatsapp-float {
    bottom: 80px;
    right: 16px;
  }
}

@media (prefers-reduced-motion: reduce) {
  .whatsapp-float {
    animation: none;
  }
}
</style>
