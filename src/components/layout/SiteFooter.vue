<script setup lang="ts">
import { EMAIL, PHONE_E164, ADDRESS } from '@/config/contact'

const year = new Date().getFullYear()
</script>

<template>
  <v-footer class="footer-bg text-white py-8">
    <v-container>
      <div class="d-flex flex-column align-center text-center">
        <!-- Logo y Nombre (Centrados) -->
        <div class="d-flex align-center justify-center mb-4">
          <div class="logo-circle mr-3">
            <img :src="'/logo.png'" alt="Logo Dr. Zafra - Terapia Regenerativa"
              style="height: 100%; width: 100%; object-fit: cover; border-radius: 50%; transform: scale(1.35);" />
          </div>
          <div class="d-flex flex-column text-left justify-center" style="line-height: 1.15;">
            <span class="text-uppercase font-weight-bold footer-eyebrow"
              style="font-size: 0.65rem; letter-spacing: 2px;">Centro Médico</span>
            <span class="text-uppercase font-weight-black" style="font-size: 1.3rem; letter-spacing: 1px;">Dr.
              Zafra</span>
          </div>
        </div>

        <!-- Breve descripción -->
        <p class="footer-muted text-body-2 mb-4" style="max-width: 500px;">
          Centro Médico en Medicina y Terapia Regenerativa en Tarapoto. Calidad de vida y alivio definitivo para
          tu salud.
        </p>

        <!-- Redes Sociales -->
        <div class="d-flex gap-3 mb-6">
          <v-btn icon size="38" class="social-btn" :href="`https://wa.me/${PHONE_E164.replace('+', '')}`"
            target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
            <v-icon size="18">mdi-whatsapp</v-icon>
          </v-btn>
          <v-btn icon size="38" class="social-btn" href="https://www.facebook.com/share/1J4iEtNMFj/" target="_blank"
            rel="noopener" aria-label="Visitar Facebook">
            <v-icon size="18">mdi-facebook</v-icon>
          </v-btn>
          <v-btn icon size="38" class="social-btn" href="https://www.tiktok.com/@drzafra" target="_blank" rel="noopener"
            aria-label="Visitar TikTok">
            <svg viewBox="0 0 24 24" width="16" height="16" fill="currentColor">
              <path
                d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z" />
            </svg>
          </v-btn>
          <v-btn icon size="38" class="social-btn" :href="`mailto:${EMAIL}`" aria-label="Enviar correo electrónico">
            <v-icon size="18">mdi-email-outline</v-icon>
          </v-btn>
        </div>

        <div class="footer-divider w-100 mb-6"></div>

        <!-- Copyright y Certificación -->
        <div
          class="d-flex flex-column flex-sm-row justify-space-between align-center w-100 gap-3 text-caption footer-fine-print">
          <p class="mb-0">© {{ year }} Dr. Zafra · Terapia Regenerativa. Todos los derechos reservados.</p>
          <p class="mb-0 d-flex align-center gap-2">
            <v-icon size="14">mdi-shield-check-outline</v-icon>
            Centro certificado · {{ ADDRESS.street }}, {{ ADDRESS.city }}
          </p>
        </div>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-bg {
  background: linear-gradient(180deg, #1e293b 0%, #0f172a 100%) !important;
  position: relative;
}

.logo-circle {
  border: 2px solid rgba(255, 255, 255, 0.85);
  border-radius: 50%;
  width: 58px;
  height: 58px;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: rgba(255, 255, 255, 0.05);
  overflow: hidden;
}

/* Deja libre la barra de navegación inferior fija en móvil */
@media (max-width: 959px) {
  .footer-bg {
    padding-bottom: 80px !important;
  }
}

.footer-eyebrow {
  color: rgba(255, 255, 255, 0.55);
}

.footer-muted {
  color: rgba(255, 255, 255, 0.65) !important;
}

.social-btn {
  background-color: rgba(255, 255, 255, 0.08) !important;
  color: rgba(255, 255, 255, 0.85) !important;
  transition: all 0.25s ease;
}

.social-btn:hover {
  background-color: #0a7cc4 !important;
  color: #ffffff !important;
  transform: translateY(-2px);
}

.footer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.08);
}

.footer-fine-print {
  color: rgba(255, 255, 255, 0.45);
}

.gap-3 {
  gap: 12px;
}
</style>
