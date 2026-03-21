// ============================================
// PROYECTO SEMANA 06: Reporte con Bucles
// Dominio: [tu dominio asignado]
// ============================================
//
// INSTRUCCIONES:
// 1. Reemplaza todos los elementos genéricos
//    con datos reales de TU dominio asignado.
// 2. Completa cada sección marcada con TODO.
// 3. Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================
// Cada objeto representa un elemento de tu dominio.
// Adapta las propiedades según tu contexto.
//
// NOTA PARA EL APRENDIZ:
// Ejemplos de adaptación:
//   Biblioteca  → { name: "El Principito", category: "ficción", value: 96 }
//   Farmacia    → { name: "Ibuprofeno", category: "analgésico", value: 150 }
//   Gimnasio    → { name: "Bicicleta", category: "cardio", value: 6.5 }
//   Restaurante → { name: "Ensalada César", category: "entrada", value: 8.5 }

// TODO: Define al menos 6 elementos de tu dominio
// Reemplaza el nombre de la constante por algo representativo:
// (ej: books, medicines, machines, dishes, patients...)
 // TODO: Agrega tus elementos aquí
  // { name: "nombre del elemento", category: "categoría", value: 0 }
// 1. Array de objetos: Definimos 6 libros con su categoría y precio
const books = [
  { name: "El Principito", category: "Infantil", value: 12.50 },
  { name: "Cien años de soledad", category: "Ficción", value: 25.00 },
  { name: "Drácula", category: "Terror", value: 18.75 },
  { name: "Harry Potter", category: "Infantil", value: 30.00 },
  { name: "IT (Eso)", category: "Terror", value: 22.00 },
  { name: "Breve historia del tiempo", category: "Académico", value: 15.20 }
];
// TODO: Define las categorías relevantes para tu dominio
// (ej: para Biblioteca sería ["ficción", "no-ficción", "ciencia"])
const categories = ["Infantil", "Ficción", "Terror", "Académico"];

// TODO: Define un nombre descriptivo para el valor numérico
// (ej: "páginas", "stock", "horas de uso", "precio", "duración")
const valueLabel = "precio"; 

console.log(`✅ Inventario de ${books.length} libros cargados.`);

// ============================================
// SECCIÓN 2: Listado completo con for...of
// ============================================
console.log("=== LISTADO COMPLETO DE LIBROS ===");
let lineNumber = 0;
for (const book of books) {
  lineNumber++;
  console.log(`${lineNumber}. ${book.name} — ${book.category} — ${valueLabel}: $${book.value}`);
}

console.log("");
// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
// ============================================
// SECCIÓN 3: Contadores por categoría
// ============================================
console.log("=== CONTEO POR CATEGORÍA ===");
for (const category of categories) {
  let count = 0;
  for (const book of books) {
    if (book.category === category) {
      count++; 
    }
  }
  console.log(`${category}: ${count} libro(s)`);
}

console.log("");

  // TODO: Completa el bucle para contar items de esta categoría
  // for (const item of items) {
  //   if (item.category === category) count++;
  // }
// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
// ============================================
// SECCIÓN 4: Totales y promedio (acumulador)
// ============================================
console.log("=== ESTADÍSTICAS ECONÓMICAS ===");
let totalValue = 0;
for (const book of books) {
  // Sumamos el valor del libro actual al total acumulado
  totalValue += book.value; 
}
const averageValue = books.length > 0 ? totalValue / books.length : 0;

console.log(`Total acumulado (${valueLabel}): $${totalValue.toFixed(2)}`);
console.log(`Promedio de ${valueLabel}: $${averageValue.toFixed(2)}`);

console.log("");
// ============================================
// SECCIÓN 5: Máximo y mínimo
// ============================================
console.log("=== MÁXIMO Y MÍNIMO ===");
let maxBook = books[0] ?? null;
let minBook = books[0] ?? null;

if (books.length > 0) {
  // 2. Recorremos con for...of para comparar
  for (const book of books) {
     // Si el precio del libro actual es MAYOR al que teníamos guardado...
    if (book.value > maxBook.value) {
      maxBook = book; // Actualizamos el máximo
    }
     // Si el precio del libro actual es MENOR al que teníamos guardado...
    if (book.value < minBook.value) {
      minBook = book; // Actualizamos el mínimo
    }
  }

  console.log(`Mayor ${valueLabel}: ${maxBook.name} ($${maxBook.value.toFixed(2)})`);
  console.log(`Menor ${valueLabel}: ${minBook.name} ($${minBook.value.toFixed(2)})`);
}

console.log("");

// ============================================
// SECCIÓN 6: Reporte numerado con for clásico
// ============================================
console.log("=== REPORTE DETALLADO ===");

// Usamos el for clásico para cumplir con el requisito del bucle indexado
for (let i = 0; i < books.length; i++) {
  const book = books[i];
  const comparison = book.value >= averageValue ? "🟢 SOBRE EL PROMEDIO" : "🔴 BAJO EL PROMEDIO";

  // Imprimimos la línea del reporte
  console.log(`${i + 1}. ${book.name} ($${book.value.toFixed(2)}) — ${comparison}`);
}
console.log("");
console.log("=== FIN DEL REPORTE ===");