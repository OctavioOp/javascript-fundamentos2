//Tamaño grande
const bigger = (arr) => {
  let big = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      big.push("BIG");
    } else {
      big.push(arr[i]);
    }
  }
  return big;
};

//Imprime (print) el menor, devuelve (return) el mayor
const majorAndMinor = (arr) => {
  let major = arr[0];
  let minor = 0;
  for (let i = 0; i < arr.length; i++) {
    if (major < arr[i]) {
      major = arr[i];
    } else if (minor < arr[i]) {
      minor = arr[i];
    }
  }
  console.log(minor);
  return major;
};

//Imprime (print) uno, devuelve (return) otro-
const printAndReturn = (arr) => {
  let penultimo = arr[arr.length - 1];
  let firstOdd = 0;
  console.log(penultimo);

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 != 0) {
      firstOdd = arr[i];
      break;
    }
  }
  return firstOdd;
};

//Doble Visión
let doubleArr = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] * 2;
  }
  return arr;
};
//Contar Positivos -
let positiveCounts = (arr) => {
  let newArr = [];
  let count = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      count += 1;
    }
    newArr.push(arr[i]);
  }
  newArr.pop();
  newArr.push(count);
  return newArr;
};
// Pares e Impares -
const oddEven = (arr) => {
  let odd = 0;
  let even = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 == 0) {
      even += 1;
    } else if (arr[i] % 2 != 0) {
      odd += 1;
    }
  }
  if (even >= 3 && even > odd) {
    return console.log("Es para bien!");
  } else if (odd >= 3 && odd > even) {
    return console.log("Que imparcial!");
  } else {
    return console.log("faltaron datos..");
  }
};
// Incrementa los Segundos -
const secondIncrement = (arr) => {
  let newArr = [];

  for (let i = 0; i < arr.length; i++) {
    if (arr.indexOf(i) % 2 != 0) {
      newArr.push(arr[i] + 1);
    } else {
      newArr.push(arr[i]);
    }
  }
  for (let i = 0; i < newArr.length; i++) {
    console.log(newArr[i]);
  }
  return newArr;
};

// Longitudes previas -
const prevLenght = (arrString) => {
  let arrNumb = [];
  let first = "";

  for (let i = 0; i < arrString.length; i++) {
    arrNumb.push(arrString[i].length);
  }
  first = arrString[0];
  arrNumb.unshift(first);
  arrNumb.pop();
  return arrNumb;
};

// Agrega Siete -
const addSeven = (arr) => {
  for (let i = 0; i < arr.length; i++) {
    arr[i] = arr[i] + 7;
  }
  return arr;
};

// Agrega Siete -
const reverseArr = (arr) => {
  return arr.reverse();
};

// Perspectiva: Negativa -
const negativePerspective = (arr) => {
  let negArr = [];
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] > 0) {
      negArr.push(arr[i] * -1);
    } else {
      negArr.push(arr[i]);
    }
  }
  return negArr;
};

//Siempre hambriento -
const hunger = (arr) => {
  let hunger = false;
  let mult = 0;
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] == "comida") {
      hunger = true;
      mult += 1;
    } else {
      hunger = false;
    }
  }
  if (hunger == true) {
    for (let i = 0; i < mult; i++) {
      console.log("yummy");
    }
  } else {
    console.log("I'm soooo hungry");
  }
};

//Cambiar hacia el centro -
const changePosition = (array) => {
  let orderArray = [];
  let first = array[0];
  let last = array[array.length-1];
  let middle = Math.round(array.length / 2) - 1;
  let right = 0;
  let left = 0;

  console.log(array[middle]);

  if (array.length % 2 != 0 && array.length > 3) {
    right = middle + 1;
    left = middle - 1;
    for (let i = 0; i < array.length; i++) {
      orderArray.push([array[i]]);
    }
    orderArray[0] = last;

    orderArray[left] = array[right];
    orderArray[right] = array[left];

    orderArray[array.length] = first;
    console.log(orderArray);
    
  } else if (array.length % 2 == 0 && array.length > 2) {
    for (let i = 0; i < array.length; i++) {
      orderArray.push([array[i]]); 
    }
    right = middle+1;
    left = middle;

    orderArray[0] = last;
    orderArray[right] = array[left];
    orderArray[left] = array[right];
    orderArray[array.length-1] = first;
    console.log(orderArray);
  }
};

const multiply = (array, mul) =>{
  let mulArr = [];
  for (let i = 0; i < array.length; i++) {
    mulArr.push(array[i]*mul);
  }
  return mulArr;
}
