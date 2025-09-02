// src/lintrk.ts

/**
 * Registra un evento de conversión de LinkedIn.
 * @param {string | number} conversionId - El ID de la conversión que deseas registrar.
 */
export const lintrk = (conversionId: string | number): void => {
  if (typeof window !== 'undefined' && typeof window['lintrk'] === 'function') {
    window['lintrk']('track', { conversion_id: conversionId });
  } else if (import.meta.env.DEV) {
    console.warn(`La llamada a lintrk con el ID ${conversionId} fue ignorada (el script de LinkedIn no está disponible).`);
  }
};