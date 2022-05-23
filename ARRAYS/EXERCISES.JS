
//Q1 function that prints array from minimun to maximum
/*function minMax(min,max){
let array = []
for(let m = min;m<=max;m++) array.push(m)
return array
}

console.log(minMax(20,50))*/

//Q2 function that takes an array and a search element that will
//return true if search element is in array
/*const num = [10,29,78,99,3,45,12,]

function Search(array,search){
  for (let key of array)
  if (key === search) return true
  return false
}

console.log(Search(num,3))*/


//Q3 function that takes array value and offset ans moves index 
//to positon of offset
/*const num = [10,29,78,99,3,45,12]

function Shift(array,index,offset){
    let move = array[index]
    array.splice(offset,0,move)
    console.log(array)
}

Shift(num,1,5)*/

//Q3 function that takes array and serach element and counts the number of times 
//it occurs in the array
/*const num = [10,29,78,99,3,45,12,99,99,78]

function Count(array,search){
    let count = 0
for(let element of array)
if (element === search) count++
return count
}

console.log(Count(num,99))*/

//Q4 function that takes and array and returns the maximum number in array
/*const num = [10,29,3,45,12,78]

function Max(array){
let max = 0
for (let number of array)
 if(max < number) max = number
return max
}


console.log(Max(num))*/

const movies=[
{
 title:"A",
 year:2018,
 rating:2.5
},
{
    title:"B",
    year:2018,
    rating:3.5
   },
   {
    title:"C",
    year:2014,
    rating:4.5
   },
]

function Sort(array){
 array.sort((a,b) => {
      if (a.rating > b.rating) return -1
      if (a.rating < b.rating) return 1
    })
 console.log(array)
}

Sort(movies)