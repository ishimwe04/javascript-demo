const numbers= [1,2,3,4]

function except(array, excluded){
    const remain=[];
    for(let element of array)
      if(!excluded.includes(element))
        remain.push(element);
        return remain;
}

const output= except(numbers, [2,3,]);
console.log(output);