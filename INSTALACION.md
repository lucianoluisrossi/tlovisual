# 🚀 GUÍA DE INSTALACIÓN - TLO VISUAL

## CONTENIDO ENTREGADO

✅ **Carpeta completa:** `tlo-visual-project/`
✅ **Archivo ZIP:** `tlo-visual-website.zip`

---

## 📂 ESTRUCTURA DE ARCHIVOS

```
tlo-visual-project/
│
├── index.html                  ← Página principal (HOMEPAGE)
├── calculadora.html            ← Calculadora LED interactiva
│
├── css/
│   ├── styles.css             ← Estilos homepage
│   └── calculator.css         ← Estilos calculadora
│
├── js/
│   ├── main.js               ← JavaScript homepage (slider, filtros, etc.)
│   └── calculator.js         ← Lógica de cálculos LED
│
├── images/                    ← VACÍA - Aquí van tus fotos
├── assets/                    ← VACÍA - Logo, favicon, etc.
├── docs/                      ← Documentación adicional
└── README.md                  ← Documentación técnica completa
```

---

## ⚡ OPCIÓN 1: PRUEBA RÁPIDA (Local)

### Para ver el sitio inmediatamente:

1. **Descomprimir** el archivo `tlo-visual-website.zip`
2. **Abrir** la carpeta `tlo-visual-project`
3. **Hacer doble click** en `index.html`
4. El sitio se abrirá en tu navegador

✅ **Listo!** Ya puedes navegar por todo el sitio.

---

## 🌐 OPCIÓN 2: SUBIR A UN HOSTING

### Para tener el sitio online:

### **A) Hosting Gratuito (Para pruebas)**

**NETLIFY (Recomendado):**
1. Ir a [netlify.com](https://netlify.com)
2. Crear cuenta gratis
3. Arrastrar la carpeta `tlo-visual-project` a Netlify
4. ✅ En 30 segundos tendrás una URL tipo: `tlovisual.netlify.app`

**VERCEL:**
1. Ir a [vercel.com](https://vercel.com)
2. Crear cuenta gratis
3. Importar proyecto
4. ✅ URL disponible en 1 minuto

**GITHUB PAGES:**
1. Subir carpeta a un repositorio GitHub
2. Activar GitHub Pages en Settings
3. ✅ URL: `tu-usuario.github.io/tlo-visual`

---

### **B) Hosting de Pago (Profesional)**

**PARA USAR TU DOMINIO (tlovisual.com):**

**HOSTINGER / SITEGROUND / BLUEHOST:**

1. **Contratar hosting** (~$3-10/mes)
2. **Acceder a cPanel** o File Manager
3. **Subir archivos:**
   - Ir a carpeta `public_html/`
   - Subir TODO el contenido de `tlo-visual-project/`
   - NO subir la carpeta, sino el CONTENIDO (index.html debe estar en raíz)

4. **Configurar dominio:**
   - Si compraste dominio junto con hosting: ya está listo
   - Si tienes dominio aparte: configurar DNS apuntando al hosting

5. **✅ Visitar:** `http://tlovisual.com`

---

## 🔧 PERSONALIZACIÓN OBLIGATORIA

### **1. Cambiar Teléfonos y Email**

Buscar y reemplazar en TODOS los archivos:

```
BUSCAR:          34686514064
REEMPLAZAR POR:  Tu número WhatsApp

BUSCAR:          618 831 500
REEMPLAZAR POR:  Tu teléfono

BUSCAR:          tlo@tlovisual.com
REEMPLAZAR POR:  Tu email
```

**Archivos a editar:**
- `index.html`
- `calculadora.html`
- `js/calculator.js`

---

### **2. Agregar Imágenes Reales**

Actualmente el sitio usa imágenes de prueba. Necesitas:

**HERO GALLERY (3 imágenes):**
- Tamaño: 1600x900px mínimo
- Formato: JPG optimizado
- Peso: <300KB cada una
- Ejemplo: `hero-concierto.jpg`, `hero-corporativo.jpg`, `hero-feria.jpg`

**PANTALLAS LED (3 imágenes):**
- Fotos de tus pantallas P3, P4.8, modulares
- Tamaño: 800x600px
- Peso: <200KB

**PROYECTOS (9-15 imágenes):**
- Fotos de eventos reales que realizaste
- Tamaño: 800x600px
- Peso: <200KB cada una

**DÓNDE GUARDAR:**
1. Poner todas las imágenes en carpeta `images/`
2. Nombrarlas descriptivamente: `pantalla-p3-indoor.jpg`

**CÓMO ACTUALIZAR EN EL CÓDIGO:**

Abrir `index.html`, buscar:
```html
<img src="https://images.unsplash.com/photo-xxx" alt="...">
```

Reemplazar por:
```html
<img src="images/tu-imagen.jpg" alt="...">
```

---

### **3. Agregar Logo**

1. Guardar logo en: `assets/logo.png`
2. Editar `index.html` y `calculadora.html`:

```html
<!-- BUSCAR ESTA LÍNEA: -->
<a href="index.html" class="logo">TLO<span>Visual</span></a>

<!-- REEMPLAZAR POR: -->
<a href="index.html" class="logo">
    <img src="assets/logo.png" alt="TLO Visual" height="40">
</a>
```

---

### **4. Personalizar Calculadora**

Si tienes modelos específicos de pantallas, editar `js/calculator.js`:

```javascript
// LÍNEA 7 - Agregar tus pantallas reales
const screens = {
    indoor: {
        p3: {
            pitch: 3.0,
            moduleSize: 0.5,      // Tamaño de módulo en metros
            weight: 7.5,          // Peso por módulo en kg
            power: 700,           // Consumo en watts
            brightness: 1000      // Brillo en nits
        },
        // Agregar más modelos que tengas...
    }
};
```

---

## 📊 AGREGAR GOOGLE ANALYTICS (Opcional)

Para medir visitas:

1. Crear cuenta en [analytics.google.com](https://analytics.google.com)
2. Obtener tu ID (ej: `G-XXXXXXXXXX`)
3. Agregar en `<head>` de `index.html` y `calculadora.html`:

```html
<!-- Google Analytics -->
<script async src="https://www.googletagmanager.com/gtag/js?id=G-XXXXXXXXXX"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'G-XXXXXXXXXX');
</script>
```

---

## ✅ CHECKLIST PRE-LANZAMIENTO

Antes de publicar el sitio, verificar:

- [ ] Todas las imágenes reemplazadas con fotos reales
- [ ] Teléfonos y emails actualizados
- [ ] Logo agregado
- [ ] Probado en Chrome, Firefox, Safari
- [ ] Probado en celular
- [ ] Links de WhatsApp funcionando
- [ ] Calculadora probada con diferentes valores
- [ ] Google Analytics configurado (opcional)
- [ ] Dominio apuntando correctamente

---

## 🆘 PROBLEMAS COMUNES

### ❌ "Las imágenes no se ven"
**Solución:** Verificar que las rutas sean correctas. Si la imagen está en `images/foto.jpg`, el HTML debe tener `src="images/foto.jpg"`

### ❌ "La calculadora no funciona"
**Solución:** 
1. Abrir consola del navegador (F12)
2. Ver si hay errores
3. Verificar que `calculator.js` esté en `/js/`

### ❌ "Los estilos no se aplican"
**Solución:**
1. Verificar que archivos CSS estén en `/css/`
2. Limpiar caché: Ctrl + Shift + R (Windows) o Cmd + Shift + R (Mac)

### ❌ "WhatsApp no abre"
**Solución:** Verificar que el número esté en formato internacional: `34686514064` (sin +, sin espacios)

---

## 📱 CONTACTO PARA SOPORTE

Si necesitas ayuda con:
- Instalación en hosting
- Personalización adicional
- Problemas técnicos
- Agregar nuevas funcionalidades

Contactame y te ayudo.

---

## 🎉 ¡LISTO!

Con estos pasos tendrás el sitio de TLO Visual funcionando perfectamente.

**Tiempo estimado de configuración:** 1-2 horas
(Incluyendo personalización de contenidos e imágenes)

---

**Última actualización:** Marzo 2024
**Versión:** 1.0.0