const address = {
    street:"accra",
    city:"b",
    zip:00233
}


function showsAdress(address){
   for(let key in address){
       console.log(key,":",address[key])
   }
}

showsAdress(address)