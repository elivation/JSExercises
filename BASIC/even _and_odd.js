//take a number as limit and print out number
// from 0 to limit with Even or Odd


function EvenOdd(limit){
   for(let i=0; i<=limit ; i++){
      /* if(i % 2 === 0) console.log(i, "EVEN")
     else console.log(i, "ODD")*/

     const message = (i % 2 === 0) ? "EVEN":"ODD"
     console.log(i,message)
   }
}



EvenOdd(10)