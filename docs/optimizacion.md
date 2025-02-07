1. Especificación de derechos y licencias

Todas las imágenes utilizadas en este sitio web han sido generadas mediante inteligencia artificial, específicamente usando la herramienta Midjourney a través de prompts propios. A pesar de ser los creadores de estas imágenes, hemos decidido liberarlas completamente de derechos de autor, permitiendo su uso libre y sin restricciones por parte de cualquier persona o entidad.

Las imágenes generadas por IA nos proporcionan:
- Libertad total de uso y distribución para cualquier persona
- Consistencia estética en todo el sitio
- Libertad creativa para representar exactamente el ambiente deseado
- Eliminación de problemas de derechos de imagen de personas reales

Sin embargo, es importante mencionar que Midjourney genera las imágenes en formato PNG por defecto, un formato que, si bien mantiene alta calidad, no está optimizado para su uso en web debido a su mayor peso. Esta limitación técnica nos llevó a implementar una estrategia de optimización mediante la conversión a formato WebP, proceso que se detalla en la siguiente sección.

2. Formato y resolución de contenidos audiovisuales adecuados

La optimización de los recursos visuales ha sido una prioridad fundamental en este proyecto. Todas las imágenes del sitio web (con excepción de las de los logos de las marcas presentes en el slider del index.html), fueron convertidas al formato WebP utilizando la herramienta cwebp, un conversor de imágenes de código abierto desarrollado por Google como parte del proyecto WebP. Esta herramienta está disponible gratuitamente a través del paquete de herramientas libwebp, que puede descargarse directamente desde el sitio web de Google Developers o instalarse mediante gestores de paquetes como apt (Linux) o Homebrew (macOS).

Para la conversión se utilizó un nivel de calidad del 90% (-q 90 en el comando cwebp), para no perder mucha calidad visual y mantener la nitidez y el detalle de las imágenes originales, especialmente importante en las fotografías nocturnas con efectos de iluminación, para que no se produzca ruido en las imágenes, mientras se aprovecha la eficiente compresión que ofrece el formato WebP.

Esta optimización resultó en una reducción del peso total de la carpeta de imágenes de más de un 87%, pasando de 120MB en su estado original a tan solo 15.2MB después de la conversión a WebP. Esta significativa reducción se logró sin comprometer la calidad visual de las imágenes, manteniendo la nitidez y viveza necesarias para representar adecuadamente el ambiente nocturno del club.

En cuanto al contenido de video, se utiliza un iframe de YouTube que maneja automáticamente los formatos MP4 y WebM, ambos óptimos para web, asegurando la mejor compatibilidad según el navegador del usuario.

3. Optimización de peso y tiempo de carga

Para garantizar un rendimiento óptimo del sitio web, se implementaron varias estrategias de optimización:

- Carga perezosa (lazy loading): Todas las imágenes de la galería principal (gallery.html) y la galería preliminar en la página de inicio (index.html) utilizan el atributo "loading='lazy'", lo que significa que las imágenes solo se cargan cuando el usuario se aproxima a ellas durante el desplazamiento, reduciendo significativamente el tiempo de carga inicial de la página.

- Resoluciones optimizadas: Las imágenes se mantienen en resoluciones moderadas pero efectivas, encontrando el equilibrio perfecto entre calidad visual y rendimiento. Esto es especialmente importante en la galería, donde se manejan múltiples imágenes simultáneamente. En general, ninguna imagen del sitio supera los 1400 píxeles en ninguna de sus dimensiones, con una importante excepción: la imagen de fondo de la sección hero en index.html, que mantiene una resolución superior para evitar cualquier pixelación o pérdida de nitidez, ya que actúa como el primer impacto visual del sitio y cubre toda la pantalla.

- Reproductor de Spotify optimizado: El reproductor de Spotify embebido también implementa lazy loading, asegurando que este elemento más pesado solo se cargue cuando sea necesario, mejorando así el tiempo de carga inicial de la página.

- Video promocional optimizado: El video promocional se implementa mediante un iframe de YouTube, lo que significa que YouTube gestiona automáticamente el formato y la calidad del video según el dispositivo y navegador del usuario. YouTube utiliza formatos como MP4 y WebM, seleccionando automáticamente la mejor opción, dependiendo del navegador del usuario, para garantizar compatibilidad y rendimiento óptimos sin necesidad de configuración adicional por nuestra parte.

La combinación de estas estrategias -formato WebP para imágenes, lazy loading, resoluciones optimizadas y gestión automática del video por YouTube- resulta en una experiencia de usuario fluida y rápida, mientras se mantiene la calidad visual necesaria para transmitir la atmósfera premium del establecimiento.

4. Accesibilidad de imágenes

La accesibilidad ha sido un aspecto fundamental en el desarrollo del sitio web, prestando especial atención a la descripción de los contenidos visuales. Cada imagen del sitio cuenta con dos niveles de descripción textual:

- Atributo 'alt': Se ha implementado en todas las imágenes un texto alternativo conciso pero descriptivo que explica el contenido visual de cada imagen. Por ejemplo, para una imagen de la galería: "Multitud disfrutando bajo una lluvia de confeti con iluminación morada."

- Atributo 'aria-label': Como complemento al 'alt', se ha añadido una descripción más detallada mediante aria-label, proporcionando contexto adicional para usuarios que utilizan lectores de pantalla. Por ejemplo: "Imagen de una fiesta animada con confeti cayendo y un público iluminado por luces moradas."

Esta implementación dual garantiza que:
- Los usuarios con discapacidad visual puedan comprender el contenido de las imágenes
- Los lectores de pantalla tengan suficiente información para transmitir la atmósfera y el contexto
- Se cumpla con las pautas de accesibilidad web (WCAG)
- No se pierda información relevante en caso de que las imágenes no se carguen

Además, elementos como el logo y los iconos de redes sociales también incluyen textos alternativos apropiados, asegurando una experiencia de navegación completa y accesible para todos los usuarios.

5. Accesibilidad de vídeos y audios

En cuanto al contenido audiovisual del sitio, este se limita a un vídeo promocional del club nocturno implementado a través de un iframe de YouTube. Este vídeo, por su naturaleza promocional, está diseñado con texto superpuesto que aparece durante la reproducción, acompañado de música de fondo. Además, los closed captions del video en YouTube proporciona subtítulos que describen las acciones y escenas que ocurren en el vídeo, lo que permite que las personas con discapacidad visual puedan seguir el contenido a través de lectores de pantalla.

No obstante, para garantizar la accesibilidad adicional, el iframe del vídeo incluye:
- Un atributo 'title' descriptivo: "Video promocional de Nighttime Club - Experimenta la noche madrileña"
- Un atributo 'aria-label' detallado: "Video promocional mostrando el ambiente y las instalaciones de Nighttime Club"

Estos atributos permiten que:
- Los lectores de pantalla identifiquen claramente el contenido del vídeo
- Los usuarios entiendan el propósito del contenido antes de su reproducción
- Se mantenga la accesibilidad incluso si el vídeo no se carga

6. Interfaz de control para audios y vídeos

La accesibilidad en el control de los elementos multimedia se garantiza mediante el uso de reproductores nativos de las plataformas integradas:

- Reproductor de YouTube: El iframe del vídeo promocional utiliza el reproductor nativo de YouTube, que proporciona una interfaz de control completa y probada, totalmente accesible mediante teclado. Los usuarios pueden navegar por los controles usando la tecla Tab y activarlos con Enter o Espacio, además de utilizar atajos de teclado específicos de YouTube como K para pausar/reproducir, M para silenciar, y las flechas para avanzar o retroceder.

- Reproductor de Spotify: El reproductor de música embebido también hereda la interfaz nativa de Spotify, que es completamente accesible mediante teclado. La navegación es intuitiva, requiriendo principalmente el uso de Tab para moverse entre controles y Espacio para activar/pausar la reproducción. Esta simplicidad en el control hace que sea especialmente accesible para usuarios que dependen de la navegación por teclado.

Ambos reproductores mantienen una consistencia con sus plataformas originales, lo que significa que los usuarios familiarizados con YouTube o Spotify encontrarán una experiencia de uso idéntica en nuestra web.

7. Compatibilidad con todos los navegadores

La compatibilidad universal ha sido un aspecto clave en la implementación de elementos multimedia:

- Elementos embebidos: Tanto el reproductor de YouTube como el de Spotify utilizan iframes, una tecnología estándar soportada universalmente por todos los navegadores modernos. La ventaja de usar estas plataformas es que manejan automáticamente la compatibilidad del formato de video (MP4/WebM) y audio según las capacidades específicas de cada navegador.

- Atributos de accesibilidad: Los atributos implementados (alt, aria-label, title) son estándares HTML ampliamente soportados por todos los navegadores y lectores de pantalla, incluyendo:
  - NVDA y JAWS en Windows
  - VoiceOver en macOS/iOS
  - TalkBack en Android
  - Todos los navegadores principales (Chrome, Firefox, Safari, Edge)

- Formatos de imagen: La elección del formato WebP, aunque moderno, está respaldada por todos los navegadores actuales, garantizando una experiencia visual consistente en cualquier dispositivo o plataforma.

- Carga perezosa: El atributo loading="lazy" es compatible con todos los navegadores modernos.Sin embargo, en navegadores más antiguos que no soporten esta función, las imágenes simplemente se cargarán de manera normal, por lo que se podrá acceder a la web desde cualquier navegador aunque estará más optimizada (sobre todo la página de la galería) en navegadores que no sean antigüos.

Esta implementación asegura que todos los elementos audiovisuales sean accesibles y funcionen correctamente independientemente del navegador o dispositivo utilizado.