<script setup lang="ts">
import { navItems } from '@/data/content'
import { PHONE_E164 } from '@/config/contact'

defineProps<{
  activeNav: string
}>()

const mobileDrawer = defineModel<boolean>('mobileDrawer', { default: false })

const emit = defineEmits<{
  (e: 'nav-click', href: string): void
}>()

const handleItemClick = (href: string) => {
  emit('nav-click', href)
  mobileDrawer.value = false
}
</script>

<template>
  <v-navigation-drawer
    v-model="mobileDrawer"
    temporary
    location="right"
    width="310"
    style="border-top-left-radius: 24px; border-bottom-left-radius: 24px; box-shadow: -8px 0 28px rgba(11,26,54,0.15); border: none;"
  >
    <div class="pa-6 d-flex flex-column" style="min-height: 100%;">
      <div class="d-flex align-center justify-space-between mb-8">
        <div class="d-flex align-center">
          <v-img src="/logo.png" max-height="40" width="40" contain class="rounded-circle mr-3" alt="Logo Dr. Zafra"></v-img>
          <div class="d-flex flex-column text-left justify-center" style="line-height: 1.15;">
            <span class="text-uppercase font-weight-bold text-grey-darken-1" style="font-size: 0.6rem; letter-spacing: 1px;">Centro Médico</span>
            <span class="text-uppercase font-weight-black text-primary" style="font-size: 1.05rem; letter-spacing: 0.5px;">Dr. Zafra</span>
          </div>
        </div>
        <v-btn icon="mdi-close" variant="text" size="small" @click="mobileDrawer = false" aria-label="Cerrar menú"></v-btn>
      </div>

      <v-list nav class="flex-grow-1 pa-0">
        <v-list-item
          v-for="item in navItems"
          :key="item.href"
          :href="item.href"
          :class="['mb-2 rounded-xl py-3 px-4', activeNav === item.href ? 'bg-blue-lighten-5 text-primary font-weight-black' : 'text-slate-dark font-weight-bold']"
          @click="handleItemClick(item.href)"
          style="transition: all 0.2s ease;"
        >
          <template v-slot:prepend>
            <v-icon :color="activeNav === item.href ? 'primary' : 'grey-darken-1'" class="mr-3" size="20">{{ item.icon }}</v-icon>
          </template>
          <v-list-item-title style="font-size: 0.95rem; font-weight: inherit;">{{ item.text }}</v-list-item-title>
        </v-list-item>
      </v-list>

      <div class="mt-auto pt-6 border-top border-light">
        <v-btn prepend-icon="mdi-phone-outline" variant="outlined" color="primary" block
          class="action-btn font-weight-bold mb-3 rounded-lg py-6 d-flex align-center justify-center" :href="`tel:${PHONE_E164}`">
          Llamar Ahora
        </v-btn>
        <v-btn prepend-icon="mdi-whatsapp" color="success" variant="flat" block
          class="action-btn font-weight-bold text-white rounded-lg py-6 d-flex align-center justify-center"
          :href="`https://wa.me/${PHONE_E164.replace('+', '')}`" target="_blank" rel="noopener" @click="mobileDrawer = false">
          Reservar Cita
        </v-btn>
      </div>
    </div>
  </v-navigation-drawer>
</template>
