<script setup lang="ts">
import { ref, onMounted } from 'vue'
import { navItems } from '@/data/content'
import { useScrollSpy } from '@/composables/useScrollSpy'
import { useScrollReveal } from '@/composables/useScrollReveal'

import SiteHeader from '@/components/layout/SiteHeader.vue'
import MobileDrawer from '@/components/layout/MobileDrawer.vue'
import SiteFooter from '@/components/layout/SiteFooter.vue'
import WhatsAppFloatButton from '@/components/layout/WhatsAppFloatButton.vue'
import BottomNavigation from '@/components/layout/BottomNavigation.vue'

import HeroSlider from '@/components/sections/HeroSlider.vue'
import TreatmentsMockupSection from '@/components/sections/TreatmentsMockupSection.vue'
import FeatureBannerSection from '@/components/sections/FeatureBannerSection.vue'
import SymptomsSection from '@/components/sections/SymptomsSection.vue'
import BenefitsSection from '@/components/sections/BenefitsSection.vue'
import Diagnosis3dSection from '@/components/sections/Diagnosis3dSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import ConditionsSection from '@/components/sections/ConditionsSection.vue'
import ProcessSection from '@/components/sections/ProcessSection.vue'
import AboutDoctorSection from '@/components/sections/AboutDoctorSection.vue'
import FaqSection from '@/components/sections/FaqSection.vue'
import VideosSection from '@/components/sections/VideosSection.vue'
import GallerySection from '@/components/sections/GallerySection.vue'
import LocationsSection from '@/components/sections/LocationsSection.vue'
import AppointmentModal from '@/components/ui/AppointmentModal.vue'

const mobileDrawer = ref(false)
const { activeNav, handleNavClick } = useScrollSpy(navItems)
useScrollReveal()

const showAppointmentModal = ref(false)

const handleNavClickWrapper = (href: string) => {
  if (href === '#citas') {
    showAppointmentModal.value = true
  } else {
    handleNavClick(href)
  }
}

onMounted(() => {
  const handleGlobalClick = (e: MouseEvent) => {
    const target = e.target as HTMLElement
    const anchor = target.closest('a')
    if (anchor && anchor.getAttribute('href') === '#citas') {
      e.preventDefault()
      showAppointmentModal.value = true
    }
  }
  window.addEventListener('click', handleGlobalClick, { capture: true })
})
</script>

<template>
  <v-app class="app-container">
    <a href="#inicio" class="skip-link">Saltar al contenido principal</a>

    <SiteHeader
      v-model:activeNav="activeNav"
      v-model:mobileDrawer="mobileDrawer"
      @nav-click="handleNavClickWrapper"
    />

    <MobileDrawer
      v-model:mobileDrawer="mobileDrawer"
      :active-nav="activeNav"
      @nav-click="handleNavClickWrapper"
    />

    <v-main class="main-content">
      <HeroSlider @reserve-click="handleNavClickWrapper('#citas')" />
      <TreatmentsMockupSection />
      <FeatureBannerSection />
      <SymptomsSection />
      <BenefitsSection />
      <Diagnosis3dSection />
      <ServicesSection />
      <ConditionsSection />
      <ProcessSection />
      <AboutDoctorSection />
      <FaqSection />
      <VideosSection />
      <GallerySection />
      <LocationsSection />
    </v-main>

    <SiteFooter />

    <WhatsAppFloatButton :visible="!mobileDrawer" />
    
    <BottomNavigation :active-nav="activeNav" @nav-click="handleNavClickWrapper" />

    <!-- Modal Emergente de Reserva de Citas -->
    <AppointmentModal v-model="showAppointmentModal" />
  </v-app>
</template>
