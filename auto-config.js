// COCO 360 - ACTIVA SOLO CUANDO LA FUNCIÓN DE SUPABASE ESTÉ PUBLICADA Y PROBADA.
// La clave del CAPTCHA es pública; NUNCA pongas aquí TURNSTILE_SECRET,
// service_role, sb_secret_ ni contraseñas.
window.COCO360_AUTOREG = {
  enabled: true,
  endpoint: 'https://evgqrwhyqxgibzeqcwal.supabase.co/functions/v1/registrar-pedido',
  turnstileSiteKey: '0x4AAAAAAGALQh5AcNDBryNq'
};
