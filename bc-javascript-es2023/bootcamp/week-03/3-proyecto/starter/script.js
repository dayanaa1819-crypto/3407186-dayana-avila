/**
 * ============================================
 * PROYECTO SEMANA 03 - SISTEMA DE GESTIÓN CON POO
<<<<<<< HEAD
=======
 * Dominio E-commerce de libros usados
>>>>>>> master
 * Archivo inicial para el aprendiz
 * ============================================
 *
 * INSTRUCCIONES:
 * 1. Lee el README.md del proyecto para entender los requisitos
 * 2. Adapta TODAS las clases a tu dominio asignado por el instructor
 * 3. Usa características ES2023 de POO:
 *    - Clases con constructor
 *    - Campos privados (#)
 *    - Getters y setters
 *    - Herencia (extends, super)
 *    - Métodos estáticos
 *    - Static blocks
 * 4. Los comentarios deben estar en español
 * 5. La nomenclatura técnica (variables, funciones, clases) en inglés
 *
 * NOTA IMPORTANTE:
 * Este archivo es una PLANTILLA GENÉRICA.
 * Debes adaptarlo completamente a tu dominio asignado.
 * NO copies la implementación de otro compañero.
 *
 * EJEMPLO DE REFERENCIA (NO es un dominio asignable):
 * Planetario - Gestión de cuerpos celestes y observaciones
 *
 * ============================================
 */

// ============================================
<<<<<<< HEAD
// TODO 1: CLASE BASE - BaseItem
// ============================================
/**
 * Clase base abstracta para todos los elementos de tu dominio.
 * Implementa encapsulación con campos privados.
=======
// TODO 1: CLASE BASE - UsedBook
// ============================================
/**
 * Clase base para los del catalogo
 * Implementa encapsulación con campos privados y validacion de negocio.
>>>>>>> master
 *
 * EJEMPLO (Planetario - NO asignable):
 * class CelestialBody { ... }
 *
 * Debes renombrar esta clase según tu dominio:
 * - Biblioteca → LibraryItem
 * - Farmacia → Medicine
 * - Gimnasio → Equipment
 * - etc.
 */
<<<<<<< HEAD
class BaseItem {
  // TODO: Declara los campos privados de tu clase base
  // Estos son los campos mínimos requeridos:
  // #id;
  // #name;
  // #active;
  // #location;
  // #dateCreated;
  //
  // EJEMPLO Planetario - campos adicionales específicos:
  // #magnitude;
  // #distance;

  /**
   * Constructor de la clase base
   * @param {string} name - Nombre del elemento
   * @param {string} location - Ubicación del elemento
   */
  constructor(name, location) {
    // TODO: Inicializa los campos privados
    // this.#id = crypto.randomUUID();
    // this.#name = name;
    // this.#location = location;
    // this.#active = true;
    // this.#dateCreated = new Date().toISOString();
=======
class UsedBook {
  // TODO: Declara los campos privados de tu clase base
  // Estos son los campos mínimos requeridos:
  #id;
  #title; 
  #active;
  #location;
  #dateCreated;
  //
  // EJEMPLO Planetario - campos adicionales específicos:
  #author;
  #price;
  #condition;

  /**
   * Constructor de UsedBook
   * @param {string} title - Título del libro
   * @param {string} author - Autor del libro
   * @param {number} price - Precio del libro
   * @param {string} condition - Condición del libro (nuevo, usado, etc.)
   * @param {string} location - Ubicación del libro
   */
  constructor(title, author, price, condition, location) {
    // TODO: Inicializa los campos privados
    this.#id = crypto.randomUUID(); //Genera Id unico [2]
    this.#title = title;
    this.#author = author;
    this.#price = price;
    this.#condition = condition; //Ej. nuevo, usado, etc.
    this.#location = location;   //Ej. estandaria A,estandaria B, etc.
    this.#active = true;
    this.#dateCreated = new Date().toISOString();
>>>>>>> master
  }

  // ============================================
  // GETTERS - Acceso controlado a propiedades
  // ============================================

  /**
   * Retorna el ID único del elemento
   */
  get id() {
    // TODO: Implementa el getter
<<<<<<< HEAD
    // return this.#id;
  }

  /**
   * Retorna el nombre del elemento
   */
  get name() {
    // TODO: Implementa el getter
  }

  /**
=======
    return this.#id;
  }

  /**
   * Retorna el título del elemento
   */
  get title() {
    // TODO: Implementa el getter
    return this.#title;
  }

  /**
   * Retorna el autor del elemento
   */
  get author() {
    // TODO: Implementa el getter
    return this.#author;
  }

  /**
   * Retorna el precio del elemento
   */
  get price() {
    // TODO: Implementa el getter
    return this.#price;
  }

  /**
   * Retorna la condición del elemento
   */
  get condition() {
    // TODO: Implementa el getter
    return this.#condition;
  }
  

  /**
>>>>>>> master
   * Retorna si el elemento está activo
   */
  get isActive() {
    // TODO: Implementa el getter
<<<<<<< HEAD
=======
    return this.#active;
>>>>>>> master
  }

  /**
   * Retorna la ubicación del elemento
   */
  get location() {
    // TODO: Implementa el getter
<<<<<<< HEAD
=======
    return this.#location;
>>>>>>> master
  }

  /**
   * Retorna la fecha de creación
   */
  get dateCreated() {
    // TODO: Implementa el getter
<<<<<<< HEAD
=======
    return this.#dateCreated;
>>>>>>> master
  }

  // ============================================
  // SETTERS - Modificación controlada con validación
  // ============================================

  /**
   * Establece la ubicación con validación
<<<<<<< HEAD
   * @param {string} value - Nueva ubicación
   */
  set location(value) {
    // TODO: Implementa el setter con validación
    // if (!value || value.trim() === '') {
    //   throw new Error('La ubicación no puede estar vacía');
    // }
    // this.#location = value.trim();
=======
   * @param {string} value - Nueva ubicación en bodega
   */
  set location(value) {
    // TODO: Implementa el setter con validación
    if (!value || value.trim() === '') {
    throw new Error('La ubicación fisica es obligatoria y no puede estar vacio');
    }
   this.#location = value.trim();
  }
  /**
   * Establece el precio con validación
   * @param {number} value - Nuevo precio del libro
   */
  set price(value) {
    // TODO: Implementa el setter con validación
    const numericPrice =Number(value);
    if (isNaN(numericPrice) || numericPrice <= 0) {
      throw new Error('El precio debe ser un número positivo');
    }
   this.#price = numericPrice;

>>>>>>> master
  }

  // ============================================
  // MÉTODOS DE INSTANCIA
  // ============================================

  /**
   * Activa el elemento
   * @returns {Object} Resultado de la operación
   */
  activate() {
    // TODO: Implementa la activación
<<<<<<< HEAD
    // if (this.#active) {
    //   return { success: false, message: 'El elemento ya está activo' };
    // }
    // this.#active = true;
    // return { success: true, message: 'Elemento activado correctamente' };
  }

  /**
   * Desactiva el elemento
=======
    if (this.#active) {
    return { success: false, message: 'El libro ya esta disponible para la venta' };
    }
    this.#active = true;
    return { success: true, message: 'libro activado correctamente en el catalogo' };
  }

  /**
   * Desactiva el libro (ej. cuando se vende o se retira por daño)
>>>>>>> master
   * @returns {Object} Resultado de la operación
   */
  deactivate() {
    // TODO: Implementa la desactivación
<<<<<<< HEAD
=======
    if (!this.#active) {
      return { success: false, message: 'El libro ya esta desactivado en el catalogo' };
    }
    this.#active = false;
    return { success: true, message: 'libro desactivado de la venta' };
>>>>>>> master
  }

  /**
   * Método abstracto - DEBE ser sobrescrito en clases hijas
   * @returns {Object} Información del elemento
   */
  getInfo() {
    throw new Error('El método getInfo() debe ser implementado en la clase hija');
  }

  /**
   * Retorna el tipo de elemento (nombre de la clase)
   * @returns {string} Nombre del constructor
   */
  getType() {
    return this.constructor.name;
  }
}

// ============================================
<<<<<<< HEAD
// TODO 2: CLASES DERIVADAS - Tipos de Elementos
=======
// TODO 2: CLASES DERIVADAS - Tipos de libros
>>>>>>> master
// ============================================
/**
 * Crea al menos 3 clases que extiendan tu clase base.
 * Cada clase debe tener:
 * - Campos privados adicionales específicos
 * - Constructor que llame a super()
 * - Getters para las nuevas propiedades
 * - Implementación de getInfo()
 *
 * EJEMPLO (Planetario - NO asignable):
 *
 * class Planet extends CelestialBody {
 *   #type;      // Rocoso, gaseoso, etc.
 *   #moons;     // Número de lunas
 *   #hasRings;  // Tiene anillos
 *
 *   constructor(name, location, type, moons, hasRings) {
 *     super(name, location);
 *     this.#type = type;
 *     this.#moons = moons;
 *     this.#hasRings = hasRings;
 *   }
 *
 *   get type() { return this.#type; }
 *   get moons() { return this.#moons; }
 *   get hasRings() { return this.#hasRings; }
 *
 *   getInfo() {
 *     return {
 *       id: this.id,
 *       name: this.name,
 *       location: this.location,
 *       type: this.#type,
 *       moons: this.#moons,
 *       hasRings: this.#hasRings,
 *       active: this.isActive
 *     };
 *   }
 * }
 */

// TODO: Implementa tu primera clase derivada (Tipo 1)
<<<<<<< HEAD
// class ItemType1 extends BaseItem {
//   #specificProp1;
//   #specificProp2;
//
//   constructor(name, location, prop1, prop2) {
//     super(name, location);
//     this.#specificProp1 = prop1;
//     this.#specificProp2 = prop2;
//   }
//
//   // Getters
//   get specificProp1() { return this.#specificProp1; }
//   get specificProp2() { return this.#specificProp2; }
//
//   // Implementación de getInfo
//   getInfo() {
//     return {
//       id: this.id,
//       name: this.name,
//       type: this.getType(),
//       prop1: this.#specificProp1,
//       prop2: this.#specificProp2,
//       active: this.isActive
//     };
//   }
// }

// TODO: Implementa tu segunda clase derivada (Tipo 2)
// class ItemType2 extends BaseItem { ... }

// TODO: Implementa tu tercera clase derivada (Tipo 3)
// class ItemType3 extends BaseItem { ... }

// ============================================
// TODO 3: CLASE PERSON - Base para usuarios
=======
class CollectorBook extends UsedBook {
  #editionYear;
  #isSigned;

constructor(title, author, price,condition,location, editionYear, isSigned) {
//llama al constructor de UsedBook
super(title, author, price, condition, location);
this.#editionYear = editionYear;
this.#isSigned = isSigned;
}

 Getters
get editionYear() { return this.#editionYear; }
get isSigned() { return this.#isSigned; }

//Implementación de getInfo
getInfo() {
return {
id: this.id,
title: this.title,
type: this.getType(), //CollectorBook
editionYear: this.#editionYear,
isSigned: this.#isSigned ? 'Sí' : 'No',
price : this.price,
location: this.location,
active: this.isActive
};
}
}

// TODO: Implementa tu segunda clase derivada (Tipo 2)
class Textbook extends UsedBook {
  #subject;
  #gradeLevel;

  constructor(title, author, price, condition, location, subject, gradeLevel) {
    super(title, author, price, condition, location);
    this.#subject = subject;
    this.#gradeLevel = gradeLevel;
  }

  get subject() { return this.#subject; }
  get gradeLevel() { return this.#gradeLevel; }

  getInfo() {
    return {
      id: this.id,
      title: this.title,
      type: this.getType(), //Textbook
      subject: this.#subject,
      gradeLevel: this.#gradeLevel,
      price : this.price,
      condition : this.condition,
      active: this.isActive
    };
  }
}

// TODO: Implementa tu tercera clase derivada (Tipo 3)
class RareEdition extends UsedBook {
  #printNumber;
  #totalPrints;

  constructor(title,author, price, condition, location, printNumber, totalPrints) {
  super(title, author, price, condition, location);
  this.#printNumber = printNumber;
  this.#totalPrints = totalPrints;
  }
  
  get printNumber() { return this.#printNumber; }
  get totalPrints() { return this.#totalPrints; }

getInfo() {
  return {
    id: this.id,
    title: this.title,
    type: this.getType(), //RareEdition
    printNumber: this.#printNumber,
    totalPrints: this.#totalPrints,
    isLimitedEdition: this.#printNumber <= 100 ? 'Sí' : 'No',
    price : this.price,
    active: this.isActive
  };
}
}

// ============================================
// TODO 3: CLASE PERSON - Base para usuarios del sistema E-commerce 
>>>>>>> master
// ============================================
/**
 * Clase base para todos los usuarios del sistema.
 *
 * EJEMPLO (Planetario - NO asignable):
 * Person → Visitor (visitante), Astronomer (astrónomo)
 */
<<<<<<< HEAD
class Person {
  // TODO: Declara campos privados
  // #id;
  // #name;
  // #email;
  // #registrationDate;

  constructor(name, email) {
    // TODO: Inicializa los campos
    // this.#id = crypto.randomUUID();
    // this.#name = name;
    // this.#email = email;
    // this.#registrationDate = new Date().toISOString();
  }

  // TODO: Implementa getters
  get id() {}
  get name() {}
  get email() {}
  get registrationDate() {}

  // TODO: Implementa setter con validación de email
  set email(value) {
    // Valida formato de email usando regex
    // const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    // if (!emailRegex.test(value)) {
    //   throw new Error('Formato de email inválido');
    // }
    // this.#email = value;
=======
  class Person {
  // TODO: Declara campos privados
  #id;
  #name;
  #email;
  #registrationDate;
  /** 

  *constructor de la clase Person
  *@param{string}name - Nombre del usuario
  *@param{string}email -Email del usuario
*/

  constructor(name, email) 
   {
    // TODO: Inicializa los campos
    this.#id = crypto.randomUUID();
    this.#name = name;
    this.#email = email; //Usamos el setter para validar desde el inicio
    this.#registrationDate = new Date().toISOString();
  }

  // TODO: Implementa getters
  get id() { return this.#id; }
  get name() { return this.#name; }
  get email() { return this.#email; }
  get registrationDate() { return this.#registrationDate; }

  // TODO: Implementa setter con validación de email
  /**
   * @param {string} value - Nuevo email del usuario
   */
  set email(value) {
    // Valida formato de email usando regex
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(value)) {
    throw new Error('Formato de email inválido');
    }
    this.#email = value;
>>>>>>> master
  }

  /**
   * Retorna la información básica del usuario
   */
<<<<<<< HEAD
  getInfo() {
    // return {
    //   id: this.#id,
    //   name: this.#name,
    //   email: this.#email,
    //   registrationDate: this.#registrationDate
    // };
=======
/**
 * @returns {Object}Datos publicos del usuario
 */
  getInfo() {
    return {
      id: this.#id,
      name: this.#name,
      email: this.#email,
      registrationDate: this.#registrationDate,
      userType: this.constructor.name // Identifica si es Customer o Seller
    };
>>>>>>> master
  }
}

// ============================================
// TODO 4: CLASES DE ROLES - Usuarios especializados
// ============================================
/**
 * Crea al menos 2 clases que extiendan Person con diferentes roles.
 *
 * EJEMPLO (Planetario - NO asignable):
 *
 * class Visitor extends Person {
 *   #ticketType;
 *   #visitCount;
 *
 *   constructor(name, email, ticketType) {
 *     super(name, email);
 *     this.#ticketType = ticketType;
 *     this.#visitCount = 0;
 *   }
 *
 *   recordVisit() {
 *     this.#visitCount++;
 *   }
 *
 *   get ticketType() { return this.#ticketType; }
 *   get visitCount() { return this.#visitCount; }
 * }
 *
 * class Astronomer extends Person {
 *   #specialty;
 *   #observations;
 *
 *   constructor(name, email, specialty) {
 *     super(name, email);
 *     this.#specialty = specialty;
 *     this.#observations = [];
 *   }
 *
 *   addObservation(observation) {
 *     this.#observations.push(observation);
 *   }
 * }
 */

// TODO: Implementa tu primer rol de usuario
<<<<<<< HEAD
// class UserRole1 extends Person { ... }

// TODO: Implementa tu segundo rol de usuario
// class UserRole2 extends Person { ... }

// ============================================
// TODO 5: CLASE PRINCIPAL DEL SISTEMA
// ============================================
/**
 * Clase principal que gestiona todos los elementos y usuarios.
=======
class Customer extends Person {
  #shippingAddress;
  #purchaseCount=0;

  constructor(name, email, shippingAddress) {
    super(name, email);
    this.#shippingAddress = shippingAddress;
  }

  addPurchase() {
    this.#purchaseCount++;
  }

  get purchaseCount() { return this.#purchaseCount; }

  getInfo() {
    return {
      ...super.getInfo(),
      address: this.#shippingAddress,
      purchaseCount: this.#purchaseCount,
      role: 'Customer'
    };
  }
}

// TODO: Implementa tu segundo rol de usuario
class Seller extends Person {
  #rating;
  #activeListings = 0;

  constructor(name, email, rating =5) {
    super(name, email);
    this.#rating = rating;
  }
  get rating() { return this.#rating; }
 
  updateListings(count) {
  if (count <0) throw new Error("La cantidad de libros no puede ser negativa");
  this.#activeListings = count;
  }
  getInfo() {
   return{
     ...super.getInfo(),
    rating: this.#rating,
    activeBooks: this.#activeListings,
    role: 'Seller'
   };
  } 
}

  // ============================================
// TODO 5: CLASE PRINCIPAL DEL SISTEMA
// ============================================
/**
 * Clase principal que gestiona todos el inventario de libros y la base de usuarios.
>>>>>>> master
 * Utiliza static blocks para configuración inicial.
 *
 * EJEMPLO (Planetario - NO asignable):
 * class Observatory { ... }
 */
class MainSystem {
<<<<<<< HEAD
  // Campos privados para almacenar datos
  #items = [];
  #users = [];
=======
  // Campos privados para almacenar datos E-commerce
  #items = []; //lista de UsedBook
  #users = []; //lista de Person (Customers y Sellers)
>>>>>>> master
  #transactions = [];

  // TODO: Implementa un static block para configuración
  static {
    // Este bloque se ejecuta cuando la clase se carga
<<<<<<< HEAD
    // this.VERSION = '1.0.0';
    // this.MAX_ITEMS = 1000;
    // this.SYSTEM_NAME = 'Mi Sistema'; // Cambia por tu dominio
    // console.log(`Sistema ${this.SYSTEM_NAME} v${this.VERSION} cargado`);
=======
    this.VERSION = '1.0.0';
    this.MAX_ITEMS = 500; //limite maxima de items en el sistema
    this.SYSTEM_NAME = 'Relatos Usados E-commerce'; // Cambia por tu dominio
    console.log(`Sistema ${this.SYSTEM_NAME} v${this.VERSION} cargado correctamente`);
>>>>>>> master
  }

  // TODO: Implementa métodos estáticos de utilidad
  /**
   * Valida si un ID tiene formato correcto
   * @param {string} id - ID a validar
   * @returns {boolean} Si es válido
   */
  static isValidId(id) {
<<<<<<< HEAD
    // return typeof id === 'string' && id.length > 0;
=======
    return typeof id === 'string' && id.length > 0;
>>>>>>> master
  }

  /**
   * Genera un ID único
   * @returns {string} ID único
   */
  static generateId() {
<<<<<<< HEAD
    // return crypto.randomUUID();
=======
    return crypto.randomUUID();
>>>>>>> master
  }

  // ============================================
  // MÉTODOS CRUD PARA ITEMS
  // ============================================

  /**
<<<<<<< HEAD
   * Agrega un nuevo elemento al sistema
=======
   * Agrega un libro al inventario con validacion de tipo y limite al sistema
>>>>>>> master
   * @param {BaseItem} item - Elemento a agregar
   * @returns {Object} Resultado de la operación
   */
  addItem(item) {
    // TODO: Implementa la adición con validación
<<<<<<< HEAD
    // if (!(item instanceof BaseItem)) {
    //   return { success: false, message: 'El item debe ser instancia de BaseItem' };
    // }
    // if (this.#items.length >= MainSystem.MAX_ITEMS) {
    //   return { success: false, message: 'Límite de items alcanzado' };
    // }
    // this.#items.push(item);
    // return { success: true, message: 'Item agregado correctamente', item };
  }

  /**
   * Elimina un elemento por su ID
=======
  if (!(item instanceof UsedBook)) {
  return { success: false, message: 'El item debe ser instancia de UsedBook' };
    }
  if (this.#items.length >= MainSystem.MAX_ITEMS) {
     return { success: false, message: 'Inventario lleno' };
    }
    this.#items.push(item);
   return { success: true, message: `Libro "${item.name}" agregado correctamente`, item };
  }

  /**
   * Elimina un libro del catalogo por su ID
>>>>>>> master
   * @param {string} id - ID del elemento a eliminar
   * @returns {Object} Resultado de la operación
   */
  removeItem(id) {
    // TODO: Implementa la eliminación
<<<<<<< HEAD
    // const index = this.#items.findIndex(item => item.id === id);
    // if (index === -1) {
    //   return { success: false, message: 'Item no encontrado' };
    // }
    // const removed = this.#items.splice(index, 1)[0];
    // return { success: true, message: 'Item eliminado', item: removed };
=======
    const index = this.#items.findIndex(item => item.id === id);
    if (index === -1) {
      return { success: false, message: 'libro no encontrado' }
    }
    const removed = this.#items.splice(index, 1)[0];
    return { success: true, message: `Libro "${removed.title}" eliminado correctamente` };
>>>>>>> master
  }

  /**
   * Busca un elemento por su ID
   * @param {string} id - ID del elemento
   * @returns {BaseItem|null} Elemento encontrado o null
   */
  findItem(id) {
    // TODO: Implementa la búsqueda
<<<<<<< HEAD
    // return this.#items.find(item => item.id === id) ?? null;
=======
    return this.#items.find(item => item.id === id) ?? null;
>>>>>>> master
  }

  /**
   * Retorna todos los elementos
   * @returns {Array} Copia del array de elementos
   */
  getAllItems() {
    // Retorna copia para evitar mutación directa
<<<<<<< HEAD
    // return [...this.#items];
=======
    //(Encapsulamiento)
    return [...this.#items];
>>>>>>> master
  }

  // ============================================
  // MÉTODOS DE BÚSQUEDA Y FILTRADO
  // ============================================

  /**
   * Busca elementos por nombre
   * @param {string} query - Texto a buscar
   * @returns {Array} Elementos que coinciden
   */
  searchByName(query) {
    // TODO: Implementa búsqueda case-insensitive
<<<<<<< HEAD
    // const searchTerm = query.toLowerCase();
    // return this.#items.filter(item =>
    //   item.name.toLowerCase().includes(searchTerm)
    // );
=======
    const searchTerm = query.toLowerCase();
    return this.#items.filter(item =>
    item.name.toLowerCase().includes(searchTerm)
    );
>>>>>>> master
  }

  /**
   * Filtra elementos por tipo (clase)
   * @param {string} type - Nombre de la clase
   * @returns {Array} Elementos del tipo especificado
   */
  filterByType(type) {
<<<<<<< HEAD
    // TODO: Implementa el filtro por tipo
    // return this.#items.filter(item => item.getType() === type);
=======
    // TODO: Implementa el filtro por CollectorBook,Textbook o RareEdition
    return this.#items.filter(item => item.getType() === type);
>>>>>>> master
  }

  /**
   * Filtra elementos por estado activo
   * @param {boolean} active - Estado a filtrar
   * @returns {Array} Elementos con el estado especificado
   */
  filterByStatus(active) {
    // TODO: Implementa el filtro por estado
<<<<<<< HEAD
    // return this.#items.filter(item => item.isActive === active);
=======
     return this.#items.filter(item => item.isActive === active);
>>>>>>> master
  }

  // ============================================
  // MÉTODOS DE ESTADÍSTICAS
  // ============================================

  /**
   * Calcula estadísticas del sistema
   * @returns {Object} Estadísticas
   */
  getStats() {
    // TODO: Implementa el cálculo de estadísticas usando reduce
    const total = this.#items.length;
    const active = this.#items.filter(item => item.isActive).length;
    const inactive = total - active;
    
    // // Contar por tipo usando reduce
    const byType = this.#items.reduce((acc, item) => {
    const type = item.getType();
    acc[type] = (acc[type] ?? 0) + 1;
    return acc;
    }, {});
    //
    return {
    totalBooks: total,
    available: active,
    byCategory: byType,
    totalUsers: this.#users.length
    };

  }

  // ============================================
  // MÉTODOS PARA USUARIOS
  // ============================================

  /**
   * Registra un nuevo usuario
   * @param {Person} user - Usuario a registrar
   */
  addUser(user) {
    // TODO: Implementa el registro de usuario
<<<<<<< HEAD
    // if (!(user instanceof Person)) {
    //   return { success: false, message: 'Debe ser instancia de Person' };
    // }
    // this.#users.push(user);
    // return { success: true, message: 'Usuario registrado' };
=======
  if (!(user instanceof Person)) {
    return { success: false, message: 'Debe ser instancia de Person' };
  }
  this.#users.push(user);
  return { success: true, message: `Usuario ${user.name} registrado` };
>>>>>>> master
  }

  /**
   * Busca un usuario por email
   * @param {string} email - Email del usuario
   * @returns {Person|null} Usuario encontrado o null
   */
  findUserByEmail(email) {
<<<<<<< HEAD
    // return this.#users.find(user => user.email === email) ?? null;
  }

  getAllUsers() {
    // return [...this.#users];
=======
    return this.#users.find(user => user.email === email) ?? null;
  }

  getAllUsers() {
    return [...this.#users];
>>>>>>> master
  }
}

// ============================================
// TODO 6: INSTANCIA DEL SISTEMA Y DATOS DE PRUEBA
// ============================================

// Crea la instancia principal del sistema
// const system = new MainSystem();

// TODO: Crea algunos elementos de prueba de diferentes tipos
// EJEMPLO (Planetario):
// const jupiter = new Planet('Júpiter', 'Sistema Solar', 'gaseoso', 95, true);
// const sol = new Star('Sol', 'Centro del Sistema', 'enana amarilla', 4600);
// system.addItem(jupiter);
// system.addItem(sol);

<<<<<<< HEAD
=======

const system = new MainSystem();

const book1 = new CollectorBook('Cien años de soledad', 'Gabriel Garcia Marquez', 150, 'Excelente', 'Vitrina A', 1967, true);
const book2 = new Textbook('Fisica Universitaria', 'Sears y Zemansky', 80, 'Bueno', 'Vitrina B', 2020, true);
const book3 = new RareEdition('El principito', 'Antoine de Saint-Exupéry', 100, 'Fragil', 'Vitrina C', 1943, true);

console.log(system.addItem(book1).message);
console.log(system.addItem(book2).message);
console.log(system.addItem(book3).message);

const cliente1 = new Customer( 'Juan Perez', 'juan@email.com', 'Calle Falsa 123');
const vendedor1 = new Seller('Libreria de antaño','contacto@libros.com', 5);

console.log(system.addUser(cliente1).message);
console.log(system.addUser(vendedor1).message);

console.log("\n--- Reporte Estadisticas Finales ---");
console.dir(system.getStats());

console.log("\n--- Buscando 'Física' ---");
const resultadosBusqueda = system.searchByTitle("Física");
console.log(resultadosBusqueda.map(b => b.getInfo()));

>>>>>>> master
// ============================================
// TODO 7: REFERENCIAS AL DOM
// ============================================

// TODO: Obtén referencias a los elementos del DOM
<<<<<<< HEAD
// const itemForm = document.getElementById('item-form');
// const itemList = document.getElementById('item-list');
// const statsContainer = document.getElementById('stats');
// const filterType = document.getElementById('filter-type');
// const filterStatus = document.getElementById('filter-status');
// const searchInput = document.getElementById('search-input');
=======
const itemForm = document.getElementById('item-form');
const itemList = document.getElementById('item-list');
const statsContainer = document.getElementById('stats');
const filterType = document.getElementById('filter-type'); //Por catalogo (Texto,Coleccion,etc.)
const filterStatus = document.getElementById('filter-status'); //Por estado (Activo/Inactivo)
const searchInput = document.getElementById('search-input');
>>>>>>> master

// ============================================
// TODO 8: FUNCIONES DE RENDERIZADO
// ============================================

/**
<<<<<<< HEAD
 * Renderiza un elemento individual
 * @param {BaseItem} item - Elemento a renderizar
=======
 * Renderiza un libro individual como una tarjeta HTML
 * @param {UsedBook} item - Instancia de libro a renderizar
>>>>>>> master
 * @returns {string} HTML del elemento
 */
const renderItem = item => {
  // TODO: Implementa usando template literals
<<<<<<< HEAD
  // const info = item.getInfo();
  // return `
  //   <div class="item ${item.isActive ? '' : 'inactive'}" data-id="${item.id}">
  //     <div class="item-header">
  //       <h3>${item.name}</h3>
  //       <span class="badge">${item.getType()}</span>
  //     </div>
  //     <div class="item-details">
  //       <p>Ubicación: ${item.location}</p>
  //       <p>Estado: ${item.isActive ? 'Activo' : 'Inactivo'}</p>
  //     </div>
  //     <div class="item-actions">
  //       <button class="btn-toggle" data-id="${item.id}">
  //         ${item.isActive ? 'Desactivar' : 'Activar'}
  //       </button>
  //       <button class="btn-delete" data-id="${item.id}">Eliminar</button>
  //     </div>
  //   </div>
  // `;
};

/**
 * Renderiza la lista completa de elementos
 * @param {Array} items - Array de elementos
 */
const renderItems = (items = []) => {
  // TODO: Implementa el renderizado de la lista
  // if (items.length === 0) {
  //   itemList.innerHTML = '<p class="empty">No hay elementos</p>';
  //   return;
  // }
  // itemList.innerHTML = items.map(renderItem).join('');
};

/**
 * Renderiza las estadísticas
 * @param {Object} stats - Objeto de estadísticas
 */
const renderStats = stats => {
  // TODO: Implementa el renderizado de estadísticas
  // statsContainer.innerHTML = `
  //   <div class="stat">Total: ${stats.total}</div>
  //   <div class="stat">Activos: ${stats.active}</div>
  //   <div class="stat">Inactivos: ${stats.inactive}</div>
  // `;
=======
  const info = item.getInfo();
  return `
  <div class="card ${item.isActive ? '' : 'inactive'}" data-id="${item.id}">
    <div class="card-header">
         <h3>${item.title}</h3>
         <span class="badge">${item.getType()}</span>
       </div>
     <div class="card-body">
        <p></strong>Autor:</strong> ${item.author}</p>
        <p></strong>Precio:</strong> ${item.price}</p>
 ${info.editionYear ? '<p><strong>Año:</strong> ' + info.editionYear + '</p>' : ""}
       <div class="item-details">
         <p></strong>Ubicación:</strong> ${item.location}</p>
         <p></strong>Estado:</strong> ${item.isActive ? 'Activo' : 'Inactivo'}</p>
       </div>
       <div class="card-actions">
         <button class="btn-toggle" data-id="${item.id}">
           ${item.isActive ? 'Desactivar' : 'Activar'}
         </button>
         <button class="btn-delete" data-id="${item.id}">Eliminar</button>
       </div>
     </div>';
     card
   `;
};

/**
 * Renderiza la lista completa de libros
 * @param {Array} items - Array de instancias de libros
 */
const renderItems = (items = []) => {
  // TODO: Implementa el renderizado de la lista
  if (items.length === 0) {
     itemList.innerHTML = '<p class="empty">No hay libros en el catalogo que coincidan</p>';
     return;
   }
  itemList.innerHTML = items.map(renderItem).join('');
};

/**
 * Renderiza el resumen de estadísticas en el panel superior
 * @param {Object} stats - Objeto de estadísticas generado por MainSystem
 */
const renderStats = stats => {
  // TODO: Implementa el renderizado de estadísticas
  const available = stats.available;
  const total = stats.totalBooks;
  const inactive = total - available;
   statsContainer.innerHTML = `
     <div class="stat">Total libros: ${stats.totalBooks}</div>
     <div class="stat">Activos: ${available}</div>
     <div class="stat">Inactivos: ${inactive}</div>
     <div class="stat">Usuarios: ${stats.totalUsers}</div>
   `;
>>>>>>> master
};

// ============================================
// TODO 9: EVENT HANDLERS
// ============================================

/**
<<<<<<< HEAD
 * Maneja el envío del formulario
 */
const handleFormSubmit = e => {
  // TODO: Implementa la creación de nuevos elementos
  // e.preventDefault();
  // Obtén valores del formulario
  // Crea instancia de la clase correcta según el tipo seleccionado
  // Agrega al sistema
  // Re-renderiza
};

=======
 * Maneja el envío del formulario para crear nuevos libros
 */
const handleFormSubmit = e => {
  // TODO: Implementa la creación de nuevos elementos
  e.preventDefault(); //Evita que la pagina se recargue
  // Obtén valores del formulario
constformData = new FormData(itemForm);
const type = formData.get('type'); //El tipo de libro seleccionado

const formData = new FormData(itemForm);
const title = formData.get('title');
const author = formData.get('author');
const price = Number(formData.get('price'));
const condition = formData.get('condition');
const location = formData.get('location');

// Crea instancia de la clase correcta según el tipo seleccionado
if(type ==='CollectorBook') {
 newBook = new CollectorBook(title,author,price,condition,location,2024,true);
} else if(type ==='Textbook') {
   newBook = new Textbook(title,author,price,condition,location,'General','Unico');
} else{
   newBook = new RareEdition(title,author,price,condition,location,1,100);
} 
  // Agrega al sistema

  system.addItem(newBook);

  // Re-renderiza(Actualiza la vista y las estadisticas)
  handleFilterChange();
  renderStats(system.getStats());
  itemForm.reset(); //Limpia el formulario despues de agregar
};
>>>>>>> master
/**
 * Maneja cambios en los filtros
 */
const handleFilterChange = () => {
  // TODO: Implementa el filtrado
<<<<<<< HEAD
  // let filtered = system.getAllItems();
  // Aplica filtros según los valores de los selectores
  // renderItems(filtered);
=======
  let filtered = system.getAllItems();
  // Aplica filtros según los valores de los selectores
  //Filtramos por tipo de libro
  if (filterType.value!=='all') {
  filtered=
  system.filterByType(filterType.value);
  }
 //Filtramos por estado(activo/inactivo)
 if(filterStatus.value!=='all') {
  const activeSearch =(filterStatus.value==='active');
  filtered = filtered.filter(item => item.isActive === activeSearch); 
 }
// Filtro por texto de búsqueda (Título o Autor)
  const query = searchInput.value.toLowerCase();
  if (query) {
    filtered = filtered.filter(item => 
      item.title.toLowerCase().includes(query) || 
      item.author.toLowerCase().includes(query)
    );
  }
  //renderItems(filtered);
>>>>>>> master
};

/**
 * Maneja acciones en los elementos (toggle, delete)
 */
const handleItemAction = e => {
  // TODO: Implementa usando event delegation
<<<<<<< HEAD
  // const target = e.target;
  // const itemId = target.dataset.id;
  // if (!itemId) return;
  //
  // if (target.classList.contains('btn-toggle')) {
  //   const item = system.findItem(itemId);
  //   if (item.isActive) item.deactivate();
  //   else item.activate();
  // }
  //
  // if (target.classList.contains('btn-delete')) {
  //   if (confirm('¿Eliminar este elemento?')) {
  //     system.removeItem(itemId);
  //   }
  // }
  //
  // handleFilterChange();
  // renderStats(system.getStats());
=======
  const target = e.target;
   const itemId = target.dataset.id; //Sacamos el ID del boton que tocaron
   if (!itemId) return;
  
   //Boton activar/ desactivar
   if (target.classList.contains('btn-toggle')) {
     const item = system.findItem(itemId);
     if (item.isActive) item.deactivate(); //Si esta activo,lo apaga
     else item.activate(); //Si esta apagado lo activa
   }
  
   //Boton eliminar
   if (target.classList.contains('btn-delete')) {
     if (confirm('¿Eliminar este libro permanentemente?')) {
       system.removeItem(itemId);
     }
   }
  //Actualizamos la pantalla despues de cualquier cambio
  handleFilterChange();
   renderStats(system.getStats());
>>>>>>> master
};

// ============================================
// TODO 10: EVENT LISTENERS
// ============================================

// TODO: Adjunta los event listeners
<<<<<<< HEAD
// itemForm.addEventListener('submit', handleFormSubmit);
// filterType.addEventListener('change', handleFilterChange);
// filterStatus.addEventListener('change', handleFilterChange);
// searchInput.addEventListener('input', handleFilterChange);
// itemList.addEventListener('click', handleItemAction);
=======
//Escucha cuando se envia al formulario para agregar un nuevo libro
itemForm.addEventListener('submit', handleFormSubmit);
//Escucha cambios en el selector de tipo (Coleccion,Texto,Raro,etc.)
filterType.addEventListener('change', handleFilterChange);
//Escucha cambios en el selector de estados(activo7inactivo)
filterStatus.addEventListener('change', handleFilterChange);
//Escucha cuando el usuario escriba en la barra de busqueda
searchInput.addEventListener('input', handleFilterChange);
//Escucha los clicks en la lista de libros (para botones de Eliminar/Desactivar)
itemList.addEventListener('click', handleItemAction);
>>>>>>> master

// ============================================
// TODO 11: INICIALIZACIÓN
// ============================================

/**
 * Inicializa la aplicación
 */
const init = () => {
  // TODO: Implementa la inicialización
<<<<<<< HEAD
  // renderItems(system.getAllItems());
  // renderStats(system.getStats());
  // console.log('✅ Sistema inicializado correctamente');
=======
  //Renderiza los libros que ya estan en el sistema (Si es que hay datos de prueba)
  renderItems(system.getAllItems());
  //Renderiza las estadisiticas iniciales
  renderStats(system.getStats());
  //Confirmacion en consola
  console.log('✅ Sistema de Libros Usados inicializado correctamente');
>>>>>>> master
};

// Ejecutar cuando el DOM esté listo
document.addEventListener('DOMContentLoaded', init);

// ============================================
// CHECKLIST DE VERIFICACIÓN
// ============================================
// Después de completar todos los TODOs, verifica:
//
// CLASES Y HERENCIA:
// ✓ Clase base con campos privados
// ✓ Mínimo 3 clases derivadas con extends
// ✓ Uso correcto de super() en constructores
// ✓ Método getInfo() implementado en cada clase derivada
//
// ENCAPSULACIÓN:
// ✓ Todos los campos son privados (#)
// ✓ Getters para acceso a propiedades
// ✓ Setters con validación donde corresponda
//
// CARACTERÍSTICAS MODERNAS:
// ✓ Static block en clase principal
// ✓ Métodos estáticos de utilidad
// ✓ Uso de crypto.randomUUID() para IDs
//
// CÓDIGO:
// ✓ Comentarios en español
// ✓ Nomenclatura técnica en inglés
// ✓ Nombres de clases adaptados a mi dominio
// ✓ Sin copiar implementación de otros compañeros
