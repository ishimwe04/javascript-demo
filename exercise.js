
// const numbers= arrayRange(-10, 10);

// console.log(numbers);

// function arrayRange(min, max){
//     let output=[];
//     for(let i=min; i<=max; i++)
//        output.push(i);

//        return output;
// }


// const numbers= [1,2,3,4,5,6,7];

// console.log(includes(numbers, 4));

// function includes(array, searchElement){
//     for(let element of array)
//        if (element === searchElement) return true;
//         return false;
// }

// const numbers= [1,2,3,4,5,6,7];

// console.log(except(numbers, [4,5,6,7,8,9]));

// function except(array, removed){
//     let output=[];
//     for(let element of array){
//         if(!removed.includes(element))
//            output.push(element);   
//     }
//     return output;
// }

// const numbers= [1,2,3,4];

// console.log(move(numbers, 0, 4));

// function move(array, index, offset){

//     const position=index+offset;
//     if(position >= array.length || position < 0){
//        console.error('Invalid offset.');
//        return;
//     }
    
//     let output=[...array];

//     let element= output.splice(index, 1)[0];

//     output.splice(position, 0, element);

//     return output;
// }
// function primeNumbers(limit){
//    for (let number=2; number<=limit; number++){
//        isPrime=true;
//    for (let factor=2; factor<number; factor++){
//        if( number % factor ===0){
//         isPrime=false;
//      }
//     }
//     if(isPrime) console.log(number);
//   }
//   }

// primeNumbers(20);

// const numbers= [1,2,4,3,4,5,,6,4,2,4];

// console.log(countOccurence(numbers, 5));

// function countOccurence(array, searchElement){
//     // let count=0;
//     // for(let element of array){
//     //     if( element===searchElement)
//     //      count++;  
//     // }
//     // return count;

//     return array.reduce((accumulator, current)=>{
//       const occurence= (current===searchElement) ? 1 : 0;
//       return accumulator+occurence;
//     },0)
// }

// const numbers= [1,2,4,3,4,15,5,6,4,50,2,8,6];

// console.log(getMax(numbers));

// function getMax(array){
//     let max=array[0];
//    for(let element of array){
//        if(element > max)
//        max=element;
//    }
     
//     return max;

// return array.reduce((accumulator, current) =>{
//     const max= ( current > accumulator) ? current : accumulator;
//      return max;
// })
//}

// const movies=[
//     {title: 'a', year: 2018, rating: 4.5},
//     {title: 'b', year: 2018, rating: 4.7},
//     {title: 'c', year: 2018, rating: 3},
//     {title: 'd', year: 2017, rating: 4.5}
// ]

// const titles=movies
// .filter(m=> m.year ===2018 && m.rating >= 4)
// .sort((a, b) => a.rating - b.rating)
// .reverse()
// .map(m => m.title);

// console.log(titles);

function sum(){
    let total=0;
    if(arguments.length===1 && Array.isArray(arguments[0]))
        arguments=[...arguments[0]];

    for(let value of arguments)

       total += value;

     return total;
}
console.log(sum([1,2,3,4,5,6,7,8]));

// const video={
//   title: 'a',
//   tags: ['a', 'b', 'c'],
//   playVideo(){
//     this.tags.forEach((tag)=>{
//       console.log(this.title, tag)
//     })
//   }
// }

// function numbers(){
//   console.log(this);
// }

// video.playVideo();