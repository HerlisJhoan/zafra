<script setup lang="ts">
import { navItems, regenerativeServices } from '@/data/content'
import { EMAIL, PHONE_DISPLAY, PHONE_E164, ADDRESS } from '@/config/contact'

const treatmentLinks = regenerativeServices.slice(0, 5)
const year = new Date().getFullYear()
</script>

<template>
  <v-footer class="footer-bg text-white pt-20 pb-8">
    <v-container>
      <v-row>
        <!-- Marca -->
        <v-col cols="12" md="4" class="mb-8 mb-md-0 pr-md-6">
          <div class="d-flex align-center mb-4">
            <img src="/logo.png" alt="Logo Dr. Zafra" class="mr-3 flex-shrink-0" style="height: 56px; width: 56px; object-fit: contain; image-rendering: -webkit-optimize-contrast; image-rendering: crisp-edges;" />
            <div class="d-flex flex-column text-left justify-center" style="line-height: 1.15;">
              <span class="text-uppercase font-weight-bold footer-eyebrow" style="font-size: 0.65rem; letter-spacing: 2px;">Centro Médico</span>
              <span class="text-uppercase font-weight-black" style="font-size: 1.4rem; letter-spacing: 1px;">Dr. Zafra</span>
            </div>
          </div>
          <p class="footer-muted text-body-2 mb-5 leading-relaxed">
            Especialistas dedicados a brindarte calidad de vida y alivio definitivo a través de la Medicina y Terapia
            Regenerativa en Tarapoto.
          </p>
          <div class="d-flex gap-3">
            <v-btn icon size="40" class="social-btn" :href="`https://wa.me/${PHONE_E164.replace('+', '')}`"
              target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
              <v-icon size="19">mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn icon size="40" class="social-btn" href="https://www.facebook.com/share/1J4iEtNMFj/"
              target="_blank" rel="noopener" aria-label="Visitar Facebook">
              <v-icon size="19">mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon size="40" class="social-btn" href="https://www.tiktok.com/@drzafra"
              target="_blank" rel="noopener" aria-label="Visitar TikTok">
              <svg viewBox="0 0 24 24" width="17" height="17" fill="currentColor">
                <path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/>
              </svg>
            </v-btn>
            <v-btn icon size="40" class="social-btn" :href="`mailto:${EMAIL}`"
              aria-label="Enviar correo electrónico">
              <v-icon size="19">mdi-email-outline</v-icon>
            </v-btn>
          </div>
        </v-col>

        <!-- Navegación -->
        <v-col cols="6" sm="4" md="2" class="mb-8 mb-md-0">
          <h4 class="footer-title text-uppercase font-weight-bold mb-5">Navegación</h4>
          <ul class="footer-links list-unstyled d-flex flex-column gap-3">
            <li v-for="item in navItems" :key="item.href">
              <a :href="item.href" class="footer-muted text-decoration-none">{{ item.text }}</a>
            </li>
          </ul>
        </v-col>

        <!-- Tratamientos -->
        <v-col cols="6" sm="4" md="3" class="mb-8 mb-md-0">
          <h4 class="footer-title text-uppercase font-weight-bold mb-5">Tratamientos</h4>
          <ul class="footer-links list-unstyled d-flex flex-column gap-3">
            <li v-for="item in treatmentLinks" :key="item.title">
              <a href="#servicios" class="footer-muted text-decoration-none">{{ item.title }}</a>
            </li>
          </ul>
        </v-col>

        <!-- Contacto -->
        <v-col cols="12" sm="4" md="3">
          <h4 class="footer-title text-uppercase font-weight-bold mb-5">Contacto</h4>
          <ul class="footer-contact list-unstyled d-flex flex-column gap-4 footer-muted text-body-2">
            <li class="d-flex align-start">
              <v-icon class="mr-3 mt-0.5 footer-icon" size="18">mdi-map-marker-outline</v-icon>
              <span>{{ ADDRESS.street }}, {{ ADDRESS.city }}</span>
            </li>
            <li class="d-flex align-start">
              <v-icon class="mr-3 mt-0.5 footer-icon" size="18">mdi-clock-outline</v-icon>
              <span>Lun - Sáb: 8:00 AM - 8:00 PM</span>
            </li>
            <li class="d-flex align-start">
              <v-icon class="mr-3 mt-0.5 footer-icon" size="18">mdi-phone</v-icon>
              <a :href="`tel:${PHONE_E164}`" class="footer-muted text-decoration-none">{{ PHONE_DISPLAY }}</a>
            </li>
            <li class="d-flex align-start">
              <v-icon class="mr-3 mt-0.5 footer-icon" size="18">mdi-email-outline</v-icon>
              <a :href="`mailto:${EMAIL}`" class="footer-muted text-decoration-none">{{ EMAIL }}</a>
            </li>
          </ul>
        </v-col>
      </v-row>

      <div class="footer-divider my-8"></div>

      <div class="d-flex flex-column flex-sm-row justify-space-between align-center gap-3 text-caption footer-fine-print">
        <p class="mb-0">© {{ year }} Dr. Zafra · Terapia Regenerativa. Todos los derechos reservados.</p>
        <p class="mb-0 d-flex align-center gap-2">
          <v-icon size="14">mdi-shield-check-outline</v-icon>
          Centro médico certificado en Tarapoto, San Martín
        </p>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-bg {
  background: linear-gradient(180deg, #0F3D24 0%, #0A2E1D 100%) !important;
  position: relative;
}

/* Deja libre la barra de navegación inferior fija en móvil */
@media (max-width: 959px) {
  .footer-bg {
    padding-bottom: 80px !important;
  }
}

/* Filete superior con el degradado de marca, como remate del footer */
.footer-bg::before {
  content: '';
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 3px;
  background: linear-gradient(90deg, var(--primary-color) 0%, var(--secondary-color) 100%);
}

.footer-eyebrow {
  color: rgba(255, 255, 255, 0.55);
}

.footer-muted {
  color: rgba(255, 255, 255, 0.68) !important;
}

.footer-icon {
  color: rgba(255, 255, 255, 0.5) !important;
}

.footer-title {
  font-size: 0.82rem;
  letter-spacing: 1.5px;
  color: rgba(255, 255, 255, 0.92);
}

.footer-links li a {
  transition: color 0.2s ease, padding-left 0.2s ease;
}

.footer-links li a:hover {
  color: #ffffff !important;
  padding-left: 3px;
}

.footer-contact a:hover {
  color: #ffffff !important;
}

.social-btn {
  background-color: rgba(255, 255, 255, 0.08) !important;
  color: rgba(255, 255, 255, 0.85) !important;
  transition: all 0.25s ease;
}

.social-btn:hover {
  background-color: var(--secondary-color) !important;
  color: #ffffff !important;
  transform: translateY(-2px);
}

.footer-divider {
  height: 1px;
  background-color: rgba(255, 255, 255, 0.12);
}

.footer-fine-print {
  color: rgba(255, 255, 255, 0.5);
}

.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }
.gap-4 { gap: 16px; }
</style>
