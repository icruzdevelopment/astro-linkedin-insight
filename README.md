# 🚀 Astro LinkedIn Insight

[![NPM Version](https://img.shields.io/npm/v/astro-linkedin-insight.svg)](https://www.npmjs.com/package/astro-linkedin-insight)
[![License: MIT](https://img.shields.io/badge/License-MIT-yellow.svg)](https://opensource.org/licenses/MIT)
[![Downloads](https://img.shields.io/npm/dt/astro-linkedin-insight.svg)](https://www.npmjs.com/package/astro-linkedin-insight)

Un componente de Astro y una función de ayuda para integrar la **etiqueta de LinkedIn Insight** en tu sitio web. Registra visitas a páginas y eventos de conversión específicos con facilidad.

## ✨ Características

-   ✅ **Instalación en 2 Pasos:** Añade el componente principal y usa la función de seguimiento donde la necesites.
-   ✅ **Carga Optimizada:** El script de LinkedIn se carga de forma asíncrona para no afectar el rendimiento.
-   ✅ **API Sencilla:** Una función `lintrk()` clara para registrar conversiones de forma segura.
-   ✅ **Seguro para SSR:** El código del lado del cliente está protegido para no causar errores durante el renderizado en servidor de Astro.
-   ✅ **Ayudas en Desarrollo:** Muestra advertencias en la consola si la función de seguimiento se llama antes de que el script de LinkedIn esté listo.

## 🏁 Instalación

Instala el paquete usando tu gestor de paquetes preferido:

```bash
# Usando npm
npm install astro-linkedin-insight-tag

# Usando yarn
yarn add astro-linkedin-insight-tag

# Usando pnpm
pnpm add astro-linkedin-insight-tag
```

## 🛠️ Guía de Uso

La integración se realiza en dos sencillos pasos:

### Paso 1: Añade el Componente Principal

Primero, importa el componente `LinkedInInsightTag` en tu head layout principal (o en los layouts donde quieras activar el seguimiento) y colócalo dentro de la etiqueta `<head>`.

Este paso instala el script de LinkedIn y habilita el seguimiento automático de visitas a páginas.

**`src/layouts/Layout.astro`**
```astro
---
import LinkedInInsightTag from 'astro-linkedin-insight';

// Reemplaza '1234567' con tu Partner ID real de LinkedIn
const YOUR_LINKEDIN_PARTNER_ID = '1234567';
---
<html lang="es">
  <head>
    <meta charset="utf-8" />
    <meta name="viewport" content="width=device-width" />
    <title>Mi Sitio con Astro</title>

    {/* ✨ Añade el componente aquí con tu Partner ID ✨ */}
    <LinkedInInsightTag partnerId={YOUR_LINKEDIN_PARTNER_ID} />
  </head>
  <body>
    <slot />
  </body>
</html>
```

### Paso 2: Registra Eventos de Conversión

Para registrar acciones específicas (como el envío de un formulario, un clic en un botón de compra, etc.), importa la función `lintrk` desde el paquete y llámala cuando ocurra el evento.

**`src/components/FormularioDeContacto.astro`**
```astro
---
// Importa la función 'lintrk' desde el paquete
import { lintrk } from 'astro-linkedin-insight';

// Define el ID de conversión que creaste en tu LinkedIn Campaign Manager
const ID_CONVERSION_CONTACTO = '8765432';
---
<form id="contact-form">
  <button type="submit">Enviar Mensaje</button>
</form>

<script define:vars={{ ID_CONVERSION_CONTACTO }}>
  document.getElementById('contact-form').addEventListener('submit', (event) => {
    event.preventDefault();
    
    // Aquí iría tu lógica para enviar el formulario...
    console.log('Formulario enviado con éxito!');

    // ✨ Llama a la función para registrar la conversión en LinkedIn ✨
    lintrk(ID_CONVERSION_CONTACTO);
  });
</script>
```

## ⚙️ API

### Componente `<LinkedInInsightTag />`

| Propiedad   | Tipo     | Requerido | Descripción                                                                |
|:------------|:---------|:----------|:---------------------------------------------------------------------------|
| `partnerId` | `string` | **Sí** | Tu "Partner ID" único, proporcionado por el Campaign Manager de LinkedIn. |

### Función `lintrk()`

| Parámetro      | Tipo             | Requerido | Descripción                                                        |
|:---------------|:-----------------|:----------|:-------------------------------------------------------------------|
| `conversionId` | `string` o `number` | **Sí** | El ID de la conversión específica que deseas registrar.            |


## 🤝 Cont
