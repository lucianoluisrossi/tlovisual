# 🎬 TLO VISUAL - Sitio Web Profesional

Sitio web completo para TLO Visual - Empresa de alquiler de pantallas LED y soluciones audiovisuales profesionales.

---

## 📋 **CONTENIDO DEL PROYECTO**

```
tlo-visual-project/
├── index.html              # Página principal
├── calculadora.html        # Calculadora LED interactiva
├── css/
│   ├── styles.css         # Estilos homepage
│   └── calculator.css     # Estilos calculadora
├── js/
│   ├── main.js           # JavaScript homepage
│   └── calculator.js     # Lógica calculadora
├── images/               # Carpeta para imágenes (vacía)
├── assets/               # Carpeta para assets (vacía)
├── docs/                 # Documentación adicional
└── README.md            # Este archivo
```

---

## 🚀 **CÓMO USAR EL PROYECTO**

### **Opción 1: Abrir localmente**
1. Descargar toda la carpeta `tlo-visual-project`
2. Abrir `index.html` en un navegador web
3. Navegar entre páginas normalmente

### **Opción 2: Servidor local**
```bash
# Con Python 3
python -m http.server 8000

# Con Node.js (npx)
npx http-server

# Luego abrir: http://localhost:8000
```

### **Opción 3: Subir a hosting**
1. Subir todos los archivos a tu servidor web
2. Asegurar que `index.html` esté en la raíz
3. Configurar dominio (ej: tlovisual.com)

---

## 🎨 **CARACTERÍSTICAS PRINCIPALES**

### **Homepage (index.html)**
✅ Hero gallery rotativo con 3 slides
✅ Sección "Nuestras Pantallas LED" con 3 modelos
✅ Preview de calculadora con link
✅ Galería de proyectos con filtros (9 proyectos)
✅ Sección equipamiento (6 categorías)
✅ Contacto directo (WhatsApp, teléfono, email)
✅ Footer completo
✅ Botón flotante de WhatsApp
✅ Diseño responsive mobile

### **Calculadora LED (calculadora.html)**
🧮 **Inputs:**
- Ancho y alto deseado
- Distancia de visualización
- Tipo de evento (Indoor/Outdoor)
- Tipo de uso (Alquiler/Fijo)

🧮 **Outputs calculados:**
- Pitch recomendado (P2.5, P3, P3.9, P4, P4.8, P5, P6)
- Resolución final en pixeles
- Cantidad de módulos necesarios
- Peso total aproximado
- Consumo eléctrico estimado
- Visualización gráfica de proporciones
- Recomendaciones personalizadas

---

## 🎨 **PALETA DE COLORES**

```css
--primary-black: #0A0A0A    /* Negro profundo */
--primary-orange: #FF5722   /* Naranja TLO */
--dark-gray: #1E1E1E        /* Gris oscuro */
--medium-gray: #424242      /* Gris medio */
--light-gray: #E0E0E0       /* Gris claro */
--white: #FFFFFF            /* Blanco */
```

---

## 🔧 **PERSONALIZACIÓN**

### **Cambiar información de contacto**
Buscar y reemplazar en todos los archivos:
- **Teléfono WhatsApp:** `34686514064` → Tu número
- **Teléfono:** `618 831 500` → Tu teléfono
- **Email:** `tlo@tlovisual.com` → Tu email

### **Agregar logo propio**
1. Guardar logo en `assets/logo.png`
2. En `index.html` y `calculadora.html`, reemplazar:
```html
<a href="index.html" class="logo">TLO<span>Visual</span></a>
```
Por:
```html
<a href="index.html" class="logo">
    <img src="assets/logo.png" alt="TLO Visual" height="40">
</a>
```

### **Actualizar imágenes**
Las imágenes actuales son placeholders de Unsplash. Reemplazar con fotos reales:

1. Guardar imágenes en carpeta `images/`
2. Reemplazar URLs en `index.html`:
```html
<!-- ANTES -->
<img src="https://images.unsplash.com/photo-xxx" alt="...">

<!-- DESPUÉS -->
<img src="images/nombre-imagen.jpg" alt="...">
```

**Imágenes necesarias:**
- Hero gallery: 3 imágenes (1600x900px mín.)
- Pantallas LED: 3 imágenes (800x600px mín.)
- Proyectos: 9 imágenes (800x600px mín.)
- Calculadora preview: 1 imagen (600x400px)

---

## 🧮 **CONFIGURAR CALCULADORA**

### **Agregar modelos de pantallas reales**

Editar `js/calculator.js` línea 7:

```javascript
const screens = {
    indoor: {
        p2_5: { 
            pitch: 2.5,           // Pitch en mm
            moduleSize: 0.5,      // Tamaño módulo en metros
            weight: 8,            // Peso por módulo en kg
            power: 800,           // Consumo en watts
            brightness: 1200      // Brillo en nits
        },
        // Agregar más modelos...
    },
    outdoor: {
        // Modelos outdoor...
    }
};
```

### **Personalizar recomendaciones**

Editar función `updateRecommendations()` en `js/calculator.js` (línea 120):

```javascript
// Agregar recomendaciones según tu inventario
if (pitch === 'P3' && eventType === 'indoor') {
    recommendations.push('Tenemos 200 módulos P3 disponibles');
}
```

---

## 📱 **RESPONSIVE DESIGN**

El sitio está optimizado para:
- 📱 Mobile: 320px - 768px
- 💻 Tablet: 769px - 1024px
- 🖥️ Desktop: 1025px+

**Breakpoints principales:**
- `@media (max-width: 968px)` - Tablet
- `@media (max-width: 480px)` - Mobile

---

## ⚡ **OPTIMIZACIONES**

### **Performance**
- [x] Imágenes lazy loading
- [x] CSS/JS minificado (hacer manualmente)
- [ ] Comprimir imágenes (usar TinyPNG)
- [ ] Implementar CDN
- [ ] Caché del navegador

### **SEO**
- [x] Meta tags básicos
- [x] Estructura semántica HTML5
- [ ] Sitemap.xml (crear)
- [ ] Robots.txt (crear)
- [ ] Google Analytics (agregar)

### **Accesibilidad**
- [x] Alt text en imágenes
- [x] ARIA labels en botones
- [x] Contraste de colores adecuado
- [ ] Testing con lectores de pantalla

---

## 🔗 **INTEGRACIONES FUTURAS**

### **WhatsApp Business API**
```javascript
// Mensaje pre-formateado desde calculadora
function sendCalculatorToWhatsApp() {
    const config = getCalculatorResults();
    const message = `Hola! Calculé: ${config.width}x${config.height}m...`;
    window.open(`https://wa.me/34686514064?text=${encodeURIComponent(message)}`);
}
```

### **Google Analytics**
```html
<!-- Agregar en <head> de index.html -->
<script async src="https://www.googletagmanager.com/gtag/js?id=GA_MEASUREMENT_ID"></script>
<script>
  window.dataLayer = window.dataLayer || [];
  function gtag(){dataLayer.push(arguments);}
  gtag('js', new Date());
  gtag('config', 'GA_MEASUREMENT_ID');
</script>
```

### **Formulario de Contacto**
Usar servicios como:
- Formspree.io
- Netlify Forms
- EmailJS

---

## 🐛 **TROUBLESHOOTING**

### **Las imágenes no cargan**
- Verificar que las rutas sean correctas
- Comprobar que las imágenes existan en `/images/`
- Revisar la consola del navegador (F12)

### **La calculadora no funciona**
- Abrir consola del navegador (F12)
- Ver errores en JavaScript
- Verificar que `calculator.js` esté cargado

### **Estilos no se aplican**
- Verificar que archivos CSS estén en `/css/`
- Comprobar rutas en `<link rel="stylesheet">`
- Limpiar caché del navegador (Ctrl + Shift + R)

---

## 📞 **SOPORTE**

Para dudas sobre el proyecto:
- Email: [tu-email]
- WhatsApp: [tu-número]

---

## 📝 **CHANGELOG**

### v1.0.0 (2024-03-07)
- ✅ Homepage completo con hero gallery
- ✅ Sección pantallas LED con 3 modelos
- ✅ Galería proyectos con 9 items y filtros
- ✅ Calculadora LED funcional
- ✅ Diseño responsive
- ✅ Integración WhatsApp

---

## 🎯 **PRÓXIMOS PASOS RECOMENDADOS**

1. **Reemplazar imágenes placeholder** con fotos reales de TLO
2. **Actualizar información de contacto** en todos los archivos
3. **Agregar más proyectos** al portfolio (recomendado: 15-20 total)
4. **Personalizar calculadora** con modelos específicos de TLO
5. **Optimizar imágenes** (comprimir a <200KB cada una)
6. **Testear en múltiples dispositivos** (móvil, tablet, desktop)
7. **Configurar Google Analytics** para métricas
8. **Agregar más páginas** (opcional):
   - Nosotros / Equipo
   - Servicios (página individual por servicio)
   - Blog / Noticias
   - Casos de éxito (proyectos individuales)

---

## 📄 **LICENCIA**

Proyecto desarrollado para TLO Visual.
Todos los derechos reservados © 2024 TLO Visual

---

## 👨‍💻 **DESARROLLADO POR**

[Tu nombre/empresa]
[Fecha: Marzo 2024]

---

**¿Necesitas ayuda con la implementación?**
Contactame para soporte técnico o personalizaciones adicionales.