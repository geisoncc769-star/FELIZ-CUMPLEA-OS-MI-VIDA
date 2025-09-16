# 🎉 Página de Cumpleaños para Isa 💖

Una hermosa página web interactiva para celebrar el cumpleaños de Isa, con una rosa mágica, mensajes románticos, música de fondo y efectos visuales espectaculares.

## 📁 Estructura de Archivos

```
📦 pagina-cumpleanos-isa/
├── 📄 index.html          # Estructura HTML principal
├── 🎨 styles.css          # Estilos y animaciones
├── 📱 responsive.css      # Diseño responsivo
├── ⚡ script.js           # JavaScript e interactividad
├── 🎵 cancion-favorita.mp3 # Tu archivo de música (agregar)
└── 📖 README.md           # Este archivo de instrucciones
```

## 🚀 Instalación y Uso

### Opción 1: GitHub Pages (Recomendado)

1. **Crear repositorio en GitHub:**
   - Ve a [GitHub.com](https://github.com)
   - Crea un nuevo repositorio público
   - Nómbralo como: `cumpleanos-isa` o similar

2. **Subir archivos:**
   - Sube todos los archivos (.html, .css, .js)
   - Agrega tu archivo MP3 y nómbralo: `cancion-favorita.mp3`

3. **Activar GitHub Pages:**
   - Ve a Settings → Pages
   - Selecciona "Deploy from a branch"
   - Elige "main" branch y "/ (root)"
   - Tu página estará en: `https://tu-usuario.github.io/cumpleanos-isa`

### Opción 2: Uso Local

1. **Descargar archivos:**
   - Descarga todos los archivos en una carpeta
   - Agrega tu archivo de música como `cancion-favorita.mp3`

2. **Abrir página:**
   - Haz doble clic en `index.html`
   - Se abrirá en tu navegador predeterminado

## 🎵 Configurar tu Música

### Cambiar la canción:

1. **Nombre del archivo:**
   - Renombra tu MP3 a: `cancion-favorita.mp3`
   - O edita el archivo `index.html` línea 69:
   ```html
   <source src="TU-ARCHIVO.mp3" type="audio/mpeg">
   ```

2. **Formatos soportados:**
   - MP3 (recomendado)
   - WAV
   - OGG

## ✨ Características

### 🌹 Rosa Interactiva
- Rosa 3D realista con pétalos, tallo y hojas
- Animación de flotación suave
- Efectos de brillo al hacer hover
- 15 mensajes románticos únicos

### 🎵 Sistema de Audio
- Reproducción automática de música
- Control de volumen deslizante
- Botón de pausa/reproducir
- Soporte para múltiples formatos

### 🎨 Efectos Visuales
- Partículas de corazones flotantes
- Destellos dorados
- Confeti colorido al hacer clic
- Fondo con gradiente animado

### 📱 Diseño Responsivo
- Perfecto en móviles (iPhone, Android)
- Optimizado para tablets
- Excelente en computadores
- Soporte para orientación horizontal/vertical

## 🛠️ Personalización

### Cambiar el título:
```html
<!-- En index.html línea 6 -->
<title>💖 Tu Nuevo Título 💖</title>

<!-- En index.html línea 12 -->
<h1 class="title">🎉 Tu Nuevo Mensaje 🎂</h1>
```

### Agregar más mensajes:
```javascript
// En script.js líneas 2-17, agregar al array:
"🆕 Tu nuevo mensaje romántico 🆕"
```

### Cambiar colores:
```css
/* En styles.css, buscar y modificar: */
background: linear-gradient(45deg, #ff6b9d, #ffc3a0, #ff9a9e, #fecfef);
```

## 🎯 Compatibilidad

### Navegadores Soportados:
✅ Chrome 80+  
✅ Firefox 70+  
✅ Safari 13+  
✅ Edge 80+  
✅ Mobile Safari  
✅ Chrome Mobile  

### Dispositivos Probados:
✅ iPhone (todos los modelos)  
✅ iPad  
✅ Android phones/tablets  
✅ Windows PC  
✅ Mac  
✅ Linux  

## 🐛 Solución de Problemas

### La música no se reproduce automáticamente:
- **Causa:** Políticas de navegador
- **Solución:** La música iniciará con el primer clic/toque

### La página no se ve bien en móvil:
- **Verificar:** Que `responsive.css` esté vinculado
- **Comprobar:** Que la etiqueta viewport esté presente

### Los efectos van lentos:
- **En móviles:** Es normal, está optimizado para rendimiento
- **En PC:** Verificar que el navegador esté actualizado

### El archivo de música no carga:
- **Verificar:** Que el nombre sea exactamente `cancion-favorita.mp3`
- **Comprobar:** Que esté en la misma carpeta que `index.html`
- **Formato:** Usar MP3 para mejor compatibilidad

## 📞 Soporte

Si tienes problemas:

1. **Verifica** que todos los archivos estén en la misma carpeta
2. **Comprueba** que el archivo de música tenga el nombre correcto
3. **Prueba** en un navegador diferente
4. **Asegúrate** de que JavaScript esté habilitado

## 🎁 Características Especiales

### Accesibilidad:
- Navegación por teclado
- Soporte para lectores de pantalla
- Alto contraste
- Textos escalables

### Optimizaciones:
- Carga rápida
- Bajo consumo de batería en móviles
- Animaciones suaves
- Código limpio y documentado

---

💖 **¡Hecho con amor para Isa!** 💖

*Que tengas un cumpleaños mágico y lleno de sorpresas* 🎂✨
