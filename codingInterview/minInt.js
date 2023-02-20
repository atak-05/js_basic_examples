 /*How we can find that the smallest integer of array list */ 


function minInt(arr){
    let min = 0
    let isMin ;
    console.log(arr);
    for (let i of arr) {
        console.log(i);
        if (i > 0){
            console.log("1.aşama");
            min = i;
            min > isMin ? isMin=isMin : isMin=min
        }
        if (i===0){
            min = 0;
            isMin = 0;
        }
        if (i < 0){
            console.log("1.aşamanın else");
            isMin = 0;
        }
}
console.log("sonuç..");
console.log(isMin);
}

arr1 = [0,2,3,89,-87];
minInt(arr1)