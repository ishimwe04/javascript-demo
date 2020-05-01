const numbers= arrayFromRange(1,5);

console.log(numbers);

function arrayFromRange(min, max){
    const myArray=[];
   for(let i=min; i<=max; i++)
        myArray.push(i);
    return myArray;
}