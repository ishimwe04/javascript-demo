const person={
    firstName: 'Ishimwe',
    lastName: 'Olivier',

    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName (value) {
        const part= value.split(' ');
        this.firstName=part[0];
        this.lastName=part[1];
    }
}

person.fullName= 'eliaquim mangala';

console.log(person);