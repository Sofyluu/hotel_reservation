# Hotel Reservation System

## 📋 Descripción

Este proyecto es un sistema de reservación de hoteles para una cadena hotelera en Miami, que incluye tres hoteles: **Lakewood**, **Bridgewood**, y **Ridgewood**. Los usuarios pueden seleccionar un rango de fechas y especificar si son clientes regulares o con recompensas. El sistema calculará el costo total de la estancia y mostrará la mejor opción disponible, destacando el hotel más económico o, en caso de empate, el de mayor calificación.

## 📂 Estructura del Proyecto

### 🖥️ Frontend

- **HTML**: La estructura de la página organiza el contenido en una cuadrícula que incluye el encabezado, el formulario de búsqueda y los resultados. Los enlaces en el encabezado permiten acceder a los detalles de cada hotel.

- **CSS**: Se utiliza CSS Grid y Flexbox para diseñar una interfaz responsiva. Los estilos personalizados se aplican para crear una experiencia visual coherente, sin el uso de frameworks de CSS.

### 💻 Lógica de JavaScript

- **Datos de Hoteles**: Los hoteles están definidos en un array de objetos `hotels`, cada uno con tarifas para días de semana y fines de semana, tanto para clientes regulares como con recompensas, además de su calificación y una imagen.

- **Selección de Fechas**: Implementada mediante la biblioteca `flatpickr`, que permite a los usuarios seleccionar un rango de fechas.

- **Cálculo de Tarifas**: La función `calculatePrice()` calcula el costo total en función de las fechas seleccionadas y el tipo de cliente.

- **Manejo de Búsqueda**: La función `handleSearch()` se activa con el botón "Explore", calcula el precio total para cada hotel, ordena los resultados por precio y calificación, y muestra los resultados.

- **Mostrar Resultados**: `displayResults()` muestra una tarjeta para cada hotel en la interfaz, destacando la mejor oferta.

- **Detalles del Hotel**: `displayHotelDetails()` muestra una tarjeta con detalles específicos del hotel seleccionado al hacer clic en su nombre.

## 📦 Instalación

1. **Clona este repositorio:**
   ```bash
   git clone <URL_DEL_REPOSITORIO>

2. **Navega al directorio del proyecto:**
   ```bash
   cd <NOMBRE_DEL_PROYECTO>
3. **Abre index.html en tu navegador:**
- No se requieren instalaciones adicionales.
## 🚀 Uso

1. **Selecciona el tipo de cliente:**
   - Marca la casilla si eres un cliente con recompensas.

2. **Escoge el rango de fechas:**
   - Usa el selector de fechas para elegir el periodo de tu estancia.

3. **Busca el hotel más adecuado:**
   - Haz clic en "Explore" para calcular y mostrar la mejor opción de hotel según tus preferencias.

## 📚 Suposiciones

- Las tarifas y calificaciones de los hoteles son constantes.
- Los usuarios ingresarán un rango de fechas válido.
- En caso de empate en el costo total, se seleccionará el hotel con mayor calificación.

## 🤝 Contribuciones

Este proyecto sigue las reglas de un desafío, por lo que no se aceptan contribuciones externas. Sin embargo, las sugerencias y comentarios son bienvenidos.

## 📝 Licencia

Este proyecto está bajo la licencia MIT. Para más detalles, consulta el archivo [LICENSE](LICENSE).

## 📧 Contacto

Si tienes alguna pregunta o sugerencia, por favor contacta a sofympincay@gmail.com
