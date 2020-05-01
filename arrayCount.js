function countingOccurence(array, selectedElement){

if(!Array.isArray(array))
  throw new Error('Invalid array.');
//     let count=0;

//     for(let element of array)
//         if( element===selectedElement)
//             count++;
//   return count;

return array.reduce((accumulator, current) => {
    const occurence= (current === selectedElement) ? 1 : 0;
    return occurence + accumulator;
},0);

}

try{
    const numbers= [1,2,3,4,5,2,4,2];

    console.log(countingOccurence(null, 4));
}

catch(e){
    console.log(e.message);
}
