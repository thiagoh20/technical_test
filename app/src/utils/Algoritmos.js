
//------------------- Palindromos----------------

console.log(esPalindromo("ana"));
console.log(esPalindromo("anita lava la tina"));
console.log(esPalindromo("Hola mundo"));
console.log(esPalindromo("alli ves a sevilla"));
console.log(esPalindromo("aca va la vaca"));

function esPalindromo(cadena) {
    const cadenaProcesada = cadena.replace(/\s/g, '').toLowerCase();

    const longitud = cadenaProcesada.length;

    for (let i = 0; i < longitud; i++) {
        if (cadenaProcesada[i] !== cadenaProcesada[longitud - 1 - i]) {
            return false;
        }
    }
    return true;
}


//-------------------------Lista de personas mayores------------------------------------------------------


const listaPersonas = [
    { nombre: "Juan", edad: 25 },
    { nombre: "Ana", edad: 20 },
    { nombre: "Santiago", edad: 16 },
    { nombre: "Carlos", edad: 30 },
    { nombre: "Elena", edad: 18 },
    { nombre: "Ricardo", edad: 10 },
    { nombre: "David", edad: 22 },
    { nombre: "Valentina", edad: 15 },
    { nombre: "Sara", edad: 6 }
];


const personasMayoresOrdenadas = personasMayoresDeEdad(listaPersonas);
console.log(personasMayoresOrdenadas);

function personasMayoresDeEdad(matrizPersonas) {
    const mayoresDeEdad = [];


    for (let i = 0; i < matrizPersonas.length; i++) {
        const persona = matrizPersonas[i];
        if (persona.edad >= 18) {
            mayoresDeEdad.push(persona);
        }
    }

    mayoresDeEdad.sort((a, b) => a.nombre.localeCompare(b.nombre));
    return mayoresDeEdad;
}



//-----------------------------fizzBuzz----------------------------------------------
const numeros = [9, 10, 15, 7, 5, 4, 6, 45, 34, 4, 1, 2];

const resultadoFizzBuzz = fizzBuzzArray(numeros);

console.log(resultadoFizzBuzz);


function fizzBuzzArray(numeros) {
    const resultado = [];

    for (let i = 0; i < numeros.length; i++) {
        const numero = numeros[i];
        if (numero % 3 === 0 && numero % 5 === 0) {
            resultado.push("FizzBuzz");
        }
        else if (numero % 3 === 0) {
            resultado.push("Fizz");
        }
        else if (numero % 5 === 0) {
            resultado.push("Buzz");
        }
        else {
            resultado.push(numero.toString());
        }
    }

    return resultado;
}



