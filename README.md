# COCO 360° — Bebidas de coco y prevención del dengue

Sitio HTML, CSS y JavaScript sin dependencias. Preparado para GitHub + Render Static Site.

## Publicar en GitHub
1. Crear un repositorio nuevo llamado `coco360-web`.
2. En el repositorio, seleccionar **Add file > Upload files**.
3. Subir **index.html**, **render.yaml** y **README.md** directamente a la raíz del repositorio (no subir el ZIP).
4. Seleccionar **Commit changes**.

## Publicar en Render
1. Ir a https://dashboard.render.com/ y seleccionar **New > Static Site**.
2. Conectar la cuenta de GitHub y escoger el repositorio `coco360-web`.
3. Configurar:
   - **Name:** coco360 (o un nombre disponible).
   - **Branch:** main (o la rama principal real del repositorio).
   - **Root Directory:** dejar en blanco.
   - **Build Command:** `echo "COCO 360 listo para publicar"`.
   - **Publish Directory:** `.` (un punto).
4. Seleccionar **Create Static Site**. Render proporcionará una URL `onrender.com`.

El archivo `render.yaml` también permite desplegar mediante un Blueprint de Render. No es necesario utilizar las dos formas al mismo tiempo.

## Antes de comenzar a recibir pedidos
- Editar en `index.html` la constante `WHATSAPP_NEGOCIO` e introducir el teléfono del negocio en formato `51` + nueve dígitos, sin `+` ni espacios.
- Revisar los precios de los tres productos en las tarjetas HTML y en la constante `productos` de JavaScript; deben coincidir.
- Confirmar zonas de entrega, disponibilidad, métodos de pago y costo de delivery.
- El carrito prepara un mensaje de WhatsApp, pero no cobra ni registra órdenes en un servidor. Sin WhatsApp configurado solo permite copiar el pedido.
- No colocar contraseñas, claves privadas ni tokens en este repositorio público.

## Actualizaciones
Cada cambio confirmado en la rama vinculada de GitHub se publica automáticamente en Render, si el despliegue automático está habilitado.
