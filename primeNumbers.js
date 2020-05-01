function primeNumbers(limit){
    for(let number=2; number<=limit; number++){
         isPrime=true;
        for(let factor=2; factor<number; factor++){
             if(number % factor ===0){
                 isPrime=false;
             }
        }
        if(isPrime) console.log(number);
    }
      
}


primeNumbers(20);