const today = new Date();
console.log(today);

const date1 = new Date("1971-03-26");
const date2 = new Date("1971-12-16");

if (date1.getTime() < date2.getTime()) {
  //it counts the date in millisecond then compare the result
  console.log("march was before december");
} else {
  console.log("march was not before december");
}

// for date use website: https://momentjs.com/
