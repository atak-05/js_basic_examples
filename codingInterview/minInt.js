/*How we can find that the smallest integer of array list */

function minInt(arr) {
  let min = 0;
  let isMin;
  for (let i of arr) {
    if (i > 0) {
      min = i;
      min > isMin ? (isMin = isMin) : (isMin = min);
    }
    if (i === 0) {
      min = 0;
      isMin = 0;
    } else {
      isMin = 0;
    }
  }
  console.log({ result: isMin });
}

arr1 = [0, 2, 3, 89, -87];
minInt(arr1);
