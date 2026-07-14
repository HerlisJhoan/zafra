<script setup lang="ts">
// Componente de Quiénes Somos y Por Qué Elegirnos
</script>

<template>
  <section class="section-padding bg-white">
    <v-container>
      <v-row class="align-stretch">
        <!-- Imagen vertical del equipo médico (Izquierda) -->
        <v-col cols="12" md="4" class="reveal d-flex">
          <v-card class="rounded-2xl overflow-hidden elevation-3 w-100 h-100 min-h-350">
            <v-img src="/gallery/slider/ejemplo-6.jpeg" cover class="h-100 w-100">
              <template v-slot:placeholder>
                <v-row class="fill-height ma-0" align="center" justify="center">
                  <v-progress-circular indeterminate color="primary"></v-progress-circular>
                </v-row>
              </template>
            </v-img>
          </v-card>
        </v-col>

        <!-- Información corporativa (Derecha) -->
        <v-col cols="12" md="8" class="reveal text-left d-flex flex-column justify-center pl-md-8">
          <h2 class="about-us-title font-weight-black mb-3">¿QUIÉNES SOMOS Y POR QUÉ ELEGIRNOS?</h2>
          <p class="text-subtitle-1 text-slate font-weight-medium mb-6">
            Porque somos una empresa con experiencia, calidad y compromiso.
          </p>

          <!-- Listado de Beneficios -->
          <ul class="about-bullets mb-6">
            <li>
              <strong>Experiencia:</strong> Somos una organización referente en los diversos tratamientos regenerativos, con más de 10 años de trayectoria y cientos de pacientes tratados con éxito en Tarapoto.
            </li>
            <li>
              <strong>Calidad:</strong> Ofrecemos tratamientos de última generación, con tecnología moderna y protocolos rigurosos. Nuestras terapias regenerativas son personalizadas, seguras y eficaces, adaptadas a las necesidades específicas de cada paciente.
            </li>
            <li>
              <strong>Compromiso:</strong> Nuestro objetivo es mejorar la salud y el bienestar de nuestros pacientes, brindándoles una atención integral, humana y de calidad. Nos preocupamos por el seguimiento constante y la evaluación de los resultados de cada caso.
            </li>
          </ul>

          <p class="text-body-1 font-weight-bold text-slate mb-4">
            Nuestros tratamientos regenerativos son:
          </p>

          <!-- Listado de Características de los Tratamientos -->
          <ul class="about-bullets">
            <li>
              <strong>Efectivos:</strong> ya que logran mejorar la calidad de vida de los pacientes, reducir el dolor, aumentar la movilidad y prevenir el deterioro articular.
            </li>
            <li>
              <strong>Seguros:</strong> nuestros tratamientos regenerativos son muy seguros, ya que no utilizan fármacos, ni cirugías, ni corticoides, ni nada que involucre la medicina convencional. Al ser tratamientos autólogos, es decir, que usan las propias células del paciente, no hay riesgo de rechazo, infección o efectos secundarios.
            </li>
            <li>
              <strong>Aptos:</strong> Nuestros tratamientos regenerativos son aptos para pacientes de todas las edades, en especial para los longevos, que son los que más sufren las consecuencias de las enfermedades osteomioarticulares.
            </li>
          </ul>
        </v-col>
      </v-row>

      <!-- Misión y Visión -->
      <v-row class="mt-8 align-stretch reveal">
        <v-col cols="12" md="6">
          <v-card class="h-100 rounded-xl pa-6 elevation-2" style="border-top: 4px solid #0a7cc4;">
            <div class="d-flex align-center mb-4">
              <v-icon size="36" color="#0a7cc4" class="mr-3">mdi-bullseye-arrow</v-icon>
              <h3 class="text-h5 font-weight-bold" style="color: #1e293b;">Nuestra Misión</h3>
            </div>
            <p class="text-body-1" style="color: #556b5f; line-height: 1.6;">
              Brindar tratamientos médicos de terapia regenerativa innovadores, seguros y personalizados, mejorando significativamente la calidad de vida de nuestros pacientes en Tarapoto y la región mediante alternativas no invasivas que alivian el dolor y restauran la movilidad, siempre con un enfoque humano, ético y profesional.
            </p>
          </v-card>
        </v-col>
        
        <v-col cols="12" md="6">
          <v-card class="h-100 rounded-xl pa-6 elevation-2" style="border-top: 4px solid #0E7C66;">
            <div class="d-flex align-center mb-4">
              <v-icon size="36" color="#0E7C66" class="mr-3">mdi-eye-outline</v-icon>
              <h3 class="text-h5 font-weight-bold" style="color: #1e293b;">Nuestra Visión</h3>
            </div>
            <p class="text-body-1" style="color: #556b5f; line-height: 1.6;">
              Ser el centro médico líder y de mayor referencia en medicina regenerativa en la región, reconocidos por nuestra excelencia médica, innovación tecnológica, altos estándares de bioseguridad y nuestro compromiso inquebrantable con la recuperación integral y el bienestar a largo plazo de cada paciente.
            </p>
          </v-card>
        </v-col>
      </v-row>
    </v-container>
  </section>
</template>

<style scoped>
.about-us-title {
  font-size: 2.1rem;
  color: #0a7cc4;
  letter-spacing: 0.5px;
  line-height: 1.2;
}

.about-bullets {
  list-style: none;
  padding-left: 0;
}

.about-bullets li {
  position: relative;
  padding-left: 20px;
  margin-bottom: 16px;
  font-size: 1.05rem;
  line-height: 1.6;
  color: #556b5f;
}

.about-bullets li::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #0a7cc4;
  font-weight: bold;
  font-size: 1.3rem;
}

.about-bullets li strong {
  color: #1c2e24;
}

.min-h-350 {
  min-height: 350px;
}
</style>
