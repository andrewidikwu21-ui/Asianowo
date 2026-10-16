/**
 * Helper to build a WhatsApp click-to-chat URL.
 * Format: https://wa.me/{NUMBER}?text={URL-encoded message}
 * International number format without '+' or leading zero.
 */
export function buildWhatsAppUrl(number: string, message: string): string {
  const cleanNumber = number.replace(/\D/g, '');
  const encodedText = encodeURIComponent(message);
  return `https://wa.me/${cleanNumber}?text=${encodedText}`;
}
