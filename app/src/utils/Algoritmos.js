//------------------- Palindromos----------------


export const esPalindromo = (cadena) => {
  const cadenaProcesada = cadena.replace(/\s/g, "").toLowerCase();

  const longitud = cadenaProcesada.length;

  for (let i = 0; i < longitud; i++) {
    if (cadenaProcesada[i] !== cadenaProcesada[longitud - 1 - i]) {
      return false;
    }
  }
  return true;
};

//-------------------------Lista de personas mayores------------------------------------------------------

export const personasMayoresDeEdad = (matrizPersonas) => {
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

export const fizzBuzzArray = (numeros) => {
  const resultado = [];

  for (let i = 0; i < numeros.length; i++) {
    const numero = numeros[i];
    if (numero % 3 === 0 && numero % 5 === 0) {
      resultado.push("FizzBuzz");
    } else if (numero % 3 === 0) {
      resultado.push("Fizz");
    } else if (numero % 5 === 0) {
      resultado.push("Buzz");
    } else {
      resultado.push(numero.toString());
    }
  }

  return resultado;
}
