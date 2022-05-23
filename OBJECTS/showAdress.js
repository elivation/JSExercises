const address = {
    street:"a",
    city:"b",
    zip:1
}


function showsAdress(address){
   for(let key in address){
       console.log(key,":",address[key])
   }
}

showsAdress(address)