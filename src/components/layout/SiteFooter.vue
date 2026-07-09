<script setup lang="ts">
import { navItems } from '@/data/content'
import { EMAIL, PHONE_E164, ADDRESS } from '@/config/contact'
</script>

<template>
  <v-footer class="footer-bg text-slate py-12">
    <v-container>
      <v-row>
        <v-col cols="12" md="4" class="mb-6 mb-md-0">
          <div class="d-flex align-center mb-4">
            <v-img src="/logo.png" max-height="56" width="56" contain alt="Logo Dr. Zafra"
              class="rounded-circle mr-3"></v-img>
            <div class="d-flex flex-column text-left justify-center" style="line-height: 1.15;">
              <span class="text-uppercase font-weight-bold text-grey-darken-1"
                style="font-size: 0.65rem; letter-spacing: 2px;">Centro Médico</span>
              <span class="text-uppercase font-weight-black text-primary"
                style="font-size: 1.25rem; letter-spacing: 1px;">Dr. Zafra</span>
            </div>
          </div>
          <p class="text-slate-muted text-body-2 mb-4 leading-relaxed">
            Especialistas dedicados a brindarte calidad de vida y alivio definitivo a través de la Medicina y Terapia
            Regenerativa.
          </p>
          <div class="d-flex gap-3">
            <v-btn icon color="slate-light" class="text-primary elevation-1" :href="`https://wa.me/${PHONE_E164.replace('+', '')}`"
              target="_blank" rel="noopener" aria-label="Contactar por WhatsApp">
              <v-icon>mdi-whatsapp</v-icon>
            </v-btn>
            <v-btn icon color="slate-light" class="text-primary elevation-1" href="https://www.facebook.com/share/1J4iEtNMFj/"
              target="_blank" rel="noopener" aria-label="Visitar Facebook">
              <v-icon>mdi-facebook</v-icon>
            </v-btn>
            <v-btn icon color="slate-light" class="text-primary elevation-1" href="https://www.tiktok.com/@drzafra"
              target="_blank" rel="noopener" aria-label="Visitar TikTok">
              <v-icon>mdi-tiktok</v-icon>
            </v-btn>
            <v-btn icon color="slate-light" class="text-primary elevation-1" :href="`mailto:${EMAIL}`"
              aria-label="Enviar correo electrónico">
              <v-icon>mdi-email</v-icon>
            </v-btn>
          </div>
        </v-col>

        <v-col cols="12" sm="6" md="4" class="mb-6 mb-md-0 px-md-8">
          <h4 class="footer-title text-uppercase font-weight-bold text-primary mb-4">Navegación</h4>
          <ul class="footer-links list-unstyled d-flex flex-column gap-2">
            <li v-for="item in navItems" :key="item.href">
              <a :href="item.href" class="text-slate-muted text-decoration-none">{{ item.text }}</a>
            </li>
          </ul>
        </v-col>

        <v-col cols="12" sm="6" md="4">
          <h4 class="footer-title text-uppercase font-weight-bold text-primary mb-4">Contacto</h4>
          <ul class="footer-contact list-unstyled d-flex flex-column gap-3 text-slate-muted text-body-2">
            <li class="d-flex align-start">
              <v-icon color="primary" class="mr-2 mt-1" size="18">mdi-phone</v-icon>
              <span>Celular/WhatsApp: {{ PHONE_E164 }}</span>
            </li>
            <li class="d-flex align-start">
              <v-icon color="primary" class="mr-2 mt-1" size="18">mdi-email</v-icon>
              <span>{{ EMAIL }}</span>
            </li>
            <li class="d-flex align-start">
              <v-icon color="primary" class="mr-2 mt-1" size="18">mdi-tiktok</v-icon>
              <span>TikTok: @drzafra</span>
            </li>
            <li class="d-flex align-start">
              <v-icon color="primary" class="mr-2 mt-1" size="18">mdi-map-marker-outline</v-icon>
              <span>{{ ADDRESS.street }}, {{ ADDRESS.city }}</span>
            </li>
          </ul>
        </v-col>
      </v-row>

      <v-divider class="my-8 border-divider"></v-divider>

      <div class="d-flex flex-wrap justify-space-between align-center text-caption text-slate-muted">
        <p class="mb-0">© 2026 Dr. Zafra Terapia Regenerativa. Todos los derechos reservados.</p>
        <p class="mb-0">Desarrollado bajo las mejores prácticas profesionales.</p>
      </div>
    </v-container>
  </v-footer>
</template>

<style scoped>
.footer-bg {
  background-color: var(--slate-light) !important;
  border-top: 1px solid var(--border-light);
  color: var(--slate-dark) !important;
}

.border-divider {
  border-top: 1px solid rgba(0, 0, 0, 0.06) !important;
}

.footer-title {
  font-size: 0.9rem;
  letter-spacing: 1px;
}

.footer-links li a {
  transition: color 0.2s ease;
}

.footer-links li a:hover {
  color: var(--primary-color) !important;
}

.gap-2 { gap: 8px; }
.gap-3 { gap: 12px; }
</style>
