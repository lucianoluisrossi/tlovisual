# CONTEXTO DEL PROYECTO — TLO Visual

## ¿Qué es este proyecto?

**TLO Visual** es el sitio web corporativo de una empresa española de alquiler de pantallas LED y soluciones audiovisuales para eventos. El sitio es completamente estático (HTML + CSS + JS vanilla), sin backend ni base de datos.

**Datos de la empresa:**
- 15+ años de experiencia
- 500+ eventos completados
- Soporte técnico 24/7
- Contacto: tlo@tlovisual.com | 618 831 500 | WhatsApp: +34 686 514 064

---

## Estructura del proyecto

```
tlovisual/
├── index.html          # Página principal
├── calculadora.html    # Calculadora interactiva de LED
├── css/
│   ├── styles.css      # Estilos del sitio principal
│   └── calculator.css  # Estilos de la calculadora
├── js/
│   ├── main.js         # Lógica e interacciones del sitio principal
│   └── calculator.js   # Lógica de cálculo LED
├── images/
│   ├── logo_tlo.png
│   ├── logo_tlo_white.png
│   ├── grandeseventos.jpg
│   ├── corporativo.jpg
│   └── ferias_exposiciones.jpg
├── assets/             # (vacío, para futuros recursos)
├── docs/               # (vacío, para documentación)
├── README.md
├── INSTALACION.md
└── CONTEXTO.md         # este archivo
```

---

## Stack tecnológico

| Capa        | Tecnología                              |
|-------------|------------------------------------------|
| Markup      | HTML5 semántico                          |
| Estilos     | CSS3 — variables, Grid, Flexbox          |
| Lógica      | JavaScript ES6+ (vanilla, sin frameworks)|
| Tipografías | Google Fonts: Poppins, Inter, Roboto Mono|
| Hosting     | Estático — Netlify / Vercel / cPanel     |

No requiere proceso de build ni dependencias npm.

---

## Páginas

### `index.html` — Sitio principal

Secciones en orden:
1. **Navbar fijo** — logo + links + menú hamburguesa (≤968px)
2. **Hero gallery** — slider de 3 imágenes con auto-avance cada 5s
3. **Intro** — presentación de la empresa con estadísticas
4. **Catálogo de pantallas LED** — 5 productos con filtros (Indoor / Outdoor / Transparente)
5. **Preview calculadora** — CTA hacia `calculadora.html`
6. **Galería de proyectos** — 9 ítems con filtros (Conciertos / Corporativo / Ferias / Shows)
7. **Equipamiento** — 6 categorías (pantallas, proyectores, audio, iluminación, vídeo, rigging)
8. **Contacto** — 3 vías: WhatsApp, teléfono, email
9. **Footer** — links + contacto
10. **Botón flotante WhatsApp**

### `calculadora.html` — Calculadora LED

Herramienta interactiva que recomienda la configuración óptima de pantalla LED.

**Entradas:** ancho, alto, distancia de visión, tipo de evento, uso (interior/exterior)

**Salidas calculadas:**
- Pitch recomendado (P2.5 → P6)
- Resolución final en píxeles
- Número de módulos necesarios
- Peso aproximado
- Consumo eléctrico
- Recomendaciones contextuales (5-6 sugerencias personalizadas)

**Funcionalidades extra:**
- Recálculo en tiempo real (debounce 500ms)
- Preview visual con ratio de aspecto
- URLs compartibles con parámetros
- Integración WhatsApp con mensaje pre-formateado
- Compartir configuración vía Web Share API (fallback a portapapeles)
- Placeholder para exportar PDF (pendiente implementar)

---

## Base de datos de pantallas (hardcoded en `calculator.js`)

```js
indoor:  P2.5, P3, P3.9
outdoor: P4, P4.8, P5, P6
```

Cada modelo tiene: pitch, moduleSize (0.5m), weight (kg/m²), power (W/m²), brightness (nits).

**Algoritmo de selección de pitch:**
```
pitch_óptimo (mm) = distancia_visión (m) × 0.25–0.35
```

---

## Identidad visual

```css
--primary-black:  #0A0A0A   /* fondo principal */
--primary-orange: #FF5722   /* color de marca TLO */
--dark-gray:      #1E1E1E
--medium-gray:    #424242
--light-gray:     #E0E0E0
--white:          #FFFFFF
--success:        #4CAF50
```

**Badges de tipo de pantalla:**
- Outdoor → azul `#1565C0`
- Transparente → verde `#2E7D32`
- Indoor Dicolor → púrpura `#6A1B9A`

---

## Responsive

| Rango       | Descripción           |
|-------------|------------------------|
| ≤768px      | Móvil                 |
| 769–1024px  | Tablet                |
| ≥1025px     | Desktop               |

Menú hamburguesa activo en ≤968px.

---

## Integraciones externas

- **WhatsApp Business** — URLs `wa.me` (sin autenticación)
- **Google Fonts** — CDN
- **Google Drive** — fichas técnicas de productos (PDFs)
- **Cloudflare Email Protection** — ofuscación de email

---

## Despliegue

No requiere build. Opciones de despliegue:

```bash
# Desarrollo local
python -m http.server 8000
# o
npx http-server
```

Para producción: subir todos los archivos a la raíz del hosting (public_html o equivalente). Usar rutas relativas (ya configuradas).

---

## Mejoras pendientes / roadmap documentado

- [ ] Generación de PDF en calculadora (jsPDF)
- [ ] Formulario de contacto (Formspree / EmailJS)
- [ ] Google Analytics
- [ ] sitemap.xml y robots.txt
- [ ] Minificación de CSS/JS
- [ ] Lazy loading de imágenes
- [ ] Ampliar portafolio a 15-20 proyectos
- [ ] Páginas individuales por servicio
- [ ] Sección Blog / Noticias

---

## Archivos de documentación existentes

| Archivo          | Contenido                                      |
|------------------|------------------------------------------------|
| `README.md`      | Descripción del proyecto, paleta, personalización, troubleshooting |
| `INSTALACION.md` | Guía paso a paso de instalación y despliegue   |
| `CONTEXTO.md`    | Este archivo — contexto técnico y funcional    |
