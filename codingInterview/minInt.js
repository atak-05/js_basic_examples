 /*How we can find that the smallest integer of array list */ 


function minInt(arr){
    let min = 0
    let isMin ;
    for (let i of arr) {
        if (i >= 0){
            min = i;
            min > isMin ? isMin=isMin : isMin=min
        }
        else{
            isMin = 0;
        }
}

console.log({result :isMin});
}

arr1 = [2,3,89,0];
minInt(arr1)

//*Other ways 
// const arr = [3, 4, 20];
// function positiveMinimum(array) {
//     let arraySorted = array.sort((a,b) => a - b);
//     if(arraySorted[0] > 0){return arraySorted[0]} else{return 0}
// }
// console.log(positiveMinimum(arr))