

function checkSpeed(speed){
    const limitedSpeed= 70;
    const kmPerPoint= 5;
    let points;
    
    if(speed< (limitedSpeed+kmPerPoint)) return 'Ok';
    if(speed>limitedSpeed){
        let diffSpeed= speed-limitedSpeed;
        points=Math.floor(diffSpeed/kmPerPoint);
        if(points>=12){
           return 'license suspended';
        }
        return points;
    }
   
}

console.log(checkSpeed(130))