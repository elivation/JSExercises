
//FACTORY
/*function address(street,city,zip){
    return{
      street,
      city,
      zip
    }
}

const loc = address("a","b",1)
console.log(loc)*/

//CONSTRUCTOR

function Address(street,city,zip){
       this.street=street,
       this.city=city,
       this.zip=zip
}

const loc1 = new Address("a","b",1)
const loc2 = new Address("a","b",1)

function isEqual(location1,location2){
 for (let key in location1){
     if (location1[key] === location2[key])
      return true
    return false  
 }
}


function isSame(location1,location2){
    return (location1 === location2)
}

console.log(isEqual(loc1,loc2))