// Factory function

// function createAddress(street, city, zipCode){
//     return {
//         street,
//         city,
//         zipCode
//     }
// };

// const address= createAddress('KG-565', 'Kigali', 1200);


// constructor function

function Address(street, city, zipCode){
    this.street= street;
    this.city= city;
    this.zipCode= zipCode;
}

const address= new Address('KG-565', 'Kigali', 1200);

console.log(address);