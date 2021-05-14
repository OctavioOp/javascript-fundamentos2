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

