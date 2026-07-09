export const PHONE_INTL = '51934479620'
export const PHONE_DISPLAY = '934 479 620'
export const PHONE_E164 = '+51934479620'

export const EMAIL = 'zafracarrera1985@gmail.com'

export const ADDRESS = {
  street: 'Jr. Libertad 330, Barrio Huayco',
  city: 'Tarapoto',
  region: 'San Martín',
  postalCode: '22200',
  country: 'Perú',
} as const

export function buildWhatsAppLink(message: string): string {
  return `https://wa.me/${PHONE_INTL}?text=${encodeURIComponent(message)}`
}

export const WHATSAPP_DIRECT_LINK = buildWhatsAppLink(
  'Hola Dr. Zafra, quisiera más información sobre sus tratamientos.',
)
