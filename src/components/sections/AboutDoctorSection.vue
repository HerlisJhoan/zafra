<script setup lang="ts">
const highlights = [
  { title: 'Eficacia Biológica', desc: 'Sin riesgo de rechazo inmunológico' },
  { title: 'Tecnología de Punta', desc: 'Centrifugado de alta pureza plaquetaria' },
]
</script>

<template>
  <section class="section-padding bg-white">
    <v-container>
      <v-row class="align-center">
        <v-col cols="12" md="5" class="d-flex justify-center position-relative reveal">
          <div class="decorative-badge-experience d-flex flex-column align-center justify-center elevation-6">
            <span class="badge-num font-weight-bold">10</span>
            <span class="badge-lbl text-uppercase font-weight-bold text-center leading-tight">Años<br>Médicos</span>
          </div>
          <v-avatar size="420" class="elevation-6 border-white-glow">
            <v-img src="/doctor.png" alt="Dr. Zafra" loading="lazy" class="doctor-avatar-img" />
          </v-avatar>
        </v-col>

        <v-col cols="12" md="7" class="mt-8 mt-md-0 reveal">
          <span class="section-badge text-uppercase font-weight-bold text-primary">Tu Especialista</span>
          <h2 class="section-title font-weight-bold mt-2">Medicina Regenerativa de Confianza en Tarapoto</h2>
          <p class="text-body-1 text-slate-muted mt-4 leading-relaxed">
            El <strong>Dr. Zafra</strong> cuenta con una sólida trayectoria de 10 años en el cuidado y restauración de la
            salud articular en la región San Martín. Su enfoque se centra en evitar procedimientos quirúrgicos de alto
            riesgo a través del uso de terapias biológicas autólogas.
          </p>
          <p class="text-body-1 text-slate-muted leading-relaxed">
            Cada consulta cuenta con una evaluación exhaustiva y un protocolo individualizado con el fin de devolver la
            calidad de vida y el movimiento natural a pacientes con artrosis, desgaste de cartílago y lesiones deportivas.
          </p>

          <v-row class="mt-6">
            <v-col v-for="(item, idx) in highlights" :key="idx" cols="12" sm="6">
              <div class="d-flex align-center">
                <v-icon color="success" size="24" class="mr-3">mdi-check-circle-outline</v-icon>
                <div>
                  <h4 class="font-weight-bold text-slate mb-0">{{ item.title }}</h4>
                  <p class="text-caption text-slate-muted mb-0">{{ item.desc }}</p>
                </div>
              </div>
            </v-col>
          </v-row>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.decorative-badge-experience {
  position: absolute;
  top: -15px;
  left: 20px;
  width: 90px;
  height: 90px;
  background: linear-gradient(135deg, var(--secondary-cyan) 0%, var(--primary-color) 100%);
  border-radius: 50%;
  color: white;
  z-index: 3;
  box-shadow: 0 8px 25px rgba(13, 71, 161, 0.25);
}

.badge-num {
  font-size: 1.8rem;
  line-height: 1;
}

.badge-lbl {
  font-size: 0.65rem;
}

.border-white-glow {
  border: 6px solid white;
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.06);
}

.doctor-avatar-img :deep(img) {
  object-fit: cover !important;
  object-position: center 12% !important;
}
</style>
