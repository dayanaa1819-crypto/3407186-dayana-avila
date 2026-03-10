// ============================================
// PROYECTO SEMANA 02: Ficha de Datos del Dominio
// ============================================
//
// 🎯 OBJETIVO: Crear una ficha de datos en consola
//    usando variables, tipos y conversiones.
//
// 📋 TU DOMINIO: Reemplaza cada TODO con datos
//    coherentes con el dominio que te fue asignado.
//
// ⚠️  POLÍTICA ANTICOPIA: Tu implementación debe ser
//    única y coherente con tu dominio asignado.
//    Implementaciones copiadas serán detectadas.
//
// Adapta cada TODO al contexto de tu dominio asignado.
// Los ejemplos en este archivo usan dominios NO asignables.
// ============================================

// ============================================
// SECCIÓN 1: DATOS PRINCIPALES
// ============================================

// TODO: Reemplaza "Mi Dominio" con el nombre de tu dominio
const DOMAIN_NAME = "E-commerce de Libros Usados";

// TODO: Cambia "Nombre del elemento" por algo de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario → "Sistema Solar en 3D"
//   Acuario    → "Tiburón Ballena"
//   Museo      → "La Gioconda (réplica)"
const itemName = "Don Quijote de la Mancha";

// TODO: Agrega una categoría, tipo o descripción corta (string)
// Ejemplos con dominios no asignables:
//   Planetario → showType = "Función inmersiva"
//   Acuario    → habitat = "Océano Pacífico"
//   Museo      → artStyle = "Renacimiento"
const itemCategory = "Novela Clásica";

// TODO: Agrega un número relevante a tu dominio (integer o decimal)
// Ejemplos con dominios no asignables:
//   Planetario → capacity = 250
//   Acuario    → tankVolume = 2_500_000
//   Museo      → estimatedValue = 4_800_000
const itemQuantity = 25_000; // reemplaza 0 con el número adecuado

// TODO: Agrega un boolean con prefijo semántico (is/has/can/should)
// Ejemplos con dominios no asignables:
//   Planetario  → isOpen = true
//   Acuario     → isEndangered = false
//   Museo       → isOnDisplay = true
const isItemAvailable = true; // reemplaza con algo de tu dominio

// TODO: Declara un valor null que signifique "no asignado aún"
// en tu dominio
// Ejemplos con dominios no asignables:
//   Planetario → currentGuide = null
//   Acuario    → feedingSchedule = null
//   Museo      → currentOwner = null
const pendingValue = null; // cambia el nombre a algo de tu dominio


// ============================================
// SECCIÓN 2: MOSTRAR FICHA DE DATOS
// ============================================
console.log("===========================");
console.log(`FICHA DE DATOS: ${DOMAIN_NAME}`);
console.log("===========================");
console.log("");

// TODO: Muestra al menos 4 datos del dominio
// Usa console.log con template literals
// Ejemplo: console.log(`Título:     ${itemName}`);
console.log(`Nombre:    ${itemName}`);
console.log(`Categoría: ${itemCategory}`);
console.log(`Precio:  ${itemQuantity}`);
console.log(`Disponible: ${isItemAvailable}`);



// ============================================
// SECCIÓN 3: VERIFICACIÓN DE TIPOS CON typeof
// ============================================
console.log("--- Tipos de datos ---");

// TODO: Usa typeof para mostrar el tipo de al menos 3 variables
// Ejemplo: console.log("typeof itemName:    ", typeof itemName);
console.log("typeof itemName:     ", typeof itemName);
console.log("typeof itemCategory: ", typeof itemCategory);
console.log("typeof itemQuantity: ", typeof itemQuantity);
console.log("typeof isItemAvailable: ", typeof isItemAvailable);
// TODO: Agrega typeof para otras 2 variables
console.log("");


// ============================================
// SECCIÓN 4: CONVERSIONES EXPLÍCITAS
// ============================================
console.log("--- Conversiones ---");

// TODO: Realiza al menos UNA conversión explícita
// Opciones:
//   a) Convertir un number a String() para mostrar con formato
//   b) Convertir un string a Number() para operar con él
//   c) Convertir cualquier valor a Boolean() y verificarlo

// Ejemplo de opción a:
const priceAsText = String(itemQuantity);
console.log("Valor como texto:", priceAsText);
console.log("typeof (convertido):", typeof priceAsText);

// TODO: Agrega tu conversión aquí

console.log("");


// ============================================
// SECCIÓN 5: VALOR NULL
// ============================================
console.log("--- Valor nulo ---");

// TODO: Muestra el valor null y verifica con === null
// Ejemplo:
console.log("Estante asignado:", pendingValue);
console.log("typeof null:", typeof pendingValue);    // "object" ← bug histórico
console.log("¿Es null?:", pendingValue === null);    // true
// TODO: Agrega typeof y la verificación === null
console.log("");


// ============================================
// CIERRE
// ============================================
console.log("===========================");
console.log("FIN DE FICHA - Semana 02");
console.log("===========================");