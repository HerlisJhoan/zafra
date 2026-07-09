<script setup lang="ts">
withDefaults(
  defineProps<{
    img: string
    title: string
    desc: string
    ctaText?: string
    ctaHref?: string
    imageSide?: 'left' | 'right'
  }>(),
  { imageSide: 'left', ctaText: undefined, ctaHref: undefined },
)
</script>

<template>
  <v-card
    class="symptom-cta-card rounded-xl overflow-hidden d-flex flex-column align-center elevation-4"
    :class="imageSide === 'right' ? 'flex-sm-row-reverse' : 'flex-sm-row'"
  >
    <v-img :src="img" contain height="220" class="symptom-cta-img" :alt="title"></v-img>
    <div class="pa-6 pa-md-8 text-center text-sm-left flex-grow-1">
      <h3 class="text-h6 font-weight-bold text-slate mb-2">{{ title }}</h3>
      <p class="text-body-2 text-slate-muted mb-0" :class="{ 'mb-4': ctaText }">{{ desc }}</p>
      <v-btn v-if="ctaText && ctaHref" size="large" color="primary" variant="flat"
        class="action-btn px-8 font-weight-bold" :href="ctaHref">
        {{ ctaText }}
      </v-btn>
    </div>
  </v-card>
</template>

<style scoped>
.symptom-cta-card {
  background-color: white !important;
}

.symptom-cta-img {
  width: 100%;
}

@media (min-width: 600px) {
  .symptom-cta-img {
    flex: 0 0 320px;
    width: 320px;
  }
}
</style>
