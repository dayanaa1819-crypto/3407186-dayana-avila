// ============================================
// PROYECTO SEMANA 05: Clasificador
// Condicionales — if/else, ternario, switch, ??, ?.
// ============================================
//
// NOTA PARA EL APRENDIZ:
// Adapta este script a tu dominio asignado.
// Reemplaza los comentarios TODO con tu propia implementación.
// Usa los conceptos aprendidos esta semana.
//
// Ejecuta con: node starter/script.js
// ============================================

// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// ============================================

// TODO: Define al menos 5 variables con datos de un elemento de tu dominio.
// Ejemplos orientativos:
// - Un libro, medicamento, miembro, estudiante, producto, etc.
// - Incluye: nombre, estado, valor numérico, tipo (string), y alguna propiedad opcional
// ============================================
// SECCIÓN 1: Datos del elemento de tu dominio
// Dominio: E-commerce de Libros Usados
// ============================================
const elementName = "El Principito";
const elementStatus = "excelente"; 
const elementValue = 12; 
const elementType = "Infantil"; 

// 5. Objeto con información adicional (usaremos esto para el acceso seguro ?.)
const elementInfo = {
    detalles: {
        id:1020,
        ilustraciones: "Originales de Saint-Exupéry"
    },
    vendedor: "Librería"
};

// ============================================
// SECCIÓN 2: Clasificación con if / else if / else
// ============================================

// TODO: Clasifica el elemento en al menos 3 niveles según elementValue.
// Ejemplo de estructura:
// let classification;
// if (elementValue >= ...) {
//   classification = "...";
// } else if (elementValue >= ...) {
//   classification = "...";
// } else {
//   classification = "...";
// }
let classification;

if (elementValue <= 0) {
    classification = "Agotado";
} else if (elementValue < 5) {
    classification = "Crítico (Pocas unidades)";
} else if (elementValue <= 15) {
    classification = "Disponible";
} else {
    classification = "Abundante";
}

//let classification = "Sin clasificar"; // TODO: implementar if/else if/else

// ============================================
// SECCIÓN 3: Estado binario con operador ternario
// ============================================

// TODO: Usa el ternario para determinar un estado de dos opciones.
// Ejemplo: const statusLabel = elementStatus === "active" ? "Activo" : "Inactivo";

//const statusLabel = ""; // TODO: implementar con ternario
// Si el estado es "excelente", lo etiquetamos como Premium, de lo contrario es Estándar.
const statusLabel = elementStatus === "excelente" 
    ? "Grado de Colección (Premium)" 
    : "Uso Estándar";
// ============================================
// SECCIÓN 4: Tipo con switch
// ============================================

// TODO: Usa switch sobre elementType para asignar una etiqueta.
// Ejemplo:
// switch (elementType) {
//   case "typeA": typeLabel = "..."; break;
//   case "typeB": typeLabel = "..."; break;
//   default: typeLabel = "Tipo desconocido";
// }

let typeLabel = "Sin tipo"; // TODO: implementar con switch
// Evaluamos la variable elementType (que es "Infantil")
switch (elementType) {
    case "Infantil":
        typeLabel = "Sección Kids y Cuentos";
        break;
    case "Ficción":
        typeLabel = "Sección Novelas y Literatura";
        break;
    case "Académico":
        typeLabel = "Sección Textos Escolares y Técnicos";
        break;
    case "Terror":
        typeLabel = "Sección Suspenso y Horror";
        break;
    default:
        typeLabel = "Sección General / Otros";
}
// ============================================
// SECCIÓN 5: Valor por defecto con ??
// ============================================

// TODO: Usa ?? para obtener un valor de fallback cuando sea null o undefined.
// Si elementName fuera null, aparecerá "Libro sin título"
const displayName = elementName ?? "Libro sin título";
const infoDetail = elementInfo?.detalles?.ilustraciones ?? "Sin información adicional";


// Si se intenta acceder a elementInfo.detalles.id y elementInfo fuera null, 
// el programa daría error. Con elementInfo?.detalles?.id, el resultado es simplemente undefined
// ============================================
// SECCIÓN 6: Acceso seguro con ?.
// ============================================

// TODO: Accede de forma segura a una propiedad de elementInfo.
// Accedemos al vendedor. Si elementInfo es null, se asigna "Vendedor no registrado"
const safeProperty = elementInfo?.vendedor ?? "Vendedor no registrado";
// ============================================
// SECCIÓN 7: Ficha de salida
// ============================================

// TODO: Muestra la ficha en consola con template literals (sin concatenación +)
// Incluye todos los resultados de las secciones anteriores

//console.log("=".repeat(40));
//console.log("FICHA DE CLASIFICACIÓN");
//console.log("=".repeat(40));
// TODO: console.log(`Nombre: ${displayName}`);
// TODO: console.log(`Estado: ${statusLabel}`);
// TODO: console.log(`Clasificación: ${classification}`);
// TODO: console.log(`Tipo: ${typeLabel}`);
// TODO: console.log(`Detalle: ${infoDetail}`);
// TODO: console.log(`Propiedad adicional: ${safeProperty}`);
console.log("=".repeat(40));
// Usamos un solo console.log con un template literal multilínea
console.log(`
============================================
       📚 SISTEMA DE GESTIÓN: LIBROS
============================================
📖 LIBRO:        ${displayName}
🔖 CATEGORÍA:    ${typeLabel}
📦 STOCK:        ${classification} (${elementValue} unidades)
✨ ESTADO:       ${statusLabel}
🎨 ILUSTRACIÓN:  ${infoDetail}
🏪 VENDEDOR:     ${safeProperty}
🆔 REFERENCIA:   ${elementInfo?.detalles?.id ?? "Sin ID"}
============================================
`);

// Nota: Hemos cumplido con la restricción de NO usar el signo '+' para concatenar.