const circle={
    radius: 5,
    get area(){
        return (this.radius*this.radius)*Math.PI;
    }
} 

console.log(circle.area);