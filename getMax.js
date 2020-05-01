function getMax(array){
    if( array.length === 0) return undefined;

    // let max=array[0];

    // for(let i=1; i<=array.length; i++)
    //    if(array[i] > max)
    //      max= array[i];
    //    return max;

    //using reduce method

    return array.reduce((accumulator, current) =>(accumulator > current) ? accumulator : current)
}
const numbers=[15,20,10,4,5];

console.log(getMax(numbers));