function showProperties(obj){
    for (let key in obj){
       if(typeof obj[key] ==='string')
          console.log(key, obj[key])
}
}

showProperties({
    title: 'a',
    releaseYear: 2020,
    rate: 8,
    actor: 'olivier'
})