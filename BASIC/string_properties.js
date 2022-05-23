//take and object and print out all its string properties
//loop thorgh oject
//check if type of property is string
//log to console

function checkString(obj){
   for(key in obj){
       if(typeof obj[key] === "string"){
           console.log(key, obj[key])
       }
   }
}


const movies = {
    name:"haloween",
    year:2019,
    director:"kojo manu",
    rating:3.5
}

checkString(movies)
