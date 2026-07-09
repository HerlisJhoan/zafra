<script setup lang="ts">
import { featureBannerItems } from '@/data/content'
</script>

<template>
  <div class="py-6 bg-blue-lighten-5 border-y border-blue-lighten-4">
    <v-container>
      <v-row class="justify-center py-2">
        <v-col v-for="(item, idx) in featureBannerItems" :key="idx" cols="12" sm="6" md="3"
          class="d-flex align-center justify-center justify-md-start gap-3">
          <v-icon color="primary" size="24">{{ item.icon }}</v-icon>
          <div>
            <div class="font-weight-bold text-blue-darken-4 text-body-2 leading-tight">{{ item.title }}</div>
            <div class="text-caption text-slate-muted">{{ item.desc }}</div>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>
