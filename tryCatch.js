const person={
    firstName: 'Ishimwe',
    lastName: 'Olivier',

    get fullName(){
        return `${person.firstName} ${person.lastName}`;
    },

    set fullName (value) {
        if(typeof value !== 'string')
          throw new Error(' value should be a string');

        const part= value.split(' ');
         if(part.length !== 2)
            throw new Error(' enter first and last name please.');
        this.firstName=part[0];
        this.lastName=part[1];
    }
}

  try{
    person.fullName= null;
  }
  catch(e){
      alert(e);
  }


console.log(person);