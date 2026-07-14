import { buildWhatsAppLink } from '@/config/contact'

export function buildAppointmentMessage(params: {
  name: string
  painArea: string | string[]
  day: string
}): string {
  const { name, painArea, day } = params
  const painStr = Array.isArray(painArea) ? painArea.join(', ') : painArea
  const greeting = 'Hola Dr. Zafra, me interesa una consulta de Terapia Regenerativa.'
  const details = ` Mi nombre es ${name || '___'}, tengo molestia en la zona de: ${painStr || 'no especificado'}. Me gustaría agendar una cita para: ${day}.`
  return buildWhatsAppLink(greeting + details)
}

export function buildHeroMessage(params: { sede: string; painArea: string }): string {
  const { sede, painArea } = params
  const greeting = 'Hola Dr. Zafra, quisiera reservar una cita.'
  const details = ` Sede: ${sede}. Zona de molestia: ${painArea}.`
  return buildWhatsAppLink(greeting + details)
}
