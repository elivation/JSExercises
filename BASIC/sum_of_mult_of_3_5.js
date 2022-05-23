//get multiples of 3 and 5 from 0 to limit and add them

function Sum(limit){
    let SumThree = 0
    let SumFive = 0
for(let i=0; i<=limit; ++i){
    if(i % 3 === 0) SumThree += i
    if(i % 5 === 0) SumFive += i
}
console.log("sum of 3:",SumThree)
console.log("sum of 5:",SumFive)
}

Sum(5)