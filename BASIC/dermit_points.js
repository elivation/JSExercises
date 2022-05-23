//SPEED LIMIT = 70
//5 ABOVE LIMIT => 1 POINT
//MATHS.FLOOR
//12 POINTS =>SUSPENDED


function CheckSpeed(speed){
    let above = (speed - 70)
    let points = Math.floor(above / 5)
   if(speed <= 74 ) return "OK"
   if (points > 12) return "Suspended"
   return "points: " +  points
}

console.log(CheckSpeed())