function showStars(rows){
    for(let row=0; row<=rows; row++){
      let pattern='';
     for(let i=0; i<row; i++)
       pattern += '*';
       console.log(pattern) 
    } 
}

showStars(4)