const numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11 ];

list(numbers);

function list(arr) {
  let sumOdd = 0;
  let sumEven = 0;

  for (let i = 0; i < arr.length; i++) {
    if (arr[i] % 2 === 0) {
      sumEven++;
    } else {
      sumOdd++;
    }
  }
  
  console.log("Чётные : " + sumEven);
  console.log("Нечётные : " + sumOdd);
}