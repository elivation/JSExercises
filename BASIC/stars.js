function Stars(number){
 for (let i = 0; i<=number; i++){
     let stars = " "
     for (let s = 0; s<i; s++)
         stars += "*"
     console.log(stars)    
 }
}

Stars(10)