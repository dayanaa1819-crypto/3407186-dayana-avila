// ============================================
// PROYECTO SEMANA 03: Calculadora de E-commerce de Libros Usados
// ============================================
// Adapta este archivo a tu dominio asignado.
//
// Ejemplos con dominios no asignables:
// - Planetario    → calcular ingresos por función, capacidad disponible
// - Acuario       → calcular costo de alimentación, volumen total de tanques
// - Museo         → calcular valor de exhibición, costo de entrada
// - Zoológico     → calcular gasto diario por especie, total de visitantes
// - Observatorio  → calcular duración total de eventos, aforo restante
// ============================================

// ============================================
// SECCIÓN 1: Datos del dominio
// ============================================

// TODO: Define las constantes base de tu dominio
// Ejemplos con dominios no asignables:
//   Planetario:   TICKET_PRICE = 12_000, MAX_CAPACITY = 45
//   Acuario:      DAILY_FEEDING_KG = 150, ENTRY_PRICE = 35_000
//   Museo:        ADULT_TICKET = 20_000, GUIDED_TOUR = 15_000
//   Zoológico:    FOOD_COST_PER_DAY = 500_000, MAX_VISITORS = 800
//   Observatorio: SESSION_DURATION = 90, TICKET_PRICE = 18_000
const BOOK_PRICE = 25000;     // Precio base por libro usado  
const SHIPPING_FEE = 8000;      // Costo de envío fijo
const BOX_CAPACITY = 10;        // Capacidad de libros por caja  
const LOYALTY_EXPONENT = 2;     // Exponente para el cálculo de puntos premium
const DISCOUNT_PER_DETAIL = 5000; // Descuento por cada (rayón/mancha)

// ============================================
// SECCIÓN 2: Operaciones aritméticas
// ============================================
console.log("=== Operaciones básicas ===");

// TODO: Calcula totales, subtotales o valores clave de tu dominio
// Usa: +, -, *, /, %, **
// Etiqueta cada resultado con console.log()

// 1. * Multiplicación: Subtotal guiado por BOOK_PRICE
const quantityBought = 6; 
const detailsFound = 3;   

// 1. [*] Multiplicación
const subtotal = BOOK_PRICE * quantityBought;
console.log("Subtotal de la compra:", subtotal);

// 2. [+] Suma
const totalPlusShipping = subtotal + SHIPPING_FEE;
console.log("Total con envío:", totalPlusShipping);

// 3. [-] Resta
// Ahora DISCOUNT_PER_DETAIL está bien escrito y existe
const totalDiscount = detailsFound * DISCOUNT_PER_DETAIL;
const priceAfterDiscount = totalPlusShipping - totalDiscount;
console.log("Total tras restar descuentos por estado (-):", priceAfterDiscount);

// 4. [/] División
const realAvgPrice = priceAfterDiscount / quantityBought;
console.log("Precio promedio real por libro usado (/):", realAvgPrice);

// 5. [%] Módulo
// Ahora BOX_CAPACITY ya está definido arriba
const leftoverBooks = quantityBought % BOX_CAPACITY;
console.log("Libros que quedan fuera de cajas completas (%):", leftoverBooks);

// 6. [**] Exponente
// Ahora LOYALTY_EXPONENT ya está definido arriba
const loyaltyPoints = quantityBought ** LOYALTY_EXPONENT;
console.log("Puntos de fidelidad ganados (**):", loyaltyPoints);

console.log("");
// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// TODO: Usa +=, -=, *=, /= para actualizar valores acumulados
// Muestra el valor antes y después de cada operación

// ============================================
// SECCIÓN 3: Asignación compuesta
// ============================================
console.log("=== Asignación compuesta ===");

// Empezamos con el subtotal que calculamos en la Sección 2
let cartTotal = priceAfterDiscount; 
console.log("Valor inicial del carrito:", cartTotal);

// += Usamos la constante de envío para ser coherentes
cartTotal += SHIPPING_FEE; 
console.log("Tras sumar el envío (SHIPPING_FEE):", cartTotal);

// -= Restamos un cupón fijo de descuento por ser libros usados
cartTotal -= 2000; 
console.log("Tras aplicar cupón de agradecimiento:", cartTotal);

// *= Si el cliente elige envío express, sube un 5% el costo total
cartTotal *= 1.05; 
console.log("Total con recargo por logística express (5%):", cartTotal);

// /= Finalmente, mostramos cuánto pagaría si lo divide con un amigo
let paymentSplit = cartTotal;
paymentSplit /= 2;
console.log("Valor por persona si dividen el pago:", paymentSplit);
// ============================================
// SECCIÓN 4: Comparación estricta
// ============================================
console.log("=== Validaciones con === ===");

// TODO: Valida condiciones usando === y operadores de orden
// NUNCA uses == (penalización en la rúbrica)

// Ejemplo (NO copiar):
console.log("=== Validaciones con === ===");

const stockAvailable = 10;
const bookCategory = "raro";

// Validación de categoría (Estricta)
const isRareBook = bookCategory === "raro";
console.log("¿Es un ejemplar de categoría rara?", isRareBook);

// Validación de stock disponible
const hasStock = stockAvailable > 0;
console.log("¿Hay disponibilidad para venta?", hasStock);

// Validación de stock crítico (Exactamente 1)
const isCriticalStock = stockAvailable === 1;
console.log("¿Es la última unidad disponible?", isCriticalStock);

// Validación de precio (¿Supera el precio base estándar?)
const isAboveBasePrice = priceAfterDiscount > BOOK_PRICE;
console.log("¿La compra total supera el precio de un solo libro?", isAboveBasePrice);

console.log("");

// ============================================
// SECCIÓN 5: Operadores lógicos
// ============================================
console.log("=== Condiciones lógicas ===");

// TODO: Combina condiciones con &&, ||, !
// Al menos una condición con && y una con ||

const isUserLogged = true;
const hasPremiumSubscription = false;

// &&: Envío express si está logueado Y hay stock
const allowExpressShipping = isUserLogged && hasStock;
console.log("¿Habilitar botón de envío express?", allowExpressShipping);

// ||: Descuento si es Premium O si la compra es mayor a 100,000
const applySpecialBenefit = hasPremiumSubscription || cartTotal > 100000;
console.log("¿Aplica beneficio especial de socio?", applySpecialBenefit);

// !: Validar que NO sea una cantidad de libros excesiva para un solo envío
const isNotBulkOrder = !(quantityBought > 20);
console.log("¿Es un pedido de tamaño estándar?", isNotBulkOrder);

console.log("");

// ============================================
// SECCIÓN 6: Resumen final
// ============================================
console.log("=== Resumen ===");

// TODO: Muestra un resumen con los valores más importantes
// calculados en las secciones anteriores
// 1. Coincide Sección 2 (quantityBought)
console.log(`- Libros procesados: ${quantityBought}`);

// 2. Coincide Sección 2 (Resta - totalDiscount)
console.log(`- Descuentos aplicados por detalles: $${totalDiscount}`);

// 3. Coincide Sección 2 (Cálculo exponente ** - loyaltyPoints)
console.log(`- Puntos de fidelidad generados: ${loyaltyPoints}`);

// 4. Coincide con la transformación final de la Sección 3 (cartTotal)
console.log(`- Total final a pagar (con envío y recargos): $${cartTotal.toFixed(2)}`);

console.log("-----------------------------");
console.log("Estado de la orden: LISTA PARA DESPACHO");

console.log("");